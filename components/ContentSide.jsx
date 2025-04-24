const ContentSide = ({ children, className }) => {
    return (
        <div className={`w-full md:w-[180px] md:border-r-1 border-neutral-800 ${className}`}>
            <div className="p-3">
                {children}
            </div>
        </div>
    );
}

export default ContentSide;