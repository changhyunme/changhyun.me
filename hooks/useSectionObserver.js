"use client";

import { useEffect } from "react";
import { useSectionStore } from "@/store/sectionStore";

export function useSectionObserver(sectionIds = []) {
  const setActiveId = useSectionStore((state) => state.setActiveId);

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
        rootMargin: "0% 0px -60% 0px", // Bottom을 Adjust해야하는데 FHD와 4K간 차이가 있음 잘 조절해야함 (now: MIN60 MAX70)
        threshold: 0.01,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, setActiveId]);
}