import { createFileRoute, notFound } from "@tanstack/react-router";
import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand, InternalLinkRow } from "@/components/site/Blocks";
import { FaqList } from "@/components/site/FaqList";
import { LeadForm } from "@/components/site/LeadForm";
import { MapEmbed } from "@/components/site/MapEmbed";
import { areas, areasBySlug, brands, business, callHref, services } from "@/data/site";
import {
  breadcrumbSchema,
  canonical,
  faqSchema,
  ldScript,
  pageMeta,
  serviceSchema,
} from "@/lib/seo";

function areaFaqs(name: string) {
  return [
    {
      q: `Do you provide same-day AC service in ${name}?`,
      a: `Yes. Bookings made before 6 PM are usually attended the same day in ${name}. Emergency breakdowns for shops, clinics and hotels get priority slots.`,
    },
    {
      q: `Is there an extra visiting charge for ${name}?`,
      a: `No hidden travel charges. A ₹399 inspection fee applies for diagnosis and it is waived when you proceed with the repair.`,
    },
    {
      q: `Which AC brands do you service in ${name}?`,
      a: `All major brands — LG, Samsung, Daikin, Voltas, Blue Star, Carrier, Panasonic, Hitachi, Haier, Lloyd, Whirlpool and IFB — across split, window and cassette systems.`,
    },
  ];
}

export const Route = createFileRoute("/service-areas/$slug")({
  loader: ({ params }) => {
    const area = areasBySlug[params.slug];
    if (!area) throw notFound();
    return { area };
  },
  head: ({ params, loaderData }) => {
    const path = `/service-areas/${params.slug}`;
    if (!loaderData) {
      return {
        meta: [{ title: "Area not found — Udayam AC" }, { name: "robots", content: "noindex" }],
      };
    }
    const a = loaderData.area;
    const title = `AC Service in ${a.name} | AC Repair & Installation — Udayam AC`;
    const description = `Doorstep AC repair, service, gas filling and installation in ${a.name}, near Nagercoil. Same-day slots, fixed pricing and service warranty from Udayam AC.`;
    return {
      meta: pageMeta({ title, description, path }),
      links: canonical(path),
      scripts: ldScript(
        serviceSchema({
          name: `AC Service in ${a.name}`,
          description,
          path,
          areaName: a.name,
        }),
        faqSchema(areaFaqs(a.name)),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
          { name: a.name, path },
        ]),
      ),
    };
  },
  component: AreaDetail,
});

function AreaDetail() {
  const { area } = Route.useLoaderData();

  return (
    <>
      <Section>
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
            { name: area.name, path: `/service-areas/${area.slug}` },
          ]}
        />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px]">
          <article className="min-w-0">
            <h1 className="text-balance-tight text-3xl font-extrabold md:text-4xl">
              AC Service in {area.name}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {area.blurb} Udayam AC brings certified technicians, genuine spares and fixed upfront
              pricing to every home, shop and office in {area.name}
              {area.pin ? ` (${area.pin})` : ""} — open {business.hours}.
            </p>

            <div className="mt-6">
              <Button asChild size="lg">
                <a href={callHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  Call {business.phoneDisplay}
                </a>
              </Button>
            </div>

            <h2 className="mt-12 font-display text-2xl font-bold">
              AC services available in {area.name}
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {services.slice(0, 8).map((s) => (
                <li
                  key={s.slug}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm shadow-soft"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                  <span>
                    <span className="font-semibold">{s.name}</span> — {s.short}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <InternalLinkRow
                links={services.slice(0, 9).map((s) => ({
                  label: `${s.name} in ${area.name}`,
                  to: "/services/$slug",
                  params: { slug: s.slug },
                }))}
              />
            </div>

            <h2 className="mt-12 font-display text-2xl font-bold">
              Why {area.name} residents call Udayam AC
            </h2>
            <p className="mt-4 text-muted-foreground">
              Working across Kanyakumari district every day means we know what {area.name}'s climate
              does to air conditioners — salt-air corrosion on condenser fins, algae-blocked drain
              lines during the monsoon and dust-choked filters in the dry months. We fix the cause,
              not just the symptom, and every job is backed by a written warranty.
            </p>

            <h3 className="mt-8 font-display text-xl font-bold">Brands serviced in {area.name}</h3>
            <div className="mt-4">
              <InternalLinkRow
                links={brands.map((b) => ({
                  label: `${b.name} AC Service`,
                  to: "/brands/$slug",
                  params: { slug: b.slug },
                }))}
              />
            </div>

            <h2 className="mt-12 font-display text-2xl font-bold">
              AC service in {area.name} — FAQs
            </h2>
            <div className="mt-5">
              <FaqList faqs={areaFaqs(area.name)} />
            </div>

            <div className="mt-12">
              <MapEmbed title={`Udayam AC coverage near ${area.name}`} />
            </div>

            <h3 className="mt-12 font-display text-xl font-bold">Nearby areas we cover</h3>
            <div className="mt-4">
              <InternalLinkRow
                links={areas
                  .filter((a) => a.slug !== area.slug)
                  .map((a) => ({
                    label: `AC Service in ${a.name}`,
                    to: "/service-areas/$slug",
                    params: { slug: a.slug },
                  }))}
              />
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <LeadForm title={`Book AC Service in ${area.name}`} defaultArea={area.name} />
          </aside>
        </div>
      </Section>
      <CtaBand heading={`AC trouble in ${area.name}?`} />
      <div className="h-16" />
    </>
  );
}
