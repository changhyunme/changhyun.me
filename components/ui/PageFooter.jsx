const PageFooter = () => {
    const year = new Date().getFullYear();
  
    return (
      <div className="pt-40 pb-[70px] md:pb-3 border-t-1 border-border/30 text-right select-none" translate="no">
        <div className="font-black italic text-text/30">
          CHANGHYUN.me
        </div>
        <div className="text-text/30">
          © 2015-{year} All rights reserved.
        </div>
        <div className="text-text/30 mt-4">
          Thank you for <strong>Vercel</strong>
        </div>
      </div>
    );
  };
  
  export default PageFooter;