import { Link } from "react-router-dom";
import { SiGoogleanalytics } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import { MdImportantDevices } from "react-icons/md";
import { BsChatLeftDots } from "react-icons/bs";
import { MdDriveFolderUpload } from "react-icons/md";
import { TbFileUpload } from "react-icons/tb";
import { TbLayoutDashboardFilled } from "react-icons/tb";
function Nav() {
  //To do change link color when link path == current path
  /*const location = useLocation();
  let bgColor = location.pathname === "/dashboard" ? "bg-gray-100" : " ";*/

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-72 h-screen bg-white"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800 rounded-t-xl rounded-r-none ">
        <span
          className="flex justify-center items-center text-xl  font-bold whitespace-nowrap 
        text-white mb-10 "
        >
          <TbLayoutDashboardFilled className="mr-1" /> Dashboard
        </span>
        <span className="text-gray-200">Menu</span>
        <ul className="space-y-2 font-medium mt-2">
          <li>
            <Link
              to="/dashboard/analytics"
              className="flex items-center p-2 text-gray-100 font-semibold hover:bg-gray-500 rounded"
            >
              <span className="mr-3">
                <SiGoogleanalytics />
              </span>
              <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/current-projects"
              className={`flex items-center p-2 text-gray-100 font-semibold hover:bg-gray-500 rounded`}
            >
              <span className="mr-3">
                <GoProjectSymlink />
              </span>
              <span>Current Projects</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/techstack"
              className="flex items-center p-2 text-gray-100 font-semibold hover:bg-gray-500 rounded"
            >
              <span className="mr-3">
                <MdImportantDevices />
              </span>
              <span>My TechStack</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/suggestions"
              className="flex items-center p-2 text-gray-100 font-semibold hover:bg-gray-500 rounded"
            >
              <span className="mr-3">
                <BsChatLeftDots />
              </span>
              <span>Suggestions</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/upload-project"
              className="flex items-center p-2 text-gray-100  font-semibold hover:bg-gray-500 rounded"
            >
              <span className="mr-3">
                <MdDriveFolderUpload />
              </span>
              <span>Upload a Project </span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/update-techstack"
              className="flex items-center p-2 text-gray-100  font-semibold hover:bg-gray-500 rounded"
            >
              <span className="mr-3">
                <TbFileUpload />
              </span>
              <span>Update Tech-Stack</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Nav;
