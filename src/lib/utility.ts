import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const capitalizeString = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const sleep = async (delay = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};
