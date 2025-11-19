"use client";

import ContentBody from "@/components/ContentBody";
import PageHeader from "@/components/ui/PageHeader";
import PageFooter from "@/components/ui/PageFooter";
import Header from "@/components/ui/Header";
import Blockquote from "@/components/ui/Blockquote";
import ContactForm from "@/components/ContactForm";
import useTranslation from "@/hooks/useTranslation";

export default function ContactPageContent() {
  const { t } = useTranslation();

  return (
    <ContentBody className="text-text">
      <PageHeader title={t("pages.contact.title")} />
      {t("pages.contact.intro")}
      <ul className="list-disc pl-5 mt-2">
        <li>{t("pages.contact.service1")}</li>
        <li>{t("pages.contact.service2")}</li>
        <li>{t("pages.contact.service3")}</li>
        <li>{t("pages.contact.service4")}</li>
      </ul>
      <Blockquote>
        {t("pages.contact.quote1")}
      </Blockquote>
      <Header>{t("pages.contact.formTitle")}</Header>
      <ContactForm />
      <Header>{t("pages.contact.infoTitle")}</Header>
      <div className="grid gap-1 text-sm">
        <div className="grid grid-cols-[90px_1fr]">
          <span className="font-bold">{t("pages.contact.location")}</span>
          <span>{t("pages.contact.locationValue")}</span>
        </div>
        <div className="grid grid-cols-[90px_1fr]">
          <span className="font-bold">{t("pages.contact.email")}</span>
          <a className="hover:underline" href="mailto:changhyun.me@gmail.com">changhyun.me@gmail.com</a>
        </div>
      </div>
      <Blockquote>
        {t("pages.contact.quote2")}
      </Blockquote>
      <PageFooter/>
    </ContentBody>
  );
}
