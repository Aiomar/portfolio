function Prog() {
  return(
  <div class="max-w-9/12 w-5/12 mb-2 flex flex-col items-center bg-gray-900 border border-gray-600 rounded-3xl shadow md:flex-row   hover:bg-slate-900 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Programming Languages</h5>
      <div className="flex flex-wrap justify-center space-x-4">
        <div>
          <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">
            <img src="/assets/c-1.svg" className="w-20 hover:scale-75" alt="" />
          </a>
        </div>
        <div>
          <a href="https://isocpp.org/" target="_blank">
            <img src="/assets/c++.svg" className="w-20 hover:scale-75"  alt="" />
          </a>
        </div>
        <div>
          <a href="https://www.python.org/" target="_blank">
            <img src="/assets/python-svgrepo-com.svg" className="w-20 hover:scale-75" alt="" />
          </a>
        </div>
        <div>
          <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">
            <img src="/assets/html-1.svg" className="w-20 hover:scale-75" alt="" />
          </a>

        </div>
        <div>
          <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">
            <img src="/assets/css-3.svg" className="w-20 hover:scale-75" alt="" />
          </a>
        </div>
        <div>
          <a href="https://www.javascript.com/" target="_blank">
            <img src="/assets/js-svgrepo-com.svg" className="w-20 hover:scale-75" alt="" />
          </a>
        </div>
        <div>
          <a href="https://www.php.net/" target="_blank">
            <img src="/assets/php-svgrepo-com.svg" className="w-20 hover:scale-75" alt="" />
          </a>
        </div>
      </div>

    </div>
  </div>
  );
}

export default Prog;