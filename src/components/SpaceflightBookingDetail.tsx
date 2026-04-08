import ProjectHero from "./ProjectHero";
import ProjectDetailNav from "./ProjectDetailNav";
import { SplitSection } from "./SplitSection";
import OtherProjectsSection from "./OtherProjectsSection";
import type { Paragraph } from "../data/types";

// ─── Data ────────────────────────────────────────────────────────────────────
/**
 * Each section accepts:
 *   index?       – forwarded to <SplitSection>
 *   designIndex? – forwarded to <SplitSection>
 *   total?       – forwarded to <SplitSection>
 *   title        – section heading
 *   image        – illustration path
 *   badge?       – pill label (Mobile App / Tablet)
 *   paragraphs   – array of { bold?: string, text: string }
 */
const SECTIONS = [
  {
    index: 0,
    title: "Problem Statement",
    image: "/images/paragraph-images/project-1/problem-statement-1.png",
    paragraphs: [
      {
        text: "As commercial space travel begins to take shape, there's a growing need for a simple and intuitive way to book and manage spaceflights.",
      },
      {
        text: "Passengers need clarity and control; crew members need efficient tools to support and monitor the journey.",
      },
    ],
  },
  {
    index: 1,
    title: "Problem Solution",
    image: "/images/paragraph-images/project-1/problem-solution-1.png",
    paragraphs: [
      { text: "This concept presents a dual-platform solution:" },
      { bold: "Tablet Interface", text: "for crew operations;" },
      {
        bold: "Mobile App",
        text: "for passengers to book and manage flights;",
      },
      {
        text: "Designed for space travel, it combines clean UI with intuitive UX to make complex journeys feel simple.",
      },
    ],
  },
  {
    index: 2,
    title: "Target Users",
    image: "/images/paragraph-images/project-1/target-users-1.png",
    paragraphs: [
      {
        bold: "Passengers - Adults aged 25–55: ",
        text: "who are early adopters of commercial space travel. They seek clarity, control, and digital convenience when booking and managing their flights. They value safety, transparency, and an intuitive experience that makes space travel feel accessible;",
      },
      {
        bold: "Crew Members: ",
        text: "Professional flight attendants and mission crew operating in commercial spaceflights. They need reliable tools to manage passengers and monitor operations efficiently. They value streamlined workflows, accuracy, and intuitive interfaces that support them in high-stakes environments;",
      },
    ],
  },
  {
    index: 3,
    title: "UI Identity",
    image: "/images/paragraph-images/project-1/ui-identity-1.png",
    paragraphs: [
      {
        bold: "Color Palette:",
        text: "A dark, space-inspired background with high-contrast orange and white accents. Orange drives primary actions and key indicators, while white ensures readability across both platforms;",
      },
      {
        bold: "Typography:",
        text: "A clean, modern sans-serif typeface conveys precision and confidence, ideal for the futuristic nature of space travel and data-heavy screens;",
      },
      {
        bold: "Icons:",
        text: "Minimal outlined icons support quick recognition of key functions such as connectivity, oxygen levels and turbulence status without adding visual noise;",
      },
      {
        bold: "Components:",
        text: "The passenger app uses rounded cards and a clean booking flow for an approachable experience. The crew tablet uses structured tables, a seat map and status indicators designed for operational efficiency;",
      },
      {
        bold: "Background:",
        text: "A dark background reinforces the space environment, reduces eye strain and creates a premium, immersive feel across both platforms;",
      },
    ],
  },
  {
    index: 4,
    title: "Research Approach",
    image: "/images/paragraph-images/project-1/research-approach-1.png",
    paragraphs: [
      {
        text: "Given the conceptual and futuristic nature of the project, I began by analyzing patterns from existing airline and travel apps, studying booking flows, onboard service features, and cross-device interactions.",
      },
      {
        text: "Based on these insights, I then created two detailed personas to guide design decisions and ensure a user-centered approach.",
      },
      {
        text: "These findings were adapted to a space travel context, emphasizing safety, clarity, and ease of use. The ultimate goal was to craft an imaginative and engaging experience that never compromises on functionality.",
      },
    ],
  },
  {
    index: 5,
    title: "Expected Outcomes",
    image: "/images/paragraph-images/project-1/expected-outcomes-1.png",
    paragraphs: [
      {
        bold: "Safety:",
        text: "Users feel secure with clear, intuitive safety features;",
      },
      {
        bold: "Clarity:",
        text: "Booking and onboard information is easy to understand across all devices;",
      },
      {
        bold: "Efficiency:",
        text: "Travel planning and check-in are streamlined for a seamless experience;",
      },
      {
        bold: "Accessibility:",
        text: "Space travel services are easy to access, from reservations to onboard interactions;",
      },
      {
        bold: "Engagement:",
        text: "Immersive features enhance the excitement and anticipation of space travel;",
      },
      {
        bold: "Organization:",
        text: "All travel details and documents are stored in one central place;",
      },
      {
        bold: "Safety:",
        text: "Users feel secure with clear, intuitive safety features;",
      },
    ],
  },
  {
    index: 6,
    title: "Key Features",
    image: "/images/paragraph-images/project-1/key-features-1.png",
    badge: "Mobile App - Passengers",
    paragraphs: [
      {
        bold: "Flight Reservation:",
        text: "Choose destination / space route, available dates and times, seat selection, class type (Economy, etc.) selection;",
      },
      {
        bold: "Explore:",
        text: "Interactive map of destinations, search and discover routes;",
      },
      { bold: "Account:", text: "Past tickets, etc;" },
      {
        bold: "Boarding:",
        text: "Online check-in, boarding QR code, notifications;",
      },
      { bold: "Wishlist:", text: "Future travels;" },
      { bold: "Payments:", text: "Choose payment method & secure checkout;" },
    ],
  },
  {
    index: 6,
    title: "Key Features",
    image: "/images/paragraph-images/project-1/key-features-2.png",
    badge: "Tablet - Inflight Agents",
    paragraphs: [
      {
        bold: "Passenger Management:",
        text: "Passenger list, boarding status;",
      },
      {
        bold: "Onboard Support:",
        text: "Receive help requests, passenger notes & info, meals info;",
      },
      {
        bold: "Flight Management:",
        text: "Trip progress, ship status & conditions, checklist;",
      },
      { bold: "Offline Mode:", text: "Critical info must work offline;" },
      { bold: "Communication:", text: "Chat with passengers or broadcast;" },
    ],
  },
  {
    index: 7,
    designIndex: 1,
    total: 7,
    title: "Search Book and Opportunities",
    image: "/images/paragraph-images/project-1/search-book.png",
    badge: "Mobile App - Passengers",
    paragraphs: [
      {
        text: "Book spaceflights with smart filters, explore curated trips, and manage voyages in real time.",
      },
    ],
  },
  {
    designIndex: 2,
    total: 7,
    title: "Tickets",
    image: "/images/paragraph-images/project-1/tickets.png",
    badge: "Mobile App - Passengers",
    paragraphs: [
      {
        text: "Get trip overviews with pricing, VAT, and options to change cabin class and baggage.",
      },
    ],
  },
  {
    designIndex: 3,
    total: 7,
    title: "Ticket Details",
    image: "/images/paragraph-images/project-1/ticket-details.png",
    badge: "Mobile App - Passengers",
    paragraphs: [
      {
        text: "Get trip overviews with pricing, VAT, and options to change cabin class and baggage.",
      },
    ],
  },
  {
    designIndex: 4,
    total: 7,
    title: "Upgrade & Personal Information",
    image: "/images/paragraph-images/project-1/upgrade.png",
    badge: "Mobile App - Passengers",
    paragraphs: [
      {
        text: "Enhance trips with upgrades, clear pricing, autofill, and a comment field for notes.",
      },
    ],
  },
  {
    designIndex: 2,
    total: 7,
    title: "Seat Selection & Payment Confirmation",
    image: "/images/paragraph-images/project-1/seat-selection.png",
    badge: "Mobile App - Passengers",
    paragraphs: [
      {
        text: "Choose seats with live availability, ticket count, and class. Confirm payment, view tickets, or explore.",
      },
    ],
  },
  {
    designIndex: 5,
    total: 7,
    title: "Explore & Tickets",
    image: "/images/paragraph-images/project-1/explore.png",
    badge: "Mobile App - Passengers",
    paragraphs: [
      {
        text: "Find trips by map or list with easy filters, and manage tickets with in-app check-in.",
      },
    ],
  },
  {
    designIndex: 6,
    total: 7,
    title: "Tablet Interface for Crew Operations",
    image: "/images/paragraph-images/project-1/tablet-interface.png",
    badge: "Tablet - Inflight Agents",
    paragraphs: [
      {
        text: "Monitor passengers, seat status, oxygen levels, connectivity, turbulence, and access key modules like tasks, meals, and emergencies.",
      },
    ],
  },
  {
    index: 8,
    title: "Reflection & Improvement",
    image: "/images/paragraph-images/project-1/reflection.png",
    paragraphs: [
      {
        bold: "Navigation:",
        text: "Refined booking and management flows for the mobile app, and operational flows for the tablet interface, ensuring both passengers and crew can navigate seamlessly;",
      },
      {
        bold: "Technology:",
        text: "Focused on creating a simplified, intuitive interface across platforms, with plans to expand features like itinerary sync, mission updates, and real-time notifications;",
      },
      {
        bold: "Personalization:",
        text: "Considering future smart recommendations for passengers based on travel history and preferences, and adaptive tools for crew based on operational needs;",
      },
      {
        bold: "Design:",
        text: "Prioritized a clean, futuristic UI that balances visual clarity with an immersive, space-themed experience across both devices;",
      },
      {
        bold: "Engagement:",
        text: "Exploring interactive mission previews and notifications to keep passengers excited, and task reminders to support crew efficiency;",
      },
      {
        bold: "Support:",
        text: "Identified the need for built-in communication channels, enabling passengers to contact support and crew members to coordinate operations effectively;",
      },
    ],
  },
  {
    index: 9,
    title: "Conclusion",
    image: "/images/paragraph-images/project-1/conclusion.png",
    paragraphs: [
      {
        text: "This concept reimagines space travel by unifying passenger booking, crew operations, and real-time communication across a dual-platform experience.",
      },
      {
        text: "By simplifying complex journeys and providing intuitive tools for both passengers and crew, it empowers users to focus on what matters most—exploring space safely and enjoying an engaging, seamless journey.",
      },
    ],
  },
];

