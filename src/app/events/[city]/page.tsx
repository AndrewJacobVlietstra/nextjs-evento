import { Suspense } from "react";
import { capitalizeString } from "@/lib/utility";
import H1 from "@/components/h1";
import EventsList from "@/components/events-list";
import Loading from "./loading";
import type { Metadata } from "next";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const { city } = params;

  return {
    title:
      city === "all" ? "All Events" : `Events in ${capitalizeString(city)}`,
  };
};

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city;
  // const page = searchParams.page || 1;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error("Invalid page number!");
  }
  const pageNumber = parsedPage.data;

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[20px] py-24">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalizeString(city)}`}
      </H1>

      <Suspense key={city + pageNumber} fallback={<Loading />}>
        <EventsList city={city} page={pageNumber} />
      </Suspense>
    </main>
  );
}
