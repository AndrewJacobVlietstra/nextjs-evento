"use client";

import Link from "next/link";
import Logo from "./logo";
import { HEADER_ROUTES } from "@/lib/contants";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utility";

export default function Header() {
  const activePathname = usePathname();

  return (
    <header className="flex h-14 items-center justify-between border-b border-white/10 px-4 md:px-8">
      <Logo />

      <nav className="h-full">
        <ul className="flex h-full gap-x-6 text-base">
          {HEADER_ROUTES.map((route) => (
            <li
              key={route.name}
              className={cn(
                "relative flex items-center transition hover:text-white",
                {
                  "text-white": route.path === activePathname,
                  "text-white/50": route.path !== activePathname,
                },
              )}
            >
              <Link href={route.path}>{route.name}</Link>

              {activePathname === route.path ? (
                <motion.div
                  layoutId="header-active-link"
                  className="absolute bottom-0 h-1 w-full bg-accent"
                ></motion.div>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
