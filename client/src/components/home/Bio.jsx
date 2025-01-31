import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";

export default function Bio() {
  const motionVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section
      id="About"
      className="w-full h-screen flex flex-col  items-center  bg-slate-100 dark:bg-gray-900 px-4 sm:px-8"
    >
      <motion.div
        ref={ref}
        className="mt-40 w-full max-w-5xl"
        variants={motionVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="relative">
          {/* Bio image */}
          <img
            src="/assets/avater.png"
            className="rounded-full w-36 sm:w-44 md:w-52 border-4 border-gray-200 shadow-md
             dark:shadow-gray-800 md:float-right md:ml-6 ml-32"
            alt="Omar Aidi"
          />
          {/* Bio title and text */}
          <div className="flex items-center flex-col  md:items-start">
            <p className="text-lg sm:text-xl md:text-lg font-bold tracking-wider dark:text-white text-gray-800">
              Hi There 👋 I'm
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Omar Aidi
            </h1>
            <p className="mt-2 text-blue-500 text-lg sm:text-xl font-semibold">
              Full Stack Web Developer
            </p>
          </div>
          {/* Bio info */}
          <div className="mt-8 text-sm sm:text-base md:text-md text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              19 years old Computer Science Student at Institut Supérieur
              d’Informatique et de Gestion de Kairouan. <br />
              I’m currently a junior Full Stack Web Developer looking for great
              work opportunities and actively working towards becoming a Senior
              Full Stack Web Developer.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
