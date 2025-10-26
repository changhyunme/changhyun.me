import navItems from '@/app/nav.config.js';
import FensterBewegt from '@/components/FensterBewegt';
import FensterToggle from '@/components/FensterToggle';
import NavItem from '@/components/ui/NavItem';

// A JSX Document by Changhyun Cho
// Fenster v1.0.0 in 2025

const Fenster = ({ children, className }) => {
    return (
        <FensterBewegt className={className} >
            <nav
                className="z-30 fixed bottom-0 left-0 md:sticky md:top-[29px] md:left-0 w-full md:w-auto flex content-between px-3 border-0 md:border-b-1
                          md:border-border/30 text-xs bg-white md:bg-inherit md:rounded-t-lg"
                aria-label="Main navigation"
            >
                <ul className="flex-1 md:flex-0 flex flex-row gap-2 uppercase font-bold jus">
                    {navItems.map((item) => (
                        <NavItem key={item.href} name={item.name} href={item.href}/>
                    ))}
                </ul>
                <FensterToggle />
            </nav>
            <div className="relative flex-1 flex md:h-full py-0">
                {children}
            </div>
        </FensterBewegt>
    );
}

export default Fenster;