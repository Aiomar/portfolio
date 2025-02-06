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
          className="w-10 mr-10 ml-10 md:ml-0 hidden md:flex"
        />
      </div>
      <ul className="flex flex-col  mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-2">
        <li className="ml-5 md:ml-0">
          <a
            href="#About"
            className={
              currentUrl == "#About"
                ? "block py-2 pr-4 pl-3 text-sky-500 lg:hover:bg-transparent lg:border-0 lg:p-0"
                : "block py-2 pr-4 pl-3  hover:text-sky-500 dark:text-white  dark:hover:text-sky-500 lg:hover:bg-transparent lg:border-0 lg:p-0"
            }
            aria-current="page"
          >
            <div className="flex md:justify-center items-center">
              <FcBusinessman className="text-3xl md:text-base" />
              <p className="ml-1  poppins-semibold text-3xl md:text-base">
                About
              </p>
            </div>
          </a>
        </li>
        <li className="ml-5 md:ml-0">
          <a
            href="#Projects"
            className={
              currentUrl == "#Projects"
                ? "block py-2 pr-4 pl-3 text-sky-500  lg:hover:bg-transparent lg:border-0 lg:p-0"
                : "block py-2 pr-4 pl-3  hover:text-sky-500 dark:text-white  dark:hover:text-sky-500 lg:hover:bg-transparent lg:border-0 lg:p-0"
            }
          >
            <div className="flex md:justify-center items-center">
              <FcBriefcase className="text-3xl md:text-base" />
              <p className=" ml-1 poppins-semibold text-3xl md:text-base">
                Projects
              </p>
            </div>
          </a>
        </li>
        <li className="ml-5 md:ml-0">
          <a
            href="#Resume"
            className={
              currentUrl == "#Resume"
                ? "block py-2 pr-4 pl-3 text-sky-500 lg:hover:bg-transparent lg:border-0 lg:p-0"
                : "block py-2 pr-4 pl-3  hover:text-sky-500 dark:text-white  dark:hover:text-sky-500 lg:hover:bg-transparent lg:border-0 lg:p-0"
            }
          >
            <div className="flex md:justify-center items-center">
              <FcBookmark className="text-3xl md:text-base" />
              <p className="ml-1 poppins-semibold text-3xl md:text-base">
                Resume
              </p>
            </div>
          </a>
        </li>
        <li className="ml-5 md:ml-0">
          <a
            href="#contact"
            className={
              currentUrl == "#Contact"
                ? "block py-2 pr-4 pl-3 text-sky-500 lg:hover:bg-transparent lg:border-0 lg:p-0"
                : "block py-2 pr-4 pl-3  hover:text-sky-500 dark:text-white  dark:hover:text-sky-500 lg:hover:bg-transparent lg:border-0 lg:p-0"
            }
          >
            <div className="flex md:justify-center items-center">
              <FcConferenceCall className="text-3xl md:text-base" />
              <p className="ml-1 poppins-semibold text-3xl md:text-base">
                Contact
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
