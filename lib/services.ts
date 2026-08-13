import type { LucideIcon } from 'lucide-react'
import {
  Thermometer,
  Shield,
  Zap,
  Droplets,
  Flame,
  Hammer,
  Refrigerator,
  MoveHorizontal,
  Umbrella,
  Ruler,
  ClipboardCheck,
  Sun,
} from 'lucide-react'

/**
 * One entry per service page under /services/[slug].
 *
 * Content rules that apply to every string in this file:
 *  - No certifications, warranty work, or team-size claims (James works solo).
 *  - Experience is always "12 years".
 *  - Response wording: instant reply, most jobs booked within 24 hours.
 *  - No emojis — icons come from lucide-react.
 */
export type Service = {
  slug: string
  /** Short name used in grids, breadcrumbs, and cross-links. */
  name: string
  h1: string
  icon: LucideIcon
  metaTitle: string
  metaDescription: string
  keywords: string
  /** One-liner for the /services grid and related-service links. */
  cardDescription: string
  /** Hero paragraph on the service page. */
  intro: string
  symptomsHeading: string
  symptoms: string[]
  includesHeading: string
  includes: { title: string; body: string }[]
  body: { heading: string; paragraphs: string[] }[]
  faqs: { question: string; answer: string }[]
  /** Slugs of two related services, rendered at the bottom of the page. */
  related: string[]
}

