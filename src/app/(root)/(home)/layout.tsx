import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = (props) => {
  return <>{props.children}</>;
};
export default Layout;
