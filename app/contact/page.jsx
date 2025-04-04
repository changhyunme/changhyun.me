import CodeBlock from '@/components/CodeBlock';
export default function Contact() 
{
  return (
    <div className="flex flex-col md:flex-row text-neutral-600">
      <div className="w-screen md:w-[180px] md:border-r-1 border-neutral-800">
        <div className="p-3">
          Contact
        </div>
      </div>
      <div className="w-screen md:flex-1">
        <div className="relative p-3 space-y-8">
          완성하는 법좀 알려주셈 <br/> changhyun.me@gmail.com
        </div>
      </div>
    </div> 
  );
}