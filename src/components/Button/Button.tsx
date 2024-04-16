import React from "react";

interface ButtonProps {
  onClick: () => void;
  type: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
