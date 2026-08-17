import { createFileRoute, Link } from "@tanstack/react-router";
import { Wrench } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/Blocks";
import { services } from "@/data/site";
import { breadcrumbSchema, canonical, ldScript, pageMeta } from "@/lib/seo";

const title = "AC Services in Nagercoil | Repair, Installation, Gas Filling — Udayam AC";
const description =
  "All Udayam AC services in Nagercoil: AC repair, installation, gas filling, deep cleaning, PCB and compressor repair, AMC for homes and businesses.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/services" }),
    links: canonical("/services"),
    scripts: ldScript(
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ]),
    ),
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
        <SectionHeading
          as="h1"
          eyebrow="Services"
          title="AC Services in Nagercoil"
          subtitle="Fourteen specialised services for split, window, cassette and ducted air conditioners — each with fixed, upfront pricing and a written warranty."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary"
            >
              <span className="grid size-11 place-items-center rounded-2xl gradient-hero text-primary-foreground">
                <Wrench className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-display text-lg font-bold group-hover:text-primary">
                {s.name} in Nagercoil
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              <p className="mt-4 text-sm font-semibold text-primary">{s.price}</p>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
      <div className="h-16" />
    </>
  );
}
