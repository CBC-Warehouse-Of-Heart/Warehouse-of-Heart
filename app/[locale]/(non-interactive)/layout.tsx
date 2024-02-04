import { PropsWithChildren } from "react";

// Non interactive layout here

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return <div className="h-full w-full bg-blue-500">{children}</div>;
};

export default Layout;
