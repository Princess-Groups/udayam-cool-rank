import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/Blocks";
import deepClean from "@/assets/gallery-deep-clean.jpg";
import gasFilling from "@/assets/gallery-gas-filling.jpg";
import installation from "@/assets/gallery-installation.jpg";
import hero from "@/assets/hero-ac-service.jpg";
import { breadcrumbSchema, canonical, ldScript, pageMeta } from "@/lib/seo";

const title = "AC Service Gallery Nagercoil | Before & After Work — Udayam AC";
const description =
  "See real AC deep cleaning, gas filling, installation and repair work completed by Udayam AC across Nagercoil and Kanyakumari district.";

const items = [
  {
    src: hero,
    alt: "Udayam AC technician removing filters from a split AC indoor unit in Nagercoil",
    caption: "Split AC filter and coil service — Vadasery",
  },
  {
    src: deepClean,
    alt: "Technicians jet washing an AC outdoor condenser unit during deep cleaning",
    caption: "Outdoor unit deep cleaning — Kottar",
  },
  {
    src: gasFilling,
    alt: "Refrigerant gauge manifold connected to an AC outdoor unit during gas filling",
    caption: "Weighed R32 gas charging after leak repair — Marthandam",
  },
  {
    src: installation,
    alt: "Technician installing a new split air conditioner on a living room wall",
    caption: "New split AC installation with vacuuming — Nagercoil",
  },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/gallery" }),
    links: canonical("/gallery"),
    scripts: ldScript(
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Gallery", path: "/gallery" },
      ]),
    ),
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }]} />
        <SectionHeading
          as="h1"
          eyebrow="Gallery"
          title="Our AC Work in Nagercoil"
          subtitle="Before and after shots from real jobs — cleaning, gas charging, installation and repairs."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <figure
              key={item.caption}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
            >
              <img
                src={item.src}
                alt={item.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
              <figcaption className="p-4 text-sm text-muted-foreground">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
      <CtaBand />
      <div className="h-16" />
    </>
  );
}
