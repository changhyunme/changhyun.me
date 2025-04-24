import ContentWrapper from "@/components/ContentWrapper";
import ContentSide from "@/components/ContentSide";
import ContentBody from "@/components/ContentBody";
import NameCard from "@/components/NameCard";

export default function Home() 
{
  return (
    <ContentWrapper>
      <ContentSide>
          <NameCard />
      </ContentSide>
      <ContentBody>
          <h1>My Embarrassing Personal Homepage</h1>
          <p>Hello, I'm Changhyun.</p> 
          <p>I've been building my homepage for almost 10 years.</p>
      </ContentBody>
    </ContentWrapper> 
  );
}
