import { cn } from "@/lib/utility";

type H1Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H1({ children, className }: H1Props) {
  return (
    <h1
      className={cn("text-3xl font-bold tracking-tight lg:text-5xl", className)}
    >
      {children}
    </h1>
  );
}
