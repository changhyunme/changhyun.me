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
    copyright: info.copyright,
    themeColor: info.theme_color,
    colorScheme: info.color_schema,
    authors: [{ name: info.author, url: `mailto:${info.author_email}` }],
    openGraph: {
      title: `About: ${info.title}`,
      description: info.opengraph.description,
      url: `${info.opengraph.url}/contact`,
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
      title: `About: ${info.title}`,
      description: info.twitter.description,
      creator: info.twitter.creator,
      images: [info.twitter.image],
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
      userScalable: true,
      viewportFit: "cover", // 🔥 notch 영역까지 안전하게 사용
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