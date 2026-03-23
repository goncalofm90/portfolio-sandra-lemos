import { useEffect, useRef } from "react";

interface BlobConfig {
  color: string;
  color2: string;
  color3: string;
  r: number;
  speed: number;
  ax: number;
  ay: number;
  px: number;
  py: number;
  x: number;
  y: number;
}

interface Props {
  blobs: BlobConfig[];
  className?: string;
}

function hexRgb(h: string) {
  return `${parseInt(h.slice(1, 3), 16)},${parseInt(h.slice(3, 5), 16)},${parseInt(h.slice(5, 7), 16)}`;
}

const BlobBackground = ({ blobs, className = "" }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = canvas!.offsetWidth * dpr;
      canvas!.height = canvas!.offsetHeight * dpr;
    }
    resize();
    window.addEventListener("resize", resize);

    let raf: number;
    function render(ts: number) {
      const W = canvas!.width,
        H = canvas!.height;
      ctx!.save();
      ctx!.clearRect(0, 0, W, H);
      ctx!.filter = "blur(" + Math.round(Math.max(W, H) * 0.06) + "px)";

      blobs.forEach((b) => {
        const t = ts * b.speed;
        const cx = b.x + Math.sin(t * b.px) * b.ax;
        const cy = b.y + Math.sin(t * b.py + 1.2) * b.ay;
        const px = cx * W,
          py = cy * H;

        const radX = b.r * W;
        const radY = b.r * W * 0.5;

        ctx!.save();
        ctx!.translate(px, py);
        ctx!.scale(1, radY / radX);
        ctx!.translate(-px, -py);

        const rgb1 = hexRgb(b.color);
        const rgb2 = hexRgb(b.color2);
        const rgb3 = hexRgb(b.color3);

        const g = ctx!.createRadialGradient(px, py, 0, px, py, radX);
        g.addColorStop(0, `rgba(${rgb1},1)`);
        g.addColorStop(0.45, `rgba(${rgb2},1)`);
        g.addColorStop(0.8, `rgba(${rgb3},0.6)`);
        g.addColorStop(1, `rgba(${rgb3},0)`);
        ctx!.fillStyle = g;
        ctx!.fillRect(0, 0, W, H);

        ctx!.restore();
      });

      ctx!.restore();
      raf = requestAnimationFrame(render);
    }
    raf = requestAnimationFrame(render);

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(render);
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [blobs]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};

export default BlobBackground;
