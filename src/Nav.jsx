function Nav() {
  return (
    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      <li>
        <a
          href="#Home"
          className="block py-2 pr-4 pl-3 active:text-sky-500 hover:text-sky-500 text-white lg:hover:bg-transparent lg:border-0 lg:p-0"
          aria-current="page"
        >
          🏠Home
        </a>
      </li>
      <li>
        <a
          href="#About"
          className={
            "block py-2 pr-4 pl-3  hover:text-sky-500 text-white lg:hover:bg-transparent lg:border-0 lg:p-0"
          }
        >
          👨‍🎓About Me
        </a>
      </li>
      <li>
        <a
          href="#Contact"
          className={
            "block py-2 pr-4 pl-3  hover:text-sky-500 text-white lg:hover:bg-transparent lg:border-0 lg:p-0"
          }
        >
          📲Contact
        </a>
      </li>
      <li>
        <a
          href="#TechStack"
          className="block py-2 pr-4 pl-3
                  text-white  hover:text-sky-500
                  lg:hover:bg-transparent lg:border-0 lg:p-0"
        >
          💻Tech Stack
        </a>
      </li>
      <li>
        <a
          href="#Projects"
          className="block py-2 pr-4 pl-3 text-white 
                  lg:hover:bg-transparent lg:border-0
                    hover:text-sky-500 lg:p-0"
        >
          🖥️My Projects
        </a>
      </li>
      <li>
        <a
          href=""
          className="block py-2 pr-4 pl-3 text-white lg:hover:bg-transparent lg:border-0
           lg:hover:text-primary-700 lg:p-0 
          "
        >
          Fiverr Profile
        </a>
      </li>
    </ul>
  );
}

export default Nav;
