export default function Home() 
{
  return (
    <div className="w-full flex flex-col md:flex-row text-neutral-600">
      <div className="w-full md:w-[180px] md:border-r-1 border-neutral-800">
        <div className="p-3">
          Contact
        </div>
      </div>
      <div className="w-full h-full md:flex-1 md:h-[486px] md:overflow-scroll scrollbar-hide">
        <div className="p-3">
          <p>But every time, I don't know how to finish it.</p>
          <p>However, I'm good at making websites for others.</p>
          <p>If you know how, please contact me at the email below.</p>
          <div className="flex flex-col md:flex-row md:gap-10 
                          border-1 border-neutral-800 p-3 mt-3 rounded-lg"
          >
            <div className="">
              [thumb]
            </div>
            <div className="">
              <ul>
                <li>email : changhyun.me@gmail.com</li>
                <li>phone : +82 10 2381 3221</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}
