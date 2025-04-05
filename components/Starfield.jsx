"use client";
import { useRef, useEffect } from "react";

// 다 좋은데 성능이슈가 큼!

export default function Starfield({ isActive = false }) {
  const canvasRef = useRef(null);
  const stars = useRef([]);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    const centerX = width / 2;
    const centerY = height / 2;

    const initStars = (count) => {
      const starArr = [];
      for (let i = 0; i < count; i++) {
        starArr.push({
          x: 0,
          y: 0,
          z: Math.random() * width,
          speed: Math.random() * 1.5 + 0.2,
          angle: Math.random() * 2 * Math.PI,
        });
      }
      return starArr;
    };

    stars.current = initStars(500);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    const animate = () => {
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, width);
      gradient.addColorStop(0, "black");
      gradient.addColorStop(1, "#001f1f");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(0, 255, 255, 0.7)";
      ctx.lineWidth = Math.random() * 1.5 + 0.5;

      stars.current.forEach(star => {
        const sx = centerX + Math.cos(star.angle) * star.z;
        const sy = centerY + Math.sin(star.angle) * star.z;

        star.z += star.speed;
        star.speed *= 1.02; // 프레임마다 속도 약간 증가

        const ex = centerX + Math.cos(star.angle) * star.z;
        const ey = centerY + Math.sin(star.angle) * star.z;

        // glow 효과
        ctx.shadowBlur = 8;
        ctx.shadowColor = "cyan";

        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(ex, ey);
        ctx.stroke();

        ctx.shadowBlur = 0;
        ctx.shadowColor = "transparent";

        // 화면 밖으로 나가면 초기화
        if (ex < 0 || ex > width || ey < 0 || ey > height) {
          star.z = 0;
          star.speed = Math.random() * 1.5 + 0.2;
          star.angle = Math.random() * 2 * Math.PI;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, [isActive]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
    />
  );
}