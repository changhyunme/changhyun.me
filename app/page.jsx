import ContentWrapper from "@/components/ContentWrapper";
import ContentSide from "@/components/ContentSide";
import ContentBody from "@/components/ContentBody";
import NameCard from "@/components/NameCard";
import Btn from "@/components/Button";

export default function Home() 
{
  return (
    <ContentWrapper>
      <ContentSide>
          <NameCard />
          <Btn name="Ping" className="mt-5 md:mt-auto" />
      </ContentSide>
      <ContentBody className="text-white/80">
          <h1>My Embarrassing Personal Homepage</h1>
          <p>Hello, I'm Changhyun.</p> 
          <p>I've been building my homepage for almost 10 years.</p>
      </ContentBody>
    </ContentWrapper> 
  );
}
