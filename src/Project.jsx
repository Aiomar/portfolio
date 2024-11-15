function Project({ title, img, deatils, link, status }) {
  return (
    <div className="flex flex-col justify-center p-4 leading-normal">
      <div className="hover:scale-105">
        <div className="max-w-sm p-6 b  bg-gray-800 border border-sky-500 shadow-md shadow-sky-400 rounded-3xl ">
          <img src={img} alt="" className="rounded-2xl " />
          <a href={link}>
            <h5 className="mt-2 mb-2 text-2xl font-bold tracking-tight text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-white dark:text-gray-400">
            {deatils}
          </p>
          <label htmlFor="">
            <p className="font-mono text-white mt-2 mb-2 flex">
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
          <a
            href={link}
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
             text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 
             focus:outline-none focus:ring-blue-300 "
          >
            Open Project
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Project;
