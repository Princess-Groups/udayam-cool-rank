import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { LeadForm } from "@/components/site/LeadForm";
import { MapEmbed } from "@/components/site/MapEmbed";
import { business, callHref, whatsappHref } from "@/data/site";
import { breadcrumbSchema, canonical, ldScript, pageMeta } from "@/lib/seo";

const title = "Contact Udayam AC Nagercoil | Book AC Service Today";
const description =
  "Call, WhatsApp or book online for AC repair, installation and service in Nagercoil. Open 7 AM to 10 PM daily, same-day slots across Kanyakumari district.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/contact" }),
    links: canonical("/contact"),
    scripts: ldScript(
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ),
  }),
  component: Contact,
});

function Contact() {
  return (
    <Section>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <SectionHeading
        as="h1"
        eyebrow="Contact"
        title="Book Your AC Service in Nagercoil"
        subtitle={`Open ${business.hours}. Emergency breakdowns get priority slots.`}
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div>
          <ul className="grid gap-3">
            <li>
              <a
                href={callHref}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft hover:border-primary"
              >
                <Phone className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-muted-foreground">Call us</span>
                  <span className="font-semibold">{business.phoneDisplay}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft hover:border-primary"
              >
                <MessageCircle className="size-5 shrink-0 text-success" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-muted-foreground">WhatsApp</span>
                  <span className="font-semibold">Chat with a technician</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft hover:border-primary"
              >
                <Mail className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-muted-foreground">Email</span>
                  <span className="font-semibold">{business.email}</span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
              <MapPin className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className="block text-sm text-muted-foreground">Address</span>
                <span className="font-semibold">
                  {business.street}, {business.city}, {business.state} {business.postalCode}
                </span>
              </span>
            </li>
            <li className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
              <Clock className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className="block text-sm text-muted-foreground">Working hours</span>
                <span className="font-semibold">{business.hours}</span>
              </span>
            </li>
          </ul>
          <div className="mt-6">
            <MapEmbed />
          </div>
        </div>
        <LeadForm title="Instant Quote & Booking" />
      </div>
      <div className="h-8" />
    </Section>
  );
}
