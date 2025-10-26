'use client';

import { useState, useEffect } from 'react';
import useTranslation from '@/hooks/useTranslation';

export default function CookieConsent({ children }) {
  const { t } = useTranslation();
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
          <h1 className="text-2xl font-bold text-text">{t("cookie.accessDenied")}</h1>
          <p className="text-text/70 leading-relaxed">
            {t("cookie.accessDeniedText")}
          </p>
          <p className="text-sm text-text/50">
            {t("cookie.changeMyMind")}
          </p>
          <button
            onClick={() => {
              localStorage.removeItem('cookie_consent');
              window.location.reload();
            }}
            className="mt-6 px-6 py-3 bg-text/10 hover:bg-text/20 rounded-md transition-colors"
          >
            {t("cookie.reset")}
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
              <h2 className="text-xl md:text-2xl font-bold text-text">{t("cookie.title")}</h2>
            </div>

            <div className="space-y-4 text-text/80 text-sm md:text-base leading-relaxed mb-6">
              <p>
                {t("cookie.description")}
              </p>

              <div className="bg-bg/50 rounded-md p-4 space-y-2 text-xs md:text-sm">
                <p className="font-semibold text-text">{t("cookie.weCollect")}</p>
                <ul className="list-disc list-inside ml-2 space-y-1 text-text/70">
                  <li>{t("cookie.analytics")}</li>
                  <li>{t("cookie.performance")}</li>
                  <li>{t("cookie.visitor")}</li>
                  <li>{t("cookie.contactData")}</li>
                </ul>
              </div>

              <p className="text-xs text-text/60">
                {t("cookie.consent")}{' '}
                <a href="/privacy" className="underline hover:text-text">{t("cookie.privacyPolicy")}</a>.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <button
                onClick={handleReject}
                className="flex-1 px-6 py-3 border border-error/50 text-error/90 rounded-md hover:bg-error/10 transition-all font-medium"
              >
                {t("cookie.reject")}
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-md font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg"
              >
                {t("cookie.accept")}
              </button>
            </div>

            <p className="text-xs text-text/40 text-center mt-4">
              {t("cookie.required")}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
