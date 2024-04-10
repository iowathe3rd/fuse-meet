import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = (props) => {
  return <main>{props.children}</main>;
};

export default Layout;
