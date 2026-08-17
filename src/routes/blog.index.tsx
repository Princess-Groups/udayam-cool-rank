import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Section, SectionHeading } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/Blocks";
import { blogCategories, posts } from "@/data/blog";
import { breadcrumbSchema, canonical, ldScript, pageMeta } from "@/lib/seo";

const title = "AC Care Blog | Tips, Costs & Troubleshooting — Udayam AC Nagercoil";
const description =
  "Practical AC guides from Nagercoil technicians: why your AC is not cooling, gas filling cost, water leakage fixes, maintenance tips and energy saving advice.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/blog" }),
    links: canonical("/blog"),
    scripts: ldScript(
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
    ),
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesCategory = !category || p.category === category;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.keywords.some((k) => k.includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <Section>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />
        <SectionHeading
          as="h1"
          eyebrow="Blog"
          title="AC Tips & Guides from Nagercoil Technicians"
          subtitle="Straight answers on cooling problems, service costs and keeping your AC alive in coastal weather."
        />

        <div className="mx-auto mt-8 max-w-xl">
          <label htmlFor="blog-search" className="sr-only">
            Search articles
          </label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              id="blog-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search: gas filling cost, not cooling, water leak…"
              maxLength={80}
              className="pl-9"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setCategory(null)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              category === null
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card hover:border-primary"
            }`}
          >
            All
          </button>
          {blogCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                category === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:border-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                {p.category}
              </span>
              <h2 className="mt-3 font-display text-lg font-bold">{p.title}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
              <span className="mt-4 text-xs text-muted-foreground">
                {new Date(p.date).toLocaleDateString("en-IN", { dateStyle: "medium" })} •{" "}
                {p.readMinutes} min read
              </span>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">
            No articles matched that search. Try “cooling”, “gas” or “maintenance”.
          </p>
        )}
      </Section>
      <CtaBand />
      <div className="h-16" />
    </>
  );
}
