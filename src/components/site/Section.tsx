import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  tone = "plain",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "plain" | "sky";
}) {
  return (
    <section
      id={id}
      className={cn("py-14 md:py-20", tone === "sky" && "gradient-sky", className)}
    >
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  as: As = "h2",
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  as?: "h1" | "h2";
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <p className="mb-3 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
          {eyebrow}
        </p>
      )}
      <As className="text-balance-tight text-3xl font-bold md:text-4xl">{title}</As>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
