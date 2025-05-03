const PageFooter = () => {
    const year = new Date().getFullYear();
  
    return (
      <div className="pt-40 pb-[70px] md:pb-3 border-t-1 border-neutral-800 text-right" translate="no">
        <div className="uppercase font-black italic text-neutral-700">
          changhyun.me
        </div>
        <div className="text-neutral-700">
          © 2015-{year} All rights reserved.
        </div>
        <div className="text-neutral-700 mt-4">
          Thank you for <strong>Vercel</strong>
        </div>
      </div>
    );
  };
  
  export default PageFooter;