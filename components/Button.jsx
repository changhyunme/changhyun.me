const Button = ({ name, onClick, className }) => {
    return (
        <div className={`border-1 border-zinc-800 px-3 py-2 text-center
                        cursor-pointer hover:border-zinc-700
                        transition-colors duration-300 ${className}`}
        >
            {name}
        </div>
    );
}

export default Button;