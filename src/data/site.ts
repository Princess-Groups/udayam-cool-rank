export const business = {
  name: "Udayam AC",
  legalName: "Udayam AC Nagercoil",
  tagline: "Fast • Reliable • Affordable AC Services",
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "info@udayamac.in",
  street: "Vadasery Main Road",
  city: "Nagercoil",
  state: "Tamil Nadu",
  postalCode: "629001",
  country: "IN",
  latitude: 8.1833,
  longitude: 77.4119,
  hours: "Mon–Sun, 7:00 AM – 10:00 PM",
  rating: 4.9,
  reviewCount: 428,
  experienceYears: 12,
  mapEmbed:
    "https://www.google.com/maps?q=Nagercoil,+Tamil+Nadu&output=embed",
};

export const callHref = `tel:${business.phone}`;
export const whatsappHref = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  "Hi Udayam AC, I need AC service in Nagercoil.",
)}`;

export type Service = {
  slug: string;
  name: string;
  short: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  price: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
};

const faqCommon = (name: string): { q: string; a: string }[] => [
  {
    q: `How much does ${name.toLowerCase()} cost in Nagercoil?`,
    a: `${name} charges depend on the AC type, tonnage and the condition of the unit. Our technician shares a fixed, upfront price after inspection — you approve before any work starts, and there are no hidden charges.`,
  },
  {
    q: `How soon can Udayam AC reach my home in Nagercoil?`,
    a: `For Nagercoil town, Vadasery and Kottar we typically reach within 60–90 minutes. Nearby areas such as Marthandam, Thuckalay and Kanyakumari are usually covered the same day.`,
  },
  {
    q: `Do you provide a warranty on ${name.toLowerCase()}?`,
    a: `Yes. Every job carries a written service warranty and genuine spare parts come with the manufacturer's warranty. Keep the invoice we hand over for any follow-up claim.`,
  },
];

