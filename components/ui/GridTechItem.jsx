import TechIcon from "@/components/ui/TechIcon";

const GridTechItem = ({ name, icon, size, star=0, heart=0 }) => {
    return (
        <div className="relative col-span-1 bg-ui/30 rounded-sm p-3 flex flex-row items-center gap-3 text-sm">
            <TechIcon name={icon} size={size} />
            <div translate="no">
                {name}
            </div>
            <div className="absolute bottom-2 right-2 flex flex-row items-center gap-1">
                {star > 0 && Array.from({ length: star }, (_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-yellow-400" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.396.195-.854-.149-.768-.57l1.4-5.03L.173 6.545c-.392-.392-.236-1.071.283-1.071h5.18l1.64-5.658c.2-.693 1.2-.693 1.4 0l1.64 5.658h5.18c.519 0 .675.68.283 1.071l-4.07 3.298 1.4 5.03c.086.421-.372.765-.768.57L8 13.187l-4.388 2.256z"/>
                    </svg>
                ))}

                {heart > 0 && Array.from({ length: heart }, (_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-pink-500" viewBox="0 0 32 32">
                        <path fill="currentColor" d="M22.5 5c-2.892 0-5.327 1.804-6.5 2.854C14.827 6.804 12.392 5 9.5 5C5.364 5 2 8.364 2 12.5c0 2.59 2.365 4.947 2.46 5.041L16 29.081l11.534-11.534C27.635 17.447 30 15.09 30 12.5C30 8.364 26.636 5 22.5 5"/>
                    </svg>
                ))}
            </div>
        </div>
);
}

export default GridTechItem;