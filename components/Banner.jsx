const Banner = ({ children, onClick, className }) => {
    return (
        <div className={`rounded-sm bg-gradient bg-bg p-4 ${className}`}
             onClick={onClick}
        >
            {children}
        </div>
    );
}

export default Banner;