import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Star } from "lucide-react";
import { business, callHref, reviews, whatsappHref } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CtaBand({
  heading = "Need your AC fixed today?",
  text = "Certified technicians across Nagercoil and nearby areas, 7 AM to 10 PM every day.",
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="rounded-3xl gradient-hero px-6 py-12 text-primary-foreground shadow-lift md:px-12">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div className="min-w-0">
            <h2 className="text-balance-tight text-2xl font-bold md:text-3xl">{heading}</h2>
            <p className="mt-3 max-w-xl text-sm opacity-90 md:text-base">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary">
              <a href={callHref}>
                <Phone className="size-4" aria-hidden="true" />
                {business.phoneDisplay}
              </a>
            </Button>
            <Button asChild size="lg" variant="glass">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp Us
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <Card className="h-full rounded-3xl border-border shadow-soft">
      <CardContent className="flex h-full flex-col gap-4 p-6">
        <div className="flex items-center gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={i < review.rating ? "size-4 fill-accent text-accent" : "size-4 text-muted"}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">“{review.text}”</p>
        <div>
          <p className="text-sm font-semibold">{review.name}</p>
          <p className="text-xs text-muted-foreground">{review.area}, Nagercoil area</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function InternalLinkRow({
  links,
}: {
  links: { label: string; to: string; params?: Record<string, string> }[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((l) => (
        <Link
          key={l.label}
          to={l.to as "/"}
          params={l.params as never}
          className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-soft transition-colors hover:border-primary hover:text-primary"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
