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

        // Initialize particles with depth
        const particleCount = 80;
        particlesRef.current = Array.from({ length: particleCount }, () => {
            const depth = Math.random(); // 0 = close (slow, transparent), 1 = far (fast, opaque)
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: depth * 1.8 + 0.2, // 0.2px ~ 2.0px (smaller range)
                speedX: 0,
                speedY: 0,
                depth: depth,
                baseOpacity: depth * 0.8 + 0.05 // 0.05 ~ 0.85 based on depth
            };
        });

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
                // Apply force based on mouse direction and depth (reduced speed)
                const baseForce = Math.min(distance / 500, 1) * 0.3;
                const depthMultiplier = particle.depth * 4 + 0.3; // 0.3x ~ 4.3x speed based on depth
                const force = baseForce * depthMultiplier;

                particle.speedX = normalizedDx * force;
                particle.speedY = normalizedDy * force;

                // Move particle
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Wrap around screen edges - respawn from opposite side
                const margin = 20;
                if (particle.x < -margin) {
                    particle.x = canvas.width + margin;
                    particle.y = Math.random() * canvas.height;
                } else if (particle.x > canvas.width + margin) {
                    particle.x = -margin;
                    particle.y = Math.random() * canvas.height;
                }

                if (particle.y < -margin) {
                    particle.y = canvas.height + margin;
                    particle.x = Math.random() * canvas.width;
                } else if (particle.y > canvas.height + margin) {
                    particle.y = -margin;
                    particle.x = Math.random() * canvas.width;
                }

                // Draw particle with depth-based opacity
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                const opacity = particle.baseOpacity;
                ctx.fillStyle = lightmode
                    ? `rgba(100, 100, 100, ${opacity * 0.4})`
                    : `rgba(255, 255, 255, ${opacity})`;
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