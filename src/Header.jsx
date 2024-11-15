import { useState } from "react";
import Nav from "./Nav";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toogleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 shadow shadow-sky-400 bg-red-600 flex-wrap max-h-96 
      w-full"
    >
      <nav className="flex  justify-center md:ml-0 w-auto md:w-full px-4 min-h-24  bg-slate-900 lg:px-6 py-2.5">
        <div className="flex">
          <img src="assets/logo.svg" alt="" className="w-10 mr-10" />
        </div>
        <div className="flex items-center lg:order-2">
          <button
            onClick={toogleNavBar}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden
             hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
            "
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <Nav />
        </div>
        {isOpen && (
          <div className="flex basis-full flex-col items-center lg:hidden">
            <Nav />
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
