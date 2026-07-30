import { createFileRoute, notFound } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand, InternalLinkRow } from "@/components/site/Blocks";
import { LeadForm } from "@/components/site/LeadForm";
import { posts, postsBySlug, type BlogPost } from "@/data/blog";
import { services } from "@/data/site";
import { breadcrumbSchema, canonical, ldScript, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = postsBySlug[params.slug];
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    const path = `/blog/${params.slug}`;
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found — Udayam AC" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.post;
    return {
      meta: pageMeta({
        title: `${p.title} | Udayam AC Nagercoil`,
        description: p.description,
        path,
        type: "article",
      }),
      links: canonical(path),
      scripts: ldScript(
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.description,
          datePublished: p.date,
          dateModified: p.date,
          author: { "@type": "Organization", name: "Udayam AC Nagercoil" },
          publisher: { "@type": "Organization", name: "Udayam AC Nagercoil" },
          mainEntityOfPage: path,
        },
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: p.title, path },
        ]),
      ),
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 5);

  return (
    <>
      <Section>
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.category, path: "/blog" },
          ]}
        />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
          <article className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              {post.category}
            </p>
            <h1 className="mt-3 text-balance-tight text-3xl font-extrabold md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-IN", { dateStyle: "long" })} •{" "}
              {post.readMinutes} min read
            </p>
            <p className="mt-6 text-lg text-muted-foreground">{post.description}</p>

            {post.body.map((block: BlogPost["body"][number]) => (
              <section key={block.heading} className="mt-10">
                <h2 className="font-display text-2xl font-bold">{block.heading}</h2>
                {block.paragraphs.map((para: string) => (
                  <p key={para.slice(0, 40)} className="mt-4 text-muted-foreground">
                    {para}
                  </p>
                ))}
                {block.list && (
                  <ul className="mt-4 grid gap-2">
                    {block.list.map((li: string) => (
                      <li
                        key={li}
                        className="rounded-2xl border border-border bg-card p-4 text-sm shadow-soft"
                      >
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <h2 className="mt-12 font-display text-2xl font-bold">Related services in Nagercoil</h2>
            <div className="mt-4">
              <InternalLinkRow
                links={services.slice(0, 6).map((s) => ({
                  label: `${s.name} Nagercoil`,
                  to: "/services/$slug",
                  params: { slug: s.slug },
                }))}
              />
            </div>

            <h2 className="mt-12 font-display text-2xl font-bold">More AC guides</h2>
            <div className="mt-4">
              <InternalLinkRow
                links={related.map((p) => ({
                  label: p.title,
                  to: "/blog/$slug",
                  params: { slug: p.slug },
                }))}
              />
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <LeadForm title="Talk to a technician" subtitle="Free advice, fixed quote after inspection." />
          </aside>
        </div>
      </Section>
      <CtaBand />
      <div className="h-16" />
    </>
  );
}
