"use client";

import useStore from '@/store/uiStore';

const ContentBody = ({ children, className }) => {
    const { breitbild, toggleBreitbild } = useStore()
    return (
        <div className={`cb w-full h-full md:flex-1 ${breitbild ? "md:min-h-[586px]" : "md:h-[486px]"}
                        md:overflow-y-scroll scrollbar-hide 
                        [&::-webkit-scrollbar]:w-1 
                        [&::-webkit-scrollbar-track]:bg-transparent 
                        [&::-webkit-scrollbar-thumb]:h-1 
                        [&::-webkit-scrollbar-thumb]:rounded-full 
                        [&::-webkit-scrollbar-thumb]:bg-ui/50 
                        [&::-webkit-scrollbar-thumb]:hover:bg-ui 
                        [&::-webkit-scrollbar-thumb]:active:bg-ui/70 
                        [&::-webkit-scrollbar-thumb]:transition-colors 
                        [&::-webkit-scrollbar-thumb]:duration-300
                        ${className}`
        }>
            <div className="p-3">
                {children}
            </div>
        </div>
    );
}

export default ContentBody;