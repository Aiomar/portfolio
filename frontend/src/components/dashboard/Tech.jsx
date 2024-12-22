import PropTypes from "prop-types";
import { FaRegTrashCan } from "react-icons/fa6";
export default function Tech({ id, link, logo, title, type }) {
  return (
    <div className="w-48 h-48 pl-12 pb-12 pr-12 pt-2 bg-white mb-3 hover:scale-105  m-5 shadow rounded-2xl">
      <a
        href={link}
        target="_blank"
        className="flex flex-col items-center justify-center"
      >
        {/*Delete tech button */}
        <button
          onClick={() => {
            //!debug
            console.log("Tech stack ID:", id); // Log the ID before making the request

            if (!id) {
              console.log("ID is undefined or null");
              return; // Prevent making the request if ID is not valid
            }
            fetch(`http://localhost:3000/techstack/${id}`, {
              method: "DELETE",
            })
              .then((res) => {
                if (!res.ok) {
                  throw new Error("Failed to delete the tech stack");
                }
                console.log("Deleted project");

                window.location.reload();
              })
              .catch((error) => {
                console.log("Error:", error); // Log the error for debugging
              });
          }}
          className="rounded-full p-2 hover:bg-red-500"
        >
          <FaRegTrashCan color="black " size={20} />
        </button>
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
