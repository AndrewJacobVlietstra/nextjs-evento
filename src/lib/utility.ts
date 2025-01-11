import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { BASE_API_URL } from "./contants";
import { EventoEvent } from "@prisma/client";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const capitalizeString = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const sleep = async (delay = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export const getEvents = async (city: string) => {
  const result = await fetch(`${BASE_API_URL}?city=${city}`);
  const events: EventoEvent[] = await result.json();

  return events;
};

export const getEvent = async (slug: string) => {
  const result = await fetch(`${BASE_API_URL}/${slug}`);
  const event: EventoEvent = await result.json();

  return event;
};
