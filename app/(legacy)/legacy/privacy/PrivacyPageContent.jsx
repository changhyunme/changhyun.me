"use client";

import ContentBody from "@/components/ContentBody";
import PageHeader from "@/components/ui/PageHeader";
import Header from "@/components/ui/Header";
import useTranslation from "@/hooks/useTranslation";
import info from "@/app/(legacy)/legacy/info.config.js";

export default function PrivacyPageContent() {
  const { t } = useTranslation();

  return (
    <ContentBody>
      <PageHeader>{t("pages.privacy.pageTitle")}</PageHeader>

      <div className="space-y-6 text-text/80 leading-relaxed">
        <section>
          <Header depth={2}>{t("pages.privacy.dataCollectionTitle")}</Header>
          <p className="mt-3">
            {t("pages.privacy.dataCollectionText")}
          </p>
        </section>

        <section>
          <Header depth={2}>{t("pages.privacy.infoWeCollectTitle")}</Header>
          <div className="mt-3 space-y-3">
            <div>
              <Header depth={3}>{t("pages.privacy.contactFormTitle")}</Header>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li><strong>{t("pages.privacy.contactFormName")}</strong></li>
                <li><strong>{t("pages.privacy.contactFormEmail")}</strong></li>
                <li><strong>{t("pages.privacy.contactFormMessage")}</strong></li>
              </ul>
            </div>

            <div>
              <Header depth={3}>{t("pages.privacy.visitorAnalyticsTitle")}</Header>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li><strong>{t("pages.privacy.visitorIP")}</strong></li>
                <li><strong>{t("pages.privacy.visitorBrowser")}</strong></li>
                <li><strong>{t("pages.privacy.visitorDevice")}</strong></li>
                <li><strong>{t("pages.privacy.visitorVisit")}</strong></li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <Header depth={2}>{t("pages.privacy.purposeTitle")}</Header>
          <ul className="list-disc list-inside ml-4 mt-3 space-y-1">
            <li>{t("pages.privacy.purpose1")}</li>
            <li>{t("pages.privacy.purpose2")}</li>
            <li>{t("pages.privacy.purpose3")}</li>
          </ul>
        </section>

        <section>
          <Header depth={2}>{t("pages.privacy.storageTitle")}</Header>
          <p className="mt-3">
            {t("pages.privacy.storage1")}
          </p>
          <p className="mt-2">
            {t("pages.privacy.storage2")}
          </p>
        </section>

        <section>
          <Header depth={2}>{t("pages.privacy.thirdPartyTitle")}</Header>
          <p className="mt-3">
            {t("pages.privacy.thirdPartyText")}
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li><strong>{t("pages.privacy.thirdPartyVercel")}</strong></li>
            <li><strong>{t("pages.privacy.thirdPartyPushover")}</strong></li>
            <li><strong>{t("pages.privacy.thirdPartyIPAPI")}</strong></li>
          </ul>
        </section>

        <section>
          <Header depth={2}>{t("pages.privacy.rightsTitle")}</Header>
          <p className="mt-3">{t("pages.privacy.rightsText")}</p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li><strong>{t("pages.privacy.rightsRefuse")}</strong></li>
            <li><strong>{t("pages.privacy.rightsDelete")}</strong></li>
            <li><strong>{t("pages.privacy.rightsAccess")}</strong></li>
          </ul>
          <p className="mt-3 text-sm text-text/60">
            {t("pages.privacy.rightsNote")}
          </p>
        </section>

        <section>
          <Header depth={2}>{t("pages.privacy.contactTitle")}</Header>
          <p className="mt-3">
            {t("pages.privacy.contactText")} <a href="/legacy/contact" className="underline hover:text-text">{t("pages.privacy.contactLink")}</a> {t("pages.privacy.contactEmail")} <a href={`mailto:${info.author_email}`} className="underline hover:text-text">{info.author_email}</a>.
          </p>
        </section>

        <section className="text-sm text-text/50 pt-4 border-t border-text/10">
          <p>{t("pages.privacy.lastUpdated")}</p>
          <p className="mt-1">{t("pages.privacy.mayUpdate")}</p>
        </section>
      </div>
    </ContentBody>
  );
}