const HERO_PROJECT = {
  id: 3,
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
  sections: SECTIONS,
};

const NAV_SECTIONS = [
  { title: "Problem Statement", match: "statement" },
  { title: "Problem Solution", match: "solution" },
  { title: "Target Users", match: "users" },
  { title: "UI Identity", match: "ui identity" },
  { title: "Research Approach", match: "research" },
  { title: "Expected Outcomes", match: "outcomes" },
  { title: "Key Features", match: "key features" },
  { title: "Search Book and Opportunities", match: "design" },
  { title: "Reflection & Improvement", match: "reflection" },
  { title: "Conclusion", match: "conclusion" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const Badge = ({ label }: { label: string }) => (
  <div className="w-fit bg-white text-md px-4 py-1.5 mb-12 rounded-full border border-gray-200 font-kalam-400 text-black flex items-center justify-center gap-2">
    {label}
  </div>
);

const SectionParagraphs = ({ paragraphs }: { paragraphs: Paragraph[] }) =>
  paragraphs.map((p, i) => (
    <p key={i} className="mb-6 lg:mb-8">
      {p.bold && <strong>{p.bold} </strong>}
      {p.text}
    </p>
  ));

// ─── Page ─────────────────────────────────────────────────────────────────────

const SpaceflightBookingDetail = () => (
  <main className="mx-auto min-h-screen">
    <ProjectHero project={HERO_PROJECT} />
    <ProjectDetailNav sections={NAV_SECTIONS} />

    {SECTIONS.map(({ paragraphs, badge, ...sectionProps }, i) => (
      <SplitSection key={i} {...sectionProps}>
        {badge && <Badge label={badge} />}
        <SectionParagraphs paragraphs={paragraphs} />
      </SplitSection>
    ))}

    <div className="snap-section snap-start">
      <OtherProjectsSection currentProjectId={3} />
    </div>
  </main>
);

export default SpaceflightBookingDetail;
