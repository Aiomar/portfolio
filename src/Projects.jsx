function Projects() {
  return(   
    <div id="project-card" class="max-w-10/12 w-10/12  flex flex-col items-center bg-gray-900 border border-gray-600 rounded-2xl shadow md:flex-row  hover:bg-slate-900
        dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Projects</h5>

          <div className="hover:scale-90">
            <div class="max-w-sm p-6 b  bg-gray-800 border border-gray-600 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
              <img src="src/assets/Screenshot 2024-10-24 153657.png" alt="" className="rounded-2xl"/>
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Shoping TN</h5>
                </a>
                <p class="mb-3 font-normal text-white dark:text-gray-400">
                  A Shoping web application made wih laravel
                </p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  More
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
            </div>
          </div>

        </div>
    </div>
  );
}

export default Projects;