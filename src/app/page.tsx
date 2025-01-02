import H1 from "@/components/h1";
import SearchForm from "@/components/search-form";
import { POPULAR_ROUTES } from "@/lib/contants";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-3 pt-36">
      <H1>Find events around you</H1>
      <p className="mb-12 mt-7 text-2xl opacity-75 lg:text-3xl">
        Browse more than{" "}
        <span className="font-bold italic text-accent underline">
          10,000 events
        </span>{" "}
        around you
      </p>

      <SearchForm />

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          {POPULAR_ROUTES.map((route) => (
            <Link
              key={route.name}
              href={route.path}
              className="transition hover:text-white/75"
            >
              {route.name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
