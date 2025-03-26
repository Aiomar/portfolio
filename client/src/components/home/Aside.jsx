import Nav from "./Nav";
import PropTypes from "prop-types";

export default function Aside({ toggleNavBar, visible }) {
  return (
    <aside
      className="bg-gray-100 dark:bg-gray-900  h-screen fixed  w-full shadow-lg shadow-gray-600 z-30"
      onClick={toggleNavBar}
    >
      <div className="lg:hidden mt-32">
        <Nav visible={visible} />
        <div className="flex flex-row justify-center items-center h-96">
          <img
            src="https://www.svgrepo.com/show/474372/code.svg"
            alt=""
            className="w-40 p-2"
          />
        </div>
      </div>
    </aside>
  );
}

Aside.propTypes = {
  visible: PropTypes.string,
  toggleNavBar: PropTypes.func,
};
