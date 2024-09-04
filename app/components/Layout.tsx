import React from "react";
interface Props {
  children?: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="lg:min-h-screen lg:pt-24 max-w-6xl mx-auto">
      {children}
    </main>
  );
};

export default Layout;
