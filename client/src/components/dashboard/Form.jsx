import PropTypes from "prop-types";

export default function Form({ action, method }) {
  //form submit using fetch api
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent default form submission behavior
    const formData = new FormData(e.target);

    //fetch api
    fetch(action, {
      method: method,
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          console.log("form submitted successfully");
          return res.json();
        }
        throw new Error("Failed to submit form");
      })
      .then(
        window.location.replace(
          "https://omaraidiportfolio.vercel.app/dashboard/current-projects"
        )
      )
      .catch((err) => console.error(err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="ml-12 mt-10 h-screen"
      encType="multipart/form-data"
    >
      <div className="space-y-12">
        <div className=" pb-12">
          <div>
            <div
              className="flex justify-center flex-col mt-10  
                gap-x-6 gap-y-8 sm:grid-cols-6"
            >
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm/6 font-bold font-mono text-black"
                >
                  Project Title
                </label>
                <div className="mt-2">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    autoComplete="street-address"
                    placeholder="Title goes here"
                    className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                    shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500  placeholder:text-sm
                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6
                    font-mono font-semibold pl-2"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm/6 font-bold font-mono text-black"
                >
                  Cover photo
                </label>
                <div
                  className="mt-2 flex justify-center rounded-lg border border-dashed
                  border-gray-900/25 px-6 py-10 bg-white  w-96"
                >
                  <div className="text-center ">
                    <div className="mt-4 flex text-sm/6 text-gray-600">
                      <label
                        htmlFor="image"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 
                          focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 
                          focus-within:ring-offset-2 hover:text-indigo-500 "
                      >
                        <span>Upload a file</span>
                        <input
                          id="image"
                          name="image"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs/5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-full w-96">
                <label
                  htmlFor="about"
                  className="block text-sm/6 font-bold font-mono text-black"
                >
                  Details
                </label>
                <div className="mt-2">
                  <textarea
                    id="details"
                    name="details"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                  focus:ring-indigo-600 sm:text-sm/6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm/6 text-black ">
                  Write a few sentences about the new project.
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm/6 font-bold font-mono text-black"
                >
                  Project Status
                </label>
                <div className="mt-2">
                  <select
                    name="status"
                    id="status"
                    className="relative cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left
                       text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none 
                       focus:ring-2 focus:ring-indigo-500 sm:text-sm/6 font-mono font-semibold  w-96"
                  >
                    <option value="">Select Project Status</option>
                    <option value="finished">finished✅</option>
                    <option value="notYet">Not yet❗</option>
                    <option value="currently">currently working on 👷</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm/6 font-bold font-mono text-black"
                >
                  Project Link
                </label>
                <div className="mt-2">
                  <input
                    id="link"
                    name="link"
                    type="text"
                    autoComplete="street-address"
                    className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                      ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                       focus:ring-indigo-600 sm:text-sm/6  w-96"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none
                   bg-sky-600 rounded-lg border border-slate-700 hover:bg-sky-5  00
                   focus:z-10 focus:ring-4 focus:ring-gray-100
                     dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400
                      dark:border-gray-600 text-white dark:hover:bg-gray-700  w-96"
              >
                Upload Now ✅
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

//prop validation
Form.propTypes = {
  action: PropTypes.string,
  method: PropTypes.string,
};
