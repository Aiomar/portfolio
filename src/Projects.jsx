import Project from "./Project";

{
  /*This component is A section of products*/
}
function Projects() {
  return (
    <section
      id="Projects"
      className="w-full md:h-screen flex justify-center flex-col bg-slate-900 "
    >
      {/*Section Title */}
      <div className="flex justify-center md:mt-0 mt-10">
        <h5 className="mb-10 text-5xl font-bold text-center tracking-tight text-sky-500">
          🖥️My Projects
        </h5>
      </div>

      {/*Projects */}
      <div
        className="flex md:flex-row items-center rounded-2xl flex-col md:mb-0
       "
      >
        {/*Project 1 */}
        <Project
          title="Shop Tn "
          deatils="E-commerce webapp made with Laravel for buying and selling clothes "
          link=""
          img="/assets/Screenshot 2024-10-24 153657.png"
          status=""
        />
        {/*Project 2 */}
        <Project
          title="Med Yassine Portfolio"
          deatils="A Portfolio Website Made with Vite React Tailwind Css "
          link="https://yaskportfolio.vercel.app/#bio"
          img="assets/medport.png"
          status="finished"
        />
      </div>
    </section>
  );
}

export default Projects;
