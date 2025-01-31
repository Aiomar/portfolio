import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { BsFillPersonFill } from "react-icons/bs";
function About() {
  const motionVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControlls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView, mainControlls]);

  return (
    <section
      id="About"
      className="flex justify-center flex-col bg-white dark:bg-slate-850 w-full h-screen py-0 px-0 p-0"
    >
      <div className="flex justify-center">
        <h5
          className="font-mono mb-12 text-5xl mt-48 md:mt-0 font-bold tracking-tight
                 text-sky-600 dark:text-sky-500 hover:underline underline-offset-8"
        >
          <div className="flex justify-center">
            <BsFillPersonFill />
            About me
          </div>
        </h5>
      </div>
      <motion.div
        ref={ref}
        className="pb-6"
        variants={motionVariants}
        initial="hidden"
        animate={mainControlls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className=" mt-10 text-center">
          <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-white">
            Omar Aydi
          </h3>
          <div className="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              ></path>
            </svg>

            <div className=" font-bold tracking-wide text-gray-600 dark:text-white font-mono text-xl">
              From Tunisia-Kairouan
            </div>
          </div>
          <div className="w-full text-center">
            <div className="flex justify-center pt-8 pb-0 lg:pt-4"></div>
          </div>
        </div>
        <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
          <div className="flex flex-wrap justify-center ">
            <div className="w-full px-6 flex justify-center items-center">
              <p className="mb-4 font-light text-2xl leading-relaxed text-gray-600 dark:text-white text-left  ">
                {" "}
                <a
                  href="https://isigk.rnu.tn/"
                  className="dark:text-white underline decoration-sky-400 font-bold hover:underline"
                  target="_blank"
                >
                  
                </a>
                <br />
                <br />
                <p className="text-center">
                 
                </p>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
