import { createFileRoute, notFound } from "@tanstack/react-router";
import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand, InternalLinkRow } from "@/components/site/Blocks";
import { FaqList } from "@/components/site/FaqList";
import { LeadForm } from "@/components/site/LeadForm";
import { brands, brandsBySlug, business, callHref, services } from "@/data/site";
import {
  breadcrumbSchema,
  canonical,
  faqSchema,
  ldScript,
  pageMeta,
  serviceSchema,
} from "@/lib/seo";

function brandFaqs(name: string) {
  return [
    {
      q: `Do you use genuine ${name} spare parts?`,
      a: `Yes. We source OEM-grade ${name} compressors, PCBs, sensors and capacitors, and we show you the replaced part along with its warranty documentation.`,
    },
    {
      q: `Can you service a ${name} AC that is still under warranty?`,
      a: `We can service and clean it without affecting the warranty. If a covered component fails, we help you raise the claim with ${name} and can carry out the paid work the brand does not cover.`,
    },
    {
      q: `How much does ${name} AC service cost in Nagercoil?`,
      a: `Standard jet service starts at ₹549 per unit. Repairs are quoted after a ₹399 inspection, which is waived when you proceed with the repair.`,
    },
  ];
}

export const Route = createFileRoute("/brands/$slug")({
  loader: ({ params }) => {
    const brand = brandsBySlug[params.slug];
    if (!brand) throw notFound();
    return { brand };
  },
  head: ({ params, loaderData }) => {
    const path = `/brands/${params.slug}`;
    if (!loaderData) {
      return {
        meta: [{ title: "Brand not found — Udayam AC" }, { name: "robots", content: "noindex" }],
      };
    }
    const b = loaderData.brand;
    const title = `${b.name} AC Service & Repair in Nagercoil — Udayam AC`;
    const description = `${b.name} AC repair, service, gas filling and installation in Nagercoil. Trained technicians, genuine ${b.name} spares and service warranty. Call Udayam AC.`;
    return {
      meta: pageMeta({ title, description, path }),
      links: canonical(path),
      scripts: ldScript(
        serviceSchema({ name: `${b.name} AC Repair & Service`, description, path }),
        faqSchema(brandFaqs(b.name)),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "AC Brands", path: "/brands" },
          { name: b.name, path },
        ]),
      ),
    };
  },
  component: BrandDetail,
});

function BrandDetail() {
  const { brand } = Route.useLoaderData();

  return (
    <>
      <Section>
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "AC Brands", path: "/brands" },
            { name: brand.name, path: `/brands/${brand.slug}` },
          ]}
        />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px]">
          <article className="min-w-0">
            <h1 className="text-balance-tight text-3xl font-extrabold md:text-4xl">
              {brand.name} AC Service & Repair in Nagercoil
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {brand.note} Udayam AC handles {brand.name} split, window and cassette units across
              Nagercoil and Kanyakumari district — installation, repair, gas filling, PCB work and
              annual maintenance, all with a written warranty.
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
              {brand.name} problems we fix every week
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Not cooling / cooling only at night",
                "Error codes and blinking indicator LEDs",
                "Water dripping from the indoor unit",
                "Gas leak from flare joints or coil",
                "Inverter PCB and IPM module failure",
                "Compressor tripping the MCB",
                "Noisy blower or outdoor fan",
                "Remote, sensor and swing motor faults",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm shadow-soft"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-2xl font-bold">
              {brand.name} services available in Nagercoil
            </h2>
            <div className="mt-4">
              <InternalLinkRow
                links={services.slice(0, 9).map((s) => ({
                  label: `${brand.name} ${s.name}`,
                  to: "/services/$slug",
                  params: { slug: s.slug },
                }))}
              />
            </div>

            <h2 className="mt-12 font-display text-2xl font-bold">{brand.name} AC FAQs</h2>
            <div className="mt-5">
              <FaqList faqs={brandFaqs(brand.name)} />
            </div>

            <h3 className="mt-12 font-display text-xl font-bold">Other brands we service</h3>
            <div className="mt-4">
              <InternalLinkRow
                links={brands
                  .filter((b) => b.slug !== brand.slug)
                  .map((b) => ({
                    label: `${b.name} AC Service`,
                    to: "/brands/$slug",
                    params: { slug: b.slug },
                  }))}
              />
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <LeadForm title={`Book ${brand.name} AC Service`} />
          </aside>
        </div>
      </Section>
      <CtaBand heading={`${brand.name} AC trouble in Nagercoil?`} />
      <div className="h-16" />
    </>
  );
}
