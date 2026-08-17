import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/Blocks";
import { MapEmbed } from "@/components/site/MapEmbed";
import { areas } from "@/data/site";
import { breadcrumbSchema, canonical, ldScript, pageMeta } from "@/lib/seo";

const title = "AC Service Areas in Nagercoil & Kanyakumari District — Udayam AC";
const description =
  "Udayam AC covers Nagercoil, Vadasery, Kottar, Suchindram, Marthandam, Colachel, Thuckalay, Kuzhithurai, Kanyakumari and nearby areas with same-day AC service.";

export const Route = createFileRoute("/service-areas/")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/service-areas" }),
    links: canonical("/service-areas"),
    scripts: ldScript(
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Service Areas", path: "/service-areas" },
      ]),
    ),
  }),
  component: AreasIndex,
});

function AreasIndex() {
  return (
    <>
      <Section>
        <Breadcrumbs
          items={[{ name: "Home", path: "/" }, { name: "Service Areas", path: "/service-areas" }]}
        />
        <SectionHeading
          as="h1"
          eyebrow="Service Areas"
          title="AC Service Areas in Nagercoil & Around"
          subtitle="Local technicians stationed across Kanyakumari district — most calls attended the same day."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <Link
              key={a.slug}
              to="/service-areas/$slug"
              params={{ slug: a.slug }}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary"
            >
              <span className="grid size-10 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-display text-lg font-bold">AC Service in {a.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{a.blurb}</p>
            </Link>
          ))}
        </div>
        <div className="mt-12">
          <MapEmbed title="Udayam AC service coverage around Nagercoil" />
        </div>
      </Section>
      <CtaBand />
      <div className="h-16" />
    </>
  );
}
