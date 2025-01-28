import PropTypes from "prop-types";
import { FaGithub, FaGlobe } from "react-icons/fa6";

export default function Project({ title, img, details, link, status }) {
  return (
    <div className="flex flex-col justify-center p-4">
      <div>
        <div
          className="max-w-sm h-96  p-3 bg-white dark:bg-gray-800 hover:bg-gray-100
          shadow-lg shadow-gray-300 dark:shadow-gray-950 rounded-3xl dark:hover:bg-gray-700 hover:scale-105"
        >
          <img src={img} alt="" className="rounded-2xl " />
          <a href={link}>
            <h5 className="mt-2 mb-2 text-2xl font-bold tracking-tight dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal dark:text-white ">{details}</p>
          <label htmlFor="">
            <p className="font-mono dark:text-white mt-2 mb-2 flex">
              🚨Project Status &nbsp;
              <p
                className={
                  status === "finished"
                    ? "text-emerald-500 hover:underline underline-offset-2"
                    : "text-orange-500 hover:underline underline-offset-2"
                }
              >
                {status === "finished" ? "finished✅" : "Not yet❗"}{" "}
              </p>
            </p>
          </label>
          <div className="mb-2">
            <a
              href={link}
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
             text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 
             focus:outline-none focus:ring-blue-300 "
            >
              <FaGithub />
            </a>
            <a
              href={link}
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
             text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 
             focus:outline-none focus:ring-blue-300 ml-2"
            >
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

//Prop validation
Project.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  details: PropTypes.string,
  link: PropTypes.string,
  status: PropTypes.string,
};
