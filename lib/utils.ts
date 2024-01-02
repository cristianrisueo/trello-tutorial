import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//* Enables us to safely combine Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
