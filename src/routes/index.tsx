import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  IndianRupee,
  MapPin,
  Phone,
  ShieldCheck,
  Siren,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import heroImg from "@/assets/hero-ac-service.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBand, ReviewCard } from "@/components/site/Blocks";
import { FaqList } from "@/components/site/FaqList";
import { LeadForm } from "@/components/site/LeadForm";
import { MapEmbed } from "@/components/site/MapEmbed";
import {
  areas,
  brands,
  business,
  callHref,
  faqs,
  reviews,
  services,
  steps,
  whatsappHref,
  whyUs,
} from "@/data/site";
import {
  canonical,
  faqSchema,
  ldScript,
  pageMeta,
  reviewSchema,
} from "@/lib/seo";

const title = "AC Service in Nagercoil | AC Repair, Installation & Gas Filling — Udayam AC";
const description =
  "Udayam AC offers same-day AC repair, installation, service, gas filling and AMC in Nagercoil and nearby areas. Certified technicians, upfront pricing, service warranty.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/" }),
    links: canonical("/"),
    scripts: ldScript(faqSchema(faqs), reviewSchema(reviews)),
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:py-20 lg:grid-cols-2 lg:items-center">
          <div className="rise-in">
            <p className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1 text-xs font-semibold">
              <Star className="size-3.5 fill-current" aria-hidden="true" />
              {business.rating} / 5 from {business.reviewCount}+ Nagercoil customers
            </p>
            <h1 className="mt-5 text-balance-tight text-4xl font-extrabold leading-[1.08] md:text-5xl">
              AC Service in Nagercoil You Can Actually Rely On
            </h1>
            <p className="mt-4 max-w-xl text-base opacity-90 md:text-lg">
              {business.tagline}. AC repair, installation, gas filling, deep cleaning and AMC for
              homes and businesses across Nagercoil, Vadasery, Kottar, Marthandam and Kanyakumari —
              most calls attended the same day.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="xl" variant="secondary">
                <a href={callHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  Call {business.phoneDisplay}
                </a>
              </Button>
              <Button asChild size="xl" variant="glass">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  Book on WhatsApp
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
            <ul className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
              {[
                { icon: Clock, label: "60–90 min response" },
                { icon: IndianRupee, label: "Fixed price upfront" },
                { icon: ShieldCheck, label: "Written warranty" },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-2 rounded-xl glass-dark px-3 py-2">
                  <item.icon className="size-4 shrink-0" aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img
              src={heroImg}
              alt="Udayam AC technician servicing a split air conditioner in a Nagercoil home"
              width={1600}
              height={1200}
              fetchPriority="high"
              className="w-full rounded-3xl border border-white/20 object-cover shadow-lift"
            />
            <div className="absolute -bottom-5 left-5 hidden rounded-2xl glass px-4 py-3 text-foreground shadow-lift sm:block">
              <p className="text-xs text-muted-foreground">Serving Kanyakumari district since</p>
              <p className="font-display text-xl font-bold">
                {2026 - business.experienceYears} • {business.experienceYears}+ years
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency strip */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="-mt-6 grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-lift md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center">
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-destructive/10 text-destructive">
            <Siren className="size-6" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h2 className="font-display text-lg font-bold">Emergency AC Service — 7 AM to 10 PM daily</h2>
            <p className="text-sm text-muted-foreground">
              AC dead in peak heat, shop cooling failed or water flooding your room? We prioritise
              breakdown calls for homes, clinics, hotels and businesses.
            </p>
          </div>
          <Button asChild size="lg">
            <a href={callHref}>
              <Phone className="size-4" aria-hidden="true" />
              Emergency Call
            </a>
          </Button>
        </div>
      </section>

      {/* Why choose */}
      <Section>
        <SectionHeading
          eyebrow="Why Udayam AC"
          title="Why Nagercoil Chooses Udayam AC"
          subtitle="Twelve years of coastal AC experience, honest diagnosis and workmanship you can verify on the invoice."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => (
            <Card key={item.title} className="rounded-3xl border-border shadow-soft transition-transform hover:-translate-y-1">
              <CardContent className="p-6">
                <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
                  <BadgeCheck className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section tone="sky" id="services">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete AC Services in Nagercoil"
          subtitle="From a ₹499 drain fix to full commercial AMC contracts — every job priced before we start."
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
              <h3 className="mt-4 font-display text-lg font-bold group-hover:text-primary">
                {s.name} in Nagercoil
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              <p className="mt-4 text-sm font-semibold text-primary">{s.price}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Brands */}
      <Section>
        <SectionHeading
          eyebrow="Brands We Repair"
          title="Every Major AC Brand, Serviced Locally"
          subtitle="Genuine spares and brand-specific diagnostics for split, window, cassette and ducted systems."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((b) => (
            <Link
              key={b.slug}
              to="/brands/$slug"
              params={{ slug: b.slug }}
              className="grid place-items-center rounded-2xl border border-border bg-card px-3 py-6 text-center font-display text-base font-bold shadow-soft transition-colors hover:border-primary hover:text-primary"
            >
              {b.name}
            </Link>
          ))}
        </div>
      </Section>

      {/* How we work */}
      <Section tone="sky">
        <SectionHeading eyebrow="How We Work" title="Four Simple Steps to Cool Again" />
        <ol className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <span className="font-display text-3xl font-extrabold text-accent">0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Reviews */}
      <Section>
        <SectionHeading
          eyebrow="Customer Reviews"
          title={`Rated ${business.rating}/5 by ${business.reviewCount}+ Customers`}
          subtitle="Real feedback from homes and businesses across Kanyakumari district."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.slice(0, 3).map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/reviews">
              Read all reviews
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Areas */}
      <Section tone="sky">
        <SectionHeading
          eyebrow="Service Areas"
          title="AC Service Across Nagercoil & Kanyakumari District"
          subtitle="Doorstep service in these towns and every nearby village."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <Link
              key={a.slug}
              to="/service-areas/$slug"
              params={{ slug: a.slug }}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft transition-colors hover:border-primary"
            >
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block font-semibold">AC Service in {a.name}</span>
                <span className="block text-sm text-muted-foreground">{a.blurb}</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="mt-10">
          <FaqList faqs={faqs.slice(0, 6)} />
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/faq">See all FAQs</Link>
          </Button>
        </div>
      </Section>

      {/* Contact + map */}
      <Section tone="sky" id="contact">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Book a Technician in Under a Minute"
              subtitle={`Open ${business.hours}. We serve Nagercoil town and all surrounding areas.`}
              center={false}
            />
            <div className="mt-8">
              <MapEmbed />
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="size-4 text-primary" aria-hidden="true" />
              {business.street}, {business.city} — {business.state} {business.postalCode}
            </p>
          </div>
          <LeadForm />
        </div>
      </Section>

      <CtaBand />
      <div className="h-16" />
    </>
  );
}
