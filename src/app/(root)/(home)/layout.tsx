import Navbar from "@/components/shared/NavBar";
import Sidebar from "@/components/shared/SideBar";
import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <main className="relative h-full">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <section className="flex min-h-screen flex-1 flex-col p-4 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full h-full">{props.children}</div>
        </section>
      </div>
    </main>
  );
};
export default Layout;
