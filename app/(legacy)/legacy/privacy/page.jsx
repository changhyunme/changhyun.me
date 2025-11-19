// app/privacy/page.jsx
import ContentWrapper from "@/components/ContentWrapper";
import PrivacyPageContent from "./PrivacyPageContent";

{/* Metadata */ }
import info from "@/app/(legacy)/legacy/info.config.js";

export const generateMetadata = () => {
  return {
    title: `Privacy Policy: ${info.title}`,
    description: "Personal data collection and privacy policy for changhyun.me",
    keywords: info.keywords,
    robots: info.robots,
    copyright: info.copyright,
    authors: [{ name: info.author, url: `mailto:${info.author_email}` }],
    openGraph: {
      title: `Privacy Policy: ${info.title}`,
      description: "Personal data collection and privacy policy",
      url: `${info.opengraph.url}/privacy`,
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
      title: `Privacy Policy: ${info.title}`,
      description: "Personal data collection and privacy policy",
      creator: info.twitter.creator,
      images: [info.twitter.image],
    },
    metadataBase: new URL("https://changhyun.me/privacy"),
  };
};

{/* Page Start */ }

export default function PrivacyPage() {
  return (
    <ContentWrapper>
      <PrivacyPageContent />
    </ContentWrapper>
  );
}
