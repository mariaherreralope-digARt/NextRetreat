import React from "react";

type VerticalButtonProps = {
  label: string;
  href: string;
  // position?: "left"; 
};

const VerticalButton: React.FC<VerticalButtonProps> = ({
  label,
  href,
}) => {
  return (
    <a
      href={href}
      className={`fixed top-1/2 transform -translate-y-1/2 px-4 py-1 
        rounded-r-2xl md:rounded-r-none text-lighter uppercase font-extralight 
        transition-colors duration-300
         bg-btt/70 md:bg-btt hover:bg-btt/70
         right-0 md:right-auto md:left-0
            md:rounded-l-2xl
      `}
      style={{ writingMode: "vertical-rl", textAlign: "center", transform: "rotate(180deg)", }}
    >
      {label}
    </a>
  );
};

export default VerticalButton;
