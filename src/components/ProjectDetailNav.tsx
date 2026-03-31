import { useEffect, useMemo, useState, type MouseEvent } from "react";
import type { CaseStudySection } from "../data/types";
import { getSectionId } from "../helpers/sectionNavigation";

const NAV_LINKS = [
  { label: "Statement", match: "statement" },
  { label: "Solution", match: "solution" },
  { label: "Users", match: "users" },
  { label: "UI Identity", match: "ui identity" },
  { label: "Research", match: "research" },
  { label: "Outcomes", match: "outcomes" },
  { label: "Features", match: "key features" },
  { label: "Design", match: "design" },
  { label: "Reflection", match: "reflection" },
  { label: "Conclusion", match: "conclusion" },
] as const;

type NavItem = {
  id: string;
  label: string;
};

const ProjectDetailNav = ({ sections }: { sections: CaseStudySection[] }) => {
  const navItems = useMemo(
    () =>
      NAV_LINKS.reduce<NavItem[]>((items, link) => {
        const index = sections.findIndex((section) =>
          section.title.toLowerCase().includes(link.match),
        );

        if (index !== -1) {
          const section = sections[index];
          items.push({
            id: getSectionId(section.title, index),
            label: link.label,
          });
        }

        return items;
      }, []),
    [sections],
  );

  const [activeId, setActiveId] = useState(navItems[0]?.id ?? "");

  useEffect(() => {
    if (!navItems.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      let currentId = navItems[0].id;

      navItems.forEach((item) => {
        const element = document.getElementById(item.id);

        if (element && element.offsetTop <= scrollPosition) {
          currentId = item.id;
        }
      });

      setActiveId(currentId);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="sticky top-24 z-40 w-full px-4 py-4 sm:px-12 md:top-28 lg:px-16">
      <nav className="mx-auto w-full max-w-6xl rounded-xl bg-white px-6 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.08)] md:px-8 md:py-4">
        <div
          className="flex flex-wrap items-center justify-center gap-3 font-kalam md:gap-4"
          aria-label="Project detail sections"
        >
          {navItems.map((item, index) => (
            <div key={item.id} className="flex items-center gap-3 md:gap-4">
              <a
                href={`#${item.id}`}
                onClick={(event) => handleNavClick(event, item.id)}
                className={`text-base transition-colors md:text-xl ${
                  activeId === item.id
                    ? "nav-link-active text-lufga-salmon font-kalam-100"
                    : "text-black hover:text-lufga-salmon font-kalam-100"
                }`}
              >
                {item.label}
              </a>
              {index < navItems.length - 1 && (
                <span className="text-sm text-kalam-grey md:text-base">•</span>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default ProjectDetailNav;
