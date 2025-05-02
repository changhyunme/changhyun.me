import ContentWrapper from "@/components/ContentWrapper";
import ContentSide from "@/components/ContentSide";
import ContentBody from "@/components/ContentBody";
import NameCard from "@/components/NameCard";
import PingBtn from "@/components/PingButton";
import Grid from "@/components/ui/Grid";
import GridTechItem from "@/components/ui/GridTechItem";
import Header from "@/components/ui/Header";
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
        
           <Blockquote>
            The Greeks said *“techne”* was more than craft — 
            it was a way of understanding the world by making.  
            That still makes sense to me.
          </Blockquote>

          <Header>Philosophy</Header>

            I like building things — not just coding for the sake of it, but actually figuring out <em>why</em> something should exist before touching the keyboard.<br /><br />
            I’m not the “move fast and break stuff” type. More like “think it through, then build fast — and make sure it doesn’t break later.”<br /><br />
            I enjoy finding the cleanest way to solve messy problems.<br />
            I believe good tools matter, but clear thinking matters more.<br />
            Also, I probably spend too much time tweaking things no one else notices. And I’m fine with that.<br /><br />
            If something feels off, I’ll refactor it.<br />
            If something’s confusing, I’ll simplify it.<br />
            If it needs to ship, I’ll get it done.<br /><br />
            Simple as that.

          <Header>About Me</Header>

            <Blockquote>
              I didn’t start in tech. I studied music — until I realized I enjoyed tinkering with Linux and building little websites way more than practicing scales.<br /><br />
              Turns out, composing and coding aren’t that different: both are about structure, flow, and knowing when to break the rules.
            </Blockquote>

          {/* <Header>Interests</Header>
            Reading, music, motorcycles, fishing, and building personal websites — oh, and I play the violin 🎻 (plus I nerd out on scoring sheet music 🎼). */}

          <Header>What I Use</Header>
            Here’s a look at the stacks I’ve chosen so far — and the languages I’m currently exploring.
          <Blockquote>
            Here’s a rundown of the stacks I genuinely enjoy working with.
          </Blockquote>
          
          <Header>Core Web: Modern Framework</Header>
          <Grid>
            <GridTechItem name="Next.js" icon="nextjs" size="30" star="1" />
            <GridTechItem name="React" icon="react" size="30" star="1" />
            <GridTechItem name="Tailwind CSS" icon="tailwind" size="30" star="1" />
          </Grid>
          <Blockquote>
            Built this site with <strong>Next.js + Tailwind</strong>. Pretty much my go-to stack these days. 
          </Blockquote>

          <Header>Core Web: Experimental</Header>
          <Grid>
            <GridTechItem name="Astro" icon="astro" size="30" heart="1" />
            <GridTechItem name="SvelteKit" icon="svelte" size="30" />
          </Grid>
          <Blockquote>
            I usually reach for <strong>Astro</strong> when someone asks me to whip up a clean site fast.<br />
            <strong>Svelte</strong>? Looked easy at first... then it pooped on my expectations.
          </Blockquote>
          
          <Header>Core Web: Node.js</Header>
          <Grid>
            <GridTechItem name="Node.js" icon="nodejs" size="30" />
            <GridTechItem name="Express" icon="nodejs" size="30" star="1" />
            <GridTechItem name="Socket.io" icon="nodejs" size="30" star="1" />
            <GridTechItem name="ejs" icon="nodejs" size="30"/>
          </Grid>
          <Blockquote>
            Might be past its prime, but I still use it a lot — still feels fresh and exciting every time.
          </Blockquote>

          <Header>Core Web: Legacy Standard</Header>
          <Grid>
            <GridTechItem name="apache" icon="apache" size="30" />
            <GridTechItem name="PHP" icon="php" size="30" />
            <GridTechItem name="MySQL" icon="mysql" size="30" />
          </Grid>
          <Blockquote>
            The <strong>APM</strong> was the first combo I met when I stepped into the world of code.
            It was already legacy back then — now, it feels more like a trace left behind in time.
          </Blockquote>

          <Header>Now Exploring: Languages</Header>
          <Grid>
            <GridTechItem name="Python" icon="python" size="30" />
            <GridTechItem name="Go" icon="go" size="30" />
            <GridTechItem name="Clojure" icon="clojure" size="30" />
          </Grid>
          <Blockquote>
            I’ve been eyeing <strong>Go</strong> for its solid rep, <strong>Clojure</strong> for its cryptic charm, and <strong>Python</strong>... well, still not sure where it fits in.
          </Blockquote>

          <Header>Styling & UI</Header>
          <Grid>
            <GridTechItem name="Tailwind CSS" icon="tailwind" size="30" star="1" />
            <GridTechItem name="Sass" icon="sass" size="30" />
            <GridTechItem name="less" icon="less" size="30" heart="1"/>
            <GridTechItem name="Bootstrap" icon="bootstrap" size="30" />
            <GridTechItem name="CSS" icon="css3" size="30" />
          </Grid>
          <Blockquote>
            Been rocking <strong>Less</strong> for like a decade. Still hits different.<br />
            <strong>Bootstrap</strong> feels legacy, but hey — they’re still shipping updates.
          </Blockquote>

          <Header>Databases</Header>
          <Grid>
            <GridTechItem name="MongoDB" icon="mongodb" size="30" />
            <GridTechItem name="PostgreSQL" icon="postgres" size="30" />
            <GridTechItem name="MySQL" icon="mysql" size="30" />
          </Grid>
          <Blockquote>
            I prefer seals over dolphins. Elephants? Still too much, every time.
          </Blockquote>

          <Header>Infra & DevOps</Header>
          <Grid>
            <GridTechItem name="Vercel" icon="vercel" size="30" star="2" heart="1" />
            <GridTechItem name="Serverless" icon="serverless" size="30" />
            <GridTechItem name="AWS" icon="aws" size="30" />
            <GridTechItem name="Firebase" icon="firebase" size="30" />
            <GridTechItem name="Clodflare" icon="clodflare" size="30" />
            <GridTechItem name="nginx" icon="nginx" size="30" />
          </Grid>
          <Blockquote>
            Kinda obsessed with serverless stuff lately — <strong>Vercel</strong>’s been a game changer.
          </Blockquote>

          <Header>Tools</Header>
          <Grid>
          <GridTechItem name="Figma" icon="figma" size="30" />
            <GridTechItem name="Designer" icon="affinityDesigner" size="30" star="1" />
            <GridTechItem name="Publisher" icon="affinityPublisher" size="30" />
            <GridTechItem name="Illustrator" icon="illustrator" size="30" />
          </Grid>
          <Blockquote>
            <strong>Affinity Designer</strong> is way cheaper than Illustrator — and honestly, it’s the only tool I’ve ever gotten 100x my money’s worth from.
          </Blockquote>

          <Header>Others</Header>
          <Grid>
            <GridTechItem name="jQuery" icon="jquery" size="30" />
            <GridTechItem name="Wordpress" icon="PHP" size="30" />
            <GridTechItem name="GNUBoard(legacy)" icon="PHP" size="30" />
            <GridTechItem name="XE(legacy)" icon="PHP" size="30" />
          </Grid>
          <Blockquote>
            Once cutting-edge, now just tech fossils I used to swear by.<br />
            Wild fact: jQuery actually released version 4 in 2025.
          </Blockquote>
      </ContentBody>
    </ContentWrapper> 
  );
}
