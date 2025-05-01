const Banner = ({ children, onClick, className }) => {
    return (
        <div className={`rounded-xl bg-gradient bg-neutral-800 p-8 ${className}`}
             onClick={onClick}
        >
            {children}
        </div>
    );
}

export default Banner;