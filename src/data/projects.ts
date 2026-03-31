import type { ProjectData } from "./types";


export const PROJECTS: ProjectData[] = [
  {
    id: 1,
    title: "Spaceflight Booking & Operations",
    description:
      "A mobile app for passengers to book and manage spaceflights, and a tablet interface that equips crew with tools to support and monitor the journey.",
    image: "/images/space-detail.png",
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
        content:
          "As commercial space travel begins to take shape, there’s a growing need for a simple and intuitive way to book and manage spaceflights. Passengers need clarity and control; crew members need efficient tools to support and monitor the journey.",
        image: "/images/nexra-problem.png",
        imagePosition: "left",
        layout: "split",
      },
      {
        title: "Problem Solution",
        content:
          "NEXRA is an all-in-one spaceflight platform that simplifies the booking process, provides transparent flight information, and empowers both passengers and crew with purpose-built tools. The design bridges complexity with clarity through thoughtful information architecture and intuitive flows.",
        image: "/images/nexra-solution.png",
        imagePosition: "right",
        layout: "split",
      },
      {
        title: "Target Users",
        content:
          "Primary: Affluent early adopters aged 28–55 seeking adventure travel experiences.\nSecondary: Aerospace crew and operations staff managing multi-mission logistics.\n\nKey insights revealed users needed confidence signals, real-time updates, and streamlined document management above all else.",
        image: "/images/nexra-users.png",
        imagePosition: "left",
        layout: "split",
      },
      {
        title: "UI Identity",
        content:
          "The visual language draws from aerospace precision — deep space blacks, stark whites, and a signature burnt-orange accent that evokes rocket ignition. Typography is tight and editorial. Every surface feels like it belongs inside a cockpit or mission control room.",
        image: "/images/nexra-identity.png",
        imagePosition: "right",
        layout: "split",
      },
      {
        title: "Research Approach",
        content:
          "5 in-depth user interviews · Competitive audit of 8 travel & aviation apps · Affinity mapping · Jobs-to-be-done framework · Usability testing on mid-fi prototypes with 12 participants.",
        image: "/images/nexra-research.png",
        imagePosition: "left",
        layout: "split",
      },
      {
        title: "Expected Outcomes",
        content:
          "Reduce booking drop-off by 40% through a streamlined 4-step checkout flow. Increase passenger confidence with real-time mission status updates. Enable crew to manage up to 3× more operations with the tablet interface.",
        image: "/images/nexra-outcomes.png",
        imagePosition: "right",
        layout: "split",
      },
      {
        title: "Key Features",
        content:
          "Search & Filter — Intelligent flight search with departure windows, seat classes, and mission type filters.\n\nTickets — Digital boarding passes with QR codes, biometric check-in, and live gate updates.\n\nSeat Selection — Interactive 3D cabin map with gravity-zone indicators and accessibility options.",
        image: "/images/nexra-features-1.png",
        imagePosition: "left",
        layout: "split",
      },
      {
        title: "Key Features",
        content:
          "Search Book and Payment Confirmation — A frictionless 4-step flow: Search → Select → Review → Pay. Apple Pay & crypto wallet integration.\n\nTickets Use Info — Contextual explainers embedded within the ticket view so passengers always know what's next.",
        image: "/images/nexra-features-2.png",
        imagePosition: "right",
        layout: "split",
      },
      {
        title: "Upgrade & Personal Information",
        content:
          "Passengers can upgrade seat class, add pre-flight training packages, and manage emergency contact information — all within a single profile hub designed for quick edits under time pressure.",
        image: "/images/nexra-upgrade.png",
        imagePosition: "left",
        layout: "split",
      },
      {
        title: "Seat Selection & Payment Confirmation",
        content:
          "An immersive seat picker visualises the spacecraft interior, cabin pressure zones, and window availability. Payment is handled in a secure, minimal overlay to reduce cognitive load at the critical conversion moment.",
        image: "/images/nexra-seat.png",
        imagePosition: "right",
        layout: "split",
      },
      {
        title: "Explore & Tickets",
        content:
          "A curated discovery feed surfaces upcoming missions, destination spotlights, and limited-availability seats. The Tickets hub consolidates past, present, and upcoming journeys with one-tap access to documentation.",
        image: "/images/nexra-explore.png",
        imagePosition: "left",
        layout: "split",
      },
      {
        title: "Tablet Interface for Crew Operations",
        content:
          "The tablet experience is purpose-built for crew: passenger manifests, boarding status, safety checklists, and real-time communication tools. Designed for use in gloves and low-light environments.",
        image: "/images/nexra-tablet.png",
        imagePosition: "right",
        layout: "split",
      },
      {
        title: "Reflection & Improvement",
        content:
          "This project deepened my understanding of high-stakes UX — where clarity isn't just nice to have, it's safety-critical. In future iterations I'd explore voice-UI for hands-free crew interaction and expand the design system for multi-language support.",
        image: "/images/nexra-reflection.png",
        imagePosition: "left",
        layout: "split",
      },
      {
        title: "Conclusion",
        content:
          "NEXRA demonstrates that even the most complex, unfamiliar experiences can be made intuitive through rigorous research and intentional design. The project reinforced that great UX is invisible — it simply gets out of the way and lets the wonder of the experience take centre stage.",
        image: "/images/nexra-conclusion.png",
        imagePosition: "right",
        layout: "split",
      },
    ],
  },
];
