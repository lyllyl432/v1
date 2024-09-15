import React from "react";
interface Props {
  children?: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="lg:min-h-screen  max-w-6xl mx-auto px-9">{children}</main>
  );
};

export default Layout;
