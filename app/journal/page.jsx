
import { getHeaders } from "./getHeaders.js";

import ContentWrapper from "@/components/ContentWrapper";
import ContentBody from "@/components/ContentBody";
import PageFooter from "@/components/ui/PageFooter";
import Header from "@/components/ui/Header";
import Blockquote from "@/components/ui/Blockquote";
import SubPageList from "@/components/SubPageList";

import info from "@/app/info.config.js";

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

{/* Page Start */}

export default async function Page() {

    const articles = await getHeaders();

    return (
        <ContentWrapper>
            <ContentBody className="text-text">
                <Header translate="no" depth="1" className="hidden">Makes List</Header>
                    <div className="flex flex-col gap-3 mb-5">
                        {articles.map((article, i) => (
                            <SubPageList key={i} data={article} />
                        ))}
                    </div>
                <PageFooter/>
            </ContentBody>
        </ContentWrapper>
    );
}
