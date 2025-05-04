"use client";

import useStore from "@/store/uiStore";

const FensterBewegt = ({ children, className }) => {
    const { breitbild, toggleBreitbild } = useStore();

    return (

        <div className={`relative w-full ${breitbild ? "mt-[16px] md:w-6xl md:min-h-[719px]" : "md:w-3xl md:min-h-[519px]"}
                        flex flex-col transition-all duration-300
                        border-1 border-border/30 md:rounded-lg shadow-inner-2xl shadow-xl
                        bg-bgSub ${className}`}
        >

            {children}
        </div>

    );
}

export default FensterBewegt;