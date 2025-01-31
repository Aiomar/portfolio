import { LuTrash2 } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
export default function suggestion({
  id,
  fullName,
  email,
  message,
  uploadedAt,
}) {
  return (
    <div
      className="block ml-5 max-w-sm p-6 bg-white rounded-2xl  mb-3 min-w-96 min-h-56 shadow 
      hover:scale-105 hover:shadow-sm hover:shadow-gray-700 hover:ml-7"
    >
      <div className="float-end">
        <button
          onClick={() => {
            fetch(`https://portfolio-8dam.onrender.com/suggestion/${id}`, {
              method: "DELETE",
            })
              .then((res) => {
                if (!res.ok) {
                  throw new Error();
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          <LuTrash2
            size={30}
            className="hover:bg-red-400 p-1 rounded-3xl"
            color="black"
          />
        </button>
      </div>
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white roboto-regular ">
        <p className="flex items-center">
          <FaRegUserCircle className="mr-1" />
          <p className="text-gray-900 dark:text-gray-400  ">{fullName}</p>
        </p>
      </h5>
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white roboto-regular">
        <p className="flex items-center">
          <MdOutlineAttachEmail className="mr-1" />
          {email}
        </p>
      </h5>
      <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white roboto-medium">
        <p className="flex items-center">
          <IoChatbubbleEllipsesOutline className="mr-1" />
          Message{" "}
        </p>
        <p
          className=" ml-1   mt-1 font-normal text-gray-900  roboto-regular
          p-10 rounded-xl border"
        >
          {message}
        </p>
      </h5>
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white roboto-regular">
        <p className="flex items-center">
          <CiCalendarDate className="mr-1" />
          Uploaded at :{" "}
        </p>
        <p className=" ml-5 font-normal text-gray-900 dark:text-gray-400 roboto-regular">
          {uploadedAt}
        </p>
      </h5>
    </div>
  );
}
