import Link from 'next/link';
import navItems from '@/app/nav.config.js';
import FensterBewegt from '@/components/FensterBewegt';
import FensterToggle from '@/components/FensterToggle';

// A JSX Document by Changhyun Cho
// Fenster v1.0.0 in 2025

const Fenster = ({ children, className }) => {
    return (
        <FensterBewegt className={className} >
            <div className="flex px-3 py-2 border-b-1 
                          border-neutral-800 text-xs"
            >
                <ul className="flex flex-row gap-2 uppercase font-bold">
                    {navItems.map((item) => (
                        <li className="text-neutral-600 hover:text-neutral-600/50 
                                        cursor-pointer"
                            key={item.href}
                        >
                            <Link href={item.href} translate="no">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <FensterToggle />
            </div>
            <div className="relative flex-1 flex md:h-full">
                {children}
            </div>
        </FensterBewegt>
    );
}

export default Fenster;