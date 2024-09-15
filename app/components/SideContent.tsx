import React from "react";

interface Props {
  children?: React.ReactNode;
}

const SideContent: React.FC<Props> = ({ children }) => {
  return <div className="lg:w-1/2 lg:ml-auto mb-8">{children}</div>;
};

export default SideContent;
