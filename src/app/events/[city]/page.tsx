import { Suspense } from "react";
import { capitalizeString } from "@/lib/utility";
import H1 from "@/components/h1";
import EventsList from "@/components/events-list";
import Loading from "./loading";
import type { Metadata } from "next";

type Props = {
  params: {
    city: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const city = params.city;

  return {
    title:
      city === "all" ? "All Events" : `Events in ${capitalizeString(city)}`,
  };
};

export default async function EventsPage({ params }: Props) {
  const { city } = params;

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[20px] py-24">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalizeString(city)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
