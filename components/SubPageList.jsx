import Link from "next/link"
import { formatDistanceToNow } from "date-fns";

import TechIcon from "@/components/ui/TechIcon";


const SubPageList = ({ data, href }) => {
    return (
        <Link href={`/makes/${data.slug || ""}`}>
            <div className="flex flex-col gap-1 cursor-pointer hover:opacity-90">
                <div className="flex flex-col-reverse md:flex-row gap-1">
                    <div className="flex-1 px-2 py-2 md:px-3 md:rounded-tl-md bg-neutral-700/70">
                        <div className="">
                            <h2 className="font-bold">{data.title}</h2>
                        </div>
                        <div className="text-white/30">
                            <p>
                                {data.description}
                                {data.keywords.map((keyword, i) => (
                                    <span key={i} className="ml-2 italic font-bold text-white/70">#{keyword}</span>
                                ))}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        {data.thumbnails && data.thumbnails.map((thumb, i) => (
                            <div key={i} className="aspect-sqare flex-1 w-32 rounded-t-md md:rounded-t-none last:rounded-tr-md overflow-hidden">
                                <img src={thumb.path} alt={thumb.alt} className="saturate-60"/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row items-center bg-neutral-700/40 rounded-b-md text-sm font-light text-white/30">
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