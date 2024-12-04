import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex flex-1  ">
          <div>
            <SideBar />
          </div>
          <main className="flex-1 sm:ml-64 mb-10">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};
