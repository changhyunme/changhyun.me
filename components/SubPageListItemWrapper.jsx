"use client"; 

import useUIStore from "@/store/uiStore";

const SubPageListItemWrapper = ({ children }) => {
    const { breitbild, toggleBreitbild } = useUIStore()
    return (
        <div className={`col-span-2 ${breitbild ? "md:col-span-1" : "md:col-span-2"}`}
        >
            {children}
        </div>
    );
}

export default SubPageListItemWrapper;