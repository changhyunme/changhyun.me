"use client";

import { useState } from "react";

const versions = [
    {
        version: "v10.0",
        year: "2025 — Present",
        stack: "Next.js / React / Tailwind CSS",
        desc: "Rebuilt with Next.js 14+ and Tailwind CSS. Focused on performance, modularity, and a raw, document-driven aesthetic.",
        quote: "Next.js is by far the most well-crafted framework I’ve ever used. It gives you complete freedom, while still making it obvious what you should be doing — like playing a well-designed game."
    },
    {
        version: "v7.0",
        year: "2025",
        stack: "Next.js / React / Tailwind CSS",
        desc: "After nearly five years of leaving my personal site untouched, I decided to bring it back. Hosting used to cost money — now, with Vercel's free tier, it's practically effortless. I kept putting off Tailwind for years, but I picked it up in about three days. Honestly? Should’ve used it sooner. I considered other stacks like Astro, Vue, and Svelte, but after a few weeks of testing, React still felt the most stable and flexible. As long as I keep the domain, I’ll probably keep this site alive for good.",
        quote: "Next.js is by far the most well-crafted framework I’ve ever used. It gives you complete freedom, while still making it obvious what you should be doing — like playing a well-designed game."
    },
    {
        version: "v6.0",
        year: "2018",
        stack: "nginx / Node.js / Express+EJS / Socket.io / LESS",
        desc: "This was my first foray into Node.js. Since JavaScript had always felt more natural to me than PHP, working with Node honestly felt like playing in a sandbox. Even now, I still enjoy spinning up quick services with Node over full-blown frameworks."
    },
    {
        version: "v5.0",
        year: "2017",
        stack: "WordPress",
        desc: "This was during my blogging phase. I set up a home server using a Mac and DAS (direct-attached storage), and started self-hosting my content. I needed something content-oriented, so I gave WordPress a proper shot — even made a few themes and plugins. I also made my first bit of money from programming that year, which felt huge.",
        quote: "Frameworks like Angular were gaining traction at the time, but honestly? I just couldn’t see the point of frontend frameworks back then. Didn’t know where to use them."
    },
    {
        version: "v4.0",
        year: "2015",
        stack: "Apache + PHP + MySQL / JS / LESS",
        desc: "This version was a continuation of the MVC-ish structure from v3. But I began taking development more seriously — reading books, exploring proper design patterns, and experimenting with automation tools. It was less of a 'hobby project' and more of a structured learning experience.",
        quote: "Back then, I started feeling the limitations of static, server-rendered websites. I used XMLHttpRequest to fetch content dynamically and render it with JS in the browser — which, looking back, was actually pretty close to how modern web apps work."
    },
    {
        version: "v3.0",
        year: "2014",
        stack: "Apache + PHP + MySQL / JS / LESS",
        desc: "I started using PHP's include syntax to improve code reusability. Instead of creating separate pages, I routed everything through index.php using GET parameters — kind of an early, accidental version of MVC. That eventually got me curious about programming fundamentals like object-oriented design, algorithms, and data structures."
    },
    {
        version: "v2.2",
        year: "Late 2013",
        stack: "Apache + PHP + MySQL / JS / CSS",
        desc: "I built a basic message board with comments using a MySQL backend. It was my first stab at responsive design with CSS media queries. I created my own utility class system — think q (1/4, 2q=2/4, 3q=3/4), t (1/3, 2t=2/3), h (1/2), and f (1) — a DIY Tailwind before Tailwind was a thing. I was more into pure CSS and nesting with tools like LESS, so Bootstrap’s pre-designed 12-column grid, while popular, didn’t quite vibe with me. Still, I went with a 12-column layout for its design flexibility.",
        quote: "I wasn’t big on pre-designed CSS frameworks — I was more excited about crafting my own styles with pure CSS and tools like LESS."
    },
    {
        version: "v2.1",
        year: "Mid 2013",
        stack: "Apache + PHP / JS",
        desc: "I started to move away from jQuery, frustrated by its weight. This led me to manipulate the DOM directly with JavaScript. I learned it through Codecademy — which was free at the time (not anymore in 2025).",
        quote: "I found joy in ditching the `$()` syntax and using `getElementById` directly instead."
    },
    {
        version: "v2.0",
        year: "2013",
        stack: "Apache + PHP / jQuery",
        desc: "Started using PHP to add some dynamic behavior to the site. Simple scripts, nothing fancy — but it felt like real backend magic to me."
    },
    {
        version: "v1.1",
        year: "Late 2012",
        stack: "Apache / HTML+CSS / jQuery",
        desc: "I discovered how to use iframes to separate out a sidebar (I know, I know...), and started sprinkling in jQuery. It felt powerful at the time — at least compared to vanilla HTML."
    },
    {
        version: "v1.0",
        year: "2012",
        stack: "Apache / Pure HTML",
        desc: "To celebrate turning 20, I built my very first personal site using just static HTML and a bit of CSS. It was simple, but it got the job done. Back then, I was using the domain cholalo.me.",
        quote: "I studied HTML using MDN and W3Schools. In hindsight, that was probably the best decision I could've made."
    }
];

