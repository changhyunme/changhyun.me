const SpanBox = ({ children, className }) => {
    return (
        <span className={`bg-neutral-800/30 rounded-sm p-3 text-sm ${className}`}>
            {children}
        </span>
    );
}
export default SpanBox;