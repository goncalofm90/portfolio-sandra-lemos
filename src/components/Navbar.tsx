import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hideTimeout, setHideTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
        if (hideTimeout) clearTimeout(hideTimeout);
        return;
      }

      setIsVisible(true);

      if (hideTimeout) clearTimeout(hideTimeout);

      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      setHideTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, [hideTimeout]);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 z-50 bg-white py-2 px-6 md:py-4 md:px-10 rounded-xl transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="text-lg md:text-2xl font-lufga-500 text-black">
          <span className="font-lufga mb-0">Sandra Lemos</span>
          <span className="block font-kalam font-md text-kalam-grey mt-0 text-sm md:text-base">
            Product Designer (UX/UI)
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-black hover:text-purple-600 transition-colors text-2xl me-15 ${
                isActive ? "nav-link-active font-kalam-800" : "font-normal"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-black hover:text-purple-600 transition-colors text-2xl ${
                isActive ? "nav-link-active font-kalam-600" : "font-normal"
              }`
            }
          >
            About
          </NavLink>
          <a
            href="mailto:SsandraBrazLemos@gmail.com"
            className="text-white px-8 py-3 rounded-full hover:scale-95 font-kalam-500 text-xl ml-20"
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

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `text-black hover:text-purple-600 transition-colors text-2xl ${
                isActive ? "nav-link-active font-kalam-800" : "font-normal"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `text-black hover:text-purple-600 transition-colors text-2xl ${
                isActive ? "nav-link-active font-kalam-600" : "font-normal"
              }`
            }
          >
            About
          </NavLink>
          <a
            href="mailto:SsandraBrazLemos@gmail.com"
            className="text-white px-6 py-2 rounded-full font-kalam-500 text-lg"
            style={{ backgroundColor: "#292929" }}
            onClick={() => setMenuOpen(false)}
          >
            Contact me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
