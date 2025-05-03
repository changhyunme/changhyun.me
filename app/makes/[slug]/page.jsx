import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";

import ContentWrapper from "@/components/ContentWrapper";
import ContentBody from "@/components/ContentBody";
import PageFooter from "@/components/ui/PageFooter";
import Header from "@/components/ui/Header";
import Blockquote from "@/components/ui/Blockquote";
import TechIcon from "@/components/ui/TechIcon";
import { formatDistanceToNow } from "date-fns";

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "app/makes/content");
  const files = await fs.readdir(contentDir);
  return files
    .filter((f) => f.endsWith(".json"))
    .map((file) => ({ slug: file.replace(".json", "") }));
}

export default async function Page({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "app/makes/content", `${slug}.json`);

  let data;
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    data = JSON.parse(raw);
  } catch (e) {
    return notFound();
  }

  return (
    <ContentWrapper>
      <ContentBody className="text-white/80">
        <Header translate="no" depth="1">{data.title}</Header>
        <div className="flex flex-col-reverse md:flex-row mb-3">
            <div className="text-sm text-white/40 mb-2">
            Posted {formatDistanceToNow(new Date(data.datetime), { addSuffix: true })}
            </div>

            {/* Technologies */}
            {data.technologies?.length > 0 && (
            <div className="flex flex-row gap-2 text-white/30 md:ml-auto mb-3 md:md-0">
                {data.technologies.map((tech, i) => (
                <div key={i} className="flex flex-row items-center gap-1">
                    <TechIcon name={tech.icon} size={tech.size || 18} />
                    <span translate="no" className="text-white/70 font-bold text-sm">{tech.name}</span>
                </div>
                ))}
            </div>
            )}
        </div>

        <div className="text-white/50 leading-relaxed space-y-4 mb-6">
          
          <Blockquote>
            {data.description}
          </Blockquote>
          <p className="text-white/30">
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
            if (block.type === "p") return <p key={i}>{block.content}</p>;
            if (block.type === "blockquote") return <Blockquote key={i}>{block.content}</Blockquote>;
            if (block.type === "image") {
              return (
                <div key={i} className="my-4">
                  <img
                    src={block.src}
                    alt={block.alt}
                    className={`rounded-md max-w-3xl 
                        ${block.float === "left" ? "w-full md:w-1/3 float-left mr-4 mb-4" : 
                        block.float === "right" ? "w-full md:w-1/3 float-right ml-4 mb-4" : 
                        "w-full my-4"}`}
                    />
                </div>
              );
            }
            return null;
          })}
        </div>

        <PageFooter />
      </ContentBody>
    </ContentWrapper>
  );
}
