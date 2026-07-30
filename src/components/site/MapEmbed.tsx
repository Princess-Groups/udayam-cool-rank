import { business } from "@/data/site";

export function MapEmbed({ title = "Udayam AC service location in Nagercoil" }: { title?: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
      <iframe
        title={title}
        src={business.mapEmbed}
        width="100%"
        height="360"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
      />
    </div>
  );
}
