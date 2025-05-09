"use client";

import { useState, useEffect } from "react";
import KopfButton from "@/components/KopfButton";

const Kopf = () => {
    const [dateTime, setDateTime] = useState("");
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const updateDateTime = () => {
        const now = new Date();

        const pad = (num, size = 2) => String(num).padStart(size, "0");
        const formatted = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ` +
                          `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}.` +
                          `${pad(now.getMilliseconds(), 3)}`;

        setDateTime(formatted);
    };

    useEffect(() => {
        updateDateTime();
        const interval = setInterval(updateDateTime, 1);

        const onFullScreenChange = () => {
            setIsFullScreen(!!document.fullscreenElement);
        };

        const onMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("fullscreenchange", onFullScreenChange);
        window.addEventListener("mousemove", onMouseMove);

        return () => {
            clearInterval(interval);
            document.removeEventListener("fullscreenchange", onFullScreenChange);
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    const handleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen?.();
        } else {
            document.exitFullscreen?.();
        }
    };

    return (
        <div className="z-50 hidden md:flex flex-row
                        fixed top-0 left-0 w-screen bg-bgSub
                        text-sm text-textShadow
                        border-b-1 border-border/30"
        >
            <KopfButton>Changhyun.me</KopfButton>
            <KopfButton onClick={handleFullScreen}>
                {isFullScreen ? "ExitScr" : "FullScr"}
            </KopfButton>
            <KopfButton>X : {mousePos.x} Y : {mousePos.y}</KopfButton>

            <KopfButton className="ml-auto">
                {dateTime}
            </KopfButton>
            <KopfButton>HTTPS</KopfButton>
        </div>
    );
}

export default Kopf;
