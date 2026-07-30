import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/Blocks";
import { brands } from "@/data/site";
import { breadcrumbSchema, canonical, ldScript, pageMeta } from "@/lib/seo";

const title = "AC Brands We Service in Nagercoil | LG, Daikin, Voltas & More — Udayam AC";
const description =
  "Udayam AC services all major AC brands in Nagercoil — LG, Samsung, Daikin, Voltas, Blue Star, Carrier, Panasonic, Hitachi, Haier, Lloyd, Whirlpool and IFB.";

export const Route = createFileRoute("/brands/")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/brands" }),
    links: canonical("/brands"),
    scripts: ldScript(
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "AC Brands", path: "/brands" },
      ]),
    ),
  }),
  component: BrandsIndex,
});

function BrandsIndex() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "AC Brands", path: "/brands" }]} />
        <SectionHeading
          as="h1"
          eyebrow="Brands"
          title="AC Brands We Service in Nagercoil"
          subtitle="Brand-trained technicians, genuine spares and error-code diagnostics for every major manufacturer."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <Link
              key={b.slug}
              to="/brands/$slug"
              params={{ slug: b.slug }}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary"
            >
              <h2 className="font-display text-xl font-bold">{b.name} AC Service</h2>
              <p className="mt-2 text-sm text-muted-foreground">{b.note}</p>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
      <div className="h-16" />
    </>
  );
}
