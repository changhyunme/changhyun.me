import ContentWrapper from "@/components/ContentWrapper";
import SandboxPageContent from "./SandboxPageContent";

{/* Metadata */ }
import info from "@/app/(legacy)/legacy/info.config.js";

export const generateMetadata = () => {
  return {
    title: `Sandbox: ${info.title}`,
    description: info.description,
    keywords: info.keywords,
    robots: info.robots,
    copyright: info.copyright,
    authors: [{ name: info.author, url: `mailto:${info.author_email}` }],
    openGraph: {
      title: `Sandbox: ${info.title}`,
      description: info.opengraph.description,
      url: `${info.opengraph.url}/sandbox`,
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
      title: `Sandbox: ${info.title}`,
      description: info.twitter.description,
      creator: info.twitter.creator,
      images: [info.twitter.image],
    },
    metadataBase: new URL("https://changhyun.me/sandbox"), // 이거 없으면 절대경로 에러 남
  };
};

{/* Page Start */ }
export default function Home() {
  return (
    <>
      <ContentWrapper>
        <SandboxPageContent />
      </ContentWrapper>
    </>
  );
}
