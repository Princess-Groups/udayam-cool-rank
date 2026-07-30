import { business } from "@/data/site";

type MetaEntry = Record<string, string>;

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  type?: string;
}): MetaEntry[] {
  const { title, description, path, type = "website" } = opts;
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: path },
    { property: "og:site_name", content: business.name },
    { property: "og:locale", content: "en_IN" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "geo.region", content: "IN-TN" },
    { name: "geo.placename", content: "Nagercoil" },
  ];
}

export function canonical(path: string) {
  return [{ rel: "canonical", href: path }];
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": "/#business",
  name: business.legalName,
  alternateName: business.name,
  description:
    "Udayam AC provides AC installation, repair, service, gas filling and AMC across Nagercoil and Kanyakumari district, Tamil Nadu.",
  telephone: business.phone,
  email: business.email,
  url: "/",
  areaServed: "Nagercoil, Kanyakumari District, Tamil Nadu",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.state,
    postalCode: business.postalCode,
    addressCountry: business.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.latitude,
    longitude: business.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "22:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviewCount,
  },
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  areaName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.path,
    provider: { "@type": "HVACBusiness", name: business.legalName, telephone: business.phone },
    areaServed: {
      "@type": "City",
      name: opts.areaName ?? "Nagercoil",
    },
  };
}

export function reviewSchema(
  reviews: { name: string; rating: number; text: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${business.name} — AC Service in Nagercoil`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
  };
}

export function ldScript(...schemas: unknown[]) {
  return schemas.map((schema) => ({
    type: "application/ld+json",
    children: JSON.stringify(schema),
  }));
}
