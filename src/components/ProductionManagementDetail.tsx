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
 *   paragraphs   – array of { bold?: string, text: string }
 */
const SECTIONS = [
  {
    index: 0,
    title: "Problem Statement",
    image: "/images/paragraph-images/project-2/problem-statement-2.png",
    paragraphs: [
      {
        text: "Beverage companies operating across multiple factories and countries face significant challenges in monitoring and managing production data in a unified way.",
      },
      {
        text: "The lack of a centralized, intuitive platform makes it difficult to track order statuses, analyze costs, and compare stock levels  leading to inefficiencies and poor decision-making.",
      },
    ],
  },
  {
    index: 1,
    title: "Problem Solution",
    image: "/images/paragraph-images/project-2/problem-solution-2.png",
    paragraphs: [
      {
        text: "Refresh Industries Production Management is a web application designed to centralize and visualize production data across multiple factories and countries.",
      },
      {
        text: "Through a clean, intuitive dashboard with real-time KPI cards, interactive charts and a comprehensive order management system, it gives teams the clarity and control they need to make faster, more informed decisions.",
      },
    ],
  },
  {
    index: 2,
    title: "Target Users",
    image: "/images/paragraph-images/project-2/target-users-2.png",
    paragraphs: [
      {
        bold: "Operations managers and production teams",
        text: "within large beverage companies managing multiple industrial units across different countries. Users who need quick access to production data, order tracking and cost analysis without technical complexity.",
      },
    ],
  },
  {
    index: 3,
    title: "UI Identity",
    image: "/images/paragraph-images/project-2/ui-identity-2.png",
    paragraphs: [
      {
        bold: "Color Palette:",
        text: "A soft base with pastel accents reduces visual fatigue across data-heavy views. Greens, blues and salmon tones differentiate products clearly without competing for attention;",
      },
      {
        bold: "Typography:",
        text: "Roboto was chosen for its neutral, modern legibility — a reliable choice for interfaces where reading speed matters;",
      },
      {
        bold: "Icons:",
        text: "Hero Icons keep navigation minimal and consistent, reinforcing the calm, structural tone of the product;",
      },
      {
        bold: "Components:",
        text: "Cards use subtle borders rather than shadows to maintain a light, breathable feel. Color-coded status badges allow instant order recognition, reducing cognitive load during data scanning;",
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
        text: "The research was based on market analysis of existing production management and data visualization tools, identifying common usability gaps in enterprise dashboards. Competitor platforms were studied to understand best practices in data hierarchy, filter systems and chart readability.",
      },
      {
        text: "The briefing requirements were carefully analyzed to ensure every design decision was grounded in real operational needs.",
      },
    ],
  },
  {
    index: 5,
    title: "Expected Outcomes",
    image: "/images/paragraph-images/project-2/expected-outcomes-2.png",
    paragraphs: [
      {
        text: "Faster identification of production trends through clear, comparative charts;",
      },
      {
        text: "Improved order tracking and delivery performance monitoring;",
      },
      {
        text: "Reduced decision-making time through centralized, filtered data views;",
      },
      {
        text: "A scalable interface adaptable to different factories and countries;",
      },
    ],
  },
  {
    index: 6,
    title: "Key Features",
    image: "/images/paragraph-images/project-2/key-features-p2.png",
    paragraphs: [
      {
        bold: "Dashboard:",
        text: "Revenue, costs, margin and stock in real time. Three interactive charts: order values by product, unit cost over time and inventory allocation;",
      },
      {
        bold: "Orders Management:",
        text: "Full order table with five color-coded statuses: Delivered, Delayed, In Transit, Cancelled and Pending;",
      },
      {
        bold: "Production Planning:",
        text: "Monthly Gantt by product line, capacity tracking and a prioritised production queue;",
      },
      {
        bold: "Raw Materials:",
        text: "Stock value, low-stock alerts, supplier tracking and a full inventory breakdown by material and unit;",
      },
      {
        bold: "Analytics & Reports:",
        text: "Delivery rates, cancellation trends and top products by volume, with facility-level performance charts;",
      },
      {
        bold: "Global Filters:",
        text: "Country and Facility filters with one-click reset, available across all pages;",
      },
      {
        bold: "Navigation:",
        text: "Persistent sidebar across Dashboard, Orders, Production, Inventory & Stock and Financial;",
      },
    ],
  },
  {
    index: 7,
    designIndex: 1,
    total: 5,
    title: "Dashboard",
    image: "/images/paragraph-images/project-2/dashboard-2.png",
    paragraphs: [
      {
        text: "Monitor revenue, costs, gross margin, and stock levels across factories and countries with real-time charts and filterable KPIs in one unified view",
      },
    ],
  },
  {
    designIndex: 2,
    total: 5,
    title: "Orders Management",
    image: "/images/paragraph-images/project-2/orders-management-2.png",
    paragraphs: [
      {
        text: "Track every order by product, size, value, and delivery status, filtered by country, facility, and timeframe for full operational visibility",
      },
    ],
  },
  {
    designIndex: 3,
    total: 5,
    title: "Planning",
    image: "/images/paragraph-images/project-2/planning-2.png",
    paragraphs: [
      {
        text: "Schedule and monitor production runs across product lines and facilities, with capacity tracking, a monthly order calendar and a prioritised queue updated in real time",
      },
    ],
  },
  {
    designIndex: 4,
    total: 5,
    title: "Raw Materials",
    image: "/images/paragraph-images/project-2/raw-materials-2.png",
    paragraphs: [
      {
        text: "Oversee stock levels, supplier coverage and material availability across all categories, with low-stock alerts and a full inventory breakdown by product, unit and status",
      },
    ],
  },
  {
    designIndex: 5,
    total: 5,
    title: "Analytics & Reports",
    image: "/images/paragraph-images/project-2/analytics-2.png",
    paragraphs: [
      {
        text: "Measure delivery performance, cancellation trends and top product volumes across facilities, with filterable KPIs and charts that turn operational data into clear, actionable insight.",
      },
    ],
  },
  {
    index: 8,
    title: "Reflection & Improvement",
    image: "/images/paragraph-images/project-2/reflection-2.png",
    paragraphs: [
      {
        text: "The main challenge was balancing data density with visual clarity enterprise dashboards risk becoming overwhelming if hierarchy and spacing are not carefully considered. Beyond the original briefing, KPI summary cards and additional order status categories were introduced to better reflect real operational needs. ",
      },
      {
        text: "In future iterations, it would be valuable to add real-time data integration, exportable reports and a notification system for delayed orders. User testing with actual operations managers would also help refine the filter logic and chart interactions.",
      },
    ],
  },
  {
    index: 9,
    title: "Conclusion",
    image: "/images/paragraph-images/project-2/conclusion-2.png",
    paragraphs: [
      {
        text: "This project demonstrated how thoughtful UX and UI design can transform complex production data into a clear, actionable interface.",
      },
      {
        text: "By focusing on usability, visual hierarchy and the specific needs of multi-factory beverage operations, the result is a dashboard that empowers teams to work more efficiently and confidently.",
      },
    ],
  },
];

