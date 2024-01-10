import Footer from "@/components/ui/footer";
import { PropsWithChildren } from "react";

// Non interactive layout here

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return <div 
  style={{
    background: 'radial-gradient(circle, rgba(170,196,192,1) 0%, rgba(207,209,178,1) 50%, rgba(242,222,185,1) 100%)'
  }}
  className="min-h-screen w-full m-0 p-0">{children}
  </div>;
};

export default Layout;