export const services: Service[] = [
  {
    slug: "ac-repair-nagercoil",
    name: "AC Repair",
    short: "Same-day diagnosis and repair for all split, window and cassette ACs.",
    h1: "AC Repair in Nagercoil",
    metaTitle: "AC Repair in Nagercoil | Same-Day AC Repair Service — Udayam AC",
    metaDescription:
      "Expert AC repair in Nagercoil for split & window ACs. Same-day visit, upfront pricing, genuine parts and service warranty. Call Udayam AC today.",
    intro:
      "AC not cooling, tripping the MCB or making noise? Udayam AC's certified technicians diagnose and repair every brand of split, window and cassette air conditioner across Nagercoil and Kanyakumari district — usually on the same day you call.",
    price: "From ₹399 inspection (waived on repair)",
    bullets: [
      "Full electrical and refrigerant diagnostics before quoting",
      "Cooling, tripping, noise, ice-forming and sensor faults fixed",
      "Genuine spares for LG, Samsung, Daikin, Voltas, Blue Star and more",
      "Written warranty on labour and parts",
    ],
    faqs: [
      {
        q: "Why is my AC running but not cooling?",
        a: "The most common causes in Nagercoil's coastal humidity are low refrigerant from a slow leak, a choked filter or condenser coil, a failed capacitor, or a weak compressor. A proper pressure and current test identifies which one within 20 minutes.",
      },
      ...faqCommon("AC repair"),
    ],
  },
  {
    slug: "ac-installation-nagercoil",
    name: "AC Installation",
    short: "Precision split and window AC installation with proper vacuuming.",
    h1: "AC Installation in Nagercoil",
    metaTitle: "AC Installation in Nagercoil | Split & Window AC Fitting — Udayam AC",
    metaDescription:
      "Professional AC installation in Nagercoil. Copper piping, vacuuming, level mounting and free demo. Book same-day split or window AC fitting with Udayam AC.",
    intro:
      "A new air conditioner only performs as well as its installation. We mount, pipe, vacuum and gas-test every unit to manufacturer specification so your warranty stays valid and your electricity bill stays low.",
    price: "From ₹1,499 per split AC",
    bullets: [
      "Correct slope, bracket anchoring and drain routing",
      "ISI copper piping and proper nitrogen/vacuum procedure",
      "Stabiliser and wiring load check included",
      "Free cooling demo and usage walkthrough",
    ],
    faqs: [
      {
        q: "Does installation void my AC brand warranty?",
        a: "No. We follow OEM installation procedure and hand over a signed installation report you can present to the brand's service centre if a warranty claim ever arises.",
      },
      ...faqCommon("AC installation"),
    ],
  },
  {
    slug: "ac-gas-filling-nagercoil",
    name: "AC Gas Filling",
    short: "Leak detection, vacuuming and precise R32/R410A/R22 gas charging.",
    h1: "AC Gas Filling in Nagercoil",
    metaTitle: "AC Gas Filling in Nagercoil | R32 & R410A Gas Charging — Udayam AC",
    metaDescription:
      "AC gas filling in Nagercoil with leak testing, vacuuming and weighed refrigerant charge for R22, R32 and R410A. Transparent cost. Call Udayam AC.",
    intro:
      "Refilling gas without fixing the leak wastes your money. We pressure-test the circuit, repair the leak point, vacuum the system and then charge the exact weight of refrigerant your unit needs.",
    price: "From ₹1,800 (1–1.5 ton, refrigerant type dependent)",
    bullets: [
      "Nitrogen pressure test to locate the leak",
      "Brazing or flare correction before charging",
      "Weighed charge — never guessed by pressure alone",
      "Cooling performance report after top-up",
    ],
    faqs: [
      {
        q: "How often does an AC need gas refilling?",
        a: "A sealed system should never lose gas. If your AC needs a refill every season, there is a leak — fixing it costs far less over two years than repeated top-ups.",
      },
      ...faqCommon("AC gas filling"),
    ],
  },
  {
    slug: "ac-service-nagercoil",
    name: "AC Service",
    short: "Complete jet service for split and window ACs at your doorstep.",
    h1: "AC Service in Nagercoil",
    metaTitle: "AC Service in Nagercoil | Doorstep Jet AC Servicing — Udayam AC",
    metaDescription:
      "Doorstep AC service in Nagercoil: jet wash, coil cleaning, drain flush and performance check for split & window ACs. Book Udayam AC in 60 seconds.",
    intro:
      "A serviced AC cools faster and draws less current. Our doorstep jet service covers filters, coils, blower, drain line and electricals, with floor protection so your room stays clean.",
    price: "From ₹549 per unit",
    bullets: [
      "High-pressure jet cleaning of indoor and outdoor coils",
      "Drain line flush to prevent water dripping",
      "Gas pressure, current and thermostat check",
      "Anti-bacterial treatment on request",
    ],
    faqs: [
      {
        q: "How many times a year should an AC be serviced in Nagercoil?",
        a: "Because of coastal salt air and dust, we recommend servicing twice a year — once before summer and once after the monsoon. Commercial units used daily need it quarterly.",
      },
      ...faqCommon("AC service"),
    ],
  },
  {
    slug: "ac-maintenance-nagercoil",
    name: "AC Maintenance",
    short: "Scheduled preventive maintenance and AMC plans for homes and offices.",
    h1: "AC Maintenance in Nagercoil",
    metaTitle: "AC Maintenance & AMC in Nagercoil | Yearly Plans — Udayam AC",
    metaDescription:
      "Preventive AC maintenance and annual maintenance contracts (AMC) in Nagercoil for homes, offices and shops. Priority visits and fixed yearly cost.",
    intro:
      "Preventive maintenance stops breakdowns before peak summer. Our AMC plans bundle scheduled services, priority breakdown visits and discounted spares into one fixed yearly cost.",
    price: "AMC from ₹2,499 per AC per year",
    bullets: [
      "2–4 scheduled services per year, calendar reminders included",
      "Priority same-day breakdown attendance",
      "Discounted rates on spares and gas top-ups",
      "Single invoice for homes, shops and offices",
    ],
    faqs: [
      {
        q: "What does an AMC cover?",
        a: "Scheduled servicing, unlimited breakdown visits, and labour. Comprehensive AMC also covers major spares such as PCB and compressor — we quote both options so you can compare.",
      },
      ...faqCommon("AC maintenance"),
    ],
  },
  {
    slug: "ac-deep-cleaning-nagercoil",
    name: "AC Deep Cleaning",
    short: "Foam and jet deep cleaning that restores lost cooling.",
    h1: "AC Deep Cleaning in Nagercoil",
    metaTitle: "AC Deep Cleaning in Nagercoil | Foam Jet Cleaning — Udayam AC",
    metaDescription:
      "AC deep cleaning in Nagercoil with foam treatment, blower wheel cleaning and coil jet wash. Removes odour and restores cooling. Book Udayam AC.",
    intro:
      "When a normal service is not enough, deep cleaning strips the blower wheel, coils and drain tray of biofilm and salt deposits — the usual cause of musty smell and weak airflow in coastal Nagercoil homes.",
    price: "From ₹899 per unit",
    bullets: [
      "Blower wheel and drain tray removed and washed",
      "Foam coil treatment for salt and grime deposits",
      "Odour and mould removal, anti-bacterial finish",
      "Airflow measured before and after",
    ],
    faqs: [
      {
        q: "Will deep cleaning fix the bad smell from my AC?",
        a: "In most cases yes. Musty odour comes from mould in the blower wheel and drain tray, which routine filter cleaning never reaches. Deep cleaning removes it at the source.",
      },
      ...faqCommon("AC deep cleaning"),
    ],
  },
  {
    slug: "ac-water-leakage-repair-nagercoil",
    name: "AC Water Leakage Repair",
    short: "Stop water dripping from the indoor unit — same-day fix.",
    h1: "AC Water Leakage Repair in Nagercoil",
    metaTitle: "AC Water Leakage Repair in Nagercoil | Same-Day Fix — Udayam AC",
    metaDescription:
      "AC water leaking inside your room? Udayam AC fixes blocked drains, tilted units and frozen coils in Nagercoil the same day. Transparent pricing.",
    intro:
      "Water dripping from the indoor unit damages walls and furniture fast. We trace the true cause — blocked drain, wrong slope, choked filter or a frozen coil — and fix it rather than just mopping it up.",
    price: "From ₹499",
    bullets: [
      "Drain line flushing and re-routing",
      "Indoor unit levelling and slope correction",
      "Frozen coil and low-gas diagnosis",
      "Insulation and tray crack repair",
    ],
    faqs: [
      {
        q: "Why is my AC leaking water suddenly?",
        a: "Nine out of ten leaks are a blocked drain pipe caused by algae or dust. The rest are usually a unit mounted without slope, a cracked drain tray, or ice melting off a coil starved of airflow or gas.",
      },
      ...faqCommon("AC water leakage repair"),
    ],
  },
  {
    slug: "ac-compressor-repair-nagercoil",
    name: "AC Compressor Repair",
    short: "Compressor testing, replacement and warranty claim support.",
    h1: "AC Compressor Repair in Nagercoil",
    metaTitle: "AC Compressor Repair & Replacement in Nagercoil — Udayam AC",
    metaDescription:
      "AC compressor repair and replacement in Nagercoil. Winding tests, capacitor and relay checks, genuine compressors with warranty. Call Udayam AC.",
    intro:
      "A compressor is the costliest part of your AC, so it deserves a real diagnosis. We test windings, capacitor, relay and gas pressure before recommending repair or replacement — many 'dead' compressors only need a ₹600 capacitor.",
    price: "Diagnosis ₹399 • Replacement quoted after testing",
    bullets: [
      "Winding resistance and insulation testing",
      "Capacitor, relay and overload replacement first",
      "Genuine rotary/scroll compressors with warranty",
      "Manufacturer warranty claim paperwork support",
    ],
    faqs: [
      {
        q: "Is it worth replacing an AC compressor?",
        a: "If the AC is under 8 years old and otherwise sound, replacement usually costs far less than a new unit. Beyond 10 years, we will tell you honestly when a new AC is the better investment.",
      },
      ...faqCommon("AC compressor repair"),
    ],
  },
  {
    slug: "ac-pcb-repair-nagercoil",
    name: "AC PCB Repair",
    short: "Inverter and non-inverter PCB board repair at component level.",
    h1: "AC PCB Repair in Nagercoil",
    metaTitle: "AC PCB Repair in Nagercoil | Inverter Board Repair — Udayam AC",
    metaDescription:
      "AC PCB and inverter control board repair in Nagercoil. Component-level repair, error code diagnosis and board replacement with warranty. Udayam AC.",
    intro:
      "Blinking LEDs, error codes or an AC that starts and stops usually points to the control board. Our electronics bench repairs inverter and non-inverter PCBs at component level — often at a third of a new board's price.",
    price: "From ₹1,200 (board dependent)",
    bullets: [
      "Error code reading for all major brands",
      "Component-level repair: IPM, relays, sensors, IC",
      "Surge and lightning damage assessment",
      "90-day warranty on repaired boards",
    ],
    faqs: [
      {
        q: "My inverter AC shows an error code — is the PCB dead?",
        a: "Not always. Many codes point to a faulty sensor or fan motor feeding wrong data to the board. We read the code and test the sensors before touching the PCB.",
      },
      ...faqCommon("AC PCB repair"),
    ],
  },
  {
    slug: "ac-uninstallation-nagercoil",
    name: "AC Uninstallation",
    short: "Safe gas recovery and dismantling before you shift.",
    h1: "AC Uninstallation in Nagercoil",
    metaTitle: "AC Uninstallation in Nagercoil | Safe AC Removal — Udayam AC",
    metaDescription:
      "Shifting home? Udayam AC uninstalls split and window ACs in Nagercoil with proper gas pump-down, piping care and packing. Book removal today.",
    intro:
      "Removing an AC without pumping down the gas destroys the unit's charge and can damage the compressor. We pump down, cap the lines and pack the pipes so your AC works the day it is reinstalled.",
    price: "From ₹999 per split AC",
    bullets: [
      "Proper pump-down to retain refrigerant",
      "Pipes flared, capped and coiled safely",
      "Bracket removal and wall patch-up",
      "Combined uninstall + reinstall shifting packages",
    ],
    faqs: [
      {
        q: "Can you uninstall and reinstall at my new address?",
        a: "Yes — our AC shifting package covers removal, transport-ready packing and reinstallation with fresh gas top-up if required, at one combined price.",
      },
      ...faqCommon("AC uninstallation"),
    ],
  },
  {
    slug: "split-ac-service-nagercoil",
    name: "Split AC Service",
    short: "Specialised servicing for wall-mounted split air conditioners.",
    h1: "Split AC Service in Nagercoil",
    metaTitle: "Split AC Service in Nagercoil | Doorstep Split AC Care — Udayam AC",
    metaDescription:
      "Split AC service in Nagercoil — indoor jet wash, outdoor coil cleaning, gas check and drain flush for all brands. Same-day slots with Udayam AC.",
    intro:
      "Split ACs hide their dirt in the blower wheel and outdoor coil. Our split-specific service reaches both, restoring the cooling speed and quietness you had on day one.",
    price: "From ₹599 per split AC",
    bullets: [
      "Indoor jet wash with waterproof service bag",
      "Outdoor condenser fin cleaning and straightening",
      "Gas pressure and running current recorded",
      "Remote, sensor and swing motor check",
    ],
    faqs: [
      {
        q: "How long does split AC service take?",
        a: "About 45–60 minutes per unit for a standard jet service, and roughly 90 minutes when deep cleaning is included.",
      },
      ...faqCommon("split AC service"),
    ],
  },
  {
    slug: "window-ac-service-nagercoil",
    name: "Window AC Service",
    short: "Chassis-out cleaning and tuning for window air conditioners.",
    h1: "Window AC Service in Nagercoil",
    metaTitle: "Window AC Service in Nagercoil | Chassis Cleaning — Udayam AC",
    metaDescription:
      "Window AC service in Nagercoil with full chassis removal, coil wash, drain clearing and electrical check. Affordable fixed pricing from Udayam AC.",
    intro:
      "Window units need the chassis pulled out to be cleaned properly. We do exactly that — coils, blower, fan blade and drain pan — then refit and seal the unit against rain and insects.",
    price: "From ₹499 per window AC",
    bullets: [
      "Full chassis removal and wash",
      "Fan blade balancing and bearing oiling",
      "Drain pan clearing and rust treatment",
      "Gasket and sealing check",
    ],
    faqs: [
      {
        q: "My window AC is very noisy — can service fix it?",
        a: "Usually yes. Noise mostly comes from dry bearings, a loose fan blade or debris in the blower — all addressed during a chassis-out service.",
      },
      ...faqCommon("window AC service"),
    ],
  },
  {
    slug: "commercial-ac-service-nagercoil",
    name: "Commercial AC Service",
    short: "Cassette, ducted and VRF service for shops, offices and clinics.",
    h1: "Commercial AC Service in Nagercoil",
    metaTitle: "Commercial AC Service in Nagercoil | Shops & Offices — Udayam AC",
    metaDescription:
      "Commercial AC service in Nagercoil for cassette, ducted, tower and VRF systems. After-hours slots, AMC contracts and GST invoices from Udayam AC.",
    intro:
      "Downtime costs you customers. We service cassette, ducted, tower and VRF systems for shops, offices, clinics and restaurants across Nagercoil — including after-hours and holiday slots so your business never stops.",
    price: "Quoted per site after survey",
    bullets: [
      "Cassette, ducted, tower and VRF expertise",
      "After-hours and Sunday service windows",
      "GST invoices and annual contracts",
      "Multi-unit site reports and service logs",
    ],
    faqs: [
      {
        q: "Do you sign annual contracts for businesses?",
        a: "Yes. We provide comprehensive and non-comprehensive AMC options with defined response times, plus GST invoicing for your accounts.",
      },
      ...faqCommon("commercial AC service"),
    ],
  },
  {
    slug: "home-ac-service-nagercoil",
    name: "Home AC Service",
    short: "Friendly, clean, doorstep AC care for households.",
    h1: "Home AC Service in Nagercoil",
    metaTitle: "Home AC Service in Nagercoil | Doorstep AC Care — Udayam AC",
    metaDescription:
      "Home AC service in Nagercoil by verified technicians. Clean workmanship, floor protection, upfront prices and same-day slots. Book Udayam AC now.",
    intro:
      "Uniformed, background-verified technicians, floor sheets, shoe covers and a price you agree to before work begins — home AC service the way it should be done.",
    price: "From ₹549 per unit",
    bullets: [
      "Background-verified, uniformed technicians",
      "Floor and wall protection during the job",
      "Multi-AC household discounts",
      "Digital invoice and service reminder",
    ],
    faqs: [
      {
        q: "Do you offer a discount for servicing multiple ACs?",
        a: "Yes — from the second unit onwards in the same home we apply a multi-unit discount, and AMC plans reduce it further.",
      },
      ...faqCommon("home AC service"),
    ],
  },
];

