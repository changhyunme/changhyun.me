"use client";

import useStore from "@/store/uiStore";
import { motion } from "framer-motion";

const FensterBewegt = ({ children, className }) => {
    const { breitbild } = useStore();

    return (
        <motion.div
            className={`relative w-full max-w-full 
                        flex flex-col 
                        border-1 border-border/30 md:rounded-lg shadow-inner-2xl shadow-xl
                        mt-0 ${breitbild ? "md:mt-4" : "md:mt-0"}
                        bg-bgSub ${className}`}
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
