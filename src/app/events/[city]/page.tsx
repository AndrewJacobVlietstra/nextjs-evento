import H1 from "@/components/h1";
import EventsList from "@/components/events-list";
import { BASE_API_URL } from "@/lib/contants";
import { EventApiResponse } from "@/lib/types";
import { capitalizeString } from "@/lib/utility";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventsPageProps) {
  const { city } = params;

  const result = await fetch(`${BASE_API_URL}?city=${city}`);
  const events: EventApiResponse[] = await result.json();

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[20px] py-24">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalizeString(city)}`}
      </H1>

      <EventsList events={events} />
    </main>
  );
}
