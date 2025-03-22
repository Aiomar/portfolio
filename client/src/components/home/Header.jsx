import { useState } from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";
import { FaRegMoon } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import {
  defaultTheme,
  currentTheme,
  toggleDarkMode,
} from "../../utils/control";

export default function Header({ toggleNavBar, isOpen, visible }) {
  //Dark theme button controller
  defaultTheme();
  const [dark, setDark] = useState(currentTheme());
  const updateClicked = () => {
    let mode = !dark;
    setDark(mode);
    toggleDarkMode(mode);
  };

  return (
    <header
      className="flex md:flex-row md:justify-center fixed right-0 left-0 z-50 
      max-h-96 w-full bg-slate-100 dark:bg-gray-950 "
    >
      <nav
        className="flex md:justify-center md:ml-0 w-full px-4 min-h-24 bg-slate-100 dark:bg-gray-950 
        lg:px-6 py-2.5"
      >
        <div className="flex items-center lg:order-2">
          <button
            onClick={toggleNavBar}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>

            {isOpen ? (
              <IoMdClose size={30} />
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 
                15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <Nav visible={visible} toggleNavBar={toggleNavBar} />
        </div>
      </nav>
      {/*Dark mode / Light mode */}
      <div className="flex flex-col justify-center items-center mr-5">
        <div
          className={
            dark
              ? "flex justify-center items-center md:ml-10 h-10 bg-white w-10 border-2 border-sky-400 rounded-xl"
              : "flex justify-center items-center md:ml-10 h-10 bg-slate-900 w-10 border-2 border-sky-400 rounded-xl"
          }
        >
          <button onClick={updateClicked}>
            {dark ? (
              <FaRegMoon size={20} />
            ) : (
              <IoSunnyOutline className="text-white" size={25} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

//Prop validation
Header.propTypes = {
  toggleNavBar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  visible: PropTypes.string,
};
