"use client";
import useStore from "@/store/journalStore";
import useUIStore from "@/store/uiStore";
import SubPageListItemWrapper from "./SubPageListItemWrapper";
import SubPageListItem from "./SubPageListItem";

const SubPageList = ({ data }) => {
  const { sortOrderByTitle, sortOrderByDate } = useStore();
  const { breitbild } = useUIStore();

  const sorted = [...data].sort((a, b) => {
    // 정렬 우선순위: 날짜 → 제목
    const dateA = new Date(a.datetime);
    const dateB = new Date(b.datetime);
    if (dateA.getTime() !== dateB.getTime()) {
      return sortOrderByDate === "asc" ? dateA - dateB : dateB - dateA;
    }
    return sortOrderByTitle === "asc"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
  });

  return (
    <div className={`grid ${breitbild ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-2"} grid-flow-row auto-rows-max gap-3 mb-5`}>
      {sorted.map((article, i) => (
        <SubPageListItemWrapper key={i} data={article}>
          <SubPageListItem data={article} />
        </SubPageListItemWrapper>
      ))}
    </div>
  );
};

export default SubPageList;
