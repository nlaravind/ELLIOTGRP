import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 64 }) => {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="/logo.png"
        alt="Logo"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
};
