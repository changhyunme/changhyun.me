import ContentWrapper from "@/components/ContentWrapper";
import ContentSide from "@/components/ContentSide";
import ContentBody from "@/components/ContentBody";
import NameCard from "@/components/NameCard";
import PingBtn from "@/components/PingButton";
import Grid from "@/components/ui/Grid";
import GridTechItem from "@/components/ui/GridTechItem";

import Header from "@/components/ui/Header";

export default function Home() 
{
  return (
    <ContentWrapper>
      <ContentBody className="text-white/80">
          <div className="h-[320px] flex items-center justify-center">
            home
          </div>
      </ContentBody>
    </ContentWrapper> 
  );
}
