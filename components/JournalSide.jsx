// Idea: 결국 이거는 SubPageList 를 조작하기 위한 컴포넌트임

"use client"; 

import useStore from "@/store/journalStore";

const iconClass = "flex-1 w-full h-full flex gap-1 items-center justify-center text-textWhite bg-ui/70 cursor-pointer hover:opacity-50 first:rounded-l-sm last:rounded-r-sm"
    
const ToggleOrderByTitle = ({}) => {
    const { sortOrderByTitle, setSortOrderByTitle } = useStore();
    return (
        <div className="w-full h-8 flex gap-[2px] flex-row">
            <div 
                 className={`${iconClass} ${sortOrderByTitle === 'asc' && "opacity-50"}`}
                 onClick={() => setSortOrderByTitle("asc")}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M4.869 11H2.667L6 3h2l3.333 8H9.131l-.41-1H5.28zm1.23-3h1.803L7 5.8zm12.9 8V3h-2v13h-3l4 5l4-5zm-8-3H3v2h4.855L3 19v2h8v-2H6.146L11 15z"/>
                </svg>
                <span className="text-xs font-bold">ASC</span>
            </div>
            <div 
                 className={`${iconClass} ${sortOrderByTitle === 'desc' && "opacity-50"}`}
                 onClick={() => setSortOrderByTitle("desc")}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M4.869 11H2.667L6 3h2l3.333 8H9.131l-.41-1H5.28zm1.23-3h1.803L7 5.8zm15.9 0l-4-5l-4 5h3v13h2V8zm-11 5H3v2h4.855L3 19v2h8v-2H6.146L11 15z"/>
                </svg>
                <span className="text-xs font-bold">DESC</span>
            </div>
        </div>
    )
}

const ToggleOrderByDate = () => {
    const { sortOrderByDate, setSortOrderByDate } = useStore();
  
    return (
      <div className="w-full h-8 flex gap-[2px] flex-row">
        <div
          className={`${iconClass} ${sortOrderByDate === 'asc' && "opacity-50"}`}
          onClick={() => setSortOrderByDate("asc")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M9 3v8H7V5.41l-2 .539v-2.33L7.313 3zm10 0v13h3l-4 5l-4-5h3V3zm-8 12.5a3 3 0 0 1-.427 1.544L8.289 21h-2.31l1.473-2.55A3.001 3.001 0 1 1 11 15.5m-3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/>
          </svg>
          <span className="text-xs font-bold">Older</span>
        </div>
        <div
          className={`${iconClass} ${sortOrderByDate === 'desc' && "opacity-50"}`}
          onClick={() => setSortOrderByDate("desc")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M9 11V3H7.314L5 3.62v2.329l2-.539V11zm13-3l-4-5l-4 5h3v13h2V8zM8 16.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m2.573.544a3 3 0 1 0-3.121 1.406L5.979 21h2.31z"/>
          </svg>
          <span className="text-xs font-bold">Newer</span>
        </div>
      </div>
    );
  };


const JournalSide = ({}) => {
    return (
        <div className="hidden md:block">
            <span className="block text-xs font-bold text-text mb-2">Order By Date</span>
            <ToggleOrderByDate />
            {/* <span className="block text-xs font-bold text-text my-2">Order By Title</span>
            <ToggleOrderByTitle /> */}
        </div>
    );
}

export default JournalSide;