export default function Home() 
{
  return (
    <div className="w-full flex flex-col md:flex-row text-neutral-600">
      <div className="w-full md:w-[180px] md:border-r-1 border-neutral-800">
        <div className="p-3">
          HOME
        </div>
      </div>
      <div className="w-full h-full md:flex-1 md:h-[486px] md:overflow-scroll scrollbar-hide">
        <div className="p-3">
          <p>I've been constantly creating and breaking it down, over and over again.</p>
          <p>Now, I really want to complete it once and for all.</p>
        </div>
      </div>
    </div> 
  );
}
