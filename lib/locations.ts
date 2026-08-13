/**
 * One entry per location page under /service-area/[slug].
 *
 * Content rules that apply to every string in this file:
 *  - Kyle is home base and the primary city. Austin is a service city, not the base.
 *  - Only real, public geography gets named — highways, rivers, lakes, public
 *    parks, and recognized districts. No claimed partnerships with private
 *    RV parks, dealerships, or storage businesses.
 *  - No certifications, warranty work, or team-size claims. James works solo.
 *  - Response wording: instant reply, most jobs booked within 24 hours.
 */
export type Location = {
  /** URL segment, e.g. 'buda-tx'. */
  slug: string
  city: string
  county: string
  /** Approximate road distance from Kyle, used in copy and the drive note. */
  distanceMiles: number
  lat: number
  lng: number
  metaTitle: string
  metaDescription: string
  keywords: string
  /** Hero paragraph. */
  intro: string
  /** Short line under the heading on the service-area hub card. */
  cardDescription: string
  /** Two or three paragraphs of genuinely local context. */
  localContext: string[]
  /** Types of places served in this city. */
  whereWeWork: string[]
  /** What owners in this city call about most. */
  commonJobs: string[]
  faqs: { question: string; answer: string }[]
  /** Slugs of three nearby locations. */
  nearby: string[]
}

