"use client";

import useStore from "@/store/uiStore";
import { motion } from "framer-motion";

const FensterBewegt = ({ children, className }) => {
    const { breitbild } = useStore();

    return (
        <motion.div
            className={`relative w-full max-w-full
                        flex flex-col
                        border-1 border-border/40 md:rounded-lg
                        shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]
                        mt-0 ${breitbild ? "md:mt-4" : "md:mt-0"}
                        bg-bgSub backdrop-blur-sm ${className}`}
            style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.06)'
            }}
            initial={false}
            animate={{
                width: breitbild ? "72rem" : "48rem",
                minHeight: breitbild ? "719px" : "519px"
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
                mass:1.2
            }}
        >
            {children}
        </motion.div>
    );
};

export default FensterBewegt;
