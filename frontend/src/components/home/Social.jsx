import PropTypes from "prop-types";

//Social component
export default function Social({ name, details, img, link }) {
  return (
    <div className="flex justify-center space-x-2 ">
      <a href={link} target="_blank" className="w-96 hover:scale-105">
        <div
          className="flex md:ml-10 justify-center max-w-sm rounded-3xl overflow-hidden shadow-md shadow-gray-400 
          dark:shadow-gray-950 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
          dark:text-white ml-5 mr-5 md:mr-0"
        >
          <img src={img} className="w-10" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 dark:text-gray-100 text-base">
              {details}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

//prop validation
Social.propTypes = {
  name: PropTypes.string,
  details: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string,
};
