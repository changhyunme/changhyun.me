import ContentWrapper from "@/components/ContentWrapper";
import ContentBody from "@/components/ContentBody";
import Blockquote from "@/components/ui/Blockquote";  
import Header from "@/components/ui/Header";
import Banner from "@/components/Banner";

export default function Home() 
{

  return (
    <ContentWrapper>
      <ContentBody className="text-white/80">
        <Header>Home</Header>
        
        <Blockquote>1+1</Blockquote>
        <div className="flex flex-row gap-4 mt-4">
          <div className="flex-1">
            <Header>Posts</Header>
            <Banner>HOME</Banner>
          </div>
          <div className="flex-1">
            <Header>Socials</Header>
            <Banner>HOME</Banner>
          </div>
        </div>
      </ContentBody>
    </ContentWrapper> 
  );
}
