const CalBtn = ({ name, icon, isActive = false, onClick }) => {
    return (
        <div
            className={`w-1/2 md:w-1/4 px-3 py-2 rounded-sm italic cursor-pointer transition-all ${
                isActive ? "bg-ui text-textWhite font-bold" : "bg-ui/50 text-text/30"
            }`}
            onClick={onClick}
        >
            {name}
        </div>
    );
};

export default CalBtn;