import { useEffect } from "react";

const HeroBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById("hero-canvas") as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // TypeScript assertion that ctx is not null after the check
    const context = ctx;

    function hexRgb(h: string) {
      return `${parseInt(h.slice(1, 3), 16)},${parseInt(h.slice(3, 5), 16)},${parseInt(h.slice(5, 7), 16)}`;
    }

    const blobs = [
      {
        color: "#FFB1AD",
        r: 0.25,
        speed: 0.0018,
        ax: 0.2,
        ay: 0.15,
        px: 1.6,
        py: 0.9,
      },
      {
        color: "#D9AED3",
        r: 0.2,
        speed: 0.0014,
        ax: 0.18,
        ay: 0.14,
        px: 2.1,
        py: 1.5,
      },
      {
        color: "#FFDFD5",
        r: 0.22,
        speed: 0.0022,
        ax: 0.16,
        ay: 0.12,
        px: 0.8,
        py: 2.2,
      },
      {
        color: "#FFB1AD",
        r: 0.18,
        speed: 0.0016,
        ax: 0.15,
        ay: 0.13,
        px: 1.2,
        py: 0.5,
      },
      {
        color: "#D9AED3",
        r: 0.23,
        speed: 0.002,
        ax: 0.19,
        ay: 0.16,
        px: 2.5,
        py: 2.0,
      },
      {
        color: "#FFDFD5",
        r: 0.19,
        speed: 0.0015,
        ax: 0.17,
        ay: 0.11,
        px: 0.5,
        py: 1.2,
      },
    ];

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = (canvas.offsetWidth || window.innerWidth) * dpr;
      canvas.height = (canvas.offsetHeight || window.innerHeight) * dpr;
    }
    resize();
    window.addEventListener("resize", resize);

    let raf: number;
    function render(ts: number) {
      const W = canvas.width,
        H = canvas.height;
      context.save();
      context.filter = "blur(" + Math.round(Math.max(W, H) * 0.05) + "px)";
      context.fillStyle = "#FAF9F8";
      context.fillRect(0, 0, W, H);
      blobs.forEach((b) => {
        const t = ts * b.speed;
        const cx = 0.5 + Math.sin(t * b.px) * b.ax;
        const cy = 0.28 + Math.sin(t * b.py + 1.2) * b.ay;
        const px = cx * W,
          py = cy * H;
        const rad = b.r * Math.max(W, H);
        const rgb = hexRgb(b.color);
        const g = context.createRadialGradient(px, py, 0, px, py, rad);
        g.addColorStop(0, `rgba(${rgb},0.85)`);
        g.addColorStop(0.45, `rgba(${rgb},0.45)`);
        g.addColorStop(0.8, `rgba(${rgb},0.10)`);
        g.addColorStop(1, `rgba(${rgb},0)`);
        context.fillStyle = g;
        context.fillRect(0, 0, W, H);
      });
      context.restore();
      raf = requestAnimationFrame(render);
    }
    raf = requestAnimationFrame(render);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        raf = requestAnimationFrame(render);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      id="hero-canvas"
      className="absolute inset-0 w-full h-full"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    />
  );
};

export default HeroBackground;
