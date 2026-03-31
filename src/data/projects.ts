import type { ProjectData } from "./types";

export const PROJECTS: ProjectData[] = [
  {
    id: 1,
    title: "Spaceflight Booking & Operations",
    description:
      "A mobile app for passengers to book and manage spaceflights, and a tablet interface that equips crew with tools to support and monitor the journey.",
    image: "/images/space.png",
    type: "Mobile & Tablet",
    heroSubtitle: "UX Research & UI Design",
    tags: [
      { name: "Retention and Loyalty", arrowIcon: "/images/up-arrow.svg" },
      { name: "Crew Efficiency", arrowIcon: "/images/up-arrow.svg" },
      {
        name: "Reduce Average Time to Book",
        arrowIcon: "/images/down-arrow.svg",
      },
      { name: "Customer Satisfaction", arrowIcon: "/images/up-arrow.svg" },
    ],

    sections: [
      {
        title: "Problem Statement",
        paragraphs: [
          [
            { text: "As commercial space travel begins to take shape, there’s a growing need for a " },
            { text: "simple and intuitive way", bold: true },
            { text: " to book and manage spaceflights." },
          ],
          [
            { text: "Passengers need " },
            { text: "clarity and control", bold: true },
            { text: "; crew members need " },
            { text: "efficient tools", bold: true },
            { text: " to support and monitor the journey." },
          ],
        ],
        image: "/images/paragraph-images/project-1/problem-statement-1.png",
      },

      {
        title: "Problem Solution",
        paragraphs: [
          [
            { text: "NEXRA is an " },
            { text: "all-in-one spaceflight platform", bold: true },
            { text: " that simplifies the booking process and provides transparent flight information." },
          ],
          [
            { text: "The design bridges complexity with " },
            { text: "clarity", bold: true },
            { text: " through thoughtful information architecture and intuitive flows." },
          ],
        ],
        image: "/images/paragraph-images/project-1/problem-statement-1.png",
      },

      {
        title: "Target Users",
        paragraphs: [
          [
            { text: "Primary: " },
            { text: "Affluent early adopters aged 28–55", bold: true },
            { text: " seeking adventure travel experiences." },
          ],
          [
            { text: "Secondary: Aerospace crew and operations staff managing " },
            { text: "multi-mission logistics", bold: true },
            { text: "." },
          ],
          [
            { text: "Key insights revealed users needed " },
            { text: "confidence signals, real-time updates, and streamlined document management", bold: true },
            { text: " above all else." },
          ],
        ],
        image: "/images/paragraph-images/project-1/problem-statement-1.png",
      },

      {
        title: "UI Identity",
        paragraphs: [
          [
            { text: "The visual language draws from " },
            { text: "aerospace precision", bold: true },
            { text: " — deep space blacks, stark whites, and a signature burnt-orange accent that evokes rocket ignition." },
          ],
          [
            { text: "Typography is tight and editorial. Every surface feels like it belongs inside a " },
            { text: "cockpit or mission control room", bold: true },
            { text: "." },
          ],
        ],
        image: "/images/paragraph-images/project-1/problem-statement-1.png",
      },

      {
        title: "Research Approach",
        paragraphs: [
          [
            { text: "5 in-depth user interviews · Competitive audit of 8 travel & aviation apps · Affinity mapping · Jobs-to-be-done framework · Usability testing on mid-fi prototypes with " },
            { text: "12 participants", bold: true },
            { text: "." },
          ],
        ],
        image: "/images/paragraph-images/project-1/problem-statement-1.png",
      },

      {
        title: "Expected Outcomes",
        paragraphs: [
          [
            { text: "Reduce booking drop-off by " },
            { text: "40%", bold: true },
            { text: " through a streamlined 4-step checkout flow." },
          ],
          [
            { text: "Increase passenger confidence with " },
            { text: "real-time mission status updates", bold: true },
            { text: "." },
          ],
          [
            { text: "Enable crew to manage up to " },
            { text: "3× more operations", bold: true },
            { text: " with the tablet interface." },
          ],
        ],
        image: "/images/paragraph-images/project-1/problem-statement-1.png",
      },

      {
        title: "Key Features",
        paragraphs: [
          [
            { text: "Search & Filter — " },
            { text: "Intelligent flight search", bold: true },
            { text: " with departure windows, seat classes, and mission type filters." },
          ],
          [
            { text: "Tickets — Digital boarding passes with " },
            { text: "QR codes and biometric check-in", bold: true },
            { text: ", plus live gate updates." },
          ],
          [
            { text: "Seat Selection — Interactive " },
            { text: "3D cabin map", bold: true },
            { text: " with gravity-zone indicators and accessibility options." },
          ],
        ],
        image: "/images/paragraph-images/project-1/problem-statement-1.png",
      },

      {
        title: "Key Features",
        paragraphs: [
          [
            { text: "Search, Book and Payment Confirmation — A " },
            { text: "frictionless 4-step flow", bold: true },
            { text: ": Search → Select → Review → Pay." },
          ],
          [
            { text: "Supports " },
            { text: "Apple Pay & crypto wallets", bold: true },
            { text: " for modern payment flexibility." },
          ],
          [
            { text: "Tickets Use Info — " },
            { text: "Contextual explainers", bold: true },
            { text: " embedded within the ticket view so passengers always know what's next." },
          ],
        ],
        image: "/images/paragraph-images/project-1/problem-statement-1.png",
      },

      {
        title: "Design",
        paragraphs: [],
        image: "/images/paragraph-images/project-1/problem-statement-1.png",
        design: [
          {
            title: "Search, Book and Opportunities",
            badge: "Mobile App / Passengers",
            text: "Book spaceflights with smart filters, explore curated trips, and manage voyages in real time.",
            image: "/images/paragraph-images/project-1/problem-statement-1.png",
          },
          {
            title: "Tickets & Travel Info",
            badge: "Mobile App / Passengers",
            text: "Access boarding passes, live mission updates, and clear next-step guidance from one place.",
            image: "/images/nexra-features-2.png",
          },
          {
            title: "Seat Selection",
            badge: "Mobile App / Passengers",
            text: "Choose the ideal seat through an interactive cabin map with gravity-zone and accessibility details.",
            image: "/images/paragraph-images/project-1/problem-statement-1.png",
          },
          {
            title: "Upgrade & Personal Information",
            badge: "Mobile App / Passengers",
            text: "Manage upgrades, training add-ons, and personal details through a focused profile flow.",
            image: "/images/paragraph-images/project-1/problem-statement-1.png",
          },
          {
            title: "Payment Confirmation",
            badge: "Mobile App / Passengers",
            text: "Complete checkout in a minimal, secure flow built to reduce friction at the final step.",
            image: "/images/nexra-features-2.png",
          },
          {
            title: "Explore & Tickets",
            badge: "Mobile App / Passengers",
            text: "Discover upcoming missions and revisit saved or booked journeys from a unified ticket hub.",
            image: "/images/paragraph-images/project-1/problem-statement-1.png",
          },
          {
            title: "Crew Operations Dashboard",
            badge: "Tablet / Crew",
            text: "Support passenger manifests, boarding status, safety checks, and live communication through a purpose-built crew interface.",
            image: "/images/paragraph-images/project-1/problem-statement-1.png",
          },
        ],
      },

      {
        title: "Upgrade & Personal Information",
        paragraphs: [
          [
            { text: "Passengers can upgrade seat class, add " },
            { text: "pre-flight training packages", bold: true },
            { text: ", and manage emergency contact information." },
          ],
          [
            { text: "All within a " },
            { text: "single profile hub", bold: true },
            { text: " designed for quick edits under time pressure." },
          ],
        ],
         image: "/images/paragraph-images/project-1/problem-statement-1.png",
      },

      {
        title: "Seat Selection & Payment Confirmation",
        paragraphs: [
          [
            { text: "An immersive seat picker visualises the spacecraft interior, cabin pressure zones, and " },
            { text: "window availability", bold: true },
            { text: "." },
          ],
          [
            { text: "Payment is handled in a " },
            { text: "secure, minimal overlay", bold: true },
            { text: " to reduce cognitive load at the critical conversion moment." },
          ],
        ],
         image: "/images/paragraph-images/project-1/problem-statement-1.png",
      },

      {
        title: "Explore & Tickets",
        paragraphs: [
          [
            { text: "A curated discovery feed surfaces upcoming missions, destination spotlights, and " },
            { text: "limited-availability seats", bold: true },
            { text: "." },
          ],
          [
            { text: "The Tickets hub consolidates " },
            { text: "past, present, and upcoming journeys", bold: true },
            { text: " with one-tap access to documentation." },
          ],
        ],
         image: "/images/paragraph-images/project-1/problem-statement-1.png",
      },

      {
        title: "Tablet Interface for Crew Operations",
        paragraphs: [
          [
            { text: "The tablet experience is " },
            { text: "purpose-built for crew", bold: true },
            { text: ": passenger manifests, boarding status, safety checklists, and real-time communication tools." },
          ],
          [
            { text: "Designed for use in " },
            { text: "gloves and low-light environments", bold: true },
            { text: "." },
          ],
        ],
         image: "/images/paragraph-images/project-1/problem-statement-1.png",
      },

      {
        title: "Reflection & Improvement",
        paragraphs: [
          [
            { text: "This project deepened my understanding of " },
            { text: "high-stakes UX", bold: true },
            { text: " — where clarity isn't just nice to have, it's safety-critical." },
          ],
          [
            { text: "In future iterations I'd explore " },
            { text: "voice UI for hands-free interaction", bold: true },
            { text: " and expand the design system for multi-language support." },
          ],
        ],
        image: "/images/paragraph-images/project-1/problem-statement-1.png",
      },

      {
        title: "Conclusion",
        paragraphs: [
          [
            { text: "NEXRA demonstrates that even complex experiences can be made intuitive through " },
            { text: "rigorous research and intentional design", bold: true },
            { text: "." },
          ],
          [
            { text: "Great UX is " },
            { text: "invisible", bold: true },
            { text: " — it gets out of the way and lets the experience take centre stage." },
          ],
        ],
        image: "/images/paragraph-images/project-1/problem-statement-1.png",
      },
    ],
  },
];