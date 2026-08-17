import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqList({ faqs, headingLevel = "h3" }: { faqs: { q: string; a: string }[]; headingLevel?: "h3" | "h4" }) {
  const H = headingLevel;
  return (
    <Accordion type="single" collapsible className="mx-auto w-full max-w-3xl">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={faq.q}
          value={`item-${i}`}
          className="mb-3 rounded-2xl border border-border bg-card px-4 shadow-soft"
        >
          <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
            <H className="text-base font-semibold">{faq.q}</H>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
