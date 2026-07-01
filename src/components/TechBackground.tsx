import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  char: string;
  charSize: number;
  pulseSpeed: number;
  pulsePhase: number;
}

interface TechBackgroundProps {
  theme?: "light" | "dark";
}

export const TechBackground: React.FC<TechBackgroundProps> = ({ theme = "dark" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Particle[] = [];
    const particleCount = Math.min(25, Math.floor((width * height) / 45000));
    
    // Web/Tech related icons & symbol glyphs
    const glyphs = ["💡", "⚙", "⚛", "</>", "⚿", "◈", "⚙", "⚡"];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const isGlyph = Math.random() > 0.6;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: isGlyph ? 0 : Math.random() * 2.5 + 1.5,
        color:
          theme === "dark"
            ? Math.random() > 0.5
              ? "rgba(111, 213, 195, 0.4)"  // cyan
              : "rgba(139, 63, 175, 0.4)"   // purple
            : Math.random() > 0.5
              ? "rgba(45, 47, 146, 0.15)"   // corporate blue
              : "rgba(139, 63, 175, 0.15)",  // purple
        char: isGlyph ? glyphs[Math.floor(Math.random() * glyphs.length)] : "",
        charSize: Math.floor(Math.random() * 12 + 10),
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 140) {
            const alpha = (1 - dist / 140) * (theme === "dark" ? 0.12 : 0.08);
            ctx.strokeStyle =
              theme === "dark"
                ? `rgba(255, 255, 255, ${alpha})`
                : `rgba(45, 47, 146, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.pulsePhase += p.pulseSpeed;
        const currentPulse = Math.sin(p.pulsePhase) * 0.15 + 0.85;

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Bounce boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (p.char) {
          // Draw glyph symbol
          ctx.save();
          ctx.font = `${p.charSize}px sans-serif`;
          ctx.fillStyle =
            theme === "dark"
              ? `rgba(255, 255, 255, ${0.15 * currentPulse})`
              : `rgba(45, 47, 146, ${0.08 * currentPulse})`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(p.char, p.x, p.y);
          ctx.restore();
        } else {
          // Draw connecting dot node
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * currentPulse, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          if (theme === "dark" && Math.random() > 0.98) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(111, 213, 195, 0.2)";
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none block z-0"
    />
  );
};

export default TechBackground;
