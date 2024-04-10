import StreamVideoProvider from "@/providers/StramClientProvider";
import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <main>
      <StreamVideoProvider>{props.children}</StreamVideoProvider>
    </main>
  );
};

export default Layout;
