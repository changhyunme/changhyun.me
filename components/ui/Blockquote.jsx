const Blockquote = ({ children }) => {  
    return (
        <blockquote className="bg-zinc-800/30 rounded-sm p-3 my-4 text-sm">
            {children}
        </blockquote>
    );
}
export default Blockquote;