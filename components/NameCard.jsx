
import Image from "next/image";
import TechIcon from "@/components/ui/TechIcon";

const nameCard = () => {
    
    const sns = [
        {
            name : "github",
            href : "https://github.com/changhyunme",
            icon : "github",
            iconSize : 18
        },
        {
            name : "instagram",
            href : "https://www.instagram.com/changhyun.me",
            icon : "instagram",
            iconSize : 18
        },
    ];

    return (
        <div className="" translate="no">
            <div className="max-w-36 md:max-w-24 mx-auto my-3 rounded-full overflow-hidden">
                <Image
                    src="https://asset.changhyun.me/img/temp/profile.webp"
                    alt="profile image"
                    width={800} // 실제 이미지 비율에 맞춰 조정 필요
                    height={800}
                    placeholder="blur"
                    blurDataURL="https://asset.changhyun.me/img/temp/profile.jpeg"
                    loading="lazy"
                    className={`saturate-50 brightness-150`}
                    unoptimized
                />
            </div>
            <div className="mt-3 text-center">
                <p className="text-text text-lg capitalize font-bold">
                    changhyun cho
                </p>
                <p className="text-text text-sm capitalize">
                    web developer
                </p>
            </div>
            <div className="py-3 flex flex-row gap-2 justify-center">
                {sns.map((item, idx) => (
                    <div className="text-textWhite" key={idx}>
                        <a href={item.href} target="_blank" rel="noopener noreferrer"> 
                            <TechIcon name={item.icon} size={item.iconSize} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default nameCard;