import ContentWrapper from "@/components/ContentWrapper";
import ContentBody from "@/components/ContentBody";
import Banner from "@/components/Banner";

import Header from "@/components/ui/Header";

export default function Home() 
{

  return (
    <ContentWrapper>
      <ContentBody className="text-white/80">
        <Banner>HOME</Banner>
      </ContentBody>
    </ContentWrapper> 
  );
}
