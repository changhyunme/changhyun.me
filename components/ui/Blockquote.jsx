const Blockquote = ({ children, className }) => {  
    return (
        <blockquote className={`bg-neutral-800/30 rounded-sm p-3 my-4 first:mt-0 last:mb-0 text-md italic ${className}`}>
            {children}
        </blockquote>
    );
}
export default Blockquote;