import PropTypes from "prop-types";

export default function Prog({ key, logo, link }) {
  return (
    <div
      key={key}
      className="m-3 hover:scale-90 bg-gray-100 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 
      w-20 h-20 p-2 rounded-md shadow-md shadow-gray-400 dark:shadow-gray-900"
      data-popover-target="information"
    >
      <a href={link} target="_blank">
        <img src={logo} className="w-16" alt="" />
      </a>
    </div>
  );
}

//prop validtion
Prog.propTypes = {
  key: PropTypes.string,
  logo: PropTypes.string,
  link : PropTypes.string,
};