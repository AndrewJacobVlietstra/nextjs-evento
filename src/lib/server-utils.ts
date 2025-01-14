import "server-only"; //force functions to stay on server, throws error in client component
import prisma from "./db";
import { notFound } from "next/navigation";
import { EVENTS_LIMIT_PER_PAGE } from "./contants";
import { capitalizeString } from "./utility";

export const getEvents = async (city: string, page = 1) => {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalizeString(city),
    },
    orderBy: {
      date: "asc",
    },
    take: EVENTS_LIMIT_PER_PAGE,
    skip: (page - 1) * EVENTS_LIMIT_PER_PAGE,
  });

  return events;
};

export const getEvent = async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
};
