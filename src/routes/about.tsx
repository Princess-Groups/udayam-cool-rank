import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/Blocks";
import { business, steps, whyUs } from "@/data/site";
import { breadcrumbSchema, canonical, ldScript, pageMeta } from "@/lib/seo";

const title = "About Udayam AC Nagercoil | 12+ Years of AC Expertise";
const description =
  "Udayam AC is a Nagercoil-based air conditioning company offering installation, repair, gas filling and AMC across Kanyakumari district with certified technicians.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/about" }),
    links: canonical("/about"),
    scripts: ldScript(
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
      ]),
    ),
  }),
  component: About,
});

function About() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }]} />
        <SectionHeading
          as="h1"
          eyebrow="About Us"
          title="Nagercoil's Trusted AC Service Company"
          subtitle={`${business.tagline} — serving homes and businesses across Kanyakumari district for over ${business.experienceYears} years.`}
        />
        <div className="mx-auto mt-10 max-w-3xl space-y-5 text-muted-foreground">
          <p>
            Udayam AC started as a two-technician workshop in {business.city} and grew on one
            principle: tell the customer the truth about their air conditioner. Today our team
            installs, repairs and maintains split, window, cassette and ducted systems for
            households, shops, clinics, hotels and offices from Nagercoil to Kanyakumari.
          </p>
          <p>
            Coastal Kanyakumari is hard on air conditioners. Salt-laden air corrodes condenser fins,
            monsoon humidity blocks drain lines and dust chokes filters within weeks. We build every
            service around those local realities — anti-corrosion coil care, full drain flushing and
            honest advice about when a unit is worth repairing and when it is not.
          </p>
          <p>
            Every technician is background-verified and uniformed, every price is agreed before work
            begins, and every job leaves you with a digital invoice and a written warranty.
          </p>
        </div>

        <h2 className="mt-16 text-center font-display text-2xl font-bold">What we stand for</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w) => (
            <div key={w.title} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-display text-lg font-bold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-center font-display text-2xl font-bold">How a booking works</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <span className="font-display text-3xl font-extrabold text-accent">0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>
      <CtaBand />
      <div className="h-16" />
    </>
  );
}
