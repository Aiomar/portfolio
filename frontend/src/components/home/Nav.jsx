import {
  FcBriefcase,
  FcBusinessman,
  FcBookmark,
  FcConferenceCall,
} from "react-icons/fc";

export default function Nav() {
  //Active Current Link
  const currentUrl = window.location.hash;
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <img
          src="assets/logo.svg"
          alt=""
          className="w-10 mr-10 ml-10 md:ml-0"
        />
      </div>
      <ul className="flex flex-col  mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-2">
        <li>
          <a
            href="#Home"
            className={
              currentUrl == "#Home"
                ? "block py-2 pr-4 pl-3 text-sky-500 lg:hover:bg-transparent lg:border-0 lg:p-0"
                : "block py-2 pr-4 pl-3  hover:text-sky-500 dark:text-white  dark:hover:text-sky-500 lg:hover:bg-transparent lg:border-0 lg:p-0"
            }
            aria-current="page"
          >
            <div className="flex justify-center items-center">
              <FcBusinessman />
              <p className="ml-1  poppins-semibold">About</p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#Projects"
            className={
              currentUrl == "#Projects"
                ? "block py-2 pr-4 pl-3 text-sky-500  lg:hover:bg-transparent lg:border-0 lg:p-0"
                : "block py-2 pr-4 pl-3  hover:text-sky-500 dark:text-white  dark:hover:text-sky-500 lg:hover:bg-transparent lg:border-0 lg:p-0"
            }
          >
            <div className="flex justify-center items-center">
              <FcBriefcase />
              <p className=" ml-1 poppins-semibold">Projects</p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#TechStack"
            className={
              currentUrl == "#TechStack"
                ? "block py-2 pr-4 pl-3 text-sky-500 lg:hover:bg-transparent lg:border-0 lg:p-0"
                : "block py-2 pr-4 pl-3  hover:text-sky-500 dark:text-white  dark:hover:text-sky-500 lg:hover:bg-transparent lg:border-0 lg:p-0"
            }
          >
            <div className="flex justify-center items-center">
              <FcBookmark />
              <p className="ml-1 poppins-semibold">Resume</p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            className={
              currentUrl == "#Contact"
                ? "block py-2 pr-4 pl-3 text-sky-500 lg:hover:bg-transparent lg:border-0 lg:p-0"
                : "block py-2 pr-4 pl-3  hover:text-sky-500 dark:text-white  dark:hover:text-sky-500 lg:hover:bg-transparent lg:border-0 lg:p-0"
            }
          >
            <div className="flex justify-center items-center">
              <FcConferenceCall />
              <p className="ml-1 poppins-semibold">Contact</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
