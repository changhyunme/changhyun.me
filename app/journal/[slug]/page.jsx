import Image from "next/image";
import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { formatDistanceToNow } from "date-fns";

import ContentWrapper from "@/components/ContentWrapper";
import ContentBody from "@/components/ContentBody";
import PageHeader from "@/components/ui/PageHeader";
import PageFooter from "@/components/ui/PageFooter";
import Header from "@/components/ui/Header";
import Blockquote from "@/components/ui/Blockquote";
import TechIcon from "@/components/ui/TechIcon";
import ImageBlock from "@/components/ImageBlock";

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
            
            if (block.type === "image") return <ImageBlock key={i} block={block} index={i} />;
            
            if (block.type === "clear") return <div key={i} className="clear-both"></div>;
            
            if (block.type === "code") {
              return (
                <div key={i} className="my-6 text-xs w-full">
                  <SyntaxHighlighter
                    language={block.language || "javascript"}
                    style={atomDark}
                    customStyle={{
                      // border:"1px solid #333",
                      maxWidth : "100%",
                      borderRadius: "0.25rem",
                      background: "oklch(12.9% 0.042 264.695)",
                      lineHeight: "1.5",
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
                      <path fill="currentColor" d="m21.17 15.4l-5.91-9.85c-.78-1.3-1.96-2.04-3.26-2.04s-2.48.74-3.26 2.03L2.83 15.4c-.44.73-.66 1.49-.66 2.21c0 .57.14 1.13.42 1.62C3.23 20.35 4.47 21 6 21h12c1.53 0 2.77-.65 3.41-1.77c.28-.49.42-1.02.42-1.58c.01-.74-.21-1.51-.66-2.25M12 8.45c.85 0 1.55.7 1.55 1.55s-.69 1.55-1.55 1.55c-.85 0-1.55-.7-1.55-1.55c0-.86.69-1.55 1.55-1.55m1.69 8.46c-.03.04-.8.92-2.07.92h-.15c-.51-.03-.93-.25-1.18-.63c-.31-.47-.36-1.11-.12-1.82l.41-1.22c.23-.68.01-.79-.11-.85l-.14-.02c-.25 0-.6.15-.71.21c-.1.05-.23.03-.31-.07c-.07-.1-.07-.23.01-.32c.03-.04.87-.99 2.22-.91c.51.03.93.25 1.18.63c.32.47.36 1.11.12 1.83l-.41 1.22c-.23.68-.01.79.11.85l.14.02c.25 0 .6-.15.71-.2c.11-.06.23-.03.31.07c.07.07.07.2-.01.29"/>
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
