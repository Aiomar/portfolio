import PropTypes from "prop-types";
import { FaRegTrashCan } from "react-icons/fa6";
export default function Tech({ id, link, logo, title, type }) {
  return (
    <div className="flex flex-col w-52 h-52 bg-white mb-3 hover:scale-105 m-5 shadow rounded-2xl p-2">
      <div className="w-full">
        <button
          onClick={() => {
            fetch(`http://localhost:3000/techstack/${id}`, {
              method: "DELETE",
            })
              .then((res) => {
                if (!res.ok) {
                  throw new Error("Failed to delete the tech stack");
                }
                console.log("Deleted project");
              })
              .catch((error) => {
                console.log("Error:", error); // Log the error for debugging
              });
          }}
          className="rounded-full p-2 hover:bg-red-500 float-right"
        >
          <FaRegTrashCan color="black " size={20} />
        </button>
      </div>
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
  id: PropTypes.string,
  link: PropTypes.string,
  logo: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
};
