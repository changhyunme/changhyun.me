"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navIcon = {
    home: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="md:hidden">
            <path fill="currentColor" d="m12.857 4.06l5.866 4.817c.33.27.527.686.527 1.13v8.803c0 .814-.638 1.44-1.383 1.44H15.25V15.5a2.75 2.75 0 0 0-2.75-2.75h-1a2.75 2.75 0 0 0-2.75 2.75v4.75H6.133c-.745 0-1.383-.626-1.383-1.44v-8.802c0-.445.197-.86.527-1.13l5.866-4.819a1.34 1.34 0 0 1 1.714 0m5.01 17.69c1.61 0 2.883-1.335 2.883-2.94v-8.802a2.96 2.96 0 0 0-1.075-2.29L13.81 2.9a2.84 2.84 0 0 0-3.618 0L4.325 7.718a2.96 2.96 0 0 0-1.075 2.29v8.802c0 1.605 1.273 2.94 2.883 2.94z"/>
        </svg>
    ),
    about: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="md:hidden">
            <path fill="currentColor" d="M6.012 18H21V4a2 2 0 0 0-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1M8 6h9v2H8z"/>
        </svg>
    ),
    makes: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="md:hidden">
            <path fill="currentColor" d="m3.735 6.567l-1.896-.064l-.225.731a8.5 8.5 0 0 0 2.113 8.518a8.5 8.5 0 0 0 8.487 2.122l5.295 5.296l2.123-2.123l-4.296-4.296l1.414-1.414l4.296 4.296l2.12-2.12l-5.296-5.294a8.5 8.5 0 0 0-2.122-8.488A8.5 8.5 0 0 0 7.23 1.618l-.73.225l.063 1.896l3.528 3.528l-2.828 2.828z"/>
        </svg>
    ),
    contact: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="md:hidden">
            <path fill="currentColor" d="M22 5.5H9c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h13c1.11 0 2-.89 2-2v-9a2 2 0 0 0-2-2m0 3.67l-6.5 3.33L9 9.17V7.5l6.5 3.31L22 7.5zM5 16.5c0 .17.03.33.05.5H1c-.552 0-1-.45-1-1s.448-1 1-1h4zM3 7h2.05c-.02.17-.05.33-.05.5V9H3c-.55 0-1-.45-1-1s.45-1 1-1m-2 5c0-.55.45-1 1-1h3v2H2c-.55 0-1-.45-1-1"/>
        </svg>
    ),
};

const NavItem = ({ name, href }) => {
    const pathname = usePathname();

    const isActive = pathname === href || pathname.startsWith(`${href}/`);
    const baseClass = "flex-1 md:flex-0 text-center text-xs md:text-left cursor-pointer";
    const textClass = isActive ? "text-neutral-600 md:text-orange-400" : "text-black/30 md:text-neutral-600 hover:text-neutral-600/50";

    return (
        <li className={`${baseClass} ${textClass}`} key={href}>
            <Link href={href} translate="no">
                <div className="pt-1 md:py-0 flex flex-col items-center gap-2">
                    {navIcon[name]}
                    <span>{name}</span>
                </div>
            </Link>
        </li>
    );
}

export default NavItem;