export const servicesBySlug: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s]),
);

export type Brand = { slug: string; name: string; note: string };

export const brands: Brand[] = [
  { slug: "lg", name: "LG", note: "Dual Inverter compressors, smart diagnosis codes and PCB repair." },
  { slug: "samsung", name: "Samsung", note: "WindFree and Digital Inverter units, sensor and board faults." },
  { slug: "daikin", name: "Daikin", note: "Inverter split and VRV systems, precision refrigerant charging." },
  { slug: "voltas", name: "Voltas", note: "Adjustable inverter models, most-serviced brand in Nagercoil." },
  { slug: "blue-star", name: "Blue Star", note: "Residential and commercial cassette/ducted systems." },
  { slug: "carrier", name: "Carrier", note: "Flexicool inverter range, coil and blower deep cleaning." },
  { slug: "panasonic", name: "Panasonic", note: "Wi-Fi enabled inverter models and Twin Cool units." },
  { slug: "hitachi", name: "Hitachi", note: "Kashikoi and iZen series, expansion valve and board work." },
  { slug: "haier", name: "Haier", note: "Self-clean and triple inverter models." },
  { slug: "lloyd", name: "Lloyd", note: "Grande and inverter models, gas and PCB support." },
  { slug: "whirlpool", name: "Whirlpool", note: "MagiCool and 3D Cool range servicing." },
  { slug: "ifb", name: "IFB", note: "Inverter splits with rapid cooling, full spares support." },
];

