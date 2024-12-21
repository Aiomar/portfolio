import PropTypes from "prop-types";

export default function Tech({ link, logo, title, type }) {
  return (
    <div className="w-48 h-48 pl-12 pb-12 pr-12 pt-2 bg-white mb-3 hover:scale-105  m-5 shadow rounded-2xl">
      <a
        href={link}
        target="_blank"
        className="flex flex-col items-center justify-center"
      >
        <div className="flex justify-center">
          <img src={logo} alt="" className="w-12" />
        </div>
        <div>
          <div className="mt-2">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
              <p className="ml-2 text-lg font-medium">{title}</p>
            </h5>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
              <p className="ml-2 text-lg font-medium">{type}</p>
            </h5>
          </div>
        </div>
      </a>
    </div>
  );
}

//prop validation
Tech.propTypes = {
  link: PropTypes.string,
  logo: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
};
