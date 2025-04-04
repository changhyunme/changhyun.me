// A JSX Document by Changhyun Cho
// Fenster v1.0.0 in 2025

const Fenster = ( {children} ) => {
    return (
        <div className="relative w-full  md:w-3xl md:min-h-[519px]
                        flex flex-col 
                        border-1 border-neutral-800 rounded-lg shadow-inner-2xl shadow-xl
                        bg-neutral-900"
        >
            <div className="flex px-3 py-2 border-b-1 
                          border-neutral-800 text-neutral-600 text-xs"
            >
                <ul className="flex flex-row gap-2 uppercase">
                    <li className="hover:text-neutral-600/50 cursor-pointer">
                        <a href="/">
                            home
                        </a>
                    </li>
                    <li className="hover:text-neutral-600/50 cursor-pointer">
                        <a href="/about">
                            about
                        </a>
                    </li>
                    <li className="hover:text-neutral-600/50 cursor-pointer">
                        <a href="/contact">
                            contact
                        </a>
                    </li>
                </ul>
                <div className="ml-auto uppercase">
                    HTTPS
                </div>
            </div>
            <div className="relative flex-1 flex">
                {children}
            </div>
        </div>
    );
}

export default Fenster;