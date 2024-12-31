import H1 from "@/components/h1";
import { capitalizeString } from "@/lib/utility";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default function EventsPage({ params }: EventsPageProps) {
  const { city } = params;

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[20px] py-24">
      <H1>
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalizeString(city)}`}
      </H1>
    </main>
  );
}
