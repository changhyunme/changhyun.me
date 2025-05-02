const PageFooter = () => {
    const year = new Date().getFullYear();
  
    return (
      <div className="pt-40 pb-3 border-t-1 border-neutral-800 text-right">
        <div className="uppercase font-black italic text-neutral-700">
          changhyun.me
        </div>
        <div className="text-neutral-700">
          © 2015-{year} All rights reserved.
        </div>
      </div>
    );
  };
  
  export default PageFooter;