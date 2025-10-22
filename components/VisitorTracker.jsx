'use client';

import { useEffect } from 'react';

export default function VisitorTracker() {
  useEffect(() => {
    // 방문 시 1회만 실행 (세션 스토리지로 중복 방지)
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('visitor_pinged')) return;

    const sendPing = async () => {
      const clientInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        screen: `${window.screen.width}x${window.screen.height}`,
        referrer: document.referrer || 'Direct',
        currentURL: window.location.href,
        network: navigator.connection?.effectiveType || 'Unknown'
      };

      try {
        await fetch('/api/ping', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(clientInfo)
        });
        sessionStorage.setItem('visitor_pinged', 'true');
      } catch (error) {
        console.error('Ping failed:', error);
      }
    };

    // 페이지 로드 후 1초 뒤 실행 (초기 렌더링 방해 방지)
    const timer = setTimeout(sendPing, 1000);
    return () => clearTimeout(timer);
  }, []);

  return null; // UI 없음
}
