const ContentBody = ({ children, className }) => {
    return (
        <div className={`cb w-full h-full md:flex-1 md:h-[486px] md:overflow-y-scroll scroll-smooth scrollbar-hide 
                        [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:bg-transparent
                        [&::-webkit-scrollbar-thumb]:h-1
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-zinc-800/50
                        [&::-webkit-scrollbar-thumb]:hover:bg-zinc-700
                        [&::-webkit-scrollbar-thumb]:active:bg-zinc-600
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