import React, { useEffect, useState, useCallback, useRef } from "react";
import "./EdgeSprayBackground.css";

const BLOB_COLORS = ["color1", "color2"];

const EdgeSprayBackground: React.FC = () => {
  const [scrollRatio, setScrollRatio] = useState(0);
  const rafRef = useRef<number | null>(null);
  const isMobile = window.innerWidth < 768;

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      const scrollContainer = document.querySelector(
        ".overflow-y-scroll",
      ) as HTMLElement | null;
      const scrollY = scrollContainer
        ? scrollContainer.scrollTop
        : window.scrollY;
      const scrollHeight = scrollContainer
        ? scrollContainer.scrollHeight
        : document.body.scrollHeight;
      const clientHeight = scrollContainer
        ? scrollContainer.clientHeight
        : window.innerHeight;

      const maxScroll = scrollHeight - clientHeight;
      const ratio = maxScroll > 0 ? scrollY / maxScroll : 0;
      setScrollRatio(ratio);
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    const scrollContainer = document.querySelector(
      ".overflow-y-scroll",
    ) as HTMLElement | null;
    const target = scrollContainer ?? window;

    target.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      target.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  const leftOpacity = Math.cos(scrollRatio * Math.PI * 2) * 0.5 + 0.5;
  const rightOpacity = 1 - leftOpacity;

  const rx = isMobile ? 180 : 350;
  const ry = isMobile ? 110 : 220;
  const blur = isMobile ? 15 : 30;

  return (
    <>
      {/* Left Blob */}
      <svg
        className="esp-blob esp-left"
        style={{ top: "40vh", left: "-10px", opacity: leftOpacity }}
      >
        <defs>
          <filter
            id="esp-left-filter"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur stdDeviation={blur} />
          </filter>
        </defs>
        <ellipse
          cx="0"
          cy="0"
          rx={rx}
          ry={ry}
          filter="url(#esp-left-filter)"
          className={`spray spray-ellipse ${BLOB_COLORS[0]}`}
        />
      </svg>

      {/* Right Blob */}
      <svg
        className="esp-blob esp-right"
        style={{ top: "40vh", right: "-300px", opacity: rightOpacity }}
      >
        <defs>
          <filter
            id="esp-right-filter"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur stdDeviation={blur} />
          </filter>
        </defs>
        <ellipse
          cx="0"
          cy="0"
          rx={rx}
          ry={ry}
          filter="url(#esp-right-filter)"
          className={`spray spray-ellipse ${BLOB_COLORS[1]}`}
        />
      </svg>
    </>
  );
};

export default EdgeSprayBackground;
