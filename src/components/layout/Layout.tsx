import React from "react";
import Link from "next/link";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
  <Header />
      {children}
    </>
  );
};

export default Layout;
