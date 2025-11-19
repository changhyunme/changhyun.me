"use client";

import ContentBody from "@/components/ContentBody";
import PageHeader from "@/components/ui/PageHeader";
import PageFooter from "@/components/ui/PageFooter";
import useTranslation from "@/hooks/useTranslation";

export default function SandboxPageContent() {
  const { t } = useTranslation();

  return (
    <ContentBody>
      <PageHeader title={t("pages.sandbox.title")} />
      {t("pages.sandbox.noItems")}
      <br/>.
      <PageFooter/>
    </ContentBody>
  );
}
