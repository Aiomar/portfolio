import PropTypes from "prop-types";
import { FaRegEye, FaRegMessage } from "react-icons/fa6";
import { PiProjectorScreenBold } from "react-icons/pi";
export default function AnalyticsCard({ total, title }) {
  return (
    <div
      className="ml-5 w-60 h-56 p-6 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800
       dark:border-gray-700 hover:scale-105"
    >
      <a href="#">
        <h5 className="flex items-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title === "Visits" ? (
            <FaRegEye />
          ) : title === "Suggestions" ? (
            <FaRegMessage />
          ) : (
            <PiProjectorScreenBold />
          )}
          <p className="ml-1">{title}</p>
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Total : {total}
      </p>
    </div>
  );
}

//prop validation
AnalyticsCard.propTypes = {
  total: PropTypes.string,
  title: PropTypes.string,
};
