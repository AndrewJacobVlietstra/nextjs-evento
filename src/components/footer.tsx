import { FOOTER_ROUTES } from "@/lib/contants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto flex h-16 items-center justify-between border-t border-white/10 px-3 text-xs text-white/25 sm:px-9">
      <small className="text-xs">
        &copy; 2050 Evento. All Rights Reserved.
      </small>

      <ul className="flex gap-x-3 sm:gap-x-8">
        {FOOTER_ROUTES.map((route) => (
          <li key={route.name} className="transition hover:text-white/50">
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
