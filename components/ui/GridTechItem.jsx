import TechIcon from "@/components/ui/TechIcon";

const GridTechItem = ({ name, icon, size }) => {
    return (
        <div className="col-span-1 bg-zinc-800/30 rounded-sm p-3 flex flex-row items-center gap-3 text-sm">
            <TechIcon name={icon} size={size} />
            <div>
                {name}
            </div>
        </div>
);
}

export default GridTechItem;