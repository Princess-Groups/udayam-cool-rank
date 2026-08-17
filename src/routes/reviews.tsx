import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand, ReviewCard } from "@/components/site/Blocks";
import { business, reviews } from "@/data/site";
import {
  breadcrumbSchema,
  canonical,
  ldScript,
  pageMeta,
  reviewSchema,
} from "@/lib/seo";

const title = "Udayam AC Reviews | Rated 4.9/5 in Nagercoil";
const description =
  "Read genuine customer reviews of Udayam AC — AC repair, installation, gas filling and deep cleaning across Nagercoil, Kottar, Marthandam and Kanyakumari.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/reviews" }),
    links: canonical("/reviews"),
    scripts: ldScript(
      reviewSchema(reviews),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Reviews", path: "/reviews" },
      ]),
    ),
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }]} />
        <SectionHeading
          as="h1"
          eyebrow="Reviews"
          title={`Rated ${business.rating}/5 by ${business.reviewCount}+ Customers`}
          subtitle="What homes, shops and hotels across Kanyakumari district say about our work."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
      </Section>
      <CtaBand />
      <div className="h-16" />
    </>
  );
}
