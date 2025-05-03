"use client";

import { useEffect } from "react";
import { useSectionStore } from "@/store/sectionStore";
import useStore from '@/store/uiStore';

export function useSectionObserver(sectionIds = []) {
  const setActiveId = useSectionStore((state) => state.setActiveId);
  const { breitbild } = useStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          // 가장 상단에 가까운 요소 찾기
          const topEntry = visibleEntries.reduce((prev, current) => {
            return prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current;
          });
          setActiveId(topEntry.target.id);
        }
      },
      {
        rootMargin: breitbild ? "0% 0px -90% 0px" : "0% 0px -60% 0px",
        threshold: breitbild ? 0.01 : 0.2, 
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, setActiveId, breitbild]);
}