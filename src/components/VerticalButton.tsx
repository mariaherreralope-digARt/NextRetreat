// components/VerticalButton.tsx
import React from "react";

type VerticalButtonProps = {
  label: string;
  href: string;
  position?: "left"; 
};

const VerticalButton: React.FC<VerticalButtonProps> = ({
  label,
  href,
  position = "right",
}) => {
  return (
    <a
      href={href}
      className={`fixed top-1/2 transform -translate-y-1/2 px-4 py-3 
        rounded-l-2xl text-lighter uppercase font-extralight transition-colors duration-300
        ${
          position === "left"
            ? "right-0 rounded-r-2xl bg-btt hover:bg-btt/70"
            : "left-0 rounded-l-2xl bg-btt hover:bg-btt/30  hover:text-lighter border border-btt"
        }
      `}
      style={{ writingMode: "vertical-rl", textAlign: "center", transform: "rotate(180deg)", }}
    >
      {label}
    </a>
  );
};

export default VerticalButton;
