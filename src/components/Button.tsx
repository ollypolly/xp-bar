import { ButtonHTMLAttributes, ReactNode } from "react";

export const Button = ({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) => {
  return (
    <button {...rest} className="btn">
      {children}
    </button>
  );
};
