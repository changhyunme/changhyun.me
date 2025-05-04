"use client";

import useStore from "@/store/uiStore";

export default function FensterToggle() {
  const { breitbild, toggleBreitbild, lightmode, toggleLightmode } = useStore();

  const btnClass = `hidden md:flex items-center justify-center w-5 h-5
                    ml-2 p-0.5 uppercase ${lightmode ? "text-neutral-600" : "text-accent"}
                    bg-ui rounded-full my-1 inset-shadow-sm 
                    cursor-pointer hover:opacity-70 active:opacity-50 transition-transform duration-300`;

  return (
    <div className="flex flex-row items-center ml-auto text-white">
      {/* 다크모드 라이트모드 토글 */}
      <div className={`hidden md:flex ${lightmode ? "flex-row-reverse" : "flex-row"} items-center p-0.5 w-8 h-5 
                     bg-ui rounded-full cursor-pointer transition-all duration-300 inset-shadow-sm`}
           onClick={toggleLightmode}
      >
        <div className={`rounded-full size-4 ${lightmode ? "bg-slate-600" : "bg-accent"} p-[1px] flex items-center justify-center shadow-sm`}>
          {lightmode ? (
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M6 14q1.2 0 2.2.65t1.475 1.775l.25.575h.625q1.05 0 1.75.738T13 19.5q0 1.05-.725 1.775T10.5 22H6q-1.65 0-2.825-1.175T2 18q0-1.675 1.175-2.838T6 14m5.25-11q-.45 2.475.275 4.838t2.5 4.137t4.138 2.5T23 14.75q-.65 3.55-3.375 5.863T13.325 23q.8-.65 1.238-1.562T15 19.5q0-1.7-1.062-2.937t-2.713-1.488q-.8-1.425-2.187-2.25T6 12q-.8 0-1.562.2T3 12.8q.05-3.625 2.363-6.375T11.25 3"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M12 19a1 1 0 0 1 .993.883L13 20v1a1 1 0 0 1-1.993.117L11 21v-1a1 1 0 0 1 1-1m6.313-2.09l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 1.218-1.567zm-11.306.083a1 1 0 0 1 .083 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094l.7-.7a1 1 0 0 1 1.414 0M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM6.213 4.81l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7A1 1 0 0 1 6.11 4.74zm12.894.083a1 1 0 0 1 .083 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094l.7-.7a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m0 5a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7"/>
            </svg>
          )}
        </div>
      </div>
      {/* RSS */}
      <a href="/rss.xml" target="_blank">
      <div className={`${btnClass} p-[1px] pl-[2px] pb-[1px]`} 
      >
        <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M5 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4M5 3c8.837 0 16 7.163 16 16q0 .277-.01.55a1.5 1.5 0 1 1-2.997-.1A13 13 0 0 0 18 19c0-7.18-5.82-13-13-13q-.225 0-.45.008a1.5 1.5 0 0 1-.1-2.999Q4.722 3 5 3m0 7a9 9 0 0 1 8.98 9.599a1.5 1.5 0 1 1-2.993-.198a6 6 0 0 0-6.388-6.388a1.5 1.5 0 0 1-.197-2.993Q4.699 10 5 10"/></g>
        </svg>
      </div>
      </a>
      {/* 화면 확대 축소 */}
      <div className={`${btnClass} hover:rotate-45`}
           onClick={toggleBreitbild}
      >
        {breitbild ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M14.567 8.02947L20.9105 1.76929L22.3153 3.19282L15.9916 9.43352L19.5614 9.44772L19.5534 11.4477L12.5535 11.4199L12.5813 4.41992L14.5813 4.42788L14.567 8.02947Z" fill="currentColor" />
            <path d="M7.97879 14.5429L4.40886 14.5457L4.40729 12.5457L11.4073 12.5402L11.4128 19.5402L9.41277 19.5417L9.40995 15.9402L3.09623 22.2306L1.68463 20.8138L7.97879 14.5429Z" fill="currentColor" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"   >
            <path d="M12.3062 16.5933L12.2713 18.593L5.2724 18.4708L5.39457 11.4719L7.39426 11.5068L7.33168 15.092L15.2262 7.46833L11.6938 7.40668L11.7287 5.40698L18.7277 5.52915L18.6055 12.5281L16.6058 12.4932L16.6693 8.85507L8.72095 16.5307L12.3062 16.5933Z" fill="currentColor" /> 
          </svg>
        )}
      </div>
    </div>
  );
}
