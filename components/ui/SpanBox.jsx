const SpanBox = ({ children, className }) => {
    return (
        <span className={`bg-bg rounded-sm p-3 text-sm ${className}`}>
            {children}
        </span>
    );
}
export default SpanBox;