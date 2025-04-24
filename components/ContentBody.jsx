const ContentBody = ({ children, className }) => {
    return (
        <div className={`w-full h-full md:flex-1 md:h-[486px] md:overflow-scroll scrollbar-hide ${className}`}>
            <div className="p-3">
                {children}
            </div>
        </div>
    );
}

export default ContentBody;