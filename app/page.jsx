import ContentWrapper from "@/components/ContentWrapper";
import ContentBody from "@/components/ContentBody";
import Blockquote from "@/components/ui/Blockquote";  
import PageFooter from "@/components/ui/PageFooter";
import Header from "@/components/ui/Header";
import Banner from "@/components/Banner";

const versions = [
  {
    version: "v1.0",
    year: "2012",
    stack: "Apache / Pure HTML",
    desc: "To celebrate turning 20, I built my very first personal site using just static HTML and a bit of CSS. It was simple, but it got the job done. Back then, I was using the domain cholalo.me.",
    quote: "I studied HTML using MDN and W3Schools. In hindsight, that was probably the best decision I could've made."
  },
  {
    version: "v1.1",
    year: "Late 2012",
    stack: "Apache / HTML+CSS / jQuery",
    desc: "I discovered how to use iframes to separate out a sidebar (I know, I know...), and started sprinkling in jQuery. It felt powerful at the time — at least compared to vanilla HTML."
  },
  {
    version: "v2",
    year: "2013",
    stack: "Apache + PHP / jQuery",
    desc: "Started using PHP to add some dynamic behavior to the site. Simple scripts, nothing fancy — but it felt like real backend magic to me."
  },
  {
    version: "v2.1",
    year: "Mid 2013",
    stack: "Apache + PHP / JS",
    desc: "I started to move away from jQuery, frustrated by its weight. This led me to manipulate the DOM directly with JavaScript. I learned it through Codecademy — which was free at the time (not anymore in 2025).",
    quote: "I found joy in ditching the `$()` syntax and using `getElementById` directly instead."
  },
  {
    version: "v2.2",
    year: "Late 2013",
    stack: "Apache + PHP + MySQL / JS / CSS",
    desc: "I built a basic message board with comments using a MySQL backend. It was also my first attempt at responsive design with CSS media queries. I remember trying to create my own utility class system — kind of a DIY Tailwind before Tailwind. Bootstrap was big back then, but I opted for a 12-column layout instead of Bootstrap's 10. It just made more sense design-wise. (Also, shoutout to metric vs imperial units — I finally understood what Americans feel like using inches.)",
    quote: "CSS libraries never really clicked with me — at least, not until I met Tailwind."
  },
  {
    version: "v3",
    year: "2014",
    stack: "Apache + PHP + MySQL / JS / LESS",
    desc: "I started using PHP's include syntax to improve code reusability. Instead of creating separate pages, I routed everything through index.php using GET parameters — kind of an early, accidental version of MVC. That eventually got me curious about programming fundamentals like object-oriented design, algorithms, and data structures."
  },
  {
    version: "v4",
    year: "2015",
    stack: "Apache + PHP + MySQL / JS / LESS",
    desc: "This version was a continuation of the MVC-ish structure from v3. But I began taking development more seriously — reading books, exploring proper design patterns, and experimenting with automation tools. It was less of a 'hobby project' and more of a structured learning experience.",
    quote: "Back then, I started feeling the limitations of static, server-rendered websites. I used XMLHttpRequest to fetch content dynamically and render it with JS in the browser — which, looking back, was actually pretty close to how modern web apps work."
  },
  {
    version: "v5",
    year: "2017",
    stack: "WordPress",
    desc: "This was during my blogging phase. I set up a home server using a Mac and DAS (direct-attached storage), and started self-hosting my content. I needed something content-oriented, so I gave WordPress a proper shot — even made a few themes and plugins. I also made my first bit of money from programming that year, which felt huge.",
    quote: "Frameworks like Angular were gaining traction at the time, but honestly? I just couldn’t see the point of frontend frameworks back then. Didn’t know where to use them."
  },
  {
    version: "v6",
    year: "2018",
    stack: "nginx / Node.js / Express+EJS / Socket.io / LESS",
    desc: "This was my first foray into Node.js. Since JavaScript had always felt more natural to me than PHP, working with Node honestly felt like playing in a sandbox. Even now, I still enjoy spinning up quick services with Node over full-blown frameworks."
  },
  {
    version: "v7",
    year: "Now",
    stack: "Next.js / React / Tailwind CSS",
    desc: "After nearly five years of leaving my personal site untouched, I decided to bring it back. Hosting used to cost money — now, with Vercel's free tier, it's practically effortless. I kept putting off Tailwind for years, but I picked it up in about three days. Honestly? Should’ve used it sooner. I considered other stacks like Astro, Vue, and Svelte, but after a few weeks of testing, React still felt the most stable and flexible. As long as I keep the domain, I’ll probably keep this site alive for good.",
    quote: "Next.js is by far the most well-crafted framework I’ve ever used. It gives you complete freedom, while still making it obvious what you should be doing — like playing a well-designed game."
  }
];


export default function Home() 
{

  return (
    <ContentWrapper>
      <ContentBody className="text-white/80">
        {/* <Blockquote>1+1</Blockquote> */}

        <div>
          <Header translate="no">CHANGHYUN.me</Header>
          <div className="text-white/80 leading-relaxed space-y-4">
            <p>
              This is my personal website — a space for my portfolio, notes, and general thoughts on building things.
            </p>
            <p>
              <strong className="font-black italic" translate="no">CHANGHYUN.me</strong> has been built, scrapped, and rebuilt probably ten times since 2015 — not even kidding.
            </p>
            <p>
              It all started with just HTML and CSS, until I hit a wall and jumped into PHP.  
              From there, I wandered through Wordpress and Node.js, and now?  
              It’s running on <strong>Next.js</strong> with a little help from <strong>Vercel</strong>.
            </p>
            <p>
              Below is a rough timeline of each version — mostly based on memory, so take it with a grain of salt.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 my-6">
          {versions.map(({ version, year, stack, desc, quote }) => (
            <div
              key={version}
              className="flex flex-row gap-2 text-sm text-neutral-300"
            >
              <div className="w-30 flex flex-col md:flex-row gap-2" translate="no">
                <span className="w-10 font-bold text-neutral-100">{version}</span>
                <span className="w-20">{year}</span>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="font-semibold text-white" translate="no">{stack}</div>
                <div className="text-neutral-400">{desc}</div>
                {quote && quote.trim() !== "" && (
                  <Blockquote className="mt-1">{quote}</Blockquote>
                )}
              </div>
            </div>
          ))}
        </div>
        <PageFooter/>
      </ContentBody>
    </ContentWrapper> 
  );
}
