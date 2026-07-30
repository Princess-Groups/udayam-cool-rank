import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/Blocks";
import { FaqList } from "@/components/site/FaqList";
import { faqs, services } from "@/data/site";
import {
  breadcrumbSchema,
  canonical,
  faqSchema,
  ldScript,
  pageMeta,
} from "@/lib/seo";

const allFaqs = [...faqs, ...services.slice(0, 6).map((s) => s.faqs[0])];

const title = "AC Service FAQs Nagercoil | Costs, Timing & Warranty — Udayam AC";
const description =
  "Answers to common questions about AC repair, service cost, gas filling, warranty and response time in Nagercoil and Kanyakumari district.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/faq" }),
    links: canonical("/faq"),
    scripts: ldScript(
      faqSchema(allFaqs),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "FAQ", path: "/faq" },
      ]),
    ),
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]} />
        <SectionHeading
          as="h1"
          eyebrow="FAQ"
          title="AC Service Questions, Answered"
          subtitle="Pricing, response times, warranty and everything else Nagercoil customers ask us."
        />
        <div className="mt-10">
          <FaqList faqs={allFaqs} />
        </div>
      </Section>
      <CtaBand />
      <div className="h-16" />
    </>
  );
}
