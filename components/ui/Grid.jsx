"use client";

import useStore from '@/store/uiStore';

const Grid = ({ children }) => {
    const { breitbild, toggleBreitbild } = useStore();
    return (
        <div className={`grid grid-cols-2 ${breitbild ? "md:grid-cols-4" : "md:grid-cols-3"} gap-4`}>
            {children}
        </div>
    );
}

export default Grid;