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
    image: "/images/paragraph-images/project-5/problem-statement-5.png",
    paragraphs: [
      {
        text: "In today's fast-paced environment, users demand seamless and efficient shopping experiences. They seek a process that is not only swift and secure but also aligns perfectly with their expectations.",
      },
      {
        text: "While exploring diverse online platforms provides the opportunity to compare prices and inspect various brand models, traditional methods like visiting shopping malls or physical stores offer the advantage of hands-on product evaluation. ",
      },
      {
        text: "However, both these approaches are time-consuming and can often lead to frustration.The challenge lies in striking a balance between the convenience of online shopping and the tangible benefits of in-person experiences, without compromising on speed or security.",
      },
    ],
  },
  {
    index: 1,
    title: "Problem Solution",
    image: "/images/paragraph-images/project-5/problem-solution-5.png",
    paragraphs: [
      {
        text: "Additionally, a key feature will be the integration of augmented reality (AR), allowing users to virtually try out products from the comfort of their own physical space. ",
      },
      {
        text: "This groundbreaking approach not only enhances the speed and convenience of the shopping experience but also bridges the gap between online exploration and the tactile engagement offered by traditional in-store visits.",
      },
      {
        text: "The synergy of a diverse product catalog and the immersive capabilities of augmented reality will redefine how users interact with and select products, revolutionizing the retail landscape.",
      },
    ],
  },
  {
    index: 2,
    title: "Target Users",
    image: "/images/paragraph-images/project-5/target-users-5.png",
    paragraphs: [
      {
        bold: "Millennials and Generation Z (18-40 years old), ",
        text: " frequent online shoppers, consumers concerned with personalized shopping experiences, technology enthusiasts;",
      },
    ],
  },
  {
    index: 3,
    title: "UI Identity",
    image: "/images/paragraph-images/project-5/ui-identity-5.png",
    paragraphs: [
      {
        bold: "Color Palette:",
        text: "The design uses a clean white base with soft neutral tones and minimal color accents, keeping the focus entirely on the products. This restrained palette ensures that clothing items and imagery take center stage without visual competition;",
      },
      {
        bold: "Typography:",
        text: "A modern, lightweight sans-serif typeface was chosen to convey simplicity and elegance — reflecting the refined shopping experience the app aims to deliver;",
      },
      {
        bold: "Icons:",
        text: "Minimal outlined icons are used throughout the navigation and product interactions, maintaining a clean and intuitive interface that feels familiar to frequent online shoppers.",
      },
      {
        bold: "Components:",
        text: "Product cards use a borderless, image-forward layout to maximize visual impact. Sorting and filter options are presented as compact toggles and chips, allowing users to refine their search quickly without disrupting the browsing flow;",
      },
      {
        bold: "Background:",
        text: "A clean white background was chosen to create a gallery-like feel, putting the products at the forefront and reinforcing the premium, editorial aesthetic of the app;",
      },
    ],
  },
  {
    index: 4,
    title: "Research Approach",
    image: "/images/paragraph-images/project-1/research-approach-1.png",
    icons: [
      "/images/paragraph-images/project-5/research-icons/research-icon-1.png",
      "/images/paragraph-images/project-5/research-icons/research-icon-2.png",
      "/images/paragraph-images/project-5/research-icons/research-icon-3.png",
      "/images/paragraph-images/project-5/research-icons/research-icon-4.png",
      "/images/paragraph-images/project-5/research-icons/research-icon-5.png",
    ],
    paragraphs: [
      {
        bold: "Market Analysis: ",
        text: "Existing e-commerce platforms were benchmarked to identify trends, gaps and opportunities in the market;",
      },
      {
        bold: "User Research:",
        text: "User questionnaires were conducted to collect data on preferences, pain points and expectations. Personas and empathy maps were built to represent distinct user profiles and uncover deeper motivations;",
      },
      {
        bold: "User Experience Mapping:",
        text: "User journey maps and user flows visualized key steps and pain points across the shopping experience, from product discovery to checkout;",
      },
      {
        bold: "Information Architecture:",
        text: "Card sorting exercises informed a structured and intuitive catalog organization to support easy navigation;",
      },
      {
        bold: "Key Findings:",
        text: "Research highlighted opportunities around navigation clarity, product personalization, push notifications as engagement drivers, and growing user interest in AR — insights that directly shaped the design direction;",
      },
    ],
  },
  {
    index: 5,
    title: "Expected Outcomes",
    image: "/images/paragraph-images/project-5/expected-outcomes-5.png",
    paragraphs: [
      {
        bold: "Enhanced User Satisfaction:",
        text: "By addressing the pain points of traditional and online shopping, the application aims to significantly improve user satisfaction through a more efficient and enjoyable shopping journey;",
      },
      {
        bold: "Increased Engagement:",
        text: "The incorporation of AR is expected to boost user engagement, attracting a wider audience by offering a unique and interactive shopping experience;",
      },
      {
        bold: "Market Impact:",
        text: "With a focus on innovation and convenience, the project aims to make a significant impact on the retail market, setting new standards for user-centric shopping applications;",
      },
    ],
  },
  {
    index: 6,
    title: "Key Features",
    image: "/images/paragraph-images/project-5/key-features-5.png",
    paragraphs: [
      {
        bold: "Unified Platform: ",
        text: "The application serves as a centralized hub, presenting users with a diverse array of brands and products, eliminating the need to navigate multiple websites for comparison;",
      },
      {
        bold: "Augmented Reality (AR): ",
        text: "Users can leverage AR technology to virtually try out products, bridging the gap between online and in-person shopping experiences. This feature enhances confidence in purchase decisions by providing a realistic preview of products within the user's physical space;",
      },
    ],
  },
  {
    index: 8,
    designIndex: 1,
    total: 10,
    title: "On Boarding",
    image: "/images/paragraph-images/project-5/on-boarding-5.png",
    paragraphs: [
      {
        text: "Discover a smarter way to shop and  try items virtually with AR, browse top brands, and enjoy fast, secure deliveries from day one",
      },
    ],
  },
  {
    designIndex: 2,
    total: 10,
    title: "Home/Shop & Cupons",
    image: "/images/paragraph-images/project-5/home-shop-5.png",
    paragraphs: [
      {
        text: "Browse by category, explore top brands, discover new trends, and unlock exclusive coupons tailored to your style",
      },
    ],
  },
  {
    designIndex: 3,
    total: 10,
    title: "Shop/Clothing",
    image: "/images/paragraph-images/project-5/shop-clothing-5.png",
    paragraphs: [
      {
        text: "Browse thousands of clothing items, filter by category, and find exactly what you're looking for across all your favourite brands.",
      },
    ],
  },
  {
    designIndex: 4,
    total: 10,
    title: "Filters",
    image: "/images/paragraph-images/project-5/filters-5.png",
    paragraphs: [
      {
        text: "Narrow down your search by price, size, colour, brand, body fit, material, style and find your perfect match faster.",
      },
    ],
  },
  {
    designIndex: 5,
    total: 10,
    title: "Product Page",
    image: "/images/paragraph-images/project-5/product-page-5.png",

    paragraphs: [
      {
        text: "View product details, check customer reviews, compare fit ratings, and add your favourites straight to your basket.",
      },
    ],
  },
  {
    designIndex: 6,
    total: 10,
    title: "Size, Virtual Try on & Brands Selection",
    image: "/images/paragraph-images/project-5/virtual-try-on-5.png",
    paragraphs: [
      {
        text: "Pick your size, virtually try on items using AR from your space, and browse your favourite brands all in one place.",
      },
    ],
  },
  {
    designIndex: 7,
    total: 10,
    title: "Account, Support, & Orders Details",
    image: "/images/paragraph-images/project-5/account-support-5.png",

    paragraphs: [
      {
        text: "Manage your orders, track deliveries, get live support, and keep your account details up to date with ease.",
      },
    ],
  },
  {
    designIndex: 8,
    total: 10,
    title: "Wishlist",
    image: "/images/paragraph-images/project-5/wishlist-5.png",
    paragraphs: [
      {
        text: "Save your favourite pieces, sort by price or date added, and keep track of everything you love in one place.",
      },
    ],
  },
  {
    designIndex: 9,
    total: 10,
    title: "Basket",
    image: "/images/paragraph-images/project-5/basket-5.png",
    paragraphs: [
      {
        text: "Review your items, apply vouchers or gift cards, check your total with VAT, and proceed to checkout securely.",
      },
    ],
  },
  {
    designIndex: 10,
    total: 10,
    title: "Shipping, Payment & Confirmation",
    image: "/images/paragraph-images/project-5/shipping-5.png",
    paragraphs: [
      {
        text: "Enter your delivery address or choose a collection point, then pay securely with your preferred method.",
      },
    ],
  },
  {
    index: 9,
    title: "Reflection & Improvement ",
    image: "/images/paragraph-images/project-5/reflection-5.png",
    paragraphs: [
      {
        bold: "Navigation:",
        text: "Incorporation of Augmented Reality (AR) features to enhance the shopping experience;",
      },
      {
        bold: "Checkout:",
        text: "Optimization of the checkout process for faster, smoother transactions;",
      },
      {
        bold: "Technology:",
        text: "Simplified and more intuitive interfaces, further optimization of reservation management, additional usability testing with real users, expansion of the solution to cover more operational needs;",
      },
      {
        bold: "Personalization:",
        text: "Delivery of smart product recommendations tailored to user preferences;",
      },
      {
        bold: "Design:",
        text: "Enhancing interfaces and overall design to ensure a seamless user experience;",
      },
      {
        bold: "Engagement:",
        text: "Use of personalized push notifications to increase user interaction and retention;",
      },
      {
        bold: "Support:",
        text: "Providing efficient and immediate customer support to resolve issues in real time;",
      },
    ],
  },
  {
    index: 10,
    title: "Conclusion",
    image: "/images/paragraph-images/project-5/conclusion-5.png",
    paragraphs: [
      {
        text: "The Closhe e-commerce project redefines the shopping experience by seamlessly integrating the best aspects of online and in-person retail.",
      },
      {
        text: "Through an expansive product catalog and the immersive potential of augmented reality, users can explore, compare, and virtually experience products without the constraints of physical stores. This innovative approach not only enhances convenience and accessibility but also bridges the gap between digital exploration and tangible product evaluation.",
      },
      {
        text: "Closhe sets a new standard for e-commerce, offering a streamlined, interactive, and user-centered journey that transforms the way we shop.",
      },
    ],
  },
];

