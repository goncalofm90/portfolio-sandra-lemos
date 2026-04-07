import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import type { NavSection } from "../data/types";
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

const ProjectDetailNav = ({ sections }: { sections: NavSection[] }) => {
  const navItems = useMemo(
    () =>
      NAV_LINKS.reduce<NavItem[]>((items, link) => {
        const index = sections.findIndex(
          (section) => section.match === link.match,
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
  const [isVisible, setIsVisible] = useState(true);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!navItems.length) return;

    const scrollContainer = document.querySelector(
      ".overflow-y-scroll",
    ) as HTMLElement | null;
    if (!scrollContainer) return;

    const hideNav = () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    };

    const handleScroll = () => {
      const scrollPosition = scrollContainer.scrollTop + 220;
      let currentId = navItems[0].id;

      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          currentId = item.id;
        }
      });

      setActiveId(currentId);
      const isDesktop = window.innerWidth >= 768;
      setIsVisible(true);

      if (!isDesktop) {
        hideNav();
      }
    };

    handleScroll();
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
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
    <div
      className={`fixed bottom-4 left-4 right-4 z-40 transition-all duration-300 md:sticky md:top-24 md:w-full md:px-4 md:py-6 md:bottom-auto md:left-auto md:right-auto sm:px-12 lg:px-16 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"
      }`}
    >
      <nav className="mx-auto w-full max-w-6xl rounded-xl bg-white px-4 py-2 shadow-[0_4px_12px_rgba(0,0,0,0.08)] md:px-8 md:py-4">
        <div
          className="grid grid-flow-col grid-rows-2 items-center justify-items-center gap-2 overflow-x-auto whitespace-nowrap font-kalam md:flex md:flex-wrap md:items-center md:justify-center md:overflow-visible md:gap-4"
          aria-label="Project detail sections"
        >
          {navItems.map((item, index) => (
            <div key={item.id} className="flex items-center gap-2 md:gap-4">
              <a
                href={`#${item.id}`}
                onClick={(event) => handleNavClick(event, item.id)}
                className={`text-sm transition-colors md:text-xl ${
                  activeId === item.id
                    ? "nav-link-active text-lufga-salmon font-kalam-100"
                    : "text-black hover:text-lufga-salmon font-kalam-100"
                }`}
              >
                {item.label}
              </a>
              {index < navItems.length - 1 && (
                <span className="text-xs text-kalam-grey md:text-base">•</span>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default ProjectDetailNav;
