function About() {
  return (
    <section
      id="About"
      className="flex justify-center bg-slate-950 w-full h-screen py-0 px-0"
    >
      <div className="w-full h-full backdrop-blur-xl">
        <div className="mt-32 w-full flex justify-center  h-3/5  ">
          <div
            className=" w-4/5 mb-2 flex flex-col justify-center items-center 
         md:flex-row "
          >
            <div className="flex flex-col justify-center p-4 leading-normal ">
              <div className="flex justify-center">
                <h5 className="font-mono mb-12 text-5xl mt-48 md:mt-0 font-bold tracking-tight text-sky-500">
                  👨‍🎓About Me
                </h5>
              </div>
              <p className="flex flex-col mb-3 font-normal  text-white text-2xl text-center">
                <p className="mb-3 text-center font-mono font-bold">
                  Omar Aidi , 19 years old studying Computer Science at{" "}
                  <a
                    href="https://isigk.rnu.tn/"
                    className="text-sky-500 font-bold hover:underline"
                    target="_blank"
                  >
                    ISIGK
                  </a>
                </p>
                <p className="text-center font-mono font-bold">
                  I Was Introduced To Programming At a Young Age, which ignited
                  my passion for technology.
                  <br />
                  <p className="mt-2 mb-2 font-mono font-bold">
                    This early exposure motivated me to develop my skills
                  </p>
                  <p className="font-mono font-bold">
                    And Now I am actively working towards becoming a senior
                    full-stack developer.
                  </p>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
