import navItems from '@/app/nav.config.js';
import FensterBewegt from '@/components/FensterBewegt';
import FensterToggle from '@/components/FensterToggle';
import NavItem from '@/components/ui/NavItem';

// A JSX Document by Changhyun Cho
// Fenster v1.0.0 in 2025

const Fenster = ({ children, className }) => {
    return (
        <FensterBewegt className={className} >
            <div className="z-30 fixed bottom-0 left-0 md:sticky md:top-[29px] md:left-0 w-full md:w-auto flex px-3 py-2 border-0 md:border-b-1 
                          md:border-neutral-800 text-xs bg-white md:bg-inherit"
            >
                <ul className="flex-1 md:flex-0 flex flex-row gap-2 uppercase font-bold jus">
                    {navItems.map((item) => (
                        <NavItem key={item.href} name={item.name} href={item.href}/>
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