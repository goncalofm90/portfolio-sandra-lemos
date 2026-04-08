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
    image: "/images/paragraph-images/project-4/problem-statement-4.png",
    paragraphs: [
      {
        text: "In the fast-paced hospitality industry, traditional hotel management systems often fall short in providing a seamless and efficient experience for both hotel staff and guests.",
      },
      {
        text: "Hotel managers face challenges in streamlining operations, optimizing room management, and maintaining high levels of guest satisfaction.",
      },
      {
        text: "At the same time, guests are increasingly seeking convenient, tech-driven solutions that allow them to personalize their stay, minimize waiting times, and access services on demand.",
      },
    ],
  },
  {
    index: 1,
    title: "Problem Solution",
    image: "/images/paragraph-images/project-4/problem-solution-4.png",
    paragraphs: [
      {
        text: "To address these challenges, I've developed a comprehensive hotel management solution with three integrated components:",
      },
      {
        bold: "Hotel Management App:",
        text: "Empowers staff to efficiently manage operations, including room assignments, reservations, check-ins, and more. It streamlines tasks, improves communication, and ensures high service standards;",
      },
      {
        bold: "Guest App:",
        text: "Offers a seamless digital experience for guests, enabling online check-ins, digital room keys, chat with reception, room service orders, and local activity exploration, all aimed at enhancing convenience and personalization;",
      },
      {
        bold: "Landing Page",
        text: "Showcases the product's features and benefits, allowing potential clients to book demos and explore how the solution meets their needs;",
      },
    ],
  },
  {
    index: 2,
    title: "Target Users",
    image: "/images/paragraph-images/project-4/target-users-4.png",
    paragraphs: [
      {
        bold: "Hotel Staff:",
        text: "Front Office and Operations teams responsible for reservations, check-ins, check-outs, and overall guest experience;",
      },
      {
        bold: "Guests:",
        text: "Users familiar with technology looking for a seamless, digital-first hospitality experience;",
      },
    ],
  },
  {
    index: 3,
    title: "UI Identity",
    image: "/images/paragraph-images/project-3/ui-identity-3.png",
    paragraphs: [
      {
        bold: "Color Palette:",
        subItems: [
          {
            bold: "The Hotel Management App ",
            text: "uses a consistent white base with soft purple and lavender accents, conveying professionalism and clarity across all properties.",
          },
          {
            bold: "The Guest App ",
            text: "is designed to be fully customizable in terms of color, adapting to each hotel's brand identity. The warm earthy tones with olive greens and sandy neutrals presented reflect the identity of the featured hotel concept. ",
          },
        ],
      },
      {
        bold: "Typography:",
        text: "A clean sans-serif typeface was used across both platforms, balancing clarity for data-heavy staff screens with a warmer, more personal tone for the guest experience.",
      },
      {
        bold: "Icons:",
        text: "Minimal outlined icons maintain visual consistency while keeping both interfaces clean and intuitive.",
      },
      {
        bold: "Components:",
        subItems: [
          {
            bold: "The Management App ",
            text: "The Management App uses structured cards and data tables with subtle borders for operational clarity.",
          },
          {
            bold: "The Guest App ",
            text: "uses full-width image cards and rounded components for an immersive, lifestyle-oriented feel.",
          },
        ],
      },
    ],
  },
  {
    index: 4,
    title: "Research Approach",
    image: "/images/paragraph-images/project-1/research-approach-1.png",
    icons: [
      "/images/paragraph-images/project-4/research-icons/research-icon-1.png",
      "/images/paragraph-images/project-4/research-icons/research-icon-2.png",
      "/images/paragraph-images/project-4/research-icons/research-icon-3.png",
      "/images/paragraph-images/project-4/research-icons/research-icon-4.png",
    ],
    paragraphs: [
      {
        bold: "Market Analysis: ",
        text: "Conducted benchmarking on existing digital solutions in the hospitality industry;",
      },
      {
        bold: "User Pain Points:",
        text: "Gathered insights on key frustrations of both hotel staff and guests through industry research;",
      },
      {
        bold: "Industry Expertise:",
        text: "Leveraged my background in hospitality to identify real-world operational challenges and opportunities for improvement;",
      },
      {
        bold: "Opportunities for Innovation:",
        text: "Streamlining daily staff operations, enhancing guest experience with digital-first solutions, bridging gaps in internal communication and administrative processes;",
      },
    ],
  },
  {
    index: 5,
    title: "Expected Outcomes",
    image: "/images/paragraph-images/project-4/expected-outcomes-4.png",
    paragraphs: [
      {
        bold: "Optimize:",
        text: "Hotel operations, making daily processes more agile and efficient;",
      },
      {
        bold: "Improve:",
        text: "Productivity and focus on delivering high-quality service;",
      },
      {
        bold: "Enhance:",
        text: "Guest experience through digital convenience and personalization;",
      },
      {
        bold: "Maximize:",
        text: "Revenue opportunities through upselling and cross-selling;",
      },
    ],
  },
  {
    index: 6,
    title: "Key Features",
    image: "/images/paragraph-images/project-4/key-features-4.png",
    paragraphs: [
      {
        bold: "Hotel Management App: ",
        text: "Comprehensive Room Management; Streamlined Check-In/Check-Out Process; Staff Communication; Real-Time Updates; Efficient Room Service Order Management;",
      },
      {
        bold: "Guest App: ",
        text: "Online Check-In; Digital Room Key; In-App Communication; Room Service and Upgrades; Activity Recommendations;",
      },
      {
        bold: "Landing Page: ",
        text: "Product Overview; Client Testimonials; Demo Booking ; Contact Information;",
      },
    ],
  },
  {
    index: 7,
    designIndex: 1,
    total: 8,
    title: "Dashboard",
    image: "/images/paragraph-images/project-4/dashboard-4.png",
    badge: "Hotel Management App",
    paragraphs: [
      {
        text: "Get a real-time overview of room status, occupancy rates, room pricing, and performance metrics, all from a single screen.",
      },
    ],
  },
  {
    designIndex: 2,
    total: 8,
    title: "New Booking",
    image: "/images/paragraph-images/project-4/new-booking-4.png",
    badge: "Hotel Management App",
    paragraphs: [
      {
        text: "Create bookings in seconds by selecting room type, setting check-in and check-out dates, and adjusting the number of guests",
      },
    ],
  },
  {
    designIndex: 3,
    total: 8,
    title: "Reservations - All",
    image: "/images/paragraph-images/project-4/reservations-all-4.png",
    badge: "Hotel Management App",
    paragraphs: [
      {
        text: "View and manage all reservations in a timeline layout, filtered by check-in, check-out, or stay-overs for full operational clarity",
      },
    ],
  },
  {
    designIndex: 4,
    total: 8,
    title: "Guest Details",
    image: "/images/paragraph-images/project-4/guest-details-4.png",
    badge: "Hotel Management App",
    paragraphs: [
      {
        text: "View full guest profiles, additional guests, reservation history, and activity logs to deliver a more personalised experience.",
      },
    ],
  },
  {
    designIndex: 5,
    total: 8,
    title: "Guest App — Home",
    image: "/images/paragraph-images/project-4/guest-app-home-4.png",
    badge: "Guest App",
    paragraphs: [
      {
        text: "Guests confirm their reservation details, fill in personal data, and sign their contract digitally — no queues, no paperwork",
      },
    ],
  },
  {
    designIndex: 6,
    total: 8,
    title: "Guest App — Online Check-in",
    image: "/images/paragraph-images/project-4/guest-app-online-check-in-4.png",
    badge: "Guest App",
    paragraphs: [
      {
        text: "Guests confirm their reservation details, fill in personal data, and sign their contract digitally — no queues, no paperwork",
      },
    ],
  },
  {
    title: "Guest App — Upgrade & Room Key",
    image:
      "/images/paragraph-images/project-4/guest-app-upgrade-room-key-4.png",
    badge: "Guest App",

    paragraphs: [
      {
        text: "Offer room upgrades at check-in and let guests unlock their door digitally using their phone as a contactless room key.",
      },
    ],
  },
  {
    title: "Hero Section",
    badge: "Landing Page",
    image: "/images/paragraph-images/project-4/hero-section-4.png",
    paragraphs: [
      {
        text: "A clean, conversion-focused page that communicates the product value and drives hotel managers to book a free demo.",
      },
    ],
  },
  {
    index: 8,
    designIndex: 1,
    total: 2,
    title: "Reflection, Improvement & Next Steps",
    badge: "Hotel App",
    image: "/images/paragraph-images/project-4/reflection-4.png",
    paragraphs: [
      {
        bold: "Impact:",
        text: "More efficient reservation and room management, reduced errors in operations, faster and more intuitive workflow, improved communication between departments, enhanced overall efficiency of the team;",
      },
      {
        bold: "Areas for Improvement:",
        text: "Simplified and more intuitive interfaces, further optimization of reservation management, additional usability testing with real users, expansion of the solution to cover more operational needs;",
      },
      {
        bold: "Next Steps:",
        text: "Develop screens for new departments.Conduct further testing and validation, enhance administrative task automation;",
      },
    ],
  },
  {
    designIndex: 2,
    total: 2,
    title: "Reflection, Improvement & Next Steps",
    badge: "Guest App",
    image: "/images/paragraph-images/project-4/reflection2-4.png",
    paragraphs: [
      {
        bold: "Impact:",
        text: "Reduced average time for check-in and check-out, more personalized and convenient service, increased use of digital room keys and online check-in, higher engagement with room service and upgrade options, improved overall guest satisfaction;",
      },
      {
        bold: "Areas for Improvement:",
        text: "More seamless digital interactions, enhanced user experience for service requests, additional personalization features for guests;",
      },
      {
        bold: "Next Steps:",
        text: "Improve in-app interfaces for room service and experience purchases, further enhance guest communication tools, increase guest satisfaction metrics and collect feedback for continuous improvement;",
      },
    ],
  },
  {
    index: 9,
    title: "Conclusion",
    image: "/images/paragraph-images/project-4/conclusion-4.png",
    paragraphs: [
      {
        text: "The hospitality industry faces challenges in streamlining operations and meeting the growing demand for tech-driven guest experiences.",
      },
      {
        text: "My hotel management solution addresses these issues through three integrated components: the Hotel Management App, which optimizes room management and staff communication; the Guest App, offering features like online check-ins, digital room keys, and in-app communication; and a Landing Page that highlights the product and allows clients to book demos.",
      },
      {
        text: "This project showcases my ability to design user-friendly, efficient solutions that improve hotel operations while delivering a personalized, seamless experience for guests.",
      },
    ],
  },
];

