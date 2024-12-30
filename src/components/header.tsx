import Link from "next/link";
import Logo from "./logo";
import { routes } from "@/lib/contants";

export default function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-white/10 px-4 md:px-8">
      <Logo />

      <nav>
        <ul className="flex gap-x-6 text-base">
          {routes.map((route) => (
            <li
              key={route.name}
              className="text-white/50 transition hover:text-white"
            >
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
