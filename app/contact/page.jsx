import ContentWrapper from "@/components/ContentWrapper";
import ContentSide from "@/components/ContentSide";
import ContentBody from "@/components/ContentBody";
import PageFooter from "@/components/ui/PageFooter";
import NameCard from "@/components/NameCard";
import PingBtn from "@/components/PingButton";
import Header from "@/components/ui/Header";
import Blockquote from "@/components/ui/Blockquote";  

{/* Metadata */}
import info from "@/app/info.config.js";

export const generateMetadata = () => {
  return {
    title: `Contact me: ${info.title}`,
    description: info.description,
    keywords: info.keywords,
    robots: info.robots,
    copyright: info.copyright,
    themeColor: info.theme_color,
    colorScheme: info.color_schema,
    authors: [{ name: info.author, url: `mailto:${info.author_email}` }],
    openGraph: {
      title: `Contact me: ${info.title}`,
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
      title: `Contact me: ${info.title}`,
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
    metadataBase: new URL("https://changhyun.me/contact"), // 이거 없으면 절대경로 에러 남
  };
};

{/* Page Start */}
export default function Home() 
{
  return (
    <>
      <ContentWrapper>
        <ContentSide>
            <NameCard />
            <PingBtn name="Ping" className="mt-5 md:mt-auto" />
        </ContentSide>
        <ContentBody className="text-white/80">
          Got a question? Got something cool you want to build together? Hit me up through one of the contacts below. 💬
          <ul className="list-disc pl-5 mt-2">
            <li>🖥️ Modern web service builds</li>
            <li>🧪 Experimental feature development</li>
            <li>⚡ Rapid prototyping</li>
            <li>🤔 Projects that seem simple — but somehow cost way too much</li>
          </ul>
          <Blockquote>
            Things get messy, especially in web dev. I do my best to cut through the noise with fresh perspective and build clean solutions.
          </Blockquote>
          <Header>Contact</Header>
          <div className="grid gap-1 text-sm">
            <div className="grid grid-cols-[90px_1fr]">
              <span className="font-bold">Location</span>
              <span>Seoul, Republic of Korea</span>
            </div>
            <div className="grid grid-cols-[90px_1fr]">
              <span className="font-bold"> E-mail</span>
              <a className="hover:underline" href="mailto:changhyun.me@gmail.com">changhyun.me@gmail.com</a>
            </div>
          </div>
          <Blockquote>
            If it sounds interesting, let's talk — even if it's just to bounce some ideas around.
          </Blockquote>
          <PageFooter/>
        </ContentBody>
      </ContentWrapper> 
    </>
  );
}
