import Link from "next/link"
import Image from "next/image";

import { formatDistanceToNow } from "date-fns";

import TechIcon from "@/components/ui/TechIcon";


const SubPageList = ({ data, href }) => {
    return (
        <Link href={`/journal/${data.slug || ""}`}>
            <div className="flex flex-col gap-1 cursor-pointer hover:opacity-90">
                <div className="flex flex-col-reverse md:flex-row gap-1">
                    <div className="relative flex-1 px-2 py-2 md:px-3 md:rounded-tl-md bg-ui/50 md:h-[128px] overflow-y-hidden">
                        <div className="">
                            <h3 className="font-bold">{data.title}</h3>
                        </div>
                        <div className="text-testSub">
                            <p className="text-sm">
                                <span className="text-text/50">
                                    {data.description}
                                </span>
                                {data.keywords.map((keyword, i) => (
                                    <span key={i} className="italic font-bold text-text/70"> #{keyword}</span>
                                ))}
                            </p>
                        </div>
                        <div className="hidden md:block absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-0% from-ui to-transparent">

                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        {data.thumbnails && data.thumbnails.map((thumb, i) => (
                            <div key={i} 
                                 className={`aspect-video md:aspect-sqare flex-1 w-32 rounded-t-md md:rounded-t-none last:rounded-tr-md overflow-hidden
                                             flex items-center justify-center
                                            ${i===1 && "hidden md:block"}`}
                            >
                                <Image
                                    src={`https://asset.changhyun.me/img/temp/${thumb.src.split('/').pop().replace(/\.[^/.]+$/, '.webp')}`}
                                    alt={thumb.alt}
                                    width={800} // 실제 이미지 비율에 맞춰 조정 필요
                                    height={800}
                                    placeholder="blur"
                                    blurDataURL={thumb.blur || `/thumbs/temp/${thumb.src.split('/').pop()}`}
                                    loading="lazy"
                                    className={`saturate-60 object-cover`}
                                    unoptimized
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row items-center bg-ui/50 rounded-b-md text-sm">
                    <div className="flex-1 flex flex-row gap-2 px-2 py-1 md:px-3 ">
                        <span className="font-light text-text/70">Posted {formatDistanceToNow(new Date(data.datetime), { addSuffix: true })}</span>
                        <span className="hidden font-light text-text/30">| Posted by Changhyun Cho</span>
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