import { useEffect, forwardRef } from "react";
import { motion, useAnimation } from "motion/react";
import Contact from "./Contact";
import PropTypes from "prop-types";

const Bio = forwardRef(({ id, visible }, ref) => {
  const motionVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const mainControls = useAnimation();

  useEffect(() => {
    if (visible === "about") {
      mainControls.start("visible");
    }
  }, [visible, mainControls]);

  return (
    <section
      id={id}
      ref={ref}
      className="w-full h-screen flex flex-col items-center bg-slate-100 dark:bg-gray-900   px-4"
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
          <img
            src="/uploads/profile.png"
            className="hidden rounded-full w-36 sm:w-44 md:w-52 md:float-right md:ml-6 md:flex "
            alt="Omar Aidi"
          />
          <div className="md:hidden flex flex-col items-center mb-3">
            <img
              src="/uploads/profile.png"
              className="rounded-full w-36 sm:w-44 md:w-52  md:float-right md:ml-6 "
              alt="Omar Aidi"
            />
          </div>

          <div className="flex items-center flex-col  md:items-start">
            <p className="text-3xl sm:text-xl md:text-2xl font-bold tracking-wider dark:text-white text-gray-800">
              Hi There 👋 I m
            </p>
            <h1 className="mt-2l sm:text-4xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
              Omar Aidi
            </h1>
            <p className="mt-2 text-blue-500 md:text-3xl   sm:text-xl font-semibold text-2xl">
              Full Stack Web Developer
            </p>
          </div>
          <div className="mt-8 text-lg sm:text-base md:text-md text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              19 years old Computer Science Student at ISIGK I’m currently a
              junior Full Stack Web Developer looking for great work
              opportunities and actively working towards becoming a Senior Full
              Stack Web Developer.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5 md:mt-32">
          <Contact />
        </div>
      </motion.div>
    </section>
  );
});

Bio.propTypes = {
  id: PropTypes.string.isRequired,
  visible: PropTypes.string.isRequired,
};
Bio.displayName = "Bio";
export default Bio;