const HERO_PROJECT = {
  id: 3,
  title: "Production Management",
  description:
    "Designed to help beverage companies monitor production data across multiple factories, focusing on clarity, usability, and a seamless user experience.",
  image: "/images/paragraph-images/project-2/production-hero.png",
  type: "Mobile & Tablet",
  heroSubtitle: "UX Research & UI Design",
  tags: [
    { name: "Data Clarity & Readability", arrowIcon: "/images/up-arrow.svg" },
    {
      name: "Reduce Decision-Making Time",
      arrowIcon: "/images/down-arrow.svg",
    },
    {
      name: "Order Tracking Efficiency",
      arrowIcon: "/images/up-arrow.svg",
    },
    { name: "User Satisfaction", arrowIcon: "/images/up-arrow.svg" },
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
  { title: "Dashboard", match: "design" },
  { title: "Reflection & Improvement", match: "reflection" },
  { title: "Conclusion", match: "conclusion" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const SectionParagraphs = ({ paragraphs }: { paragraphs: Paragraph[] }) =>
  paragraphs.map((p, i) => (
    <p key={i} className="mb-6 lg:mb-8">
      {p.bold && <strong>{p.bold} </strong>}
      {p.text}
    </p>
  ));

// ─── Page ─────────────────────────────────────────────────────────────────────

const ProductionManagementDetail = () => (
  <main className="mx-auto min-h-screen">
    <ProjectHero project={HERO_PROJECT} />
    <ProjectDetailNav sections={NAV_SECTIONS} />

    {SECTIONS.map(({ paragraphs, ...sectionProps }, i) => (
      <SplitSection key={i} {...sectionProps}>
        <SectionParagraphs paragraphs={paragraphs} />
      </SplitSection>
    ))}

    <OtherProjectsSection currentProjectId={3} />
  </main>
);

export default ProductionManagementDetail;
