"use client";

import useStore from "@/store/uiStore";

const FensterBewegt = ({ children, className }) => {
    const { breitbild, toggleBreitbild } = useStore();

    return (

        <div className={`relative w-full ${breitbild ? "md:w-5xl md:min-h-[619px]" : "md:w-3xl md:min-h-[519px]"}
                        flex flex-col transition-all duration-100
                        border-1 border-neutral-800 md:rounded-lg shadow-inner-2xl shadow-md
                        bg-neutral-900 ${className}`}
        >
            {children}
        </div>

    );
}

export default FensterBewegt;