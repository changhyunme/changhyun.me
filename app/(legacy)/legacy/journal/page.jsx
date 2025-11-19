
import { getHeaders } from "./getHeaders.js";

import ContentWrapper from "@/components/ContentWrapper";
import ContentBody from "@/components/ContentBody";
import ContentSide from "@/components/ContentSide";
import PageHeader from "@/components/ui/PageHeader";
import PageFooter from "@/components/ui/PageFooter";
import Header from "@/components/ui/Header";
import SubPageList from "@/components/SubPageList";
import SubPageListItem from "@/components/SubPageListItem";
import SubPageListItemWrapper from "@/components/SubPageListItemWrapper";
import JournalSide from "@/components/JournalSide";

import info from "@/app/(legacy)/legacy/info.config.js";

export const generateMetadata = () => {
  return {
    title: `Journal: ${info.title}`,
    description: info.description,
    keywords: info.keywords,
    copyright: info.copyright,
    robots: info.robots,
    authors: [{ name: info.author, url: `mailto:${info.author_email}` }],
    openGraph: {
      title: `Journal: ${info.title}`,
      description: info.opengraph.description,
      url: `${info.opengraph.url}/journal`,
      siteName: info.opengraph.site_name || info.title,
      images: [
        {
          url: info.opengraph.image,
          alt: info.opengraph.image_alt,
        },
      ],
      locale: info.opengraph.locale,
      type: info.opengraph.type,
    },
    twitter: {
      card: info.twitter.card,
      title: `Journal: ${info.title}`,
      description: info.twitter.description,
      creator: info.twitter.creator,
      images: [info.twitter.image],
    },
    metadataBase: new URL("https://changhyun.me/journal"),
  };
};

{/* Page Start */ }

export default async function Page() {

  const articles = await getHeaders();

  return (
    <ContentWrapper>
      <ContentSide>
        <JournalSide client />
      </ContentSide>
      <ContentBody className="text-text">
        <PageHeader title="Journal" />
        <Header translate="no" depth="2" className="hidden">Journal List</Header>
        <SubPageList data={articles} />
        <PageFooter />
      </ContentBody>
    </ContentWrapper>
  );
}
