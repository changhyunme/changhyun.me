const KopfButton = ({ children, onClick, className }) => {
  return (
    <button
      className={`px-1.5 first:ml-3 last:mr-3 py-1.5 font-bold text-xs bg-neutral-900
                 transition-all duration-200 hover:bg-neutral-800/50 cursor-pointer hover:opacity-70
                 uppercase ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default KopfButton;