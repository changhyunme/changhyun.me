"use client";

import { useEffect, useRef } from "react";
import useStore from "@/store/uiStore";

const Szene = () => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef(null);
    const { lightmode } = useStore();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Initialize particles
        const particleCount = 80;
        particlesRef.current = Array.from({ length: particleCount }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: 0,
            speedY: 0,
            opacity: Math.random() * 0.3 + 0.1
        }));

        // Mouse move handler
        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        const animate = () => {
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const mouseX = mouseRef.current.x;
            const mouseY = mouseRef.current.y;

            // Calculate direction from center to mouse
            const dx = mouseX - centerX;
            const dy = mouseY - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const normalizedDx = distance > 0 ? dx / distance : 0;
            const normalizedDy = distance > 0 ? dy / distance : 0;

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particlesRef.current.forEach(particle => {
                // Apply force based on mouse direction
                const force = Math.min(distance / 500, 1) * 0.5;
                particle.speedX = normalizedDx * force;
                particle.speedY = normalizedDy * force;

                // Move particle
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Wrap around screen edges - respawn near center
                if (particle.x < -10 || particle.x > canvas.width + 10 ||
                    particle.y < -10 || particle.y > canvas.height + 10) {
                    particle.x = centerX + (Math.random() - 0.5) * 100;
                    particle.y = centerY + (Math.random() - 0.5) * 100;
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = lightmode
                    ? `rgba(100, 100, 100, ${particle.opacity * 0.4})`
                    : `rgba(255, 255, 255, ${particle.opacity})`;
                ctx.fill();
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [lightmode]);

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-bg hidden md:block pointer-events-none">
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
}

export default Szene;