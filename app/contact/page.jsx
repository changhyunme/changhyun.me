import ContentWrapper from "@/components/ContentWrapper";
import ContentSide from "@/components/ContentSide";
import ContentBody from "@/components/ContentBody";
import NameCard from "@/components/NameCard";
import PingBtn from "@/components/PingButton";

export default function Home() 
{
  return (
    <ContentWrapper>
      <ContentSide>
          <NameCard />
          <PingBtn name="Ping" className="mt-5 md:mt-auto" />
      </ContentSide>
      <ContentBody className="text-white/80">
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
      </ContentBody>
    </ContentWrapper> 
  );
}
