const PageFooter = () => {
    const year = new Date().getFullYear();
  
    return (
      <div className="pt-40 pb-[70px] md:pb-3 border-t-1 border-border text-right select-none" translate="no">
        <div className="font-black italic text-textShadow">
          CHANGHYUN.me
        </div>
        <div className="text-textShadow">
          © 2015-{year} All rights reserved.
        </div>
        <div className="text-textShadow mt-4">
          Thank you for <strong>Vercel</strong>
        </div>
      </div>
    );
  };
  
  export default PageFooter;