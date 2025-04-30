import Link from 'next/link';
import navItems from '@/app/nav.config.js';

// A JSX Document by Changhyun Cho
// Fenster v1.0.0 in 2025

const Fenster = ( {children} ) => {
    return (
        <div className="relative w-full md:w-3xl md:min-h-[519px]
                        flex flex-col 
                        border-1 border-neutral-800 rounded-lg shadow-inner-2xl shadow-xl
                        bg-neutral-900"
        >
            <div className="flex px-3 py-2 border-b-1 
                          border-neutral-800 text-xs"
            >
                <ul className="flex flex-row gap-2 uppercase font-bold">
                    {navItems.map((item) => (
                        <li className="text-neutral-600 hover:text-neutral-600/50 
                                        cursor-pointer"
                            key={item.href}
                        >
                            <Link href={item.href}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="ml-auto uppercase text-green-400">
                    HTTPS
                </div>
            </div>
            <div className="relative flex-1 flex md:h-full">
                {children}
            </div>
        </div>
    );
}

export default Fenster;