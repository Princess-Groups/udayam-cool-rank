import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { areas, business, callHref, services } from "@/data/site";
import logoAsset from "@/assets/udayam-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-10 place-items-center rounded-xl gradient-hero text-primary-foreground">
              <Snowflake className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-bold">{business.name}</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            {business.tagline}. Certified AC installation, repair, gas filling and AMC across
            Nagercoil and Kanyakumari district since {2026 - business.experienceYears}.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <a className="flex items-center gap-2 hover:text-primary" href={callHref}>
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 hover:text-primary" href={`mailto:${business.email}`}>
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {business.street}, {business.city}, {business.state} {business.postalCode}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wide">Popular Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {services.slice(0, 9).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="hover:text-primary"
                >
                  {s.name} in Nagercoil
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wide">Service Areas</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link
                  to="/service-areas/$slug"
                  params={{ slug: a.slug }}
                  className="hover:text-primary"
                >
                  AC Service in {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wide">Company</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/brands" className="hover:text-primary">AC Brands We Service</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Before & After Gallery</Link></li>
            <li><Link to="/reviews" className="hover:text-primary">Customer Reviews</Link></li>
            <li><Link to="/blog" className="hover:text-primary">AC Care Blog</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact & Booking</Link></li>
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">Open {business.hours}</p>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {business.legalName}. AC repair, installation, gas filling and
          maintenance in Nagercoil, Vadasery, Kottar, Marthandam, Thuckalay, Colachel, Kuzhithurai
          and Kanyakumari.
        </p>
      </div>
    </footer>
  );
}
