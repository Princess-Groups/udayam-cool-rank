import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand, InternalLinkRow } from "@/components/site/Blocks";
import { FaqList } from "@/components/site/FaqList";
import { LeadForm } from "@/components/site/LeadForm";
import { areas, business, callHref, services, servicesBySlug } from "@/data/site";
import {
  breadcrumbSchema,
  canonical,
  faqSchema,
  ldScript,
  pageMeta,
  serviceSchema,
} from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = servicesBySlug[params.slug];
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    const path = `/services/${params.slug}`;
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found — Udayam AC" }, { name: "robots", content: "noindex" }],
      };
    }
    const s = loaderData.service;
    return {
      meta: pageMeta({
        title: s.metaTitle,
        description: s.metaDescription,
        path,
      }),
      links: canonical(path),
      scripts: ldScript(
        serviceSchema({ name: s.h1, description: s.metaDescription, path }),
        faqSchema(s.faqs),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: s.name, path },
        ]),
      ),
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 6);

  return (
    <>
      <Section>
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px]">
          <article className="min-w-0">
            <h1 className="text-balance-tight text-3xl font-extrabold md:text-4xl">{service.h1}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{service.intro}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
                {service.price}
              </span>
              <Button asChild>
                <a href={callHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  Call {business.phoneDisplay}
                </a>
              </Button>
            </div>

            <h2 className="mt-12 font-display text-2xl font-bold">
              What’s included in our {service.name.toLowerCase()}
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm shadow-soft"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-2xl font-bold">
              Why choose Udayam AC for {service.name.toLowerCase()} in Nagercoil
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our technicians work on Kanyakumari district air conditioners every day, so they know
              what coastal humidity and salt air do to coils, boards and compressors. You get a
              proper diagnosis, a fixed quote before work starts, genuine spares and a written
              warranty on every {service.name.toLowerCase()} job — in Nagercoil town and every
              surrounding area we cover.
            </p>

            <h3 className="mt-8 font-display text-xl font-bold">Areas we cover for this service</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {areas.map((a) => (
                <Link
                  key={a.slug}
                  to="/service-areas/$slug"
                  params={{ slug: a.slug }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm shadow-soft hover:border-primary hover:text-primary"
                >
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {a.name}
                </Link>
              ))}
            </div>

            <h2 className="mt-12 font-display text-2xl font-bold">
              {service.name} FAQs
            </h2>
            <div className="mt-5">
              <FaqList faqs={service.faqs} />
            </div>

            <h3 className="mt-12 font-display text-xl font-bold">Related AC services</h3>
            <div className="mt-4">
              <InternalLinkRow
                links={related.map((r) => ({
                  label: `${r.name} Nagercoil`,
                  to: "/services/$slug",
                  params: { slug: r.slug },
                }))}
              />
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <LeadForm
              title={`Book ${service.name}`}
              subtitle="Share your details — we confirm a slot within minutes."
              defaultService={service.name}
            />
          </aside>
        </div>
      </Section>
      <CtaBand heading={`Need ${service.name.toLowerCase()} today?`} />
      <div className="h-16" />
    </>
  );
}
