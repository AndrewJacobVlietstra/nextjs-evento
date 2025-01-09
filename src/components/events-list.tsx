import { EventApiResponse } from "@/lib/types";
import { BASE_API_URL } from "@/lib/contants";
import EventCard from "./event-card";

type EventsListProps = {
  city: string;
};

export default async function EventsList({ city }: EventsListProps) {
  const result = await fetch(`${BASE_API_URL}?city=${city}`);
  const events: EventApiResponse[] = await result.json();

  return (
    <section className="flex max-w-[1100px] flex-wrap justify-center gap-10 px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
