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
    image: "/images/paragraph-images/project-3/problem-statement-3.png",
    paragraphs: [
      {
        text: "Traditional productivity apps focus solely on task completion, creating pressure and anxiety in users. ",
      },
      {
        text: "People feel overwhelmed by rigid, work-focused tools that lack positive reinforcement, making it harder to build consistent habits and maintain a healthy work-life balance.",
      },
    ],
  },
  {
    index: 1,
    title: "Problem Solution",
    image: "/images/paragraph-images/project-3/problem-solution-3.png",
    paragraphs: [
      {
        text: "Sway redefines productivity by combining task management with mindfulness.",
      },
      {
        text: "Instead of pressuring users to complete tasks, the app encourages calm, balance and organization through gentle reminders, positive messages and a pressure-free interface that celebrates small wins.",
      },
    ],
  },
  {
    index: 2,
    title: "Target Users",
    image: "/images/paragraph-images/project-3/target-users-3.png",
    paragraphs: [
      {
        bold: "Young professionals aged 25-35",
        text: " who struggle to balance work and personal life. Users who feel overwhelmed by traditional productivity tools and are looking for a calmer, more encouraging approach to managing their daily tasks and building healthy habits.",
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
        text: "A dark, space-inspired background with high-contrast orange and white accents. Orange drives primary actions and key indicators, while white ensures readability across both platforms;",
      },
      {
        bold: "Typography:",
        text: "A clean, modern sans-serif typeface conveys precision and confidence, ideal for the futuristic nature of space travel and data-heavy screens;",
        subItems: [
          {
            bold: "Montserrat Alternates",
            text: "was chosen as the primary font for its clean, modern feel with subtle letter variations that add character without being distracting;",
          },
          {
            bold: "Comic Sans",
            text: "used sparingly for informal callouts;",
          },
        ],
      },
      {
        bold: "Colors:",
        text: "The palette was chosen to evoke calm and balance. Soft purple (#9E7CDC) conveys focus and creativity, light blue (#6BAED6 ) inspires freshness and tranquility, and the whites and greys ensure clarity, contrast and readability throughout the interface.",
      },
    ],
  },
  {
    index: 4,
    title: "Research Approach",
    image: "/images/paragraph-images/project-1/research-approach-1.png",
    paragraphs: [
      {
        text: "The research for Sway was primarily based on market analysis. Existing productivity apps such as Todoist, Notion and Apple Reminders were studied to identify gaps in the market, particularly the lack of emotional support and mindfulness features in task management tools.",
      },
      {
        text: "User reviews and app store feedback were also analyzed to understand common frustrations and unmet needs among productivity app users.",
      },
      {
        text: "This secondary research helped define the core design direction — a calm, pressure-free experience that prioritizes well-being alongside productivity.",
      },
    ],
  },
  {
    index: 5,
    title: "Expected Outcomes",
    image: "/images/paragraph-images/project-3/expected-outcomes-3.png",
    paragraphs: [
      {
        text: "Increased daily task completion rate without stress;",
      },
      {
        text: "Higher user retention due to positive reinforcement;",
      },
      {
        text: "Reduced time to add and manage tasks;",
      },
      {
        text: "Improved sense of well-being and mindfulness among users;",
      },
    ],
  },
  {
    index: 6,
    title: "Key Features",
    image: "/images/paragraph-images/project-3/key-features-3.png",
    paragraphs: [
      {
        bold: "Home / Task:",
        text: "Daily task list with progress bar showing completion percentage;",
      },
      {
        bold: "Add Task:",
        text: "Quick task creation with category, date and reminders;",
      },
      { bold: "Account:", text: "Past tickets, etc;" },
      {
        bold: "Stats:",
        text: "Weekly and monthly overview with positive messages;",
      },
      {
        bold: "Focus:",
        text: "Timer to minimize distractions linked directly to tasks;",
      },
    ],
  },
  {
    index: 7,
    designIndex: 1,
    total: 5,
    title: "Tasks & Progress",
    image: "/images/paragraph-images/project-3/tasks-progress-3.png",
    paragraphs: [
      {
        text: "Organize your tasks by category, track your daily progress, and stay focused on what truly matters",
      },
    ],
  },
  {
    designIndex: 2,
    total: 5,
    title: "Filters & Labels",
    image: "/images/paragraph-images/project-3/filters-labels-3.png",
    paragraphs: [
      {
        text: "Refine your tasks with smart filters, sort by date, category or priority, and customize your view",
      },
    ],
  },
  {
    designIndex: 3,
    total: 5,
    title: "Task Details",
    image: "/images/paragraph-images/project-3/task-details-3.png",
    paragraphs: [
      {
        text: "Create tasks with category, date, repeat, and reminders, everything in one place so nothing slips through",
      },
    ],
  },
  {
    designIndex: 4,
    total: 5,
    title: "Stats & Insights",
    image: "/images/paragraph-images/project-3/stats-insights-3.png",
    paragraphs: [
      {
        text: "Track your balance across life areas with weekly charts and personal progress metrics",
      },
    ],
  },
  {
    designIndex: 2,
    total: 5,
    title: "Focus Mode",
    image: "/images/paragraph-images/project-3/focus-mode-3.png",
    paragraphs: [
      {
        text: "Pause, breathe, and pick a task to focus on. The timer helps you work with more intention and calm",
      },
    ],
  },
  {
    index: 8,
    title: "Reflection & Improvement",
    image: "/images/paragraph-images/project-3/reflection-improvement-3.png",
    paragraphs: [
      {
        text: "The biggest challenge was balancing simplicity with functionality",
      },
      {
        text: "Future improvements could include a social accountability feature, more personalized mindfulness reminders based on user behaviour, and a deeper integration between the Focus timer and the Stats dashboard to give users a clearer picture of their productivity patterns.",
      },
    ],
  },
  {
    index: 9,
    title: "Conclusion",
    image: "/images/paragraph-images/project-3/conclusion-3.png",
    paragraphs: [
      {
        text: "Sway proves that productivity doesn't have to come at the cost of well-being.",
      },
      {
        text: "By putting the user's emotional experience at the center of the design, the app creates a tool that people actually want to use every day, not because they have to, but because it makes them feel good about their progress.",
      },
    ],
  },
];

