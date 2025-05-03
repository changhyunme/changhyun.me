// app/about/page.jsx
import ContentWrapper from "@/components/ContentWrapper";
import Content from "@/app/about/Content";

{/* Metadata */}
import info from "@/app/info.config.js";

export const generateMetadata = () => {
  return {
    title: `About: ${info.title}`,
    description: info.description,
    keywords: info.keywords,
    robots: info.robots,
    themeColor: info.theme_color,
    authors: [{ name: info.author, url: `mailto:${info.author_email}` }],
    openGraph: {
      title: info.opengraph.title,
      description: info.opengraph.description,
      url: info.opengraph.url,
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
      title: info.twitter.title,
      description: info.twitter.description,
      creator: info.twitter.creator,
      images: [info.twitter.image],
    },
    metadataBase: new URL("https://changhyun.me/about"), // 이거 없으면 절대경로 에러 남
  };
};

{/* Page Start */}

export default function AboutPage() {
  return (
    <ContentWrapper>
      <Content />
    </ContentWrapper>
  );
}