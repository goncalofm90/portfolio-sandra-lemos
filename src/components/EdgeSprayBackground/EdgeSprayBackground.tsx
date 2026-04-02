import React, { useEffect, useState } from "react";
import "./EdgeSprayBackground.css";

const BLOB_COLORS = ["color1", "color2"];

const EdgeSprayBackground: React.FC = () => {
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollRatio(ratio);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Alternating opacity
  const leftOpacity = Math.cos(scrollRatio * Math.PI * 2) * 0.5 + 0.5;
  const rightOpacity = 1 - leftOpacity;

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
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>
        <ellipse
          cx="0"
          cy="0"
          rx="350"
          ry="220"
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
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>
        <ellipse
          cx="0"
          cy="0"
          rx="350"
          ry="220"
          filter="url(#esp-right-filter)"
          className={`spray spray-ellipse ${BLOB_COLORS[1]}`}
        />
      </svg>
    </>
  );
};

export default EdgeSprayBackground;