export const brandsBySlug: Record<string, Brand> = Object.fromEntries(
  brands.map((b) => [b.slug, b]),
);

export type Area = { slug: string; name: string; blurb: string; pin?: string };

export const areas: Area[] = [
  { slug: "nagercoil", name: "Nagercoil", blurb: "Our home base — technicians on standby across the town all day.", pin: "629001" },
  { slug: "vadasery", name: "Vadasery", blurb: "Fast response for homes, shops and the bus stand commercial belt.", pin: "629001" },
  { slug: "kottar", name: "Kottar", blurb: "Residential and clinic AC service in and around Kottar." },
  { slug: "suchindram", name: "Suchindram", blurb: "Doorstep AC repair and service along the Kanyakumari road." },
  { slug: "marthandam", name: "Marthandam", blurb: "Same-day visits for homes and commercial establishments." },
  { slug: "colachel", name: "Colachel", blurb: "Coastal salt-air specialists — anti-corrosion coil care." },
  { slug: "thuckalay", name: "Thuckalay", blurb: "Split, window and cassette AC service across Thuckalay." },
  { slug: "kuzhithurai", name: "Kuzhithurai", blurb: "Repairs, gas filling and AMC plans for the Kuzhithurai belt." },
  { slug: "kanyakumari", name: "Kanyakumari", blurb: "Hotels, homestays and homes — coastal AC maintenance." },
  { slug: "boothapandi", name: "Boothapandi", blurb: "Village-wide doorstep service with transparent pricing." },
  { slug: "aralvaimozhi", name: "Aralvaimozhi", blurb: "Dust-heavy zone — frequent coil cleaning recommended." },
  { slug: "eathamozhi", name: "Eathamozhi", blurb: "Home AC repair, installation and gas top-ups." },
  { slug: "kulasekaram", name: "Kulasekaram", blurb: "Hill-belt homes and shops covered every day." },
  { slug: "thingal-nagar", name: "Thingal Nagar", blurb: "Quick response for residential AC breakdowns." },
];

