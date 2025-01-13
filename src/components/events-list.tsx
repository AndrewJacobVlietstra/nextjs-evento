import EventCard from "./event-card";
import PaginationControls from "./pagination-controls";
import { getEvents } from "@/lib/utility";
import { EVENTS_LIMIT_PER_PAGE } from "@/lib/contants";

type EventsListProps = {
  city: string;
  page?: number;
};

export default async function EventsList({ city, page = 1 }: EventsListProps) {
  const events = await getEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}/?page=${page - 1}` : "";
  const nextPath =
    events.length < EVENTS_LIMIT_PER_PAGE
      ? ""
      : `/events/${city}/?page=${page + 1}`;

  return (
    <section className="flex max-w-[1100px] flex-wrap justify-center gap-10 px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}