const HERO_PROJECT = {
  id: 3,
  title: "Task & Mindfulness App",
  description:
    "Designed to help users manage daily tasks while promoting calm, balance, and organization through a gentle, pressure-free experience.",
  image: "/images/mindfulness.png",
  type: "Mobile & Tablet",
  heroSubtitle: "UX Research & UI Design",
  tags: [
    { name: "Task Completion Rate", arrowIcon: "/images/up-arrow.svg" },
    { name: "Reduce Time to Add Task", arrowIcon: "/images/down-arrow.svg" },
    {
      name: "Mindfulness Engagement",
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
  { title: "Tasks & Progress", match: "design" },
  { title: "Reflection & Improvement", match: "reflection" },
  { title: "Conclusion", match: "conclusion" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const SectionParagraphs = ({ paragraphs }: { paragraphs: Paragraph[] }) =>
  paragraphs.map((p, i) => (
    <div key={i} className="mb-6 lg:mb-8">
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
  ));

// ─── Page ─────────────────────────────────────────────────────────────────────

const MindfulnessDetail = () => (
  <main className="mx-auto min-h-screen">
    <ProjectHero project={HERO_PROJECT} />
    <ProjectDetailNav sections={NAV_SECTIONS} />

    {SECTIONS.map(({ paragraphs, ...sectionProps }, i) => (
      <SplitSection key={i} {...sectionProps}>
        <SectionParagraphs paragraphs={paragraphs} />
      </SplitSection>
    ))}

    <div className="lg:snap-section lg:snap-start">
      <OtherProjectsSection currentProjectId={2} />
    </div>
  </main>
);

export default MindfulnessDetail;
