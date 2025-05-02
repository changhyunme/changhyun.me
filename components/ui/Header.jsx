const Header = ({children, type, id, translate}) => {
    return (
        <h1 className="text-lg font-black italic text-white pb-1 my-3 first:mt-0 last:mb-0 border-b-1 border-neutral-800" 
            id={id} 
            translate={translate}
        >
            {children}
        </h1>
    )
}

export default Header;