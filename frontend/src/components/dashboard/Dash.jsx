import { Outlet } from "react-router-dom";
import Nav from "../dashboard/Nav";

export default function Dash() {
  return (
    <div className="flex flex-row bg-gray-100 w-full ">
      <div className="w-64">
        <Nav />
      </div>
      <div className="w-full h-full p-1 ml-10">
        <Outlet />
      </div>
    </div>
  );
}
