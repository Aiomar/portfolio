function Frame() {
  return (
    <div
      className="max-w-6/12 w-5/12 mb-2 flex flex-col items-center md:flex-row 
      border  border-sky-500 rounded-3xl shadow-md shadow-sky-400 bg-slate-900 md:h-60 ml-10"
    >
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div className="flex flex-wrap justify-center space-x-4">
          <div>
            <a href="https://laravel.com/" target="_blank">
              <img
                src="/assets/laravel-svgrepo-com.svg"
                className="w-20 hover:scale-75"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://nodejs.org/en" target="_blank">
              <img
                src="/assets/nodejs-1-logo-svgrepo-com.svg"
                className="w-20 hover:scale-75"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://react.dev/" target="_blank">
              <img
                src="/assets/react-svgrepo-com.svg"
                className="w-20 hover:scale-75"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://tailwindcss.com/" target="_blank">
              <img
                src="/assets/tailwind-svgrepo-com.svg"
                className="w-20 hover:scale-75"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://v4.vitejs.dev/" target="_blank">
              <img
                src="/assets/vite.svg"
                className="w-20 hover:scale-75"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://www.mysql.com/" target="_blank">
              <img
                src="/assets/mysql-logo-svgrepo-com.svg"
                className="w-20 hover:scale-75"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://mariadb.org/" target="_blank">
              <img
                src="/assets/mariadb-svgrepo-com.svg"
                className="w-20 hover:scale-75"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame;
