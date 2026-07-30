export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readMinutes: number;
  keywords: string[];
  body: { heading: string; paragraphs: string[]; list?: string[] }[];
};

export const blogCategories = [
  "Troubleshooting",
  "Costs & Pricing",
  "Maintenance Tips",
  "Installation",
  "Energy Saving",
  "Local Guides",
];

export const posts: BlogPost[] = [
  {
    slug: "ac-not-cooling-reasons-and-fixes",
    title: "AC Not Cooling? 9 Reasons Why and How to Fix Each One",
    description:
      "Your AC runs but the room stays warm. Here are the nine causes our Nagercoil technicians see most, what each costs to fix, and what you can check yourself.",
    category: "Troubleshooting",
    date: "2026-06-18",
    readMinutes: 7,
    keywords: ["ac not cooling", "ac not cooling nagercoil", "ac blowing warm air"],
    body: [
      {
        heading: "Start with the three things you can check yourself",
        paragraphs: [
          "Before booking a technician, rule out the simple causes. A surprising share of 'AC not cooling' calls in Nagercoil turn out to be a wrong mode setting, a choked filter or a blocked outdoor unit.",
        ],
        list: [
          "Mode set to Fan or Dry instead of Cool — check the remote display.",
          "Filters clogged with dust — slide them out, wash and dry them.",
          "Outdoor unit blocked by a wall, plant or cover — it needs a foot of clear space on all sides.",
        ],
      },
      {
        heading: "Low refrigerant from a slow leak",
        paragraphs: [
          "If cooling faded gradually over weeks, a refrigerant leak is the likeliest cause. Topping up without repairing the leak is money wasted — insist on a nitrogen pressure test first, then a weighed charge.",
        ],
      },
      {
        heading: "Dirty condenser coil",
        paragraphs: [
          "Nagercoil's salt-laden coastal air coats outdoor coils faster than inland towns. A caked coil cannot reject heat, so the compressor runs continuously while the room stays warm. A jet wash usually restores full cooling the same day.",
        ],
      },
      {
        heading: "Failing capacitor or compressor",
        paragraphs: [
          "If the outdoor fan spins but the compressor hums and stops, the run capacitor is often the culprit — an inexpensive part. A genuinely seized compressor is far costlier, so always ask for winding and capacitor test readings before agreeing to replacement.",
        ],
      },
      {
        heading: "Undersized AC or heat load",
        paragraphs: [
          "A 1 ton unit in a sun-facing 180 sq ft room with a concrete roof will never hold temperature during a Nagercoil April. If the AC cools at night but not by day, tonnage rather than a fault is the problem.",
        ],
      },
    ],
  },
  {
    slug: "ac-water-leakage-causes",
    title: "AC Water Leakage Inside the Room: Causes and Permanent Fixes",
    description:
      "Water dripping from your indoor unit has four common causes. Learn how to identify each, what a permanent fix looks like, and when to call a technician.",
    category: "Troubleshooting",
    date: "2026-06-04",
    readMinutes: 6,
    keywords: ["ac water leakage", "ac leaking water inside room", "ac dripping water"],
    body: [
      {
        heading: "Blocked drain line — the number one cause",
        paragraphs: [
          "Condensate carries dust into the drain pipe, where it forms a sludge plug. Water backs up in the tray and spills into the room. A proper fix means flushing the full line, not just wiping the tray.",
        ],
      },
      {
        heading: "Indoor unit not sloped correctly",
        paragraphs: [
          "The indoor unit must tilt very slightly towards the drain outlet. Poorly installed units sit level or tilt the wrong way, so water pools and overflows the moment humidity rises.",
        ],
      },
      {
        heading: "Frozen evaporator coil",
        paragraphs: [
          "Low gas or restricted airflow ices the coil. When you switch off, that ice melts faster than the tray can drain and floods the room. If you see frost on the coil or pipes, switch off and book a technician.",
        ],
      },
      {
        heading: "Cracked drain tray or damaged insulation",
        paragraphs: [
          "Older units develop hairline cracks in the drain tray, and degraded pipe insulation sweats along the copper line. Both need part replacement, not cleaning.",
        ],
      },
    ],
  },
  {
    slug: "ac-gas-filling-cost-nagercoil",
    title: "AC Gas Filling Cost in Nagercoil (2026 Price Guide)",
    description:
      "What AC gas refilling actually costs in Nagercoil by refrigerant type and tonnage, what should be included in the price, and how to avoid paying twice.",
    category: "Costs & Pricing",
    date: "2026-05-22",
    readMinutes: 5,
    keywords: ["ac gas filling cost", "ac gas charging price nagercoil", "r32 gas filling cost"],
    body: [
      {
        heading: "What drives the price",
        paragraphs: [
          "Three factors decide your bill: the refrigerant your AC uses (R22, R32 or R410A), the tonnage, and whether a leak repair is needed before charging.",
        ],
        list: [
          "R32 and R410A cost more per kg than legacy R22.",
          "A 2 ton unit needs roughly 40% more refrigerant than a 1 ton.",
          "Leak brazing, flare correction or a new valve adds to labour.",
        ],
      },
      {
        heading: "What a fair quote includes",
        paragraphs: [
          "A trustworthy gas filling job always includes nitrogen pressure testing, leak repair, vacuuming the system and a weighed charge. If a quote skips vacuuming or charges 'by feel' on pressure alone, walk away — moisture left in the line will damage the compressor.",
        ],
      },
      {
        heading: "How to avoid paying twice",
        paragraphs: [
          "If your AC needed gas last season and needs it again now, you are paying for a leak, not for gas. Ask for the leak point to be shown to you and photographed before charging.",
        ],
      },
    ],
  },
  {
    slug: "split-ac-installation-guide",
    title: "Split AC Installation: What a Correct Job Looks Like",
    description:
      "From bracket placement to vacuuming, here is the checklist a proper split AC installation follows — and the shortcuts that quietly cost you cooling.",
    category: "Installation",
    date: "2026-05-08",
    readMinutes: 8,
    keywords: ["split ac installation", "ac installation nagercoil", "ac fitting checklist"],
    body: [
      {
        heading: "Placement decides half your electricity bill",
        paragraphs: [
          "The indoor unit needs clear airflow across the room and at least 15 cm of ceiling clearance. The outdoor unit should be shaded, off the direct afternoon sun and away from salt spray if you are near the coast.",
        ],
      },
      {
        heading: "Piping and vacuuming",
        paragraphs: [
          "Copper piping must be ISI grade, insulated end to end and kept as short as practical. Before releasing the gas, the installer must vacuum the line set — this removes moisture and air. Skipping vacuuming is the single most common shortcut and it shortens compressor life.",
        ],
      },
      {
        heading: "Electrical and drainage",
        paragraphs: [
          "Check the stabiliser rating against the unit's load, use a dedicated MCB, and route the drain with continuous downward slope. A drain that dips will trap water and drip within weeks.",
        ],
      },
      {
        heading: "Handover checks",
        paragraphs: [
          "Ask for the delivery temperature at the vent (a healthy unit shows a 10–14 °C drop from room air), the running current, and a signed installation report for your brand warranty.",
        ],
      },
    ],
  },
  {
    slug: "best-ac-service-in-nagercoil-how-to-choose",
    title: "How to Choose the Best AC Service in Nagercoil",
    description:
      "Seven questions that separate a professional AC service company from a cheap quote you will pay for twice, written for Nagercoil and Kanyakumari district homes.",
    category: "Local Guides",
    date: "2026-04-26",
    readMinutes: 6,
    keywords: ["best ac service in nagercoil", "ac service near me nagercoil", "ac repair company nagercoil"],
    body: [
      {
        heading: "Ask these seven questions before booking",
        paragraphs: ["A short phone conversation tells you most of what you need to know."],
        list: [
          "Do you give a fixed price after inspection, or charge by the hour?",
          "Is the inspection fee adjusted against the repair?",
          "What warranty do you give on labour and on spares?",
          "Are spares genuine, and will you show me the old part?",
          "Do you vacuum the system during gas filling?",
          "Will I get a written invoice?",
          "Do you cover my area on the same day?",
        ],
      },
      {
        heading: "Why coastal experience matters here",
        paragraphs: [
          "Salt air along Colachel, Kanyakumari and Muttom corrodes condenser fins in a fraction of the time it takes inland. A service company that knows the district will recommend anti-corrosion coating and shorter service intervals rather than selling you a new unit early.",
        ],
      },
    ],
  },
  {
    slug: "ac-maintenance-tips-for-longer-life",
    title: "12 AC Maintenance Tips That Add Years to Your Unit",
    description:
      "Simple monthly and seasonal habits that keep your air conditioner cooling efficiently, reduce breakdowns and cut your electricity bill.",
    category: "Maintenance Tips",
    date: "2026-04-10",
    readMinutes: 6,
    keywords: ["ac maintenance tips", "how to maintain ac at home", "ac care tips"],
    body: [
      {
        heading: "Monthly habits",
        paragraphs: ["Ten minutes a month prevents most summer breakdowns."],
        list: [
          "Wash the indoor filters every 3–4 weeks.",
          "Wipe the front panel and check the drain outlet drips freely.",
          "Clear leaves and dust from around the outdoor unit.",
          "Run the AC for 15 minutes even in cooler months to keep the compressor oil circulating.",
        ],
      },
      {
        heading: "Seasonal service",
        paragraphs: [
          "Book a professional service before summer and again after the monsoon. Technicians clean what you cannot reach — the blower wheel, the condenser fins and the drain line interior — and record gas pressure and current so problems are caught early.",
        ],
      },
      {
        heading: "Signs you should not ignore",
        paragraphs: [
          "Longer cooling times, a musty smell, water marks on the wall, tripping MCBs and rising bills are all early warnings. Attending to them costs a fraction of a compressor replacement.",
        ],
      },
    ],
  },
  {
    slug: "ac-energy-saving-tips",
    title: "Cut Your AC Electricity Bill: 10 Energy Saving Tips That Work",
    description:
      "Practical, tested ways to reduce air conditioner running cost — from the right thermostat setting to sealing the room properly.",
    category: "Energy Saving",
    date: "2026-03-28",
    readMinutes: 5,
    keywords: ["ac energy saving tips", "reduce ac electricity bill", "best ac temperature"],
    body: [
      {
        heading: "Set 24–26 °C, not 18 °C",
        paragraphs: [
          "An AC does not cool faster at 18 °C — it simply runs longer before cutting off. Every degree lower adds roughly 6% to consumption. 24–26 °C with the fan on medium is the sweet spot for Nagercoil's humidity.",
        ],
      },
      {
        heading: "Let the fan help",
        paragraphs: [
          "Running a ceiling fan on low with the AC spreads cool air, letting you sit comfortably at a higher thermostat setting for a fraction of the power.",
        ],
      },
      {
        heading: "Seal and shade the room",
        paragraphs: [
          "Door gaps, open exhaust fans and unshaded west-facing windows pour heat back in. Heavy curtains and a simple door bottom seal often cut runtime noticeably.",
        ],
        list: [
          "Close exhaust fan shutters while the AC runs.",
          "Use curtains or reflective film on sun-facing glass.",
          "Service the unit twice a year — a dirty coil can add 20% to consumption.",
        ],
      },
    ],
  },
  {
    slug: "ac-compressor-problems-signs",
    title: "AC Compressor Problems: Warning Signs and Repair Options",
    description:
      "How to tell whether your compressor is genuinely failing, what tests a technician should run, and when replacement beats repair.",
    category: "Troubleshooting",
    date: "2026-03-12",
    readMinutes: 7,
    keywords: ["ac compressor problems", "ac compressor not working", "compressor replacement cost"],
    body: [
      {
        heading: "Symptoms that point to the compressor",
        paragraphs: ["Not every cooling failure is the compressor, but these signs raise the suspicion."],
        list: [
          "Outdoor unit hums but the compressor does not start.",
          "MCB trips within seconds of the compressor kicking in.",
          "Loud rattling or metallic grinding from the outdoor unit.",
          "Compressor body extremely hot and cutting off repeatedly.",
        ],
      },
      {
        heading: "Tests before you accept a replacement quote",
        paragraphs: [
          "Insist on three readings: run capacitor value, winding resistance across all three terminals, and insulation resistance to the body. Many compressors declared dead only need a capacitor or overload protector.",
        ],
      },
      {
        heading: "Repair or replace the whole AC?",
        paragraphs: [
          "Under 8 years old and otherwise sound: replace the compressor. Over 10 years, with rusted coils and repeated leaks: a new inverter unit usually pays for itself in electricity savings within a few seasons.",
        ],
      },
    ],
  },
  {
    slug: "inverter-vs-non-inverter-ac",
    title: "Inverter vs Non-Inverter AC: Which Is Right for Your Home?",
    description:
      "A plain-language comparison of running cost, comfort, repair cost and lifespan to help you choose your next air conditioner.",
    category: "Energy Saving",
    date: "2026-02-20",
    readMinutes: 6,
    keywords: ["inverter vs non inverter ac", "which ac to buy", "inverter ac electricity"],
    body: [
      {
        heading: "How they differ",
        paragraphs: [
          "A non-inverter compressor runs at full speed then switches off. An inverter compressor varies its speed to hold the set temperature, so it draws less power once the room is cool and avoids temperature swings.",
        ],
      },
      {
        heading: "When inverter is clearly worth it",
        paragraphs: [
          "If the AC runs more than four hours a day — bedrooms, work-from-home rooms, shops — the electricity savings recover the price difference in one to two years.",
        ],
      },
      {
        heading: "When a non-inverter still makes sense",
        paragraphs: [
          "Guest rooms and occasional-use spaces do not run long enough to recover the premium, and non-inverter boards are cheaper to repair after a lightning surge.",
        ],
      },
    ],
  },
  {
    slug: "monsoon-ac-care-coastal-homes",
    title: "Monsoon AC Care for Coastal Homes in Kanyakumari District",
    description:
      "Salt air, humidity and heavy rain wear ACs faster near the coast. Here is the maintenance routine that keeps them running.",
    category: "Maintenance Tips",
    date: "2026-02-06",
    readMinutes: 5,
    keywords: ["coastal ac maintenance", "monsoon ac care", "ac rust outdoor unit"],
    body: [
      {
        heading: "Protect the outdoor unit",
        paragraphs: [
          "Never wrap the outdoor unit in plastic — trapped moisture accelerates rust. Use a ventilated top cover only, and keep the unit on a raised stand so standing water never reaches the base plate.",
        ],
      },
      {
        heading: "Rinse the coils",
        paragraphs: [
          "A gentle freshwater rinse of the condenser fins every few weeks washes off salt deposits. For homes within a kilometre of the sea, ask for an anti-corrosion coil coating during your annual service.",
        ],
      },
      {
        heading: "Dry mode is your friend",
        paragraphs: [
          "During humid monsoon days, Dry mode removes moisture at a fraction of the power draw of full cooling, and keeps mould from forming inside the indoor unit.",
        ],
      },
    ],
  },
];

export const postsBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));
