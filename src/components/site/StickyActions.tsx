import { MessageCircle, Phone } from "lucide-react";
import { business, callHref, whatsappHref } from "@/data/site";

export function StickyActions() {
  return (
    <>
      {/* Floating WhatsApp — desktop and mobile */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Udayam AC on WhatsApp"
        className="fixed bottom-24 right-4 z-50 grid size-14 place-items-center rounded-full bg-success text-success-foreground shadow-lift transition-transform hover:scale-105 md:bottom-8"
      >
        <MessageCircle className="size-7" aria-hidden="true" />
      </a>

      {/* Sticky call bar — mobile only */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border glass px-3 py-2.5 md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={callHref}
            className="flex items-center justify-center gap-2 rounded-xl gradient-hero px-4 py-3 text-sm font-semibold text-primary-foreground shadow-soft"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call Now
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-success px-4 py-3 text-sm font-semibold text-success-foreground shadow-soft"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
        <span className="sr-only">{business.phoneDisplay}</span>
      </div>
    </>
  );
}
