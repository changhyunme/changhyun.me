import Image from "next/image";
import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";


import ContentWrapper from "@/components/ContentWrapper";
import ContentBody from "@/components/ContentBody";
import PageHeader from "@/components/ui/PageHeader";
import PageFooter from "@/components/ui/PageFooter";
import Header from "@/components/ui/Header";
import Blockquote from "@/components/ui/Blockquote";
import TechIcon from "@/components/ui/TechIcon";
import { formatDistanceToNow } from "date-fns";


import info from "@/app/info.config.js";
export async function generateMetadata({ params }) {
  const staticParams = await generateStaticParams();
  const slug = params.slug;

  const matched = staticParams.find((item) => item.slug === slug);
  if (!matched) {
    return {
      title: `Not Found – ${info.title}`,
      description: "This page could not be found.",
    };
  }

  const filePath = path.join(process.cwd(), "app/journal/content", `${slug}.json`);

  try {
    const raw = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(raw);

    return {
      title: `${data.title} – Journal by ${info.title}`,
      description: data.description,
      keywords: data.keywords,
      openGraph: {
        title: `${data.title} – ${info.opengraph.site_name || info.title}`,
        description: data.description,
        url: `${info.opengraph.url}/journal/${slug}`,
        siteName: info.opengraph.site_name || info.title,
        images: data.thumbnails?.length > 0
          ? data.thumbnails.map((img) => ({
              url: `${info.opengraph.url}${img.path}`,
              alt: img.alt || data.title,
            }))
          : [
              {
                url: info.opengraph.image,
                alt: info.opengraph.image_alt,
              },
            ],
        locale: info.opengraph.locale,
        type: "article"
      },
      twitter: {
        card: "summary_large_image",
        title: data.title,
        description: data.description,
        creator: info.twitter.creator,
        images: data.thumbnails?.length > 0
          ? [`${info.opengraph.url}${data.thumbnails[0].path}`]
          : [info.twitter.image]
      }
    };
  } catch (e) {
    return {
      title: `Not Found – ${info.title}`,
      description: "This page could not be found.",
    };
  }
}

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "app/journal/content");
  const files = await fs.readdir(contentDir);
  return files
    .filter((f) => f.endsWith(".json"))
    .map((file) => ({ slug: file.replace(".json", "") }));
}

