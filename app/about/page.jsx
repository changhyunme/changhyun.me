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
            <p>I've been constantly creating and breaking it down, over and over again.</p>
          <p>Now, I really want to complete it once and for all.</p>
      </ContentBody>
    </ContentWrapper> 
  );
}
