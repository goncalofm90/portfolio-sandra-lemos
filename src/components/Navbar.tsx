import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hideTimeout, setHideTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Keep navbar visible at the top of the page
      if (currentScrollY < 50) {
        setIsVisible(true);
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
        return;
      }

      // Show navbar when scrolling below
      setIsVisible(true);

      // Clear existing timeout
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }

      // Set new timeout to hide after 2 seconds of inactivity
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      setHideTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [hideTimeout]);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 z-50 bg-white py-4 px-10 rounded-xl transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-black">
          <span className="font-lufga mb-0">Sandra Lemos</span>
          <span className="block font-kalam font-md text-kalam-grey mt-0">
            Product Designer (UX/UI)
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-kalam text-black hover:text-purple-600 transition-colors ${
                isActive ? "font-bold nav-link-active italic" : "font-normal"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-kalam text-black hover:text-purple-600 transition-colors ${
                isActive ? "font-bold nav-link-active italic" : "font-normal"
              }`
            }
          >
            About
          </NavLink>
          <a
            href="mailto:SsandraBrazLemos@gmail.com"
            className="text-white px-6 py-2 rounded-full hover:scale-95 font-bold"
            style={{
              backgroundColor: "#292929",
              boxShadow: "0 4px 2px rgba(0,0,0,0.35)",
            }}
            onMouseOver={(e) => (e.currentTarget.style.boxShadow = "none")}
            onMouseOut={(e) =>
              (e.currentTarget.style.boxShadow = "0 4px 2px rgba(0,0,0,0.35)")
            }
          >
            Contact me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
