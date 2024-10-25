function Card() {
  return(
  <div id="home-card" class="mb-2 md:w-4/12 w-11/12 p-6 bg-gray-900 border border-gray-600 rounded-3xl shadow-lg  hover:bg-slate-900 dark:bg-gray-800 dark:border-gray-700">
    <div>
      <img src="src\assets\avater.png" class="rounded-full w-40 border-gray-50" alt="" />
    </div>
    <a href="#">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Hi, I'm Omar </h5>
    </a>
    <p class="mb-3 font-normal text-white dark:text-gray-400">I'm a junior Fullstack Web Developper from 
      <a href="https://en.wikipedia.org/wiki/Tunisia" target="_blank">
        <img src="src/assets/Flag_of_Tunisia.svg.png" alt="" srcset="" className="w-5 rounded-sm" /> 
      </a> 
    </p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      my cv
      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
  );
}

export default Card;