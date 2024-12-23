//react
import { useNavigate } from "react-router-dom";
//react icons
import { FaPenToSquare } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
//PropTypes
import PropTypes from "prop-types";

export default function Project({ id, image, title, details, status, link }) {
  const Navigate = useNavigate();
  return (
    <div>
      <div
        className="mt-5 ml-2 max-w-sm bg-gray rounded-2xl bg-white dark:bg-gray-800
      dark:border-gray-700 h-5/6  min-w-96 p-10 pt-3 border shadow m-5"
      >
        <div className="">
          <div className="flex felx-row float-end mb-1">
            <button
              onClick={() => {
                Navigate("/dashboard/upload-project", { state: {id} });
              }}
              className=" mr-1 hover:bg-blue-400 rounded-full p-2"
            >
              <FaPenToSquare color="black" size={20} />
            </button>
            {/*Delete suggestion button */}
            <button
              onClick={() => {
                fetch(`https://portfolio-8dam.onrender.com/project/${id}`, {
                  method: "DELETE",
                })
                  .then((res) => {
                    if (!res.ok) {
                      throw new Error();
                    }
                    console.log("Deleted project");
                    window.location.reload();
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
              className="rounded-full p-2 hover:bg-red-500"
            >
              <FaRegTrashCan color="black " size={20} />
            </button>
          </div>

          <img className="rounded-xl" src={image} alt="" />
          <div className="p-5">
            <a href={link} target="_blank">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-900">{details}</p>
            <p className="mb-3 font-bold text-gray-900">
              Status :
              {status == "notYet"
                ? " Not Yet ❗"
                : status == "finished"
                ? " Finshed ✅"
                : " Working On 👷"}
            </p>
            <a href={link} target="_blank">
              <button>
                <p className="flex items-center text-blue-500 hover:text-blue-700">
                  visit <FaRegArrowAltCircleRight className="ml-1" />
                </p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

//Prop validation
Project.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  details: PropTypes.string,
  status: PropTypes.string,
  link: PropTypes.string,
};
