import React from "react";
import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex bg-red-400">
        <span className="text-blue-300">
          <Link href="/">Aingaran</Link>
        </span>

        <ul className="header__nav">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
};

export default Layout;
