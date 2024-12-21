import PropTypes from "prop-types";

export default function Button({ title, onClick }) {
  return (
    <button
      className="w-56 h-16 ml-5 bg-gray-300 hover:bg-gray-300 dark:bg-gray-800 dark:text-white 
      roboto-regular dark:hover:bg-gray-700 rounded focus:ring-2 focus:ring-sky-400 text-xl"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

//prop validation
Button.propTypes = {
  title: PropTypes.string,
  onClick : PropTypes.func.isRequired,
};
