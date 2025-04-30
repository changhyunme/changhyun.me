import ContentWrapper from "@/components/ContentWrapper";
import ContentSide from "@/components/ContentSide";
import ContentBody from "@/components/ContentBody";
import NameCard from "@/components/NameCard";
import PingBtn from "@/components/PingButton";
import Grid from "@/components/ui/Grid";
import GridTechItem from "@/components/ui/GridTechItem";
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
          about me
          <Header>About</Header>
            My name’s Changhyun — though friends abroad often call me Francesco. I’m a developer based in Goyang, South Korea, and I wear more than a few hats. I build the things you imagine — and then some.
          
          <Header>Hobbies</Header>
            Reading, listening to music, riding motorcycles, fishing, and building personal websites.

          <Header>Specialty</Header>
            Violin 🎻
          
          <Header>Skills</Header>
          <Blockquote>
            Here’s a rundown of the stacks I genuinely enjoy working with.
          </Blockquote>
          
          
          <Header>Skills: Backend</Header>
          <Grid>
            <GridTechItem name="Next.js" icon="nextjs" size="30" star="1" />
            <GridTechItem name="Node.js" icon="nodejs" size="30" star="1" />
            <GridTechItem name="SvelteKit" icon="svelte" size="30" />
            <GridTechItem name="Astro" icon="astro" size="30" heart="1" />
            <GridTechItem name="PHP" icon="php" size="30" />
          </Grid>
          <Blockquote>
            Built this site with Next.js + Tailwind. Pretty much my go-to stack these days.
          </Blockquote>

          <Header>Skills: Frontend</Header>
          <Grid>
            <GridTechItem name="React" icon="react" size="30" star="1" />
            <GridTechItem name="Tailwind CSS" icon="tailwind" size="30" star="1" />
            <GridTechItem name="Bootstrap" icon="bootstrap" size="30" />
            <GridTechItem name="Sass" icon="sass" size="30" />
            <GridTechItem name="less" icon="less" size="30" heart="1"/>
            <GridTechItem name="CSS" icon="css3" size="30" />
          </Grid>
          <Blockquote>
            Been rocking Less for like a decade. Still hits different.
          </Blockquote>

          <Header>Skills: Infra</Header>
          <Grid>
            <GridTechItem name="AWS" icon="aws" size="30" />
            <GridTechItem name="Clodflare" icon="clodflare" size="30" />
            <GridTechItem name="Serverless" icon="serverless" size="30" />
            <GridTechItem name="nginx" icon="" size="30" />
            <GridTechItem name="apache" icon="" size="30" />
          </Grid>
          <Blockquote>
            Kinda obsessed with serverless stuff lately — Vercel’s been a game changer.
          </Blockquote>

          <Header>Skills: Tools</Header>
          <Grid>
          <GridTechItem name="Figma" icon="figma" size="30" />
            <GridTechItem name="Designer" icon="affinityDesigner" size="30" star="1" />
            <GridTechItem name="Publisher" icon="affinityPublisher" size="30" />
            <GridTechItem name="Illustrator" icon="illustrator" size="30" />
          </Grid>
          <Blockquote>
            Affinity Designer is way cheaper than Illustrator — and honestly, just works better for most use cases.
          </Blockquote>
          <Header>Skills: Others</Header>
          <Grid>
            <SpanBox className="text-sm">Wordpress</SpanBox>
            <SpanBox className="text-sm">GNUBoard (legacy)</SpanBox>
            <SpanBox className="text-sm">XE (legacy)</SpanBox>
            <SpanBox className="text-sm">Umlang</SpanBox>
          </Grid>
          <Blockquote>
            Once cutting-edge, now just tech fossils I used to swear by.
          </Blockquote>
      </ContentBody>
    </ContentWrapper> 
  );
}
