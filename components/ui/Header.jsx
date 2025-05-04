const Header = ({ children, type, id, translate, depth = 2, className }) => {
    const Tag = `h${Math.min(Math.max(depth, 1), 6)}`; // depth는 1~6 사이로 제한
  
    return (
      <Tag
        className={`text-lg font-black italic text-textWhite pb-1 my-3 first:mt-0 last:mb-0 border-b-1 border-border ${className}`}
        id={id}
        translate={translate}
      >
        {children}
      </Tag>
    );
  };
  
  export default Header;
  