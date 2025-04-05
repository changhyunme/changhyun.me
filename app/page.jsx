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
          <h1>My Embarrassing Personal Homepage</h1>
          <p>Hello, I'm Changhyun.</p> 
          <p>I've been building my homepage for almost 10 years.</p>
        </div>
      </div>
    </div> 
  );
}
