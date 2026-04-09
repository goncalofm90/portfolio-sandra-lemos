import React, { useEffect, useState, useCallback, useRef } from "react";
import "./EdgeSprayBackground.css";

const BLOB_COLORS = ["color1", "color2"];

const EdgeSprayBackground: React.FC = () => {
  const [scrollRatio, setScrollRatio] = useState(0);
  const rafRef = useRef<number | null>(null);
  const isMobile = window.innerWidth < 768;

  const handleScroll = useCallback(() => {
    if (rafRef.current) return; // throttle to one update per frame
    rafRef.current = requestAnimationFrame(() => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollRatio(ratio);
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
