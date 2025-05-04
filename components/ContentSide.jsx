const ContentSide = ({ children, className }) => {
    return (
        <div className={`w-full md:w-[180px] md:border-r-1 border-border/30 ${className}`}>
            <div className="sticky top-[66px] left-0 p-3 flex flex-col">
                {children}
            </div>
        </div>
    );
}

export default ContentSide;