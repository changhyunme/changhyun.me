const Blockquote = ({ children }) => {  
    return (
        <blockquote className="bg-neutral-800/30 rounded-sm p-3 my-4 first:mt-0 last:mb-0 text-md italic">
            {children}
        </blockquote>
    );
}
export default Blockquote;