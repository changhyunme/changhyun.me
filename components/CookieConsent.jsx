'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent({ children }) {
  const [consentStatus, setConsentStatus] = useState(null); // null = loading, 'accepted' = 동의, 'rejected' = 거부
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // localStorage에서 동의 여부 확인
    const consent = localStorage.getItem('cookie_consent');

    if (consent === 'accepted') {
      setConsentStatus('accepted');
    } else if (consent === 'rejected') {
      setConsentStatus('rejected');
    } else {
      // 동의 여부가 없으면 모달 표시
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setConsentStatus('accepted');
    setShowModal(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    setConsentStatus('rejected');
    setShowModal(false);
  };

  // 거부한 경우 페이지 차단
  if (consentStatus === 'rejected') {
    return (
      <div className="fixed inset-0 bg-bg flex items-center justify-center p-4 z-50">
        <div className="max-w-md text-center space-y-4">
          <div className="text-6xl mb-4">🍪</div>
          <h1 className="text-2xl font-bold text-text">Access Denied</h1>
          <p className="text-text/70 leading-relaxed">
            You have declined the use of cookies and analytics.
            This website requires cookie consent to function properly.
          </p>
          <p className="text-sm text-text/50">
            If you change your mind, please clear your browser data and revisit this page.
          </p>
          <button
            onClick={() => {
              localStorage.removeItem('cookie_consent');
              window.location.reload();
            }}
            className="mt-6 px-6 py-3 bg-text/10 hover:bg-text/20 rounded-md transition-colors"
          >
            Reset & Try Again
          </button>
        </div>
      </div>
    );
  }

  // 동의한 경우 정상적으로 페이지 표시
  if (consentStatus === 'accepted') {
    return <>{children}</>;
  }

  // 모달 표시
  return (
    <>
      {/* 모달이 뜨는 동안 콘텐츠는 흐릿하게 */}
      <div className={showModal ? 'blur-sm pointer-events-none' : ''}>
        {children}
      </div>

      {/* 쿠키 동의 모달 */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-bgSub border border-text/20 rounded-lg max-w-lg w-full p-6 md:p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🍪</span>
              <h2 className="text-xl md:text-2xl font-bold text-text">Cookie Consent</h2>
            </div>

            <div className="space-y-4 text-text/80 text-sm md:text-base leading-relaxed mb-6">
              <p>
                This website uses cookies and analytics to improve your experience and understand visitor behavior.
              </p>

              <div className="bg-bg/50 rounded-md p-4 space-y-2 text-xs md:text-sm">
                <p className="font-semibold text-text">We collect:</p>
                <ul className="list-disc list-inside ml-2 space-y-1 text-text/70">
                  <li>Analytics data (via Vercel Analytics)</li>
                  <li>Performance metrics (via Vercel Speed Insights)</li>
                  <li>Visitor information (IP, location, browser)</li>
                  <li>Contact form submissions (name, email, message)</li>
                </ul>
              </div>

              <p className="text-xs text-text/60">
                By clicking "Accept", you consent to our use of cookies and data collection as described in our{' '}
                <a href="/privacy" className="underline hover:text-text">Privacy Policy</a>.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <button
                onClick={handleReject}
                className="flex-1 px-6 py-3 border border-text/30 rounded-md text-text/70 hover:bg-text/5 transition-all"
              >
                Reject
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-6 py-3 bg-text text-bg rounded-md font-semibold hover:opacity-90 transition-all"
              >
                Accept All Cookies
              </button>
            </div>

            <p className="text-xs text-text/40 text-center mt-4">
              Required for EU GDPR compliance
            </p>
          </div>
        </div>
      )}
    </>
  );
}
