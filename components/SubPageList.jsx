import Link from "next/link"
import Image from "next/image";

import { formatDistanceToNow } from "date-fns";

import TechIcon from "@/components/ui/TechIcon";


const SubPageList = ({ data, href }) => {
    return (
        <Link href={`/journal/${data.slug || ""}`}>
            <div className="flex flex-col gap-1 cursor-pointer hover:opacity-90">
                <div className="flex flex-col-reverse md:flex-row gap-1">
                    <div className="flex-1 px-2 py-2 md:px-3 md:rounded-tl-md bg-ui/50">
                        <div className="">
                            <h2 className="font-bold">{data.title}</h2>
                        </div>
                        <div className="text-testSub">
                            <p>
                                {data.description}
                                {data.keywords.map((keyword, i) => (
                                    <span key={i} className="ml-2 italic font-bold text-text/70">#{keyword}</span>
                                ))}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        {data.thumbnails && data.thumbnails.map((thumb, i) => (
                            <div key={i} className="aspect-sqare flex-1 w-32 rounded-t-md md:rounded-t-none last:rounded-tr-md overflow-hidden">
                                <Image
                                    src={thumb.path}
                                    alt={thumb.alt}
                                    width={800} // 실제 이미지 비율에 맞춰 조정 필요
                                    height={800}
                                    placeholder="blur"
                                    blurDataURL={thumb.blur || `/thumbs/temp/${thumb.path.split('/').pop()}`}
                                    loading="lazy"
                                    className={`saturate-60`}
                                    unoptimized
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row items-center bg-ui/50 rounded-b-md text-sm font-light text-textSub">
                    <div className="flex-1 flex flex-row gap-2 px-2 py-1 md:px-3 ">
                        <span>Posted {formatDistanceToNow(new Date(data.datetime), { addSuffix: true })}</span>
                        <span>Posted by Changhyun Cho</span>
                    </div>
                    <div className="flex flex-row gap-2 px-2">
                        {data.technologies && data.technologies.map((tech, i) => (
                            <TechIcon key={i} name={tech.icon} size={tech.size || 18} />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default SubPageList;