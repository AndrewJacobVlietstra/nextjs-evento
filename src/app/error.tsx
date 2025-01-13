"use client"; // Error components must be Client Components

import H1 from "@/components/h1";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center gap-y-6 py-24 text-center">
      <H1 className="">Something went wrong!</H1>

      <p className="max-w-[700px] text-white/75">{error.message}</p>

      <button
        className="rounded-md bg-slate-700 px-4 py-2 transition hover:bg-slate-800"
        onClick={
          // Attempt to recover by trying to re-render the segment
          reset
        }
      >
        Try again
      </button>
    </main>
  );
}
