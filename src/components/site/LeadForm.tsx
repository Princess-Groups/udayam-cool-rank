import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { areas, business, services } from "@/data/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^(\+91[- ]?)?[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  area: z.string().trim().min(1, "Select your area").max(60),
  service: z.string().trim().min(1, "Select a service").max(80),
  message: z.string().trim().max(600).optional(),
});

export function LeadForm({
  title = "Book Your AC Service",
  subtitle = "Tell us the problem — we confirm a slot within minutes.",
  defaultService,
  defaultArea,
}: {
  title?: string;
  subtitle?: string;
  defaultService?: string;
  defaultArea?: string;
}) {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    area: defaultArea ?? "Nagercoil",
    service: defaultService ?? services[0].name,
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  function set<K extends keyof typeof values>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setSending(true);
    const d = parsed.data;
    const text = `New AC service request%0A%0AName: ${encodeURIComponent(d.name)}%0APhone: ${encodeURIComponent(d.phone)}%0AArea: ${encodeURIComponent(d.area)}%0AService: ${encodeURIComponent(d.service)}%0ADetails: ${encodeURIComponent(d.message ?? "-")}`;
    window.open(`https://wa.me/${business.whatsapp}?text=${text}`, "_blank", "noopener");
    toast.success("Request ready to send", {
      description: "WhatsApp opened with your details. Or call us directly for instant booking.",
    });
    setSending(false);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-lift md:p-8"
      noValidate
    >
      <h2 className="font-display text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="lf-name">Your name</Label>
          <Input
            id="lf-name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="e.g. Arun Kumar"
            maxLength={80}
            autoComplete="name"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="lf-phone">Mobile number</Label>
          <Input
            id="lf-phone"
            type="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="10-digit mobile"
            maxLength={14}
            autoComplete="tel"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="lf-service">Service needed</Label>
          <Select value={values.service} onValueChange={(v) => set("service", v)}>
            <SelectTrigger id="lf-service" className="w-full">
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.name}>
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="lf-area">Your area</Label>
          <Select value={values.area} onValueChange={(v) => set("area", v)}>
            <SelectTrigger id="lf-area" className="w-full">
              <SelectValue placeholder="Select area" />
            </SelectTrigger>
            <SelectContent>
              {areas.map((a) => (
                <SelectItem key={a.slug} value={a.name}>
                  {a.name}
                </SelectItem>
              ))}
              <SelectItem value="Other nearby area">Other nearby area</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="lf-message">Describe the problem (optional)</Label>
          <Textarea
            id="lf-message"
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="e.g. 1.5 ton Voltas split AC not cooling since yesterday"
            maxLength={600}
            rows={4}
          />
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full" disabled={sending}>
        {sending ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="size-4" aria-hidden="true" />
        )}
        Get Instant Quote
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Or call {business.phoneDisplay} — open {business.hours}
      </p>
    </form>
  );
}
