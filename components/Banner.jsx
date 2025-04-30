const Banner = ({ children, onClick }) => {
    return (
        <div className="rounded-xl bg-gradient bg-neutral-800 p-10"
             onClick={onClick}
        >
            {children}
        </div>
    );
}

export default Banner;