export const locations: Location[] = [
  {
    slug: 'kyle-tx',
    city: 'Kyle',
    county: 'Hays County',
    distanceMiles: 0,
    lat: 29.9891,
    lng: -97.8772,
    metaTitle: 'Mobile RV Repair in Kyle, TX — On-Site Service | Impact RV Repair',
    metaDescription:
      'Mobile RV repair in Kyle, TX. James Langston brings the shop to your driveway, storage lot, or campsite — AC, roof, electrical, plumbing, and more. Call 512-968-5258.',
    keywords:
      'rv repair kyle tx, mobile rv repair kyle, rv repair near me kyle texas, rv technician kyle tx, rv service hays county',
    cardDescription: 'Home base — same-day service is most achievable here.',
    intro:
      'Kyle is home base. Impact RV Repair is run out of Kyle by James Langston, a mobile RV technician with 12 years in the trade, and it is the city where scheduling is most flexible and same-day service is most often possible.',
    localContext: [
      'Kyle has grown fast, and a large share of that growth is families in newer neighborhoods with an RV parked on a side pad, behind a fence, or in a storage lot off the frontage road. Working on rigs in exactly those spots is the entire premise of a mobile operation — there is no dealership drop-off, no waiting weeks for a service bay, and no towing a trailer across town for a repair that takes two hours.',
      'The I-35 corridor through Kyle also means a steady stream of travelers who discover a problem on the road. If you are passing through and something has failed — the A/C quit, a slide will not retract, you have no 12-volt power — being local to Kyle means the response is quick, and travel calls get priority because the clock is genuinely running for you.',
      'Being based here also means parts sourcing is straightforward. Accounts with major RV parts suppliers plus proximity to the Austin and San Marcos supply chain means the common failures are usually fixed on the first visit rather than after a week of waiting on a shipment.',
    ],
    whereWeWork: [
      'Residential driveways and side pads across Plum Creek, Steeplechase, and newer Kyle subdivisions',
      'RV and boat storage lots along the I-35 frontage roads',
      'Rural acreage off FM 150, FM 1626, and FM 2770',
      'Campsites and day-use areas around Lake Kyle and Plum Creek',
      'Roadside and travel-stop calls along I-35 through Kyle',
    ],
    commonJobs: [
      'Rooftop A/C that stops keeping up during a Kyle summer',
      'Roof sealant failure after a full season of Central Texas UV',
      'No 12-volt power after a rig has sat in storage',
      'Water heater with no hot water on the propane side',
      'Slide-outs that bind or will not retract',
      'Pre-trip inspections before a summer or holiday trip',
    ],
    faqs: [
      {
        question: 'Do you actually come to my house in Kyle?',
        answer:
          'Yes. Impact RV Repair is fully mobile and Kyle is home base — service happens in your driveway, at your storage lot, on your acreage, or at a campsite. Nothing needs to be towed anywhere.',
      },
      {
        question: 'How fast can you get to me in Kyle?',
        answer:
          'You hear back instantly and most jobs are booked within 24 hours. Kyle is where same-day service is most often possible simply because there is no drive time, and emergency calls like A/C failures and water leaks go to the front of the line.',
      },
      {
        question: 'Can you work on my RV while it is in a Kyle storage lot?',
        answer:
          'Yes, and a lot of Kyle work happens exactly there. All that is needed is access to the rig and enough room to work — power is helpful for some jobs but is not always required.',
      },
    ],
    nearby: ['buda-tx', 'san-marcos-tx', 'uhland-tx'],
  },

  {
    slug: 'buda-tx',
    city: 'Buda',
    county: 'Hays County',
    distanceMiles: 7,
    lat: 30.0855,
    lng: -97.8403,
    metaTitle: 'Mobile RV Repair in Buda, TX — On-Site Service | Impact RV Repair',
    metaDescription:
      'Mobile RV repair in Buda, TX — AC, roof, electrical, plumbing, slide-outs and more, done at your location. Based minutes away in Kyle. Call 512-968-5258.',
    keywords:
      'rv repair buda tx, mobile rv repair buda, rv technician buda texas, rv ac repair buda, rv service hays county',
    cardDescription: 'Minutes up I-35 from home base in Kyle.',
    intro:
      'Buda sits about seven miles up I-35 from home base, which makes it one of the quickest calls on the board. Impact RV Repair services RVs at Buda homes, storage lots, and job sites — no dealership drop-off and no towing.',
    localContext: [
      'Buda and Kyle effectively share a service footprint. From a scheduling standpoint that is good news for Buda owners: a short drive means it is often possible to fit a Buda call in the same day, and it keeps the response quick when something urgent happens like an A/C failure in August or a slide that will not retract before a trip.',
      'Most Buda work happens in neighborhood driveways and on the storage lots near the interstate. Newer developments on the west and south sides of town have plenty of rigs parked on side pads and behind fences, and the acreage properties out toward FM 967 and FM 1626 are just as easy to reach.',
      'Buda also catches a fair amount of interstate traffic pulling off I-35, so travel breakdowns are a regular call here. If you are passing through and stuck, being ten minutes away matters more than anything else about a repair shop.',
    ],
    whereWeWork: [
      'Driveways and side pads throughout Buda neighborhoods, including Garlic Creek and Sunfield',
      'RV storage facilities along the I-35 frontage roads',
      'Acreage and rural properties out FM 967, FM 1626, and toward Driftwood',
      'Businesses and job sites around the Main Street and old downtown area',
      'Travel stops and roadside calls on I-35 through Buda',
    ],
    commonJobs: [
      'RV air conditioning that cannot keep up in summer heat',
      'Roof reseal and leak repair before the fall rains',
      'Electrical faults after a rig has been parked for months',
      'Water heater and plumbing repairs',
      'Slide-out adjustment and seal replacement',
      'Pre-trip inspections before heading out from Buda',
    ],
    faqs: [
      {
        question: 'How quickly can you get to Buda?',
        answer:
          'Buda is roughly seven miles from home base in Kyle, so it is one of the fastest calls served. You hear back instantly and most jobs are booked within 24 hours, with same-day service often workable.',
      },
      {
        question: 'Do you service RVs at Buda storage lots?',
        answer:
          'Yes. A large share of Buda work happens at the storage facilities along the interstate. Access to the rig and room to work is all that is needed.',
      },
      {
        question: 'I broke down on I-35 near Buda. Can you help?',
        answer:
          'Call as soon as you can. Travel breakdowns get priority, and Buda is close enough to home base that the response is fast. Many roadside problems — A/C, power, a stuck slide — get resolved on site the same day.',
      },
    ],
    nearby: ['kyle-tx', 'austin-tx', 'dripping-springs-tx'],
  },

  {
    slug: 'austin-tx',
    city: 'Austin',
    county: 'Travis County',
    distanceMiles: 20,
    lat: 30.2672,
    lng: -97.7431,
    metaTitle: 'Mobile RV Repair in Austin, TX — On-Site Service | Impact RV Repair',
    metaDescription:
      'Mobile RV repair in Austin, TX. On-site AC, roof, electrical, plumbing and appliance repair at your home, storage lot, or campsite. Based in Kyle. Call 512-968-5258.',
    keywords:
      'rv repair austin tx, mobile rv repair austin, rv technician austin texas, rv ac repair austin, austin rv service near me',
    cardDescription: 'South Austin to the full metro, roughly 20 miles north.',
    intro:
      'Austin is about twenty miles north of home base in Kyle, well inside the service radius. Impact RV Repair works on RVs across the Austin metro on site — in driveways, at storage facilities, and at campsites — without the dealership wait.',
    localContext: [
      'Austin RV owners run into a specific problem: dealership service departments here are booked out for weeks, and a repair that takes an afternoon can cost you a month of the camping season. Mobile service exists precisely to close that gap. Most of what goes wrong on an RV — A/C, roof sealant, electrical faults, plumbing, appliances, slides — is work that can be done properly wherever the rig sits.',
      'The geography of Austin also makes mobile service practical in a way it is not in every city. Rigs here are scattered across storage lots on the edges of town, driveways in south and southeast Austin, and campsites at public parks inside the city limits. Driving to each of them is simply less friction than every owner driving to one service bay.',
      'South Austin, the SH 71 corridor, and the areas along I-35 and US 183 are the most frequent calls, but the whole metro is inside the radius. Event camping is a recurring one too — large events at Circuit of the Americas and elsewhere bring rigs into town that occasionally need help on short notice.',
    ],
    whereWeWork: [
      'Home driveways across south, southeast, and southwest Austin',
      'RV and boat storage facilities around the metro edges',
      'Public campsites including McKinney Falls State Park and Emma Long Metropolitan Park',
      'Event and festival camping, including large events at Circuit of the Americas',
      'Roadside and travel-stop calls along I-35, US 183, and SH 71',
    ],
    commonJobs: [
      'Rooftop A/C repair during Austin summers',
      'Roof inspection and resealing after UV damage',
      'Shore power, converter, and battery faults',
      'Refrigerator and furnace repair',
      'Slide-out and awning repair',
      'Solar and lithium battery installations',
    ],
    faqs: [
      {
        question: 'Do you cover all of Austin?',
        answer:
          'Austin sits well inside the 50-mile service radius from Kyle, so the metro is covered. South and southeast Austin are the quickest calls given the drive from Kyle, but the whole city is served.',
      },
      {
        question: 'Why use mobile RV repair instead of an Austin dealership?',
        answer:
          'Time, mostly. Dealership service departments in Austin routinely book weeks out and require you to drop the rig off and leave it. Mobile service happens where the RV already sits, usually within 24 hours of the call, with upfront pricing before any work starts.',
      },
      {
        question: 'Can you service my RV at an Austin campsite?',
        answer:
          'Yes. Public campsites, event camping, and RV parks are all workable as long as there is access to the rig and room to work.',
      },
    ],
    nearby: ['buda-tx', 'kyle-tx', 'dripping-springs-tx'],
  },

  {
    slug: 'san-marcos-tx',
    city: 'San Marcos',
    county: 'Hays County',
    distanceMiles: 10,
    lat: 29.8833,
    lng: -97.9414,
    metaTitle: 'Mobile RV Repair in San Marcos, TX — On-Site Service | Impact RV Repair',
    metaDescription:
      'Mobile RV repair in San Marcos, TX — roof, AC, electrical, plumbing and appliance service at your location. Based ten miles away in Kyle. Call 512-968-5258.',
    keywords:
      'rv repair san marcos tx, mobile rv repair san marcos, rv roof repair san marcos, rv technician san marcos texas, rv service hays county',
    cardDescription: 'Ten miles south on I-35, a regular stop.',
    intro:
      'San Marcos is about ten miles south of home base and one of the most frequently served cities in the area. Impact RV Repair handles roof, A/C, electrical, plumbing, and appliance work at San Marcos homes, storage lots, and riverside campsites.',
    localContext: [
      'San Marcos sits at the junction of a lot of RV traffic. The I-35 corridor runs straight through it, the river draws seasonal campers all summer, and the RV parks along the river and on the outskirts of town stay busy from spring through fall. That mix means the calls here run from full-time residents to travelers passing through who need something fixed today.',
      'Water is the recurring theme in San Marcos work. Rigs that spend the season near the river deal with humidity, tree cover, and debris — which is hard on roof sealant, slide seals, and awning fabric. Roof leaks caught late are the most expensive problem on any RV, and they are the most common serious repair found on rigs that have been parked under trees for a few seasons.',
      'The university and the outlet corridor keep the north end of town busy year-round, and there is a good amount of RV storage in and around San Marcos. Service at a storage lot is completely routine — access to the rig and room to work is the only requirement.',
    ],
    whereWeWork: [
      'Residential driveways throughout San Marcos',
      'RV parks and seasonal sites along the San Marcos River',
      'RV storage facilities near I-35 and the outlet corridor',
      'Rural properties out RM 12, FM 621, and toward Martindale',
      'Roadside and travel-stop calls along I-35 through San Marcos',
    ],
    commonJobs: [
      'RV roof repair and resealing, especially on rigs parked under trees',
      'Water damage and soft floor repair from long-running leaks',
      'A/C repair during summer river season',
      'Slide seal replacement and slide adjustment',
      'Plumbing leaks, pumps, and tank valve repair',
      'Awning fabric replacement after wind damage',
    ],
    faqs: [
      {
        question: 'Do you service RV parks along the San Marcos River?',
        answer:
          'Yes. Seasonal and short-term sites along the river are regular calls, particularly for roof, seal, and A/C work. All that is needed is access to the rig and permission to work on site.',
      },
      {
        question: 'Why do RVs in San Marcos have so many roof problems?',
        answer:
          'Tree cover and humidity near the river are hard on roof sealant and slide seals, and debris that collects on a roof holds moisture against it. Rigs parked under trees for a few seasons are where the most serious water damage tends to turn up.',
      },
      {
        question: 'How far is San Marcos from your base?',
        answer:
          'About ten miles south of Kyle on I-35, so it is a quick call. You hear back instantly and most jobs are booked within 24 hours.',
      },
    ],
    nearby: ['kyle-tx', 'new-braunfels-tx', 'wimberley-tx'],
  },

  {
    slug: 'new-braunfels-tx',
    city: 'New Braunfels',
    county: 'Comal County',
    distanceMiles: 30,
    lat: 29.703,
    lng: -98.1245,
    metaTitle: 'Mobile RV Repair in New Braunfels, TX — On-Site Service | Impact RV Repair',
    metaDescription:
      'Mobile RV repair in New Braunfels, TX. On-site AC, roof, plumbing, electrical and appliance repair at RV parks, campsites, and driveways. Call 512-968-5258.',
    keywords:
      'rv repair new braunfels tx, mobile rv repair new braunfels, rv ac repair new braunfels, rv technician comal county, rv service guadalupe river',
    cardDescription: 'Guadalupe and Comal river country, about 30 miles south.',
    intro:
      'New Braunfels is roughly thirty miles south of Kyle and one of the busiest RV towns in Central Texas. Impact RV Repair services rigs at New Braunfels homes, campgrounds, and riverside RV parks on site.',
    localContext: [
      'Few places in Texas concentrate RVs the way New Braunfels does. Between the Guadalupe and the Comal, the summer river season fills the RV parks solid, and a large number of rigs stay on seasonal sites for months at a stretch. That has a predictable effect on what breaks: sustained heat, sustained sun, and rigs sitting in one place with slides and awnings extended the entire time.',
      'Slide seals and awning fabric take the worst of it. A slide left out for a full season under Texas sun ends up with flattened, hardened seals that let water track into the wall, and awning fabric that has lost its pitch collects water instead of shedding it. Both are inexpensive to address and expensive to ignore.',
      'The other pattern here is A/C. A unit that is merely tired will still cool acceptably in June and fail outright in August, and in a town where people are living in their rigs through river season, that failure is not a minor inconvenience. Summer A/C calls out of New Braunfels get treated as priority work.',
    ],
    whereWeWork: [
      'RV parks and seasonal sites along the Guadalupe and Comal rivers',
      'Residential driveways throughout New Braunfels',
      'Campgrounds and day-use areas near Landa Park and the Gruene area',
      'RV storage facilities around town and along the I-35 corridor',
      'Rural properties out FM 306, FM 1863, and toward Canyon Lake',
    ],
    commonJobs: [
      'Rooftop A/C failure during river season',
      'Slide seal replacement after a season with slides extended',
      'Awning fabric and arm repair after summer storms',
      'Roof resealing and leak repair',
      'Plumbing, tank valve, and water heater repair on heavily used rigs',
      'Refrigerator problems from heat and off-level parking',
    ],
    faqs: [
      {
        question: 'Do you come out to RV parks in New Braunfels?',
        answer:
          'Yes, regularly. Seasonal and short-term sites along the Guadalupe and Comal are a routine part of the schedule, especially for A/C, seal, and roof work during the summer.',
      },
      {
        question: 'My rig has been on a seasonal site all summer. What should I check?',
        answer:
          'Slide seals, awning fabric and pitch, and roof sealant, in that order. Extended slides and awnings take a beating in Texas sun, and a flattened slide seal is one of the more common water intrusion paths into a wall.',
      },
      {
        question: 'Is New Braunfels inside your service area?',
        answer:
          'Yes, comfortably. It is about thirty miles from home base in Kyle, well inside the 50-mile radius. You hear back instantly and most jobs are booked within 24 hours.',
      },
    ],
    nearby: ['canyon-lake-tx', 'san-marcos-tx', 'kyle-tx'],
  },

  {
    slug: 'canyon-lake-tx',
    city: 'Canyon Lake',
    county: 'Comal County',
    distanceMiles: 45,
    lat: 29.8724,
    lng: -98.2622,
    metaTitle: 'Mobile RV Repair in Canyon Lake, TX — On-Site Service | Impact RV Repair',
    metaDescription:
      'Mobile RV repair at Canyon Lake, TX. On-site service at lakeside campgrounds, driveways, and storage lots — AC, roof, electrical, plumbing. Call 512-968-5258.',
    keywords:
      'rv repair canyon lake tx, mobile rv repair canyon lake, rv technician comal county, rv repair potters creek, rv service startzville sattler',
    cardDescription: 'Lakeside campgrounds and Hill Country properties.',
    intro:
      'Canyon Lake sits near the outer edge of the service radius, about forty-five miles southwest of Kyle. Impact RV Repair works on rigs at Canyon Lake campgrounds, lakeside properties, and driveways throughout the surrounding Hill Country.',
    localContext: [
      'Canyon Lake is a destination rather than a corridor, which changes what breaks. Rigs here are often parked for a weekend or a season at lakeside sites, and a lot of them are older units that live at the lake rather than travel much. Long-parked RVs develop a specific set of problems: seized components, dead batteries, rodent damage in the wiring and ductwork, and roof sealant that has quietly failed while nobody was up there looking.',
      'The Corps of Engineers parks around the reservoir — Potters Creek, Cranes Mill, Comal Park and the others — plus the private parks along FM 306 keep a steady population of rigs on the water through the warm months. Service calls at those sites are routine, and the only requirement is access to the rig and space to work.',
      'Because Canyon Lake is toward the far edge of the radius, calls here are grouped where possible so that a trip out covers more than one job. That does not affect urgent work — an A/C failure or a water leak still gets scheduled quickly — but it does mean flexible timing on routine maintenance is appreciated.',
    ],
    whereWeWork: [
      'Corps of Engineers parks around the reservoir, including Potters Creek, Cranes Mill, and Comal Park',
      'Private RV parks and campgrounds along FM 306 and FM 2673',
      'Lakeside homes and properties around Startzville and Sattler',
      'Storage lots and rural acreage throughout the Canyon Lake area',
      'Hill Country properties on the roads between Canyon Lake and New Braunfels',
    ],
    commonJobs: [
      'Rigs that will not wake up after months parked at the lake',
      'Battery, converter, and charging faults',
      'Rodent damage in wiring, ductwork, and furnace intakes',
      'Roof inspection and resealing on long-parked units',
      'A/C repair through the summer lake season',
      'Plumbing and water heater repair after seasonal shutdown',
    ],
    faqs: [
      {
        question: 'Do you service RVs at Canyon Lake campgrounds?',
        answer:
          'Yes, including the Corps of Engineers parks around the reservoir and the private parks along FM 306. Access to the rig and room to work is all that is needed.',
      },
      {
        question: 'Is Canyon Lake inside your service radius?',
        answer:
          'Yes, though it sits toward the outer edge at roughly forty-five miles from Kyle. Urgent work is still scheduled quickly; for routine maintenance, flexible timing helps since trips out that direction are grouped when possible.',
      },
      {
        question: 'My RV has sat at the lake for months and will not start up. What is likely?',
        answer:
          'Most often batteries and charging, followed by rodent damage in the wiring or furnace ductwork and seized components that have not moved in a season. All three are common on long-parked lake rigs and all three are diagnosable on site.',
      },
    ],
    nearby: ['new-braunfels-tx', 'wimberley-tx', 'san-marcos-tx'],
  },

  {
    slug: 'dripping-springs-tx',
    city: 'Dripping Springs',
    county: 'Hays County',
    distanceMiles: 25,
    lat: 30.1902,
    lng: -98.0867,
    metaTitle: 'Mobile RV Repair in Dripping Springs, TX — On-Site Service | Impact RV Repair',
    metaDescription:
      'Mobile RV repair in Dripping Springs, TX. On-site AC, roof, electrical, plumbing and solar service at Hill Country properties and driveways. Call 512-968-5258.',
    keywords:
      'rv repair dripping springs tx, mobile rv repair dripping springs, rv technician hays county, rv solar installation dripping springs, rv service hill country',
    cardDescription: 'Hill Country acreage along US 290, about 25 miles out.',
    intro:
      'Dripping Springs is about twenty-five miles northwest of Kyle out US 290. Impact RV Repair services RVs on Hill Country acreage, in driveways, and at properties throughout the Dripping Springs and Driftwood area.',
    localContext: [
      'Dripping Springs is acreage country, and that shapes the work. A lot of rigs here live on private property rather than in storage lots — parked under a metal cover, beside a barn, or out on a pad well away from the house. Some are guest quarters, some are used for work, and some are simply stored between trips. All of them are straightforward to service on site, which is the whole point of a mobile operation.',
      'Being on acreage also means a fair number of these rigs run off shore power that was never really designed for an RV — a long extension cord run from an outbuilding, or a circuit shared with something else. That produces low voltage, and sustained low voltage is what quietly destroys air conditioners and converters. It is one of the first things worth checking when a Dripping Springs rig has repeated appliance failures.',
      'Solar and battery upgrades come up more often here than in most of the service area, and it makes sense — Hill Country properties with an RV parked away from the house are exactly the case where a proper solar and lithium setup earns its keep. That work gets done on site as well, including the roof sealing that a panel install requires.',
    ],
    whereWeWork: [
      'Private acreage and ranch properties throughout the Dripping Springs area',
      'Driveways and covered pads in Belterra and surrounding neighborhoods',
      'Properties along US 290, RR 12, and out toward Driftwood',
      'Event and venue parking where rigs are staged for weekends',
      'Storage facilities in and around Dripping Springs',
    ],
    commonJobs: [
      'Solar panel and lithium battery installations',
      'Electrical faults traced back to long extension-cord shore power',
      'A/C repair and diagnosis after low-voltage damage',
      'Roof inspection and resealing on rigs stored outdoors',
      'Water systems and winterization before Hill Country freezes',
      'Full pre-trip inspections before longer trips',
    ],
    faqs: [
      {
        question: 'Can you get out to acreage properties around Dripping Springs?',
        answer:
          'Yes. Private property, ranch pads, and rigs parked well off the road are all normal calls. Only access and room to work are needed.',
      },
      {
        question: 'My RV keeps blowing through A/C parts. Could my power be the problem?',
        answer:
          'Very possibly. Running an RV from a long extension cord or an outbuilding circuit often produces sustained low voltage, which makes compressors and converters draw harder and fail early. Checking supply voltage at the panel is a standard part of diagnosis for exactly this reason.',
      },
      {
        question: 'Do you install solar on RVs in Dripping Springs?',
        answer:
          'Yes — panels, charge controllers, inverters, and lithium battery banks, installed on site with the roof penetrations sealed properly for your membrane. Existing underperforming systems can also be diagnosed and corrected.',
      },
    ],
    nearby: ['wimberley-tx', 'buda-tx', 'austin-tx'],
  },

  {
    slug: 'wimberley-tx',
    city: 'Wimberley',
    county: 'Hays County',
    distanceMiles: 20,
    lat: 29.9974,
    lng: -98.0989,
    metaTitle: 'Mobile RV Repair in Wimberley, TX — On-Site Service | Impact RV Repair',
    metaDescription:
      'Mobile RV repair in Wimberley, TX. On-site roof, AC, electrical, plumbing and appliance repair at Hill Country properties and campsites. Call 512-968-5258.',
    keywords:
      'rv repair wimberley tx, mobile rv repair wimberley, rv technician hays county, rv roof repair wimberley, rv service blanco river',
    cardDescription: 'Blanco River and Cypress Creek country, west of Kyle.',
    intro:
      'Wimberley is about twenty miles west of Kyle on RM 12, well inside the service radius. Impact RV Repair services rigs at Wimberley properties, campsites, and along the Blanco River and Cypress Creek.',
    localContext: [
      'Wimberley sits in heavy tree cover along the Blanco River and Cypress Creek, and that is the defining factor in RV work here. Shade is welcome in a Texas summer, but it comes with consequences for a roof — branches scrape and puncture membrane, leaf litter collects and holds moisture against sealant, and debris packs into A/C shrouds and refrigerator vents.',
      'The result is that Wimberley rigs disproportionately need roof work. A membrane puncture from a low limb is not always obvious from the ground, and sealant hidden under a layer of leaf debris fails without ever looking obviously bad. Roof inspections here are worth doing on a schedule rather than after a stain shows up on a ceiling.',
      'Flash flooding is a real consideration along the Blanco, and rigs stored on low ground occasionally take water damage from below rather than above. That damage is repairable, but it needs to be assessed properly — including the wiring, insulation, and floor structure, not just what is visible.',
    ],
    whereWeWork: [
      'Private properties and acreage throughout Wimberley and Woodcreek',
      'Sites along the Blanco River and Cypress Creek',
      'Driveways and covered parking on RM 12, RM 3237, and the ranch roads',
      'Campgrounds and short-term sites in the Wimberley Valley',
      'Storage lots in and around the Wimberley area',
    ],
    commonJobs: [
      'Roof membrane punctures and repairs from overhanging branches',
      'Resealing roofs where debris has been holding moisture on sealant',
      'Water damage and rot repair on rigs with long-running leaks',
      'A/C and refrigerator vents packed with leaf debris',
      'Electrical and battery faults on rigs parked for long stretches',
      'Full inspections after any flooding event',
    ],
    faqs: [
      {
        question: 'Do trees really cause RV roof problems?',
        answer:
          'Yes, in two ways. Low branches scrape and puncture roof membrane, and leaf debris that collects on the roof holds moisture against sealant so it degrades faster. Rigs parked under tree cover in the Wimberley area need roof inspection more often, not less.',
      },
      {
        question: 'My RV took water in a flood. Is it repairable?',
        answer:
          'Often, but it needs a proper assessment first — floor structure, insulation, and wiring in particular, not just what is visible. You will get an honest read on scope and cost before committing to anything.',
      },
      {
        question: 'How far is Wimberley from your base in Kyle?',
        answer:
          'About twenty miles west on RM 12, so it is a comfortable regular call. You hear back instantly and most jobs are booked within 24 hours.',
      },
    ],
    nearby: ['san-marcos-tx', 'dripping-springs-tx', 'canyon-lake-tx'],
  },

  {
    slug: 'bastrop-tx',
    city: 'Bastrop',
    county: 'Bastrop County',
    distanceMiles: 35,
    lat: 30.1105,
    lng: -97.3153,
    metaTitle: 'Mobile RV Repair in Bastrop, TX — On-Site Service | Impact RV Repair',
    metaDescription:
      'Mobile RV repair in Bastrop, TX. On-site AC, roof, electrical, plumbing and appliance repair at state parks, lake sites, and driveways. Call 512-968-5258.',
    keywords:
      'rv repair bastrop tx, mobile rv repair bastrop, rv technician bastrop county, rv repair bastrop state park, rv service lake bastrop',
    cardDescription: 'State park and lake camping east on SH 71.',
    intro:
      'Bastrop is roughly thirty-five miles east of Kyle on SH 71. Impact RV Repair services rigs at Bastrop-area campgrounds, state park sites, lake properties, and residential driveways.',
    localContext: [
      'Bastrop is genuine camping country. Bastrop State Park and Buescher State Park, the LCRA parks at Lake Bastrop, and the sites along the Colorado River keep RVs in the area year-round rather than just in summer. Campground calls here are routine, and being able to fix something on site means a weekend does not get written off.',
      'Two things drive the repair pattern. The first is heat and sun, same as everywhere in Central Texas — A/C failures and roof sealant degradation lead the list. The second is that the piney woods and river bottom sites put rigs under tree cover, with the same membrane damage and debris problems that come with it.',
      'Bastrop also has a good number of full-time and long-term residents in rigs on private property, and those units need real maintenance rather than occasional attention. Water systems, electrical, and appliances all wear faster in continuous use than in weekend use, and the maintenance schedule should reflect that.',
    ],
    whereWeWork: [
      'Bastrop State Park and Buescher State Park campsites',
      'LCRA park sites at Lake Bastrop, north and south shore',
      'Private RV parks and long-term sites around Bastrop',
      'Residential driveways and Tahitian Village properties',
      'Rural acreage along SH 71, SH 21, and the Colorado River',
    ],
    commonJobs: [
      'A/C repair for campers and full-time residents',
      'Roof membrane repair and resealing under tree cover',
      'Plumbing, pump, and tank valve repair on continuously used rigs',
      'Refrigerator and furnace repair',
      'Electrical and battery system faults',
      'Slide-out and awning repair after storms',
    ],
    faqs: [
      {
        question: 'Do you come out to Bastrop State Park or Lake Bastrop?',
        answer:
          'Yes. State park sites, LCRA park sites at the lake, and private campgrounds around Bastrop are all regular calls. Access to the rig and room to work is all that is required.',
      },
      {
        question: 'Is Bastrop inside your service area?',
        answer:
          'Yes. It is about thirty-five miles east of Kyle on SH 71, inside the 50-mile radius. You hear back instantly and most jobs are booked within 24 hours.',
      },
      {
        question: 'I live in my RV full time near Bastrop. Do you handle ongoing maintenance?',
        answer:
          'Yes, and full-time rigs genuinely need it. Water systems, electrical, and appliances all wear considerably faster in continuous use, so an annual service schedule catches problems well before they strand you.',
      },
    ],
    nearby: ['elgin-tx', 'austin-tx', 'niederwald-tx'],
  },

  {
    slug: 'elgin-tx',
    city: 'Elgin',
    county: 'Bastrop County',
    distanceMiles: 40,
    lat: 30.3496,
    lng: -97.3703,
    metaTitle: 'Mobile RV Repair in Elgin, TX — On-Site Service | Impact RV Repair',
    metaDescription:
      'Mobile RV repair in Elgin, TX. On-site AC, roof, electrical, plumbing and appliance service at rural properties and driveways. Call 512-968-5258.',
    keywords:
      'rv repair elgin tx, mobile rv repair elgin, rv technician bastrop county, rv service elgin texas, rv repair near me elgin',
    cardDescription: 'Rural properties northeast along US 290.',
    intro:
      'Elgin is about forty miles northeast of Kyle out US 290. Impact RV Repair services RVs at Elgin homes, rural acreage, and properties throughout the surrounding area.',
    localContext: [
      'Elgin is largely rural, and RVs here are usually parked on private property — beside a house, under a cover, or out on acreage. There is comparatively little commercial RV storage, which means most service happens exactly where the rig lives. That suits mobile work well.',
      'A recurring pattern in this part of the service area is rigs that sit for long stretches between uses. Rodents find their way into wiring, furnace ductwork, and storage bays; batteries discharge and sulfate; seals dry out; and tires age out well before they wear out. None of that shows up until the rig is put back into service, usually right before a trip.',
      'The practical answer is a wake-up service before the season rather than a scramble the week of departure. A proper check of batteries, propane, water systems, tires, and roof sealant catches the problems while there is still time to fix them.',
    ],
    whereWeWork: [
      'Rural acreage and private property throughout the Elgin area',
      'Residential driveways and covered parking in and around town',
      'Properties along US 290, SH 95, and toward McDade',
      'Farm and ranch sites where rigs are stored on the property',
      'Storage lots in the Elgin and Bastrop County area',
    ],
    commonJobs: [
      'Wake-up service on rigs that have sat for months',
      'Rodent damage to wiring, ductwork, and furnace intakes',
      'Battery and charging system replacement',
      'Roof resealing on rigs stored outdoors year-round',
      'Water system repair and de-winterization',
      'Tire age assessment and pre-trip inspections',
    ],
    faqs: [
      {
        question: 'Is Elgin within your service radius?',
        answer:
          'Yes. It is roughly forty miles northeast of Kyle, inside the 50-mile radius. It sits toward the outer edge, so flexible timing on routine work helps, but urgent calls are still scheduled quickly.',
      },
      {
        question: 'My RV has been parked for a year. What should I expect?',
        answer:
          'Typically batteries that will not hold charge, dried-out seals, possible rodent damage in the wiring or furnace ductwork, and roof sealant that has degraded. A wake-up inspection catches all of it before a trip rather than during one.',
      },
      {
        question: 'Do you service RVs parked on private acreage?',
        answer:
          'Yes, and around Elgin that is most of the work. Only access to the rig and space to work are needed.',
      },
    ],
    nearby: ['bastrop-tx', 'taylor-tx', 'austin-tx'],
  },

  {
    slug: 'taylor-tx',
    city: 'Taylor',
    county: 'Williamson County',
    distanceMiles: 50,
    lat: 30.571,
    lng: -97.4092,
    metaTitle: 'Mobile RV Repair in Taylor, TX — On-Site Service | Impact RV Repair',
    metaDescription:
      'Mobile RV repair in Taylor, TX. On-site AC, roof, electrical, plumbing and appliance service at driveways, work sites, and rural properties. Call 512-968-5258.',
    keywords:
      'rv repair taylor tx, mobile rv repair taylor, rv technician williamson county, rv service taylor texas, rv repair near me taylor',
    cardDescription: 'Outer edge of the radius, northeast on US 79.',
    intro:
      'Taylor sits at the outer edge of the 50-mile service radius, about fifty miles northeast of Kyle. Impact RV Repair does travel out to Taylor for on-site work — it just takes a little more scheduling flexibility than the closer cities.',
    localContext: [
      'Taylor has changed quickly with the industrial growth in eastern Williamson County, and one visible result is more RVs in the area being used as work housing rather than for recreation. A rig lived in during the week is on a completely different maintenance curve than one used a few weekends a year — water systems, electrical, and appliances all see heavy continuous duty.',
      'For rigs in that kind of service, the failures that matter are the ones that make the unit uninhabitable: A/C in the summer, furnace in the winter, water heater and pump year-round. Those get treated as priority calls because there is nowhere else to sleep when they quit.',
      'Because Taylor is at the far edge of the radius, trips out that way are grouped where possible. Urgent problems are still handled promptly; for routine maintenance and inspections, a little flexibility on timing helps get you scheduled sooner.',
    ],
    whereWeWork: [
      'Residential driveways and side pads throughout Taylor',
      'Work and job sites where rigs are used as housing',
      'Rural acreage along US 79, SH 95, and FM 619',
      'Storage lots in and around the Taylor area',
      'Campsites and short-term sites in eastern Williamson County',
    ],
    commonJobs: [
      'A/C repair for rigs being lived in year-round',
      'Furnace repair ahead of winter',
      'Water heater, pump, and plumbing repair on heavy-use systems',
      'Electrical faults and shore power connection problems',
      'Roof resealing on rigs parked outdoors permanently',
      'Full maintenance service for continuously occupied units',
    ],
    faqs: [
      {
        question: 'Do you really cover Taylor?',
        answer:
          'Yes, at about fifty miles it is right at the edge of the service radius. Trips that direction get grouped where possible, so routine work benefits from flexible timing. Urgent problems are still handled promptly.',
      },
      {
        question: 'I am living in my RV in Taylor for work. Do you handle that?',
        answer:
          'Yes, and full-time rigs are a meaningful share of the work in this area. Continuous use wears water systems, electrical, and appliances much faster, and failures that make a rig uninhabitable are treated as priority calls.',
      },
      {
        question: 'Can you service my RV at a work site?',
        answer:
          'Yes, provided there is access to the rig and enough room to work safely. Job site and work housing calls are routine.',
      },
    ],
    nearby: ['elgin-tx', 'bastrop-tx', 'austin-tx'],
  },

  {
    slug: 'niederwald-tx',
    city: 'Niederwald',
    county: 'Hays County',
    distanceMiles: 8,
    lat: 29.9827,
    lng: -97.7239,
    metaTitle: 'Mobile RV Repair in Niederwald, TX — On-Site Service | Impact RV Repair',
    metaDescription:
      'Mobile RV repair in Niederwald, TX. On-site AC, roof, electrical and plumbing service at rural properties and driveways, minutes from Kyle. Call 512-968-5258.',
    keywords:
      'rv repair niederwald tx, mobile rv repair niederwald, rv technician hays county, rv service niederwald texas, rv repair near me',
    cardDescription: 'Rural Hays County, minutes east of Kyle.',
    intro:
      'Niederwald is a short drive east of Kyle on FM 2001, which makes it one of the closest calls on the board. Impact RV Repair services RVs on Niederwald acreage and in driveways throughout the surrounding rural area.',
    localContext: [
      'Niederwald is small and rural, and that has an upside for RV owners here: there is essentially no local RV service, but home base is only a few miles west. Living in a small town normally means being at the back of the line for any trade — for RV work in Niederwald, the opposite is true.',
      'Most rigs here are parked on private property with plenty of room around them, which is ideal for the jobs that need space. Slide-outs need to be run through their travel, awnings need to be extended, and roof work needs a stable place to set a ladder. All of that is easier on a rural pad than in a packed storage lot.',
      'The trade-off for rural parking is exposure. Rigs sitting out on open acreage take full sun with no shade at all, which is hard on roof sealant, slide seals, awning fabric, and tires. Anything stored in the open around Niederwald deserves roof and seal inspections on a regular schedule.',
    ],
    whereWeWork: [
      'Private acreage and rural property throughout the Niederwald area',
      'Residential driveways and side pads',
      'Properties along FM 2001, SH 21, and toward Lockhart',
      'Farm and ranch sites where rigs are stored on the property',
      'Storage lots in the Kyle and Buda area for Niederwald owners',
    ],
    commonJobs: [
      'Roof resealing on rigs stored in full sun',
      'Slide seal and awning fabric replacement from UV damage',
      'A/C repair during Central Texas summers',
      'Battery, converter, and charging faults',
      'Water system repair and winterization',
      'Pre-trip inspections including tire age',
    ],
    faqs: [
      {
        question: 'How close is Niederwald to your base?',
        answer:
          'Only a few miles east of Kyle, which makes it one of the quickest calls served. You hear back instantly and most jobs are booked within 24 hours, with same-day service often workable.',
      },
      {
        question: 'My RV sits in the open all year. What wears out fastest?',
        answer:
          'Roof sealant first, then slide seals and awning fabric, then tires — all of which age from UV and heat rather than from use. Rigs stored in full sun benefit from roof and seal inspection at least annually.',
      },
      {
        question: 'Do you service RVs on rural property?',
        answer:
          'Yes, and rural pads are actually easier to work on than tight storage lots. Room to run a slide through its travel or set a ladder for roof work makes several jobs considerably simpler.',
      },
    ],
    nearby: ['kyle-tx', 'uhland-tx', 'buda-tx'],
  },

  {
    slug: 'uhland-tx',
    city: 'Uhland',
    county: 'Hays County',
    distanceMiles: 6,
    lat: 29.9749,
    lng: -97.7717,
    metaTitle: 'Mobile RV Repair in Uhland, TX — On-Site Service | Impact RV Repair',
    metaDescription:
      'Mobile RV repair in Uhland, TX. On-site AC, roof, electrical and plumbing service at rural properties and driveways, minutes from Kyle. Call 512-968-5258.',
    keywords:
      'rv repair uhland tx, mobile rv repair uhland, rv technician hays county, rv service uhland texas, rv repair near me',
    cardDescription: 'Six miles east of home base along SH 21.',
    intro:
      'Uhland sits about six miles east of Kyle along SH 21 and FM 2001 — close enough that scheduling is rarely an obstacle. Impact RV Repair services RVs at Uhland properties, driveways, and acreage on site.',
    localContext: [
      'Uhland is one of the closest cities in the service area, and being minutes from home base means service here is about as responsive as it gets. Same-day work is regularly possible, and urgent problems — an A/C failure in August, a slide that will not retract, a water leak — can usually be looked at quickly.',
      'The area is growing along the SH 21 and FM 2001 corridors, with new development mixed into longstanding rural acreage. RVs here are mostly parked on private property, which makes them straightforward to work on. There is room for the jobs that need it, and no storage-lot access to coordinate.',
      'Like the rest of rural Hays County, exposure is the main enemy. Rigs sitting outside year-round take relentless UV, and the components that fail first are the ones nobody looks at — roof sealant, slide seals, and tires that time out long before their tread wears down.',
    ],
    whereWeWork: [
      'Private property and acreage throughout the Uhland area',
      'Residential driveways and side pads in newer developments',
      'Properties along SH 21, FM 2001, and FM 150',
      'Rural sites between Uhland, Kyle, and Niederwald',
      'Storage facilities in nearby Kyle and Buda',
    ],
    commonJobs: [
      'Roof inspection and resealing after sustained sun exposure',
      'A/C diagnosis and repair through the summer',
      'Slide-out adjustment and seal replacement',
      'Electrical, battery, and converter faults',
      'Plumbing repair and seasonal winterization',
      'Pre-trip inspections before longer trips',
    ],
    faqs: [
      {
        question: 'How quickly can you get to Uhland?',
        answer:
          'Uhland is about six miles from home base in Kyle, so it is one of the fastest calls served. You hear back instantly, most jobs are booked within 24 hours, and same-day service is often workable.',
      },
      {
        question: 'Do you charge extra for the trip to Uhland?',
        answer:
          'Pricing is always given up front before any work begins, so you will know the full cost before scheduling. Uhland is one of the closest cities served, which works in your favor.',
      },
      {
        question: 'Can you work on my RV where it sits on my property?',
        answer:
          'Yes. Driveways, side pads, and rural acreage are all normal. Access to the rig and room to work is the only real requirement.',
      },
    ],
    nearby: ['kyle-tx', 'niederwald-tx', 'san-marcos-tx'],
  },
]

export function getLocation(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug)
}

export const locationSlugs = locations.map((location) => location.slug)
