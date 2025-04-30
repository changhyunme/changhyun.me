import ContentWrapper from "@/components/ContentWrapper";
import ContentSide from "@/components/ContentSide";
import ContentBody from "@/components/ContentBody";
import NameCard from "@/components/NameCard";
import PingBtn from "@/components/PingButton";
import Header from "@/components/ui/Header";
import SpanBox from "@/components/ui/SpanBox";
import Blockquote from "@/components/ui/Blockquote";  

export default function Home() 
{
  return (
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
          📧 E-mail : <a className="hover:underline" href="mailto:changhyun.me@gmail.com">changhyun.me@gmail.com</a>
          <br />📸 Instagram : @changhyun.me
      </ContentBody>
    </ContentWrapper> 
  );
}
