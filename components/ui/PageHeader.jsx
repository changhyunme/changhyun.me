const PageHeader = ({ title }) => {
    return (
        <div className="border-b-1 pb-1 pt-0 md:pt-0 border-border mb-5 text-center md:text-left">
            <h1 className="text-2xl text-textWhite font-black italic">{title}</h1>
        </div>
    );
}

export default PageHeader;