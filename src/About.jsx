function About() {
  return(
    <div id="about-card">
      <div class="md:max-w-3xl mb-2 flex flex-col items-center  bg-gray-900 border border-gray-600 rounded-3xl shadow md:flex-row  hover:bg-slate-900 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">About Me</h5>
          <p class="mb-3 font-normal text-white dark:text-gray-400">
            Omar Aidi , 19 years old
            studying at <a href="https://isigk.rnu.tn/" className="text-yellow-500 hover:underline" target="_blank">ISIGK</a>
            <p>
              I was introduced to programming at a young age, which ignited my passion for technology. This early exposure motivated me to develop my skills, and I am now actively working towards becoming a senior full-stack developer.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;