export const services: Service[] = [
  {
    slug: 'rv-ac-repair',
    name: 'RV AC Repair',
    h1: 'RV AC Repair',
    icon: Thermometer,
    metaTitle: 'RV AC Repair Near Kyle, TX — Mobile Rooftop A/C Service | Impact RV Repair',
    metaDescription:
      'Mobile RV AC repair in Kyle, Buda, Austin, San Marcos and Central Texas. Rooftop unit diagnostics, capacitor and fan motor replacement, full unit swaps. Call 512-968-5258.',
    keywords:
      'rv ac repair, rv air conditioner repair, rv ac not cooling, mobile rv ac repair kyle tx, rv rooftop ac replacement, rv repair near me',
    cardDescription:
      'Rooftop unit diagnostics, capacitor and motor replacement, and full A/C swaps — done where your RV sits.',
    intro:
      'When a rooftop unit quits in a Central Texas August, it stops being a comfort problem and starts being a safety problem. Impact RV Repair diagnoses and repairs RV air conditioning on site — in your driveway, at your storage lot, or at your campsite — anywhere within 50 miles of Kyle, TX.',
    symptomsHeading: 'Signs your RV A/C needs service',
    symptoms: [
      'The unit runs but the air coming out is barely cooler than the cabin',
      'The compressor hums, clicks, and shuts off instead of starting',
      'The fan spins but the compressor never kicks in at all',
      'Water dripping down an inside wall or pooling around the ceiling shroud',
      'The breaker trips or the unit browns out every time it cycles on',
      'A grinding, rattling, or squealing noise from the roof',
    ],
    includesHeading: 'What the service covers',
    includes: [
      {
        title: 'Full diagnostic',
        body: 'Voltage at the unit, amp draw, capacitor test, thermostat and control board check, and a temperature split across the coil to confirm whether the problem is electrical, airflow, or a sealed-system failure.',
      },
      {
        title: 'Capacitors, relays, and control boards',
        body: 'A hard-start capacitor or a failed relay is the most common reason a unit hums and refuses to start. These are inexpensive parts and a same-visit repair in most cases.',
      },
      {
        title: 'Fan motors and blower wheels',
        body: 'Seized condenser fans, worn blower bearings, and out-of-balance wheels get replaced with the correct part for your unit rather than a universal substitute.',
      },
      {
        title: 'Coil cleaning and airflow correction',
        body: 'A packed condenser coil or a collapsed return-air filter mimics a dying compressor almost exactly. Cleaning and restoring airflow is always the first thing checked before anything expensive gets recommended.',
      },
      {
        title: 'Gasket and leak repair',
        body: 'The foam gasket between the unit and the roof compresses and hardens, and the resulting leak shows up as staining on the ceiling around the shroud. Replacing it is straightforward once the unit is lifted.',
      },
      {
        title: 'Complete unit replacement',
        body: 'When a sealed system has failed, replacement is the honest answer — RV rooftop units are not field-serviceable for refrigerant. New unit sourced, old one removed, roof resealed, and the thermostat matched.',
      },
    ],
    body: [
      {
        heading: 'Why RV A/C fails so often in Central Texas',
        paragraphs: [
          'A rooftop RV air conditioner is sized to pull the cabin roughly twenty degrees below outside air. That math works fine in most of the country. On a 102-degree Kyle afternoon with the sun beating on an aluminum roof, a perfectly healthy unit is already at its limit — so a unit that is even slightly compromised falls off a cliff.',
          'The result is that most of the "my A/C died" calls that come in during July and August are not dead compressors at all. They are dirty condenser coils, weak capacitors, restricted return air, or low incoming voltage from a long extension cord or a tired pedestal at an RV park. All four are fixable on site, and none require replacing the unit.',
        ],
      },
      {
        heading: 'Diagnose before you replace',
        paragraphs: [
          'A new rooftop unit is one of the more expensive things you can buy for an RV, and it is regularly sold to owners whose old unit needed a thirty-dollar part. Every A/C call here starts with measurement — voltage, amperage, and a temperature split — before any recommendation gets made.',
          'If the sealed system really is finished, you get told plainly, along with what the replacement costs before any work starts. If it is a capacitor, you pay for a capacitor. Upfront pricing is given before the wrench comes out either way.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can you repair an RV air conditioner on site?',
        answer:
          'Yes. Diagnostics, capacitors, relays, fan motors, control boards, coil cleaning, gasket replacement, and complete unit swaps are all done wherever the RV is parked. There is no need to tow the rig anywhere.',
      },
      {
        question: 'Why is my RV AC running but not cooling?',
        answer:
          'The most common causes are a dirty condenser coil, a restricted or collapsed return-air filter, a weak start capacitor, or low incoming voltage. All four let the fan run normally while cooling output drops off, which is why the unit sounds fine but the air is warm.',
      },
      {
        question: 'Do you recharge RV air conditioners with refrigerant?',
        answer:
          'No — and neither does anyone else, honestly. RV rooftop units are sealed systems with no service ports. If refrigerant has leaked out, the unit has to be replaced. Any shop offering to recharge one is not being straight with you.',
      },
      {
        question: 'How fast can you get to an A/C failure?',
        answer:
          'You hear back instantly, and most jobs are booked within 24 hours. Summer A/C failures are treated as priority calls — especially for anyone traveling, living in the rig full time, or camping with kids or pets.',
      },
    ],
    related: ['rv-electrical-repair', 'rv-roof-repair'],
  },

  {
    slug: 'rv-roof-repair',
    name: 'RV Roof Repair & Resealing',
    h1: 'RV Roof Repair & Resealing',
    icon: Shield,
    metaTitle: 'RV Roof Repair & Resealing Kyle TX — Mobile Leak Repair | Impact RV Repair',
    metaDescription:
      'On-site RV roof repair and resealing in Kyle, Buda, San Marcos, Austin and Central Texas. Leak tracing, seam and vent resealing, membrane repair, full recoats. Call 512-968-5258.',
    keywords:
      'rv roof repair, rv roof resealing, rv roof leak repair, rv roof recoat, mobile rv roof repair kyle tx, epdm tpo roof repair texas',
    cardDescription:
      'Leak tracing, seam and penetration resealing, membrane repair, and full roof recoats at your location.',
    intro:
      'Texas sun is harder on RV roof sealant than almost any climate in the country. Impact RV Repair inspects, reseals, and repairs RV roofs on site across Kyle, Hays County, and the greater Austin area — before a hairline crack turns into structural rot.',
    symptomsHeading: 'Signs your roof needs attention',
    symptoms: [
      'Sealant that has gone chalky, cracked, or pulled away from a vent or seam',
      'Brown staining on the ceiling around a vent, skylight, or the A/C shroud',
      'A soft or spongy spot underfoot on the roof or in the ceiling',
      'A musty smell inside that never fully airs out',
      'Bubbling or rippling on an exterior sidewall',
      'A skylight dome that has gone yellow, brittle, or cracked',
    ],
    includesHeading: 'What the service covers',
    includes: [
      {
        title: 'Full roof inspection',
        body: 'Every penetration checked individually — front and rear cap seams, A/C gasket, vents and fans, skylights, refrigerator and plumbing vents, antenna and solar mounts, and the full length of both edge and awning rails.',
      },
      {
        title: 'Leak tracing',
        body: 'Water travels before it shows itself. The stain on your ceiling is rarely under the actual hole, so the entry point gets found properly instead of sealing the nearest suspicious spot and hoping.',
      },
      {
        title: 'Seam and penetration resealing',
        body: 'Old failed sealant scraped and cleaned back to a sound surface, then resealed with self-leveling lap sealant on horizontal seams and non-sag product on vertical surfaces — matched to your membrane.',
      },
      {
        title: 'Membrane repair and patching',
        body: 'Tears, punctures, and damage from a low branch or a hail event repaired with material compatible with your roof, whether it is EPDM, TPO, or fiberglass.',
      },
      {
        title: 'Full roof recoat',
        body: 'When sealant is failing across the entire roof rather than at two or three spots, a complete recoat is the cost-effective answer and buys years rather than a season.',
      },
      {
        title: 'Component replacement',
        body: 'Vent covers, fan lids, skylight domes, and A/C gaskets replaced while the roof is already open and being worked on.',
      },
    ],
    body: [
      {
        heading: 'A small leak is never a small repair',
        paragraphs: [
          'This is the thing RV owners underestimate most. Water that gets past the roof does not drip neatly onto the floor where you would notice it. It runs along the roof decking, down inside the wall cavity, and soaks into framing and luan you cannot see. By the time there is a visible stain, the damage behind it has usually been developing for months.',
          'A reseal is ordinary, affordable maintenance. Structural rot repair means opening up the wall or roof, cutting out rotted framing, and rebuilding — a dramatically larger job. The entire purpose of inspecting on a schedule is to stay on the cheap side of that line.',
        ],
      },
      {
        heading: 'The right product matters more than a fast fix',
        paragraphs: [
          'A large share of the leaks that come in started with a previous repair done with the wrong product. Self-leveling lap sealant belongs on horizontal seams so it flows out and seals flat; non-sag belongs on vertical surfaces so it stays where it was put. The sealant also has to be matched to your membrane, because chemistry that bonds beautifully to EPDM may not bond at all to TPO.',
          'Household silicone is the single most common mistake found on Central Texas roofs. It does not bond to RV roofing, it fails quickly under UV, and it leaves residue that makes a proper reseal harder later — which usually means the area has to be scraped completely clean and redone.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How often should an RV roof be resealed in Texas?',
        answer:
          'Inspect sealant every six months and expect to reseal problem areas every one to two years. Central Texas UV and heat cycling break sealant down considerably faster than the national-average guidance in most owner manuals assumes.',
      },
      {
        question: 'Can RV roof resealing be done at my location?',
        answer:
          'Yes. Roof work suits mobile service well and gets done wherever the RV is parked — driveway, storage lot, or campsite — as long as the roof is dry and the weather cooperates.',
      },
      {
        question: 'How do I know if my RV roof is already leaking?',
        answer:
          'Look for soft or spongy spots in the ceiling or walls, brown staining around vents and skylights, a persistent musty smell, paneling separating at the seams, and delamination on the exterior sidewalls. Visible damage inside usually means water has been getting in for a while.',
      },
      {
        question: 'Does an RV in covered storage still need roof work?',
        answer:
          'Yes. Sealant degrades from heat and UV whether or not it ever gets rained on, and a stored rig gets looked at less often — so problems go unnoticed longer rather than not happening at all.',
      },
    ],
    related: ['rv-water-damage-repair', 'rv-preventive-maintenance'],
  },

  {
    slug: 'rv-electrical-repair',
    name: 'RV Electrical Repair',
    h1: 'RV Electrical Repair',
    icon: Zap,
    metaTitle: 'RV Electrical Repair Kyle TX — 12V & 120V Mobile Service | Impact RV Repair',
    metaDescription:
      'Mobile RV electrical repair in Kyle, Buda, Austin, San Marcos and Central Texas. 12V and 120V troubleshooting, converters, inverters, batteries, shore power, rewiring. Call 512-968-5258.',
    keywords:
      'rv electrical repair, rv 12v troubleshooting, rv converter replacement, rv inverter installation, rv shore power repair, mobile rv electrician kyle tx',
    cardDescription:
      '12V and 120V troubleshooting, converters, inverters, batteries, shore power, and complete rewiring.',
    intro:
      'An RV runs two electrical systems side by side, and most owners get handed no useful documentation for either one. Impact RV Repair traces and repairs 12-volt and 120-volt faults on site anywhere within 50 miles of Kyle, TX — from a dead outlet to a full rewire.',
    symptomsHeading: 'Signs of an electrical fault',
    symptoms: [
      'Lights dimming or flickering when the A/C or microwave cycles on',
      'Outlets dead on one side of the rig while the rest work fine',
      'Batteries that will not hold charge overnight or drain while plugged in',
      'A breaker or fuse that trips repeatedly on the same circuit',
      'A burning smell, warm outlet, or discolored plug at the shore power inlet',
      'Nothing at all on 12V — no lights, no pump, no slides',
    ],
    includesHeading: 'What the service covers',
    includes: [
      {
        title: '12V system troubleshooting',
        body: 'House battery bank, fuse panel, grounds, and branch circuits traced properly. Most no-power calls come down to a corroded ground or a failed converter rather than the batteries everyone suspects first.',
      },
      {
        title: '120V shore power and distribution',
        body: 'Shore inlet, cord, transfer switch, breaker panel, GFCI circuits, and outlets — including the burnt or backed-out connections that show up as intermittent power on one side of the coach.',
      },
      {
        title: 'Converters and inverters',
        body: 'Diagnosis and replacement of failed converters, plus inverter sizing and installation when you want to run real loads off the battery bank instead of a generator.',
      },
      {
        title: 'Batteries and charging',
        body: 'Load testing, replacement, and lithium conversions — including the converter or charger changes a lithium bank actually needs, which is the step most DIY conversions skip.',
      },
      {
        title: 'Generator electrical',
        body: 'Transfer switch faults, generator output problems, and the wiring between the two, which is a far more common failure point than the generator itself.',
      },
      {
        title: 'Rewiring and additions',
        body: 'New circuits, outlets, USB and 12V accessory points, replacing brittle or rodent-damaged runs, and cleaning up wiring left behind by a previous owner.',
      },
    ],
    body: [
      {
        heading: 'Low voltage is the quiet killer',
        paragraphs: [
          'A long or undersized extension cord, a tired pedestal at an older RV park, or a heavily loaded campground circuit on a hot afternoon can pull incoming voltage well below where an air conditioner or a converter is happy. Nothing looks obviously wrong — but the A/C struggles, the converter runs hot, and motors draw more current to compensate.',
          'Sustained low voltage is what actually destroys compressors and converters in Texas summers. Diagnosing an appliance failure without checking supply voltage at the panel means replacing a part that is going to fail again for the same reason.',
        ],
      },
      {
        heading: 'Two systems, one panel, no documentation',
        paragraphs: [
          'The 12-volt side runs your lights, pump, slides, and control boards. The 120-volt side runs outlets, air conditioning, and the converter that feeds the 12-volt side. When something dies, the symptom rarely points at the system that actually failed — a dead furnace or refrigerator control board is a 12V problem that presents as an appliance problem.',
          'Twelve years of RV work means most of these faults are familiar patterns rather than mysteries. Troubleshooting starts at the panel with a meter, not with a parts order.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can you troubleshoot RV electrical problems on site?',
        answer:
          'Yes. Diagnosis is done at your location with a meter — batteries, grounds, converter output, shore voltage, transfer switch, and branch circuits. The large majority of electrical faults are found and repaired in the same visit.',
      },
      {
        question: 'Why do my RV lights dim when the air conditioner starts?',
        answer:
          'That is a voltage drop, and the cause is usually incoming supply rather than the RV itself — an undersized or overly long extension cord, a weak pedestal, or a loaded campground circuit. It can also indicate a loose connection at the shore inlet or transfer switch, which is worth checking promptly because those connections overheat.',
      },
      {
        question: 'Do you install lithium battery systems?',
        answer:
          'Yes, including the converter or charge profile changes that a lithium bank requires. Dropping lithium batteries into a system still set up for lead-acid is the most common reason those conversions underperform.',
      },
      {
        question: 'My outlets work but nothing 12V does. What is wrong?',
        answer:
          'That pattern almost always points at the converter, its fuse, or a failed connection between the converter and the fuse panel — the component that turns shore power into the 12-volt supply your lights and pump run on. It is a very common failure and usually a same-visit fix.',
      },
    ],
    related: ['rv-solar-battery-installation', 'rv-ac-repair'],
  },

  {
    slug: 'rv-plumbing-repair',
    name: 'RV Plumbing Repair',
    h1: 'RV Plumbing Repair',
    icon: Droplets,
    metaTitle: 'RV Plumbing Repair Kyle TX — Leaks, Pumps & Tanks | Impact RV Repair',
    metaDescription:
      'Mobile RV plumbing repair in Kyle, Buda, Austin, San Marcos and Central Texas. Leak repair, water pumps, fresh and waste tanks, valves, winterization. Call 512-968-5258.',
    keywords:
      'rv plumbing repair, rv water leak repair, rv water pump replacement, rv black tank valve repair, rv winterization, mobile rv plumber kyle tx',
    cardDescription:
      'Leak repair, water pumps, fresh and waste tanks, valves, sanitizing, and winterization.',
    intro:
      'RV plumbing is PEX, poly fittings, and thin-wall tanks packed into spaces that flex down every mile of highway. Impact RV Repair finds and fixes leaks, pumps, tanks, and valves on site across Kyle, Hays County, and Central Texas.',
    symptomsHeading: 'Signs of a plumbing problem',
    symptoms: [
      'The water pump cycles on and off while every faucet is closed',
      'Soft flooring or a damp cabinet base near the pump, water heater, or a wet bay',
      'A gray or black tank valve that will not fully close or seal',
      'Tank sensors reading full immediately after a dump',
      'Weak flow at one fixture while the rest are fine',
      'A persistent sewer odor inside the coach',
    ],
    includesHeading: 'What the service covers',
    includes: [
      {
        title: 'Leak location and repair',
        body: 'Pressure testing to find where water is actually escaping, then repairing the line, fitting, or fixture — including the connections buried behind a wall panel or under a dinette that owners cannot reach.',
      },
      {
        title: 'Water pumps',
        body: 'Diagnosis, rebuild, or replacement of the fresh water pump, plus the check valves and accumulator issues that cause short-cycling and pulsing flow.',
      },
      {
        title: 'Fresh, gray, and black tanks',
        body: 'Tank leaks, cracked fittings, failed dump valves, blade seals, and stuck cable actuators. Sensor cleaning and replacement for tanks that read wrong no matter how empty they are.',
      },
      {
        title: 'Fixtures and lines',
        body: 'Faucets, showers, toilets, toilet seals, and outside shower assemblies, along with cracked or brittle PEX and poly fittings that failed after a freeze.',
      },
      {
        title: 'Sanitizing and odor',
        body: 'System sanitizing and tracing sewer odor to its actual source — usually a dry trap, a failed toilet seal, or a vent problem rather than the tank itself.',
      },
      {
        title: 'Winterization and de-winterization',
        body: 'Full blowout and antifreeze service before a Central Texas freeze, and spring restart with a pressure check to catch anything the cold managed to split.',
      },
    ],
    body: [
      {
        heading: 'Central Texas freezes are the real plumbing hazard',
        paragraphs: [
          'People assume this climate makes winterization optional. It does not. A handful of hard freeze nights a year is more than enough to split a line or crack a pump housing, and the damage usually is not discovered until the system is pressurized again months later — by which point water has been running into a cabinet base or a floor for however long it took someone to notice.',
          'Winterization is inexpensive and fast. Repairing a rig that froze while it sat in storage over a January cold snap is neither.',
        ],
      },
      {
        heading: 'Small leaks cause structural damage',
        paragraphs: [
          'A slow leak at a fitting behind a wall panel does not announce itself. It soaks into luan and framing exactly the way a roof leak does, and RV floors and walls are built from materials that do not tolerate sustained moisture. A pump that runs briefly every twenty minutes with no faucet open is telling you there is a leak somewhere in the system, and that symptom is worth acting on immediately.',
          'Pressure testing finds the actual source rather than the visible symptom, which matters because water tracks along the frame and shows up well away from where it entered.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why does my RV water pump keep cycling with all faucets off?',
        answer:
          'The pump is holding pressure against a leak somewhere in the system. It may be a fitting, a fixture, the toilet valve, or the pump check valve itself. Because the water can be escaping behind a panel, this is worth diagnosing quickly rather than living with.',
      },
      {
        question: 'Do RVs need winterizing in Central Texas?',
        answer:
          'Yes. The region gets enough hard-freeze nights each winter to split lines and crack pump housings, and rigs sitting in storage are the ones most often damaged because nobody is there to notice.',
      },
      {
        question: 'My tank sensors read full after dumping. Can that be fixed?',
        answer:
          'Usually. Most of the time the probes are coated with residue rather than failed, and cleaning restores accurate readings. When the probes themselves have failed, they can be replaced or the system converted to an external sensor.',
      },
      {
        question: 'Can you replace a black tank dump valve on site?',
        answer:
          'Yes. Dump valves, blade seals, and seized cable actuators are all replaceable wherever the RV is parked, and it is one of the more common plumbing jobs on older rigs.',
      },
    ],
    related: ['rv-water-heater-repair', 'rv-water-damage-repair'],
  },

  {
    slug: 'rv-water-heater-repair',
    name: 'RV Water Heater Repair',
    h1: 'RV Water Heater Repair',
    icon: Flame,
    metaTitle: 'RV Water Heater Repair Kyle TX — No Hot Water Fix | Impact RV Repair',
    metaDescription:
      'Mobile RV water heater repair in Kyle, Buda, Austin, San Marcos and Central Texas. Gas and electric elements, thermostats, boards, anode rods, tankless units. Call 512-968-5258.',
    keywords:
      'rv water heater repair, rv no hot water, rv water heater element replacement, suburban atwood water heater repair, tankless rv water heater, mobile rv repair kyle tx',
    cardDescription:
      'Gas and electric side diagnosis, elements, thermostats, boards, anode rods, and full replacements.',
    intro:
      'No hot water is one of the most common calls that comes in, and it is also one of the most fixable. Impact RV Repair services gas, electric, and tankless RV water heaters on site anywhere within 50 miles of Kyle, TX.',
    symptomsHeading: 'Signs your water heater needs service',
    symptoms: [
      'The electric side works but the gas side will not light, or vice versa',
      'The unit lights, runs briefly, and then locks out on fault',
      'Water is lukewarm no matter how long the unit runs',
      'Water leaking from the bottom of the compartment or around the access door',
      'A rotten-egg smell from the hot water only',
      'A tankless unit that cycles between scalding and cold as flow changes',
    ],
    includesHeading: 'What the service covers',
    includes: [
      {
        title: 'Gas side diagnosis',
        body: 'Gas pressure, igniter and electrode gap, burner tube cleaning, thermocouple or flame sensor, gas valve, and the control board. Insect nests in the burner tube are a genuinely frequent cause here and cost nothing to clear.',
      },
      {
        title: 'Electric side diagnosis',
        body: 'Heating element testing and replacement, thermostat and high-limit reset, and the wiring between them — the classic case where a rig has hot water on shore power but nothing on propane.',
      },
      {
        title: 'Anode rods and flushing',
        body: 'Anode replacement on Suburban tanks and a full flush to clear the sediment that steals capacity and causes that rotten-egg smell in hot water.',
      },
      {
        title: 'Leaks and tank failure',
        body: 'Finding whether the leak is a fitting, the drain plug, the pressure relief valve, or the tank itself — the last of which means replacement rather than repair, and you get told that plainly.',
      },
      {
        title: 'Bypass valves and winterizing hardware',
        body: 'Repairing bypass valve assemblies that leak or fail to divert, which is what leaves people with no hot water after a winterization or with antifreeze in the tank.',
      },
      {
        title: 'Replacement and tankless upgrades',
        body: 'Full unit replacement when repair does not make sense, including on-demand tankless conversions with the gas and water plumbing done properly rather than adapted.',
      },
    ],
    body: [
      {
        heading: 'The cheap fixes are the common ones',
        paragraphs: [
          'A large share of no-hot-water calls come down to a tripped high-limit reset, a failed heating element, a dirty burner tube, or an igniter electrode sitting at the wrong gap. All four are inexpensive parts or no parts at all, and all four are same-visit repairs.',
          'What matters is testing in the right order. A water heater that works on electric but not gas is telling you something specific, and so is one that lights and then locks out after thirty seconds. Those two symptoms point at completely different components.',
        ],
      },
      {
        heading: 'Central Texas water is hard on tanks',
        paragraphs: [
          'Mineral content in this region builds sediment in a water heater tank faster than a lot of owners expect. Sediment insulates the bottom of the tank from the burner, so recovery slows and capacity drops, and it accelerates the anode rod consumption that protects the tank lining from corrosion.',
          'Annual flushing and anode replacement on a Suburban tank is straightforward maintenance that meaningfully extends tank life. Skipping it for years is how a repairable water heater becomes a replacement.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why does my RV have hot water on shore power but not propane?',
        answer:
          'The electric and gas sides of an RV water heater are largely independent, so working electric with dead gas points at the gas side specifically — usually a blocked burner tube, an igniter electrode out of position, a failed thermocouple or flame sensor, or the gas valve or control board.',
      },
      {
        question: 'How often should the anode rod be replaced?',
        answer:
          'On a Suburban steel tank, check it annually and replace it when it is significantly consumed. The anode is a sacrificial part — it corrodes so the tank lining does not, and running without one shortens tank life considerably.',
      },
      {
        question: 'Why does my hot water smell like rotten eggs?',
        answer:
          'That is a reaction between the anode rod and sulfates in the water, made worse by sediment sitting in the tank. Flushing the tank and replacing the anode with a different alloy usually resolves it.',
      },
      {
        question: 'Can you install a tankless water heater in my RV?',
        answer:
          'Yes. On-demand conversions are a common upgrade, and the important part is doing the gas supply and water plumbing properly for the new unit rather than adapting it to the old fittings.',
      },
    ],
    related: ['rv-plumbing-repair', 'rv-appliance-repair'],
  },

  {
    slug: 'rv-water-damage-repair',
    name: 'RV Water Damage & Rot Repair',
    h1: 'RV Water Damage & Rot Repair',
    icon: Hammer,
    metaTitle: 'RV Water Damage & Rot Repair Kyle TX — Soft Floors & Walls | Impact RV Repair',
    metaDescription:
      'Mobile RV water damage and rot repair in Kyle, Buda, Austin, San Marcos and Central Texas. Soft floors, rotted framing, delamination, wall rebuilds. Call 512-968-5258.',
    keywords:
      'rv water damage repair, rv rot repair, rv soft floor repair, rv delamination repair, rv wall rebuild, mobile rv repair kyle tx',
    cardDescription:
      'Soft floors, rotted framing, delaminated sidewalls, and structural rebuilds after a long-running leak.',
    intro:
      'Water damage is the single most expensive thing that happens to an RV, and it is almost always the result of a leak that went unnoticed for a season or more. Impact RV Repair opens up, dries out, and rebuilds damaged floors, walls, and framing on site across Central Texas.',
    symptomsHeading: 'Signs of water damage',
    symptoms: [
      'A floor that flexes, gives, or feels spongy underfoot',
      'Wall paneling or wallpaper separating, bubbling, or peeling at the seams',
      'Exterior sidewalls that ripple or bulge — delamination',
      'Dark staining spreading from a corner, window, or slide opening',
      'A musty smell that persists no matter how much the rig is aired out',
      'Screws or trim that will no longer hold because the wood behind them is gone',
    ],
    includesHeading: 'What the service covers',
    includes: [
      {
        title: 'Damage assessment',
        body: 'Probing and moisture reading to map how far the damage actually extends, which is nearly always further than the visible stain suggests. You get the real scope before committing to anything.',
      },
      {
        title: 'Source repair first',
        body: 'The leak gets found and stopped before any rebuild starts. Rebuilding around an active leak wastes the entire repair, so the roof, window, seam, or plumbing fitting responsible is handled first.',
      },
      {
        title: 'Floor repair',
        body: 'Cutting out failed decking, replacing framing where the rot reached it, and restoring the subfloor properly rather than laying new covering over soft material.',
      },
      {
        title: 'Wall and framing rebuild',
        body: 'Removing paneling, cutting out rotted studs and luan, replacing structural members, and closing the wall back up so it carries load the way it was designed to.',
      },
      {
        title: 'Window and slide reseal',
        body: 'Windows and slide-out openings are two of the most common entry points. Both get pulled, cleaned, and resealed properly instead of caulked over from the outside.',
      },
      {
        title: 'Delamination repair',
        body: 'Assessment and repair of separated sidewall skins where the panel is still salvageable, and a straight answer about when it is not.',
      },
    ],
    body: [
      {
        heading: 'Why the damage is always bigger than it looks',
        paragraphs: [
          'RV walls and floors are built from thin luan bonded to foam and framing. It is a light, efficient structure, and it has almost no tolerance for sustained moisture. Once water reaches it, the material wicks and the adhesive bond fails progressively outward from the entry point.',
          'The stain visible on your ceiling or the soft patch by the door is where the water finally surfaced, not where it entered or how far it spread. Assessment always starts by finding the real boundary of the damage, because repairing to the edge of the visible stain guarantees the job has to be done again.',
        ],
      },
      {
        heading: 'When it is worth repairing',
        paragraphs: [
          'Not every water-damaged RV is worth rebuilding, and you deserve a straight answer on that before spending money. A contained soft spot in a floor or a single rotted wall section on an otherwise sound rig is usually well worth repairing. Rot that has traveled the full length of a sidewall and into the frame on a rig with other significant problems often is not.',
          'The assessment comes first and the pricing is given up front. If the honest recommendation is that the repair costs more than the rig is worth, that is what you will hear.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can RV floor and wall rot be repaired on site?',
        answer:
          'Yes, most of it. Floor sections, wall framing, and paneling are all repairable wherever the RV is parked. The work takes longer than a typical service call, so it gets scheduled as a multi-visit job when the scope calls for it.',
      },
      {
        question: 'How do I know how bad the damage is?',
        answer:
          'It has to be probed and measured rather than guessed at. Moisture readings and physical probing map the actual boundary, which is routinely well beyond the visible stain or soft spot.',
      },
      {
        question: 'Is delamination on my sidewall fixable?',
        answer:
          'Sometimes. If the panel is intact and the separation is limited, it can often be repaired. Widespread delamination with rotted framing behind it is a much larger job and sometimes not economical, and you will get told which situation you have.',
      },
      {
        question: 'Will you fix the leak that caused it?',
        answer:
          'Always, and first. Any rebuild done while the source is still active is wasted work, so the roof, window, seam, or plumbing fault responsible gets repaired before reconstruction begins.',
      },
    ],
    related: ['rv-roof-repair', 'rv-plumbing-repair'],
  },

  {
    slug: 'rv-appliance-repair',
    name: 'RV Appliance Repair',
    h1: 'RV Appliance Repair',
    icon: Refrigerator,
    metaTitle: 'RV Appliance Repair Kyle TX — Fridge, Furnace & Stove | Impact RV Repair',
    metaDescription:
      'Mobile RV appliance repair in Kyle, Buda, Austin, San Marcos and Central Texas. Refrigerators, furnaces, stoves, microwaves, and generators serviced on site. Call 512-968-5258.',
    keywords:
      'rv appliance repair, rv refrigerator repair, rv furnace repair, rv generator repair, dometic norcold repair, mobile rv repair kyle tx',
    cardDescription:
      'Refrigerators, furnaces, cooktops, microwaves, and generators diagnosed and repaired on site.',
    intro:
      'RV appliances are purpose-built units that share very little with their household equivalents, and most household appliance techs will not touch them. Impact RV Repair services refrigerators, furnaces, cooktops, and generators on site across Kyle, Hays County, and the Austin area.',
    symptomsHeading: 'Common appliance faults',
    symptoms: [
      'An absorption refrigerator that cools on shore power but not propane',
      'A refrigerator that runs constantly and never reaches temperature',
      'A furnace whose blower spins up but never ignites',
      'A furnace that lights and then shuts down after a minute',
      'Burners that will not light or will not stay lit',
      'A generator that cranks but will not start, or starts and drops out under load',
    ],
    includesHeading: 'What the service covers',
    includes: [
      {
        title: 'Absorption refrigerators',
        body: 'Cooling unit assessment, burner and flue cleaning, igniter and thermistor faults, control board diagnosis, and the leveling and ventilation problems that cause poor cooling with nothing actually broken.',
      },
      {
        title: 'Furnaces',
        body: 'Sail switch, limit switch, igniter, gas valve, and blower diagnosis — the four things behind almost every furnace that spins but will not light, or lights and then quits.',
      },
      {
        title: 'Cooktops, ovens, and microwaves',
        body: 'Burner and orifice cleaning, igniter and thermocouple replacement, oven thermostat faults, and microwave power and mounting issues.',
      },
      {
        title: 'Generators',
        body: 'Fuel delivery, carburetor service after long storage, spark, oil sensor lockouts, and the output and transfer switch faults that get blamed on the generator when the wiring is at fault.',
      },
      {
        title: 'Washer, dryer, and icemaker',
        body: 'Installed appliance service and the water and drain connections behind them, which are a frequent source of hidden leaks in larger fifth wheels.',
      },
      {
        title: 'Replacement and upgrades',
        body: 'Sourcing and installing OEM or compatible replacements, including absorption-to-compressor refrigerator conversions when that is the better long-term answer.',
      },
    ],
    body: [
      {
        heading: 'Refrigerators fail for boring reasons more often than dramatic ones',
        paragraphs: [
          'An absorption fridge needs three things to work: it must be reasonably level, it must have adequate airflow behind it, and the burner and flue must be clean. Any one of those being off produces exactly the same symptom as a failing cooling unit — poor cooling that gets worse in hot weather.',
          'In a Central Texas summer, an underperforming but healthy fridge will look completely dead simply because ambient temperature is working against it. Diagnosis checks the boring causes first, because a cooling unit is an expensive thing to replace unnecessarily.',
        ],
      },
      {
        heading: 'Most furnace faults are one of four parts',
        paragraphs: [
          'The sequence is always the same: the blower spins up, a sail switch confirms airflow, the limit switch confirms the box is not overheated, the igniter fires, and the gas valve opens. When a furnace runs the fan and never lights, the fault is almost always in that chain — and where it stops tells you which part.',
          'That means a furnace call is usually a diagnostic visit and one inexpensive part rather than an open-ended problem. Rodent nests in the ductwork or intake are also common on rigs that sat through a winter, and cost nothing but time to clear.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why does my RV refrigerator work on electric but not propane?',
        answer:
          'That points at the gas side — most often a burner or flue packed with debris or insect nest, an igniter electrode out of position, or a failed gas valve or control board. It is a common and generally inexpensive repair.',
      },
      {
        question: 'My furnace blows air but never gets hot. What is wrong?',
        answer:
          'The ignition sequence is stopping somewhere. Usually it is the sail switch, a tripped limit switch, the igniter, or the gas valve. Which one it is can be determined on site by watching where the sequence halts.',
      },
      {
        question: 'Do you work on RV generators?',
        answer:
          'Yes — fuel delivery, carburetor service after storage, spark, oil lockouts, and the output side. Generators that sat unused for a season are the most common call, and carburetor service usually resolves it.',
      },
      {
        question: 'Is it worth converting to a residential-style refrigerator?',
        answer:
          'It can be, particularly if the absorption cooling unit has failed and you have the battery capacity or shore power habits to support a compressor fridge. It is a real decision with tradeoffs, and you will get an honest comparison rather than a push toward the bigger sale.',
      },
    ],
    related: ['rv-electrical-repair', 'rv-water-heater-repair'],
  },

  {
    slug: 'rv-slide-out-repair',
    name: 'RV Slide-Out Repair',
    h1: 'RV Slide-Out Repair',
    icon: MoveHorizontal,
    metaTitle: 'RV Slide-Out Repair Kyle TX — Stuck & Leaking Slides | Impact RV Repair',
    metaDescription:
      'Mobile RV slide-out repair in Kyle, Buda, Austin, San Marcos and Central Texas. Stuck slides, motors, gears, seals, and adjustment. Call 512-968-5258.',
    keywords:
      'rv slide out repair, rv slide stuck, rv slide out motor replacement, rv slide seal replacement, slide out adjustment, mobile rv repair kyle tx',
    cardDescription:
      'Stuck or misaligned slides, motors and gears, hydraulic faults, seal replacement, and adjustment.',
    intro:
      'A slide-out that will not move turns an RV into a box you cannot use — or one you cannot drive. Impact RV Repair diagnoses and repairs electric and hydraulic slide systems on site anywhere within 50 miles of Kyle, TX.',
    symptomsHeading: 'Signs your slide needs service',
    symptoms: [
      'The slide will not move, or moves partway and stops',
      'It runs out crooked, binds on one side, or racks in the opening',
      'A grinding, clunking, or straining noise while it travels',
      'Water tracking in along the top or sides of the slide',
      'Torn, flattened, or missing seals around the slide box',
      'A hydraulic slide that drifts in on its own overnight',
    ],
    includesHeading: 'What the service covers',
    includes: [
      {
        title: 'Diagnosis for every slide type',
        body: 'Schwintek in-wall, rack-and-pinion, cable-driven, and hydraulic systems each fail differently. Identifying which system you have is the first step, because the repair paths have almost nothing in common.',
      },
      {
        title: 'Motors, gears, and controllers',
        body: 'Failed motors, stripped gears, and controller faults — including the Schwintek controllers that lose synchronization between the two sides and cause the slide to rack.',
      },
      {
        title: 'Hydraulic systems',
        body: 'Pumps, cylinders, hoses, and valves, plus finding the leak behind a slide that will not hold position or drifts in overnight.',
      },
      {
        title: 'Alignment and adjustment',
        body: 'Re-timing and adjusting a slide so it travels square and seals evenly, which is what most slides actually need before parts get thrown at them.',
      },
      {
        title: 'Seal replacement',
        body: 'Wiper and bulb seal replacement on slides that leak. Slide openings are one of the most common water entry points on any RV, and a flattened seal is the usual cause.',
      },
      {
        title: 'Emergency retraction',
        body: 'Manual override and retraction so you can move the rig when a slide fails while you are away from home, with the full repair scheduled afterward.',
      },
    ],
    body: [
      {
        heading: 'Alignment first, parts second',
        paragraphs: [
          'A slide that binds, grinds, or trips out on overload is very often a slide that has drifted out of adjustment rather than one with a failed component. Slides move on rails and gears that shift over thousands of miles of road flex, and once travel is no longer square, everything downstream strains — motors overheat, gears wear fast, and seals stop sealing evenly.',
          'Checking and correcting adjustment before replacing hardware is both cheaper for you and better for the slide, because a new motor fitted to a misaligned slide is a new motor that fails early.',
        ],
      },
      {
        heading: 'Slide seals are a water-damage problem in disguise',
        paragraphs: [
          'The bulb and wiper seals around a slide box are the only thing standing between the opening and the interior of your RV. Texas sun flattens and hardens them, and a slide left extended for months in a storage lot or a seasonal site takes the worst of it.',
          'Once seals fail, water tracks along the top of the slide and into the wall — the same damage path as a roof leak, and just as expensive by the time it shows up inside. Seal replacement is cheap maintenance measured against what it prevents.',
        ],
      },
    ],
    faqs: [
      {
        question: 'My slide is stuck out and I need to move the RV. Can you help?',
        answer:
          'Yes. Most slide systems have a manual override that allows retraction so the rig can be moved safely, and that gets handled first. The actual repair is then scheduled once the RV is somewhere workable.',
      },
      {
        question: 'Why does my slide come out crooked?',
        answer:
          'On a Schwintek in-wall system, that usually means the two sides have lost synchronization and the controller needs re-timing. On rack-and-pinion or cable systems, it is typically a mechanical adjustment issue. Either way it should be corrected promptly, because running a racked slide damages the mechanism and the opening.',
      },
      {
        question: 'How often do slide seals need replacing?',
        answer:
          'There is no fixed interval, but in Central Texas sun they harden and flatten noticeably faster than in milder climates. They should be inspected at least annually and treated with a UV protectant, and replaced once they no longer spring back.',
      },
      {
        question: 'Can slide-out repair be done at my location?',
        answer:
          'Yes. Diagnosis, adjustment, seal replacement, motor and gear work, and hydraulic repairs are all done wherever the RV is parked, provided there is room to run the slide through its travel.',
      },
    ],
    related: ['rv-awning-repair', 'rv-water-damage-repair'],
  },

  {
    slug: 'rv-awning-repair',
    name: 'RV Awning Repair',
    h1: 'RV Awning Repair',
    icon: Umbrella,
    metaTitle: 'RV Awning Repair Kyle TX — Fabric, Arms & Motors | Impact RV Repair',
    metaDescription:
      'Mobile RV awning repair in Kyle, Buda, Austin, San Marcos and Central Texas. Fabric replacement, bent arms, motors, springs, and full awning replacement. Call 512-968-5258.',
    keywords:
      'rv awning repair, rv awning fabric replacement, rv awning motor repair, electric awning stuck, rv awning arm replacement, mobile rv repair kyle tx',
    cardDescription:
      'Fabric replacement, bent or damaged arms, motors and springs, and complete awning replacement.',
    intro:
      'Awnings take more weather damage than any other exterior component on an RV, and Hill Country wind events are unforgiving. Impact RV Repair replaces fabric, straightens or replaces arms, and repairs manual and electric awning systems on site across Central Texas.',
    symptomsHeading: 'Common awning problems',
    symptoms: [
      'Fabric that is torn, split along a seam, or shredded after a wind gust',
      'An electric awning that will not extend or retract',
      'An arm that is bent, seized, or no longer locks',
      'A manual awning whose spring tension is gone or dangerously strong',
      'Water pooling in the fabric instead of running off',
      'An awning that creeps out on its own while driving',
    ],
    includesHeading: 'What the service covers',
    includes: [
      {
        title: 'Fabric replacement',
        body: 'New vinyl or acrylic fabric measured and fitted to your specific awning, including the roller tube work that most owners understandably do not want to take on themselves.',
      },
      {
        title: 'Arm and hardware repair',
        body: 'Bent, seized, or broken arms repaired or replaced, along with the mounting brackets and rail hardware that get damaged in the same wind event.',
      },
      {
        title: 'Electric awning systems',
        body: 'Motor, control, and wiring diagnosis for powered awnings that will not move, move in only one direction, or stop partway through travel.',
      },
      {
        title: 'Spring and tension service',
        body: 'Manual awning spring tension reset or replacement. Awning springs hold real energy and are one of the genuinely hazardous jobs on an RV to attempt without the right approach.',
      },
      {
        title: 'Slide toppers',
        body: 'Slide-out awning toppers replaced and re-tensioned. A sagging topper pools water directly over a slide seal, which is exactly where you do not want standing water.',
      },
      {
        title: 'Complete replacement',
        body: 'Full awning assembly replacement when the hardware is beyond repair, including upgrades from manual to electric where the rig supports it.',
      },
    ],
    body: [
      {
        heading: 'Wind is what kills awnings here',
        paragraphs: [
          'Central Texas produces sudden strong gusts, especially ahead of a storm front rolling across the Hill Country. An awning that was fine an hour ago can be destroyed in under a minute, and the damage is rarely limited to fabric — a gust that tears fabric usually bends an arm or pulls mounting hardware out of the sidewall at the same time.',
          'That sidewall damage matters more than the awning. Torn-out mounting hardware leaves holes and compromised sealant on an exterior wall, which becomes a water intrusion path if it is not addressed when the awning is repaired.',
        ],
      },
      {
        heading: 'Pooling water and slide toppers',
        paragraphs: [
          'Fabric that has stretched or lost pitch collects water rather than shedding it, and the weight of even a modest amount of standing water will bend arms or tear fabric at the seam. If an awning has started holding water, it is telling you the tension or pitch needs correcting before the next storm does it for you.',
          'Slide toppers deserve particular attention because a sagging topper drains straight onto the slide seal. That is the fastest path from a cheap fabric problem to an expensive water damage problem.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can awning fabric be replaced without removing the awning?',
        answer:
          'In most cases yes. Fabric replacement is done in place on the majority of awnings, and the whole assembly only comes off when the hardware itself needs work.',
      },
      {
        question: 'My electric awning stopped mid-travel. Is that the motor?',
        answer:
          'Not necessarily. It is just as often a control fault, a wiring or connection problem, or a mechanical bind in the arms causing the motor to stall. Diagnosis determines which before any part gets ordered.',
      },
      {
        question: 'Is it safe to work on awning springs myself?',
        answer:
          'This is one of the few RV jobs genuinely worth handing off. Manual awning springs are wound under substantial tension and can cause serious injury when they release unexpectedly.',
      },
      {
        question: 'Should I repair a slide topper or remove it?',
        answer:
          'Repair it. A topper keeps debris and water off the top of the slide, and a slide without one collects leaves and grit that get dragged into the seal every time the slide retracts.',
      },
    ],
    related: ['rv-slide-out-repair', 'rv-preventive-maintenance'],
  },

  {
    slug: 'rv-leveling-jack-repair',
    name: 'RV Leveling & Jack Repair',
    h1: 'RV Leveling & Jack Repair',
    icon: Ruler,
    metaTitle: 'RV Leveling Jack Repair Kyle TX — Hydraulic & Electric | Impact RV Repair',
    metaDescription:
      'Mobile RV leveling jack repair in Kyle, Buda, Austin, San Marcos and Central Texas. Hydraulic and electric jacks, stabilizers, pumps, and auto-level faults. Call 512-968-5258.',
    keywords:
      'rv leveling jack repair, rv hydraulic jack repair, rv auto level not working, rv stabilizer jack replacement, landing gear repair, mobile rv repair kyle tx',
    cardDescription:
      'Hydraulic and electric jacks, stabilizers, landing gear, pumps, and auto-leveling system faults.',
    intro:
      'A leveling system that fails can leave an RV unusable where it sits — or unable to leave at all. Impact RV Repair services hydraulic and electric leveling jacks, stabilizers, and landing gear on site across Kyle, Hays County, and the Austin area.',
    symptomsHeading: 'Signs of a leveling system fault',
    symptoms: [
      'Jacks that will not extend, will not retract, or move only in one direction',
      'A jack that slowly retracts on its own and lets the rig settle overnight',
      'An auto-level system throwing an error or stopping mid-cycle',
      'Visible hydraulic fluid on a jack, hose, or the ground beneath',
      'A pump that runs continuously without moving anything',
      'Landing gear on a fifth wheel that binds, grinds, or stalls',
    ],
    includesHeading: 'What the service covers',
    includes: [
      {
        title: 'Hydraulic jack service',
        body: 'Pumps, cylinders, hoses, valves, and seals — including finding the internal leak behind a jack that slowly drops overnight while the others hold.',
      },
      {
        title: 'Electric jack and stabilizer repair',
        body: 'Motors, gearboxes, switches, and wiring on electric jack systems, plus scissor and stabilizer jack replacement on travel trailers.',
      },
      {
        title: 'Auto-leveling systems',
        body: 'Control panel faults, sensor calibration, and re-zeroing the system so it reads level correctly — which is what a lot of auto-level errors actually need.',
      },
      {
        title: 'Fifth wheel landing gear',
        body: 'Motors, gearboxes, cross shafts, and manual override repair on landing gear that binds, grinds, or stalls under load.',
      },
      {
        title: 'Fluid and system service',
        body: 'Fluid level correction, contaminated fluid replacement, and bleeding air out of a system that has been opened or run low.',
      },
      {
        title: 'Emergency retraction',
        body: 'Manual retraction so a rig with a failed system can be moved, with the permanent repair scheduled once it is somewhere workable.',
      },
    ],
    body: [
      {
        heading: 'Level matters more than comfort',
        paragraphs: [
          'An RV that sits out of level is not just annoying to walk around in. An absorption refrigerator will not cool correctly off level and can be permanently damaged by prolonged operation that way. Slides bind and wear when the frame is twisted, doors stop latching, and tanks drain incompletely.',
          'That makes a leveling failure worth fixing promptly rather than working around with blocks for a season. The refrigerator alone is a far more expensive part than the jack repair.',
        ],
      },
      {
        heading: 'A jack that drops overnight is telling you something specific',
        paragraphs: [
          'When one hydraulic jack settles while the others hold position, the leak is internal to that cylinder or its valve rather than a system-wide fluid problem. That is a useful diagnostic — it narrows the repair to one component instead of a full system teardown.',
          'Running low on fluid, by contrast, tends to affect everything at once and usually means there is an external leak at a hose or fitting somewhere. Both are repairable on site; they just are not the same job.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why does my auto-level system say it is level when it is not?',
        answer:
          'The system needs re-zeroing. Auto-level controllers learn a reference position, and if that reference was set on uneven ground or has drifted, the system will confidently level to the wrong plane. Recalibration resolves it.',
      },
      {
        question: 'One jack drops overnight but the others hold. Why?',
        answer:
          'That points at an internal leak in that specific cylinder or its control valve rather than a system fluid problem. It narrows the repair considerably, which is good news for the cost.',
      },
      {
        question: 'Can you repair fifth wheel landing gear?',
        answer:
          'Yes. Motors, gearboxes, cross shafts, switches, and manual override systems are all serviceable on site — including gear that has stalled under the weight of a loaded rig.',
      },
      {
        question: 'Is it bad to run my refrigerator while parked off level?',
        answer:
          'Yes, for absorption refrigerators. They rely on gravity to circulate their coolant solution, and running significantly off level for extended periods can permanently damage the cooling unit. Compressor-style refrigerators are far more tolerant.',
      },
    ],
    related: ['rv-slide-out-repair', 'rv-appliance-repair'],
  },

  {
    slug: 'rv-preventive-maintenance',
    name: 'RV Preventive Maintenance & Inspections',
    h1: 'RV Preventive Maintenance & Inspections',
    icon: ClipboardCheck,
    metaTitle: 'RV Maintenance & Inspection Kyle TX — Pre-Trip Service | Impact RV Repair',
    metaDescription:
      'Mobile RV preventive maintenance and inspections in Kyle, Buda, Austin, San Marcos and Central Texas. Pre-trip checks, seasonal service, winterization, pre-purchase inspections. Call 512-968-5258.',
    keywords:
      'rv maintenance, rv inspection, rv pre-trip inspection, rv pre-purchase inspection, rv winterization, seasonal rv service, mobile rv repair kyle tx',
    cardDescription:
      'Pre-trip and seasonal service, winterization, and pre-purchase inspections before you buy.',
    intro:
      'Nearly every expensive RV repair started as something small that nobody looked at. Impact RV Repair provides scheduled maintenance, pre-trip checks, and pre-purchase inspections on site across Kyle, Hays County, and the greater Austin area.',
    symptomsHeading: 'When to schedule maintenance',
    symptoms: [
      'Before a long trip, especially the first one of the season',
      'After the rig has sat in storage for several months',
      'Before a hard freeze is forecast, if the system is not winterized',
      'Annually, whether or not anything seems wrong',
      'Before buying a used RV — ideally before the money changes hands',
      'After buying, to establish an honest baseline of what you actually own',
    ],
    includesHeading: 'What an inspection covers',
    includes: [
      {
        title: 'Roof and seals',
        body: 'Every penetration, seam, and edge rail inspected individually, with sealant condition reported honestly — what needs attention now versus what can wait a season.',
      },
      {
        title: 'Water systems',
        body: 'Pressure test for leaks, pump operation, water heater function and anode condition, tank valves, and sensor accuracy.',
      },
      {
        title: 'Electrical',
        body: 'Shore power connection and cord condition, converter output, battery health under load, ground integrity, and a check of the panel for anything running warm.',
      },
      {
        title: 'Propane and appliances',
        body: 'Leak check on the gas system, regulator function, and operation of the refrigerator, furnace, water heater, and cooktop on both gas and electric where applicable.',
      },
      {
        title: 'Chassis and running gear',
        body: 'Tire age and condition — not just pressure — plus wheel bearings, brakes, suspension components, and lights. Tire age is the single most overlooked safety item on RVs in this climate.',
      },
      {
        title: 'Written findings',
        body: 'A clear report of what was found, sorted into what is urgent, what should be planned for, and what is simply worth knowing about. No pressure to book any of it.',
      },
    ],
    body: [
      {
        heading: 'Texas heat sets its own maintenance schedule',
        paragraphs: [
          'Manufacturer service intervals are written for a national average, and Central Texas is well outside it. Roof sealant, slide seals, awning fabric, and tires all age from UV and heat rather than from miles, which means a rig that sits in a Kyle storage lot all year is aging in exactly the ways that matter most.',
          'Tires are the clearest example. RV tires routinely time out before they wear out, and a tire that looks perfect can be years past the point where it should have been replaced. Age gets checked here as a matter of course, because a blowout at highway speed does structural damage to the rig on top of everything else.',
        ],
      },
      {
        heading: 'Pre-purchase inspections are worth every dollar',
        paragraphs: [
          'A used RV can hide water damage remarkably well. Fresh paneling, a new floor covering, and a good cleaning conceal rot that will cost thousands to put right, and it is genuinely difficult to spot without knowing where to probe and what to smell for.',
          'An inspection before you buy tells you what you are actually looking at — with no stake in whether the deal goes through. Twelve years of RV work means the common hiding places are familiar ones.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How often should an RV be inspected?',
        answer:
          'Annually at minimum, plus a check before any long trip and after any extended period in storage. In Central Texas, roof sealant specifically is worth looking at every six months.',
      },
      {
        question: 'Do you inspect RVs before purchase?',
        answer:
          'Yes, and it is one of the more valuable things you can spend money on before buying used. The inspection covers roof, water systems, electrical, propane, appliances, and running gear, with an honest written summary of what was found.',
      },
      {
        question: 'What does winterization involve in this climate?',
        answer:
          'Draining and bypassing the water heater, blowing out the lines, and running antifreeze through the system. Central Texas does not freeze often, but it freezes hard enough to split lines — and rigs sitting in storage are the ones that get damaged.',
      },
      {
        question: 'Do you pressure me to book the repairs you find?',
        answer:
          'No. You get the findings sorted by urgency along with upfront pricing if you want work done. What you do with the list is entirely your call.',
      },
    ],
    related: ['rv-roof-repair', 'rv-plumbing-repair'],
  },

  {
    slug: 'rv-solar-battery-installation',
    name: 'RV Solar & Battery Installation',
    h1: 'RV Solar & Battery Installation',
    icon: Sun,
    metaTitle: 'RV Solar & Lithium Battery Installation Kyle TX | Impact RV Repair',
    metaDescription:
      'Mobile RV solar and lithium battery installation in Kyle, Buda, Austin, San Marcos and Central Texas. Panels, controllers, inverters, and battery bank upgrades. Call 512-968-5258.',
    keywords:
      'rv solar installation, rv lithium battery upgrade, rv inverter installation, rv boondocking power, rv solar panel install texas, mobile rv repair kyle tx',
    cardDescription:
      'Solar panels, charge controllers, inverters, and lithium battery bank upgrades installed properly.',
    intro:
      'Central Texas has excellent sun and plenty of places worth camping without hookups. Impact RV Repair designs and installs solar, inverter, and lithium battery systems on site — sized to what you actually run, not to a package someone wants to sell.',
    symptomsHeading: 'Reasons owners upgrade',
    symptoms: [
      'Batteries that will not last a night off shore power',
      'Running the generator for hours just to keep the basics alive',
      'Wanting to camp without hookups for more than a weekend',
      'Working from the rig and needing reliable power for real loads',
      'Lead-acid batteries at end of life and worth replacing with lithium',
      'An existing solar setup that never produced what it was supposed to',
    ],
    includesHeading: 'What the service covers',
    includes: [
      {
        title: 'System design',
        body: 'Sizing based on what you actually use — a realistic load list and how you camp — rather than a fixed package. Undersized systems disappoint and oversized ones waste money.',
      },
      {
        title: 'Panel installation',
        body: 'Rooftop panels mounted and sealed properly. Every mount is a roof penetration, and doing them right is the difference between a solar upgrade and a future leak.',
      },
      {
        title: 'Charge controllers',
        body: 'MPPT controller selection, mounting, and configuration for your panel array and battery chemistry, which is the setting most self-installed systems get wrong.',
      },
      {
        title: 'Lithium battery banks',
        body: 'LiFePO4 installation including the converter, charger, and alternator charging changes lithium requires — the step that makes the difference between a bank that performs and one that never charges fully.',
      },
      {
        title: 'Inverters',
        body: 'Pure sine inverter sizing and installation, including transfer switching and subpanel wiring so the circuits you want on inverter are the circuits that get it.',
      },
      {
        title: 'Monitoring and cleanup',
        body: 'Battery monitors so you can actually see state of charge, plus correcting undersized cable, missing fusing, and other issues found in existing installs.',
      },
    ],
    body: [
      {
        heading: 'Lithium is not a drop-in swap',
        paragraphs: [
          'The most common disappointment with lithium upgrades comes from treating them as a straight battery replacement. A converter set up for lead-acid will not charge a LiFePO4 bank to full, alternator charging can be a problem without the right controls, and cable and fusing sized for the old bank is often inadequate for the current lithium can deliver.',
          'Done properly, a lithium bank is a genuine step change — far more usable capacity, faster charging, and a much longer service life. Done as a swap, it is an expensive way to end up with roughly what you had.',
        ],
      },
      {
        heading: 'Roof penetrations are the part that matters long term',
        paragraphs: [
          'A solar install adds several new holes in a roof that was previously sealed. Those mounts have to be bedded and sealed with the right product for your membrane, and they need to be inspected afterward like any other penetration.',
          'This is where a lot of budget installs cost owners far more than they saved. A leak that starts at a poorly sealed solar mount does exactly the same structural damage as any other roof leak, and it takes just as long to show up inside.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much solar do I need on my RV?',
        answer:
          'It depends entirely on your loads and how you camp. Keeping lights, a water pump, and device charging alive is a modest system; running a residential refrigerator or working from the rig full time is a substantially larger one. Sizing starts from a real load list rather than a guess.',
      },
      {
        question: 'Can I just swap lithium batteries in for my lead-acid ones?',
        answer:
          'Physically yes, but the result usually underperforms. The converter or charge profile, and often the alternator charging and cable and fusing, need to be addressed for a lithium bank to charge fully and safely.',
      },
      {
        question: 'Will solar panels cause a roof leak?',
        answer:
          'Not if the mounts are sealed correctly with a product compatible with your roof membrane. Poorly bedded mounts absolutely will, which is why sealing is treated as part of the install rather than an afterthought.',
      },
      {
        question: 'Can you fix or expand a solar system someone else installed?',
        answer:
          'Yes. Diagnosing underperforming installs is a regular job — usually controller configuration, undersized wiring, missing or wrong fusing, shading, or a charge profile that does not match the battery chemistry.',
      },
    ],
    related: ['rv-electrical-repair', 'rv-preventive-maintenance'],
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export const serviceSlugs = services.map((service) => service.slug)
