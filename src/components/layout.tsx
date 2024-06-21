import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

const Layout = () => {
  return (
    <div className="w-full flex">
      <SideBar />
      <div className="w-full bg-blue-50">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
