const ContentWrapper = ({ children, className}) => {
    return (
        <div className={`w-full flex flex-col md:flex-row text-neutral-600 ${className}`}>
            {children}
        </div>
    );
}

export default ContentWrapper;