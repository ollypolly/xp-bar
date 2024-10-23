import { ReactNode } from "react";

export const Button = ({ children }: { children: ReactNode }) => {
  return <button className="btn">{children}</button>;
};
