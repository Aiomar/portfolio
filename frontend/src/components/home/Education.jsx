import PropTypes from "prop-types";

export default function Education({ title, img, details }) {
  return (
    <div id="edu" className="flex flex-col justify-center rounded-xl w-full mb-5 mt-10 md:mt-0">
      <div
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg 
        shadow md:flex-row w-56 md:w-96 md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800
      dark:hover:bg-gray-700 p-2"
      >
        <img
          className="object-cover w-48 h-32 rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={img}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {" "}
            {title}
          </h5>
          <p className="flex flex-row items-center mb-3 font-normal text-gray-700 dark:text-gray-400">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
}

//prop validation
Education.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  details: PropTypes.string,
};