import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import { business, callHref } from "@/data/site";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/udayam-logo.png.asset.json";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/brands", label: "Brands" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 glass">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label={`${business.name} home`}>
          <img
            src={logoAsset.url}
            alt={`${business.name} logo`}
            className="h-11 w-auto shrink-0 rounded-md"
          />
          <span className="min-w-0 hidden sm:block">
            <span className="block truncate text-[11px] text-muted-foreground">
              Nagercoil • {business.tagline}
            </span>
          </span>
        </Link>


        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={callHref}>
              <Phone className="size-4" aria-hidden="true" />
              Call Now
            </a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu" className="xl:hidden">
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm">
              <SheetHeader>
                <SheetTitle className="font-display">{business.name}</SheetTitle>
              </SheetHeader>
              <nav className="mt-2 flex flex-col gap-1 px-4 pb-8">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                    activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-3">
                  <a href={callHref}>
                    <Phone className="size-4" aria-hidden="true" />
                    {business.phoneDisplay}
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <nav className="mx-auto hidden max-w-6xl items-center gap-1 px-4 pb-2 xl:flex" aria-label="Main">
        {nav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
            activeProps={{ className: "bg-secondary text-secondary-foreground" }}
            activeOptions={{ exact: item.to === "/" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
