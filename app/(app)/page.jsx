import Link from "next/link";
import EvolutionLog from "@/components/EvolutionLog";

const TechItem = ({ name, highlight = false }) => (
    <li className={`flex items-center gap-2 ${highlight ? "text-teal-500/90" : ""}`}>
        <span>{name}</span>
    </li>
);

export default function Page() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-300 font-mono selection:bg-teal-500/30">
            <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">

                {/* Header */}
                <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-2">
                            CHANGHYUN.ME
                        </h1>
                        <p className="text-zinc-500 text-sm">
                            Web Developer based in Seoul
                        </p>
                    </div>
                    <div className="flex gap-6 text-sm">
                        <Link href="/contact" className="text-teal-500 hover:text-teal-400 hover:underline underline-offset-4 transition-colors">
                            Contact
                        </Link>
                        <Link href="/legacy" className="text-zinc-500 hover:text-zinc-300 hover:underline underline-offset-4 transition-colors">
                            Legacy Site
                        </Link>
                    </div>
                </header>

                {/* Introduction */}
                <section className="mb-20 space-y-6 text-sm leading-relaxed text-zinc-400">
                    <p>
                        <strong className="text-zinc-200">Tech is just a tool.</strong> Direction and intention always come first.
                    </p>
                    <p>
                        I care more about <span className="text-teal-500">why</span> something should exist than how fast I can build it.
                        Structure over UI, maintainability over speed, context over features.
                        Clean code helps me think clearly — and that's the real goal.
                    </p>
                    <div className="pl-4 border-l-2 border-zinc-800 italic text-zinc-500">
                        "The Greeks said 'techne' was more than craft — it was a way of understanding the world by making."
                    </div>
                </section>

                {/* Evolution Log */}
                <EvolutionLog />

                {/* Philosophy */}
                <section className="mb-20">
                    <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">02. Philosophy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-zinc-900/30 p-6 rounded-sm border border-zinc-900">
                            <h3 className="text-zinc-200 font-bold mb-3 text-sm">Structure First</h3>
                            <p className="text-xs text-zinc-500 leading-relaxed">
                                I don't start with pixels. I start with data structures and user flows. If the logic is sound, the UI follows naturally.
                            </p>
                        </div>
                        <div className="bg-zinc-900/30 p-6 rounded-sm border border-zinc-900">
                            <h3 className="text-zinc-200 font-bold mb-3 text-sm">Minimal Dependencies</h3>
                            <p className="text-xs text-zinc-500 leading-relaxed">
                                Every package is a liability. I prefer native web APIs and custom implementations for core functionality over heavy libraries.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="mb-20">
                    <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">03. Tech Stack</h2>
                    <div className="space-y-12">

                        {/* Modern Framework */}
                        <div>
                            <h3 className="font-bold text-zinc-200 mb-1">Core Web: Modern Framework</h3>
                            <p className="text-xs text-zinc-500 mb-3 font-mono border-l-2 border-zinc-800 pl-3 italic">
                                "Built this site with Next.js + Tailwind. Pretty much my go-to stack these days."
                            </p>
                            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400 font-mono">
                                <TechItem name="Next.js" highlight />
                                <TechItem name="React" highlight />
                                <TechItem name="Tailwind CSS" highlight />
                            </ul>
                        </div>

                        {/* Experimental */}
                        <div>
                            <h3 className="font-bold text-zinc-200 mb-1">Core Web: Experimental</h3>
                            <p className="text-xs text-zinc-500 mb-3 font-mono border-l-2 border-zinc-800 pl-3 italic">
                                "I usually reach for Astro when someone asks me to whip up a clean site fast. Svelte? Looked easy at first... then it pooped on my expectations."
                            </p>
                            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400 font-mono">
                                <TechItem name="Astro" />
                                <TechItem name="SvelteKit" />
                            </ul>
                        </div>

                        {/* Node.js */}
                        <div>
                            <h3 className="font-bold text-zinc-200 mb-1">Core Web: Node.js</h3>
                            <p className="text-xs text-zinc-500 mb-3 font-mono border-l-2 border-zinc-800 pl-3 italic">
                                "Might be past its prime, but I still use it a lot — still feels fresh and exciting every time."
                            </p>
                            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400 font-mono">
                                <TechItem name="Node.js" />
                                <TechItem name="Express" />
                                <TechItem name="Socket.io" />
                                <TechItem name="ejs" />
                            </ul>
                        </div>

                        {/* Legacy Standard */}
                        <div>
                            <h3 className="font-bold text-zinc-200 mb-1">Core Web: Legacy Standard</h3>
                            <p className="text-xs text-zinc-500 mb-3 font-mono border-l-2 border-zinc-800 pl-3 italic">
                                "The APM was the first combo I met when I stepped into the world of code. It was already legacy back then — now, it feels more like a trace left behind in time."
                            </p>
                            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-600 font-mono">
                                <TechItem name="Apache" />
                                <TechItem name="PHP" />
                                <TechItem name="MySQL" />
                            </ul>
                        </div>

                        {/* Languages */}
                        <div>
                            <h3 className="font-bold text-zinc-200 mb-1">Now Exploring: Languages</h3>
                            <p className="text-xs text-zinc-500 mb-3 font-mono border-l-2 border-zinc-800 pl-3 italic">
                                "I've been eyeing Go for its solid rep, and Python... well, still not sure where it fits in."
                            </p>
                            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400 font-mono">
                                <TechItem name="Go" />
                                <TechItem name="Python" />
                            </ul>
                        </div>

                        {/* Styling & UI */}
                        <div>
                            <h3 className="font-bold text-zinc-200 mb-1">Styling & UI</h3>
                            <p className="text-xs text-zinc-500 mb-3 font-mono border-l-2 border-zinc-800 pl-3 italic">
                                "Been rocking Less for like a decade. Still hits different. Bootstrap feels legacy, but hey — they're still shipping updates."
                            </p>
                            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400 font-mono">
                                <TechItem name="Tailwind CSS" highlight />
                                <TechItem name="Sass" />
                                <TechItem name="Less" />
                                <TechItem name="Bootstrap" />
                                <TechItem name="CSS" />
                            </ul>
                        </div>

                        {/* Databases */}
                        <div>
                            <h3 className="font-bold text-zinc-200 mb-1">Databases</h3>
                            <p className="text-xs text-zinc-500 mb-3 font-mono border-l-2 border-zinc-800 pl-3 italic">
                                "I prefer seals over dolphins. Elephants? Still too much, every time."
                            </p>
                            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400 font-mono">
                                <TechItem name="MongoDB" />
                                <TechItem name="PostgreSQL" />
                                <TechItem name="MySQL" />
                            </ul>
                        </div>

                        {/* Infra & DevOps */}
                        <div>
                            <h3 className="font-bold text-zinc-200 mb-1">Infra & DevOps</h3>
                            <p className="text-xs text-zinc-500 mb-3 font-mono border-l-2 border-zinc-800 pl-3 italic">
                                "Kinda obsessed with serverless stuff lately — Vercel's been a game changer."
                            </p>
                            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400 font-mono">
                                <TechItem name="Vercel" highlight />
                                <TechItem name="Serverless" />
                                <TechItem name="AWS" />
                                <TechItem name="Firebase" />
                                <TechItem name="Cloudflare" />
                                <TechItem name="nginx" />
                            </ul>
                        </div>

                        {/* Tools */}
                        <div>
                            <h3 className="font-bold text-zinc-200 mb-1">Tools</h3>
                            <p className="text-xs text-zinc-500 mb-3 font-mono border-l-2 border-zinc-800 pl-3 italic">
                                "Affinity Designer is way cheaper than Illustrator — and honestly, it's the only tool I've ever gotten 100x my money's worth from."
                            </p>
                            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400 font-mono">
                                <TechItem name="Figma" />
                                <TechItem name="Affinity Designer" />
                                <TechItem name="Affinity Publisher" />
                                <TechItem name="Illustrator" />
                            </ul>
                        </div>

                        {/* Others */}
                        <div>
                            <h3 className="font-bold text-zinc-200 mb-1">Others</h3>
                            <p className="text-xs text-zinc-500 mb-3 font-mono border-l-2 border-zinc-800 pl-3 italic">
                                "Once cutting-edge, now just tech fossils I used to swear by. Wild fact: jQuery actually released version 4 in 2025."
                            </p>
                            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-600 font-mono">
                                <TechItem name="jQuery" />
                                <TechItem name="Wordpress" />
                                <TechItem name="GNUBoard" />
                                <TechItem name="XE" />
                            </ul>
                        </div>

                    </div>
                </section>

                {/* Footer */}
                <footer className="pt-12 border-t border-zinc-800 text-xs text-zinc-600 flex justify-between">
                    <span>© {new Date().getFullYear()} Changhyun Cho</span>
                    <div className="flex gap-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">GitHub</a>
                        <a href="mailto:hello@changhyun.me" className="hover:text-zinc-400 transition-colors">Email</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}
