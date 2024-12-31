"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText) return;

    router.push(`/events/${searchText}`);
  };

  return (
    <form onSubmit={handleFormSubmit} className="w-full sm:w-[580px]">
      <input
        className="ring-accent/50 h-16 w-full rounded-lg bg-white/[7%] px-6 outline-none transition focus:bg-white/[12%] focus:ring-2"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        placeholder="Search events in any city..."
        spellCheck={false}
      />
    </form>
  );
}
