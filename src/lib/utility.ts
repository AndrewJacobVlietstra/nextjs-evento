import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";
import { EVENTS_LIMIT_PER_PAGE } from "./contants";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const capitalizeString = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const sleep = async (delay = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

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