export default async function Page({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "app/journal/content", `${slug}.json`);

  let data;
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    data = JSON.parse(raw);
  } catch (e) {
    return notFound();
  }

  return (
    <ContentWrapper>
      <ContentBody className="text-text">
        <PageHeader title="Journal" />
        <Header translate="no" depth="2">{data.title}</Header>
        <div className="flex flex-col-reverse md:flex-row mb-3">
            <div className="text-sm text-textShadow mb-2">
            Posted {formatDistanceToNow(new Date(data.datetime), { addSuffix: true })}
            </div>

            {/* Technologies */}
            {data.technologies?.length > 0 && (
            <div className="flex flex-row gap-2 text-textSub md:ml-auto mb-3 md:md-0">
                {data.technologies.map((tech, i) => (
                <div key={i} className="flex flex-row items-center gap-1">
                    <TechIcon name={tech.icon} size={tech.size || 18} />
                    <span translate="no" className="text-text font-bold text-sm">{tech.name}</span>
                </div>
                ))}
            </div>
            )}
        </div>

        <div className="text-text leading-relaxed space-y-4 mb-6">
          
          <Blockquote>
            {data.description}
          </Blockquote>
          <p className="text-text">
            {data.keywords?.map((kw, i) => (
              <span key={i} translate="no" className="mr-2 italic">#{kw}</span>
            ))}
          </p>
        </div>

        {/* Thumbnails */}
        {/* {data.thumbnails?.length > 0 && (
          <div className="flex flex-row gap-2 mb-6">
            {data.thumbnails.map((thumb, i) => (
              <div key={i} className="w-40 aspect-square overflow-hidden rounded-md">
                <img src={thumb.path} alt={thumb.alt} className="object-cover w-full h-full saturate-60" />
              </div>
            ))}
          </div>
        )} */}

        {/* Content rendering */}
        <div className="space-y-4">
          {data.content?.map((block, i) => {
            if (block.type === "h1") return <Header key={i} depth="1">{block.content}</Header>;
            if (block.type === "h2") return <Header key={i} depth="2">{block.content}</Header>;
            if (block.type === "h3") return <Header key={i} depth="3">{block.content}</Header>;
            if (block.type === "h4") return <Header key={i} depth="4">{block.content}</Header>;
            if (block.type === "h5") return <Header key={i} depth="5">{block.content}</Header>;
            if (block.type === "h6") return <Header key={i} depth="6">{block.content}</Header>;
            if (block.type === "p") return <p key={i} className="font-light">{block.content}</p>;
            if (block.type === "blockquote") return <Blockquote key={i}>{block.content}</Blockquote>;
            if (block.type === "image") {
              return (
                <div key={i} translate="no" className={`select-none my-4 ${!block.position && "flex flex-col justify-center"}`}>
                  
                  <div className={`${!block.position && "flex justify-center"}`}>
                    <Image
                      src={`/thumbs/temp/${block.src.split('/').pop().replace(/\.[^/.]+$/, '.webp')}`}
                      alt={block.alt}
                      width={800} // 실제 이미지 비율에 맞춰 조정 필요
                      height={800}
                      placeholder="blur"
                      blurDataURL={block.blur || `/thumbs/temp/${block.src.split('/').pop()}`}
                      loading="lazy"
                      className={`rounded-md cursor-crosshair saturate-60 hover:saturate-100
                        ${block.position === "left" ? "w-full md:max-w-3xl md:hover:w-1/2 md:active:w-4/6 md:w-1/3 float-left mr-4 mb-4" : 
                        block.position === "right" ? "w-full md:max-w-3xl md:hover:w-1/2 md:active:w-4/6 md:w-1/3 float-right ml-4 mb-4" : 
                        block.position === "full" ? "w-full " :
                        "w-full md:w-4/7"} transition-all duration-300`}
                      unoptimized
                    />
                  </div>
                  {block.caption && (
                    <figure className={`text-xs text-center italic mt-3 text-text/50 ${(block.position === "full" || !block.position) ? "block" : "md:hidden"}`}>
                      <div className="mb-2">
                        {block.gear} / {block.caption} <br /> 
                        Taken in {block.location}
                      </div>
                      <span>
                        {block.copyright}
                      </span>
                    </figure>
                  )}

                </div>
              );
            }
            if (block.type === "clear") return <div key={i} className="clear-both"></div>;
            if (block.type === "code") {
                return (
                    <div key={i} className="my-6 text-sm">
                    <SyntaxHighlighter
                    language={block.language || "javascript"}
                    style={atomDark}
                    customStyle={{
                        // border:"1px solid #333",
                        borderRadius: "0.25rem",
                        padding: "1rem",
                        background: "oklch(12.9% 0.042 264.695)",
                        lineHeight: "1.5",
                        fontSize: "0.875rem",
                    }}
                    showLineNumbers
                    wrapLongLines
                    >
                    {block.content}
                    </SyntaxHighlighter>

                    </div>
                );
            }
            if (block.type === "info") {
              return (
                <div key={i} className="hidden md:flex flex-row gap-3 items-center border-1 border-info bg-info/10 text-text p-3 rounded-sm text-slate-800">
                  <div className="text-text">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill="currentColor" fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m-.5 5a1 1 0 1 0 0 2h.5a1 1 0 1 0 0-2zM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div className="">
                    {block.content}
                  </div>
                </div>
              )
            }
              
            return null;
          })}
        </div>

        <PageFooter />
      </ContentBody>
    </ContentWrapper>
  );
}