export const areasBySlug: Record<string, Area> = Object.fromEntries(
  areas.map((a) => [a.slug, a]),
);

export const reviews = [
  { name: "Sathish Kumar", area: "Vadasery", rating: 5, text: "Called at 10 AM, technician came by noon and found a gas leak the previous guy missed. Cooling is like new now. Genuinely fair pricing." },
  { name: "Divya R.", area: "Kottar", rating: 5, text: "Booked deep cleaning for two split ACs. They covered the floor, worked neatly and the musty smell is completely gone." },
  { name: "Arun Prakash", area: "Marthandam", rating: 5, text: "Installed a new 1.5 ton Daikin. Piping and vacuuming were done properly and they explained the settings patiently." },
  { name: "Femila John", area: "Nagercoil", rating: 5, text: "Water was dripping onto my bed. They cleared the drain line and corrected the slope in under an hour. No repeat problem." },
  { name: "Mohammed Rafi", area: "Thuckalay", rating: 4, text: "PCB of my inverter AC was repaired instead of replaced — saved me a lot. Took a day extra but worth it." },
  { name: "Selvi Anandhan", area: "Kanyakumari", rating: 5, text: "We have an AMC for four ACs at our homestay. Service is on schedule and breakdown calls are attended the same day." },
];

export const faqs = [
  { q: "How quickly can Udayam AC attend a call in Nagercoil?", a: "Within Nagercoil town we usually reach in 60–90 minutes. Surrounding areas like Marthandam, Thuckalay, Colachel and Kanyakumari are attended the same day in most cases." },
  { q: "Do you service all AC brands?", a: "Yes — LG, Samsung, Daikin, Voltas, Blue Star, Carrier, Panasonic, Hitachi, Haier, Lloyd, Whirlpool, IFB and more, across split, window, cassette and ducted systems." },
  { q: "Will I know the price before work starts?", a: "Always. Our technician inspects, explains the fault and gives a fixed price. Work begins only after you approve it." },
  { q: "Is there any warranty on the service?", a: "Yes. Labour carries a written service warranty and genuine spares carry manufacturer warranty. Your invoice is the claim document." },
  { q: "Do you offer emergency or Sunday service?", a: "We operate 7 AM to 10 PM every day including Sundays, and take emergency calls for hospitals, hotels and businesses." },
  { q: "How often should I service my AC in a coastal town?", a: "Twice a year for homes and quarterly for commercial units. Salt-laden air near Colachel, Kanyakumari and Muttom corrodes coils faster than inland areas." },
  { q: "Do you provide AMC for offices and shops?", a: "Yes. We offer comprehensive and non-comprehensive AMC plans with defined response times and GST invoicing." },
  { q: "What payment methods do you accept?", a: "Cash, UPI, and bank transfer. A digital invoice is sent for every job." },
];

export const whyUs = [
  { title: "Certified Technicians", text: "Background-verified, factory-trained engineers with 12+ years on Kanyakumari district ACs." },
  { title: "Upfront Fixed Pricing", text: "You approve the price after inspection. No hidden charges, ever." },
  { title: "Same-Day Response", text: "Most Nagercoil calls are attended within 90 minutes, all week." },
  { title: "Genuine Spare Parts", text: "OEM compressors, PCBs and capacitors with manufacturer warranty." },
  { title: "Coastal Corrosion Care", text: "Anti-corrosion coil treatment built for salt-air homes near the coast." },
  { title: "Service Warranty", text: "Written warranty on every job, plus free follow-up if the fault returns." },
];

export const steps = [
  { title: "Call or WhatsApp", text: "Tell us the brand, AC type and the problem. Takes a minute." },
  { title: "Slot Confirmed", text: "We confirm a same-day or next-morning time window." },
  { title: "Inspect & Quote", text: "Technician diagnoses on site and gives a fixed price before starting." },
  { title: "Fix & Warranty", text: "Job done, unit tested, digital invoice and warranty handed over." },
];
