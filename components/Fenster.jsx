"use client";

import Link from 'next/link';
import navItems from '@/app/nav.config.js';
import useStore from '@/store/uiStore';

// A JSX Document by Changhyun Cho
// Fenster v1.0.0 in 2025

const Fenster = ({ children, className }) => {
    const { breitbild, toggleBreitbild } = useStore();
    return (
        <div className={`relative w-full ${breitbild ? "md:w-5xl md:min-h-[619px]" : "md:w-3xl md:min-h-[519px]"}
                        flex flex-col transition-all duration-100
                        border-1 border-neutral-800 rounded-lg shadow-inner-2xl shadow-md
                        bg-neutral-900 ${className}`}
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
                <div className="hidden md:block ml-auto uppercase text-orange-400
                                border-1 border-orange-400 rounded-xs
                                cursor-pointer hover:opacity-70 active:opacity:50" onClick={toggleBreitbild}>
                    {breitbild ? (
                        <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.567 8.02947L20.9105 1.76929L22.3153 3.19282L15.9916 9.43352L19.5614 9.44772L19.5534 11.4477L12.5535 11.4199L12.5813 4.41992L14.5813 4.42788L14.567 8.02947Z"
                          fill="currentColor"
                        />
                        <path
                          d="M7.97879 14.5429L4.40886 14.5457L4.40729 12.5457L11.4073 12.5402L11.4128 19.5402L9.41277 19.5417L9.40995 15.9402L3.09623 22.2306L1.68463 20.8138L7.97879 14.5429Z"
                          fill="currentColor"
                        />
                      </svg>
                    ) : (
                        <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M12.3062 16.5933L12.2713 18.593L5.2724 18.4708L5.39457 11.4719L7.39426 11.5068L7.33168 15.092L15.2262 7.46833L11.6938 7.40668L11.7287 5.40698L18.7277 5.52915L18.6055 12.5281L16.6058 12.4932L16.6693 8.85507L8.72095 16.5307L12.3062 16.5933Z"
                            fill="currentColor"
                        />
                        </svg>
                    )}
                </div>
            </div>
            <div className="relative flex-1 flex md:h-full">
                {children}
            </div>
        </div>
    );
}

export default Fenster;