const HERO_PROJECT = {
  id: 3,
  title: "Ecommerce App",
  description:
    "A mobile app that simplifies shopping by offering price comparisons across multiple brands and products, enhanced with Augmented Reality (AR) for virtual product tryouts.",
  image: "/images/fashion.png",
  type: "Mobile & Tablet",
  heroSubtitle: "UX Research & UI Design",
  tags: [
    { name: "Market Impact", arrowIcon: "/images/up-arrow.svg" },
    { name: "User Satisfaction", arrowIcon: "/images/up-arrow.svg" },
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
  { title: "On Boarding", match: "design" },
  { title: "Reflection & Improvement", match: "reflection" },
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
      <div className="mb-6 lg:mb-4">
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
              className={
                j === 2
                  ? "w-[30px] h-[30px] sm:w-[40px] sm:h-[34px] md:w-[50px] md:h-[37px] lg:w-[50px] lg:h-[35px] xl:w-[70px] xl:h-[40px]"
                  : "w-[60px] h-[20px] sm:w-[80px] sm:h-[27px] md:w-[100px] md:h-[33px] lg:w-[100px] lg:h-[30px] xl:w-[140px] xl:h-[40px]"
              }
            />
          ))}
        </div>
      )}
    </div>
  ));

// ─── Page ─────────────────────────────────────────────────────────────────────

const EcommerceDetail = () => (
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

export default EcommerceDetail;
