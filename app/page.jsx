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
      <ContentSide>
          <NameCard />
          <PingBtn name="Ping" className="mt-5 md:mt-auto" />
      </ContentSide>
      <ContentBody className="text-white/80">
          <h1>My Embarrassing Personal Homepage</h1>
          <p>Hello, I'm Changhyun.</p> 
          <p>I've been building my homepage for almost 10 years.</p>
          
          <Header>Backend</Header>
          <Grid>
            <GridTechItem name="Next.js" icon="nextjs" size="30" />
            <GridTechItem name="Node.js" icon="nodejs" size="30" />
            <GridTechItem name="Svelte" icon="svelte" size="30" />
            <GridTechItem name="Astro" icon="astro" size="30" />
            <GridTechItem name="PHP" icon="php" size="30" />
          </Grid>

          <Header>Frontend</Header>
          <Grid>
            <GridTechItem name="React" icon="react" size="30" />
            <GridTechItem name="Tailwind CSS" icon="tailwind" size="30" />
            <GridTechItem name="Bootstrap" icon="bootstrap" size="30" />
            <GridTechItem name="Sass" icon="sass" size="30" />
            <GridTechItem name="less" icon="less" size="30" />
            <GridTechItem name="CSS" icon="css3" size="30" />
          </Grid>

          <Header>Infra</Header>
          <Grid>
            <GridTechItem name="AWS" icon="aws" size="30" />
            <GridTechItem name="Clodflare" icon="clodflare" size="30" />
            <GridTechItem name="Serverless" icon="serverless" size="30" />
          </Grid>

          <Header>Tools</Header>
          <Grid>
          <GridTechItem name="Figma" icon="figma" size="30" />
            <GridTechItem name="Designer" icon="affinityDesigner" size="30" />
            <GridTechItem name="Publisher" icon="affinityPublisher" size="30" />
            <GridTechItem name="Illustrator" icon="illustrator" size="30" />
          </Grid>
      </ContentBody>
    </ContentWrapper> 
  );
}
