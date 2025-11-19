const CalHeader = ({ title, price }) => {
    return (
        <div className="mt-4 mb-3">
            <span className="text-accent font-bold">
                {title}
            </span>
            <span className="text-textWhite font-light ml-2">
                : {price}$
            </span>
        </div>
    )
}

export default CalHeader;