export default function EvolutionLog() {
    const [isExpanded, setIsExpanded] = useState(false);

    // Preview items: Current (v10) + 2 past items (v9/v6 and v1)
    // Note: The legacy data has v7 as "Now", but the new site is v10.
    // I'll map v7 from legacy to v10 here for consistency with the new design, 
    // or just use the new v10 entry and keep the rest as history.
    // The `versions` array above merges the new v10 with the legacy history.

    return (
        <section className="mb-20">
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">01. Evolution Log</h2>
            <div className="space-y-8 relative border-l border-zinc-900 ml-2 pl-8">

                {!isExpanded ? (
                    <>
                        {/* Current (Preview) */}
                        <div className="relative">
                            <span className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-teal-500 ring-4 ring-zinc-950"></span>
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                                <h3 className="text-zinc-200 font-bold">{versions[0].version} {versions[0].stack.split('/')[0]}</h3>
                                <span className="text-xs text-teal-500 font-mono">{versions[0].year}</span>
                            </div>
                            <p className="text-sm text-zinc-500 mb-3">
                                {versions[0].desc}
                            </p>
                            <ul className="text-xs text-zinc-600 font-mono space-y-1">
                                <li>• App Router Architecture</li>
                                <li>• Server Components</li>
                                <li>• Zero-runtime CSS</li>
                            </ul>
                        </div>

                        {/* Past Item 1 (Faded) */}
                        <div className="relative opacity-60">
                            <span className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-zinc-800 ring-4 ring-zinc-950"></span>
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                                <h3 className="text-zinc-400 font-bold">{versions[2].version} Node.js</h3>
                                <span className="text-xs text-zinc-600 font-mono">{versions[2].year}</span>
                            </div>
                            <p className="text-sm text-zinc-600 line-clamp-2">
                                {versions[2].desc}
                            </p>
                        </div>

                        {/* Past Item 2 (Faded) */}
                        <div className="relative opacity-40">
                            <span className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-zinc-800 ring-4 ring-zinc-950"></span>
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                                <h3 className="text-zinc-400 font-bold">{versions[versions.length - 1].version} HTML/CSS</h3>
                                <span className="text-xs text-zinc-600 font-mono">{versions[versions.length - 1].year}</span>
                            </div>
                            <p className="text-sm text-zinc-600 line-clamp-2">
                                {versions[versions.length - 1].desc}
                            </p>
                        </div>

                        <button
                            onClick={() => setIsExpanded(true)}
                            className="mt-4 text-xs text-teal-500 hover:text-teal-400 hover:underline underline-offset-4 transition-colors flex items-center gap-1"
                        >
                            <span>Read full history</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </>
                ) : (
                    <>
                        {versions.map((item, index) => (
                            <div key={item.version} className="relative">
                                <span className={`absolute -left-[37px] top-1.5 w-3 h-3 rounded-full ring-4 ring-zinc-950 ${index === 0 ? 'bg-teal-500' : 'bg-zinc-800'}`}></span>
                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                                    <h3 className={`font-bold ${index === 0 ? 'text-zinc-200' : 'text-zinc-400'}`}>{item.version}</h3>
                                    <span className={`text-xs font-mono ${index === 0 ? 'text-teal-500' : 'text-zinc-600'}`}>{item.year}</span>
                                    <span className="text-xs text-zinc-600 font-mono hidden sm:inline-block"> — {item.stack}</span>
                                </div>
                                <div className="sm:hidden text-xs text-zinc-600 font-mono mb-2">{item.stack}</div>
                                <p className={`text-sm mb-3 ${index === 0 ? 'text-zinc-500' : 'text-zinc-500'}`}>
                                    {item.desc}
                                </p>
                                {item.quote && (
                                    <blockquote className="border-l-2 border-zinc-800 pl-3 italic text-xs text-zinc-600 my-3">
                                        "{item.quote}"
                                    </blockquote>
                                )}
                                {index === 0 && (
                                    <ul className="text-xs text-zinc-600 font-mono space-y-1 mt-3">
                                        <li>• App Router Architecture</li>
                                        <li>• Server Components</li>
                                        <li>• Zero-runtime CSS</li>
                                    </ul>
                                )}
                            </div>
                        ))}

                        <button
                            onClick={() => setIsExpanded(false)}
                            className="mt-8 text-xs text-zinc-500 hover:text-zinc-300 hover:underline underline-offset-4 transition-colors flex items-center gap-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 rotate-180">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                            <span>Collapse history</span>
                        </button>
                    </>
                )}
            </div>
        </section>
    );
}