const HERO_PROJECT = {
  id: 3,
  title: "Hotel Management App",
  description:
    "A comprehensive solution designed to streamline hotel operations and enhance guest experiences through modern, user-friendly interfaces",
  image: "/images/hotel.png",
  type: "Mobile & Tablet",
  heroSubtitle: "UX Research & UI Design",
  tags: [
    { name: "Revenue Growth", arrowIcon: "/images/up-arrow.svg" },
    { name: "Operational Efficiency", arrowIcon: "/images/up-arrow.svg" },
    {
      name: "User Engagement",
      arrowIcon: "/images/up-arrow.svg",
    },
    { name: "Retention and Loyalty", arrowIcon: "/images/up-arrow.svg" },
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
  { title: "Dashboard", match: "dashboard" },
  { title: "Reflection, Improvement & Next Steps", match: "reflection" },
  { title: "Conclusion", match: "conclusion" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const Badge = ({ label }: { label: string }) => (
  <div className="w-fit bg-white text-md px-4 py-4.5 mb-42 rounded-full border border-gray-200 font-kalam-400 text-black flex items-center justify-center gap-2">
    {label}
  </div>
);

const SectionParagraphs = ({
  paragraphs,
  icons,
}: {
  paragraphs: Paragraph[];
  icons?: string[];
}) =>
  paragraphs.map((p, i) => (
    <div key={i}>
      <div className="mb-6 lg:mb-8">
        <p>
          {p.bold && <strong>{p.bold} </strong>}
          {p.text}
        </p>
        {p.subItems && p.subItems.length > 0 && (
          <ul className="ml-6 mt-3 list-disc flex flex-col gap-2">
            {p.subItems.map((sub, j) => (
              <li key={j}>
                {sub.bold && <strong>{sub.bold} </strong>}
                {sub.text}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Icon row after the first paragraph */}
      {i === 0 && icons && icons.length > 0 && (
        <div className="flex flex-row items-center gap-6 mb-6 lg:mb-8">
          {icons.map((src, j) => (
            <img
              key={j}
              src={`${src}`}
              alt={`icon-${j + 1}`}
              className="w-[60px] h-[20px] sm:w-[80px] sm:h-[27px] md:w-[100px] md:h-[33px] lg:w-[100px] lg:h-[30px] xl:w-[140px] xl:h-[40px]"
            />
          ))}
        </div>
      )}
    </div>
  ));

// ─── Page ─────────────────────────────────────────────────────────────────────

const HotelManagementDetail = () => (
  <main className="mx-auto min-h-screen">
    <ProjectHero project={HERO_PROJECT} />
    <ProjectDetailNav sections={NAV_SECTIONS} />

    {SECTIONS.map(({ paragraphs, badge, icons, ...sectionProps }, i) => (
      <SplitSection key={i} {...sectionProps}>
        {badge && <Badge label={badge} />}
        <SectionParagraphs paragraphs={paragraphs} icons={icons} />
      </SplitSection>
    ))}

    <OtherProjectsSection currentProjectId={3} />
  </main>
);

export default HotelManagementDetail;
