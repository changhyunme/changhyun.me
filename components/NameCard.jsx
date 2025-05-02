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
                <img className="object-cover grayscale-100" 
                     src="profile.jpeg" 
                     alt="profile iamge"/>
            </div>
            <div className="mt-3 text-center">
                <h2 className="text-white text-lg capitalize font-bold">
                    changhyun cho
                </h2>
                <p className="text-white/40 text-sm capitalize">
                    web developer
                </p>
            </div>
            <div className="py-3 flex flex-row gap-2 justify-center">
                {sns.map((item, idx) => (
                    <div className="text-white" key={idx}>
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