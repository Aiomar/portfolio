import { currentTheme } from "../../utils/control";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Bio() {
  //Controlles
  //Dark / light theme controll
  const [light, setLight] = useState(currentTheme());

  useEffect(() => {
    setLight(currentTheme());
  }, []);

  //On Scroll animation controll
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
      id="Home"
      className="w-full h-screen flex flex-col md:flex-row justify-center bg-slate-100 
      dark:bg-gray-900 flex-wrap"
    >
      <motion.div
        ref={ref}
        className="md:mt-40 mt-32"
        variants={motionVariants}
        initial="hidden"
        animate={mainControlls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <motion.div className="flex flex-col items-center md:flex-row">
          {/*Bio image */}
          <img
            src="/assets/avater.png"
            className="rounded-full w-52 border-gray-50 shadow-lg shadow-gray-600 dark:shadow-gray-950"
            alt=""
          />
          {/*Bio title */}
          <div className="mt-4 ml-20 flex flex-col justify-center ">
            <h5
              className="mb-2 ml-10 md:ml-0 text-2xl md:text-4xl font-bold  roboto-medium text-pretty 
              tracking-wider dark:text-white"
            >
              Hi, I' m Omar{" "}
            </h5>
            <div className="mt-4 flex justify-center ">
              <p
                className="flex justify-center items-center mb-3  text-gray-900
                md:text-5xl dark:text-white"
              >
                <div className="flex jutify-center roboto-medium mr-20 ">
                  I' m a{" "}
                  <p className="animation-terminal ml-1">
                    Full-Stack Web Developer
                  </p>
                </div>
              </p>
            </div>
          </div>
          {/*Bio info */}
        </motion.div>
        <div className="mt-10 ml-7">
          <p className="text-md  text-gray-900 dark:text-gray-200 roboto-regular mr-5">
            19 years old Computer Science Student Studying at Institut Supérieur
            d Informatique et de Gestion de Kairouan I m currently a junior Full{" "}
            <br />
            Stack Web developer, looking for a good work opportunities and I am
            actively working towards becoming a Senior Full-Stack Web
            developper.
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <div className="w-96">
            <DotLottieReact
              src="https://lottie.host/928b9a3f-9725-481e-8304-4c8023d998ab/eFvka5t0s4.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
