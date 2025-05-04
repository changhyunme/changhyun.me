// components/ClientToggle.jsx
"use client";

import useStore from "@/store/uiStore";

export default function ClientToggle() {
  const { breitbild, toggleBreitbild } = useStore();

  return (
    <div className="hidden md:block ml-auto uppercase text-orange-400
                    border-1 border-orange-400 rounded-xs my-1.5
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
  );
}
