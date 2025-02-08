import Project from "./Project";
import PropTypes from "prop-types";
import { useEffect, forwardRef } from "react";
import { motion, useAnimation } from "motion/react";
import FetchProjectApi from "../../apis/home/FetchProjectApi";

const Projects = forwardRef(({ id, visible }, ref) => {
  //Project fetch API
  const projects = FetchProjectApi();

  //On Scroll animation
  const motionVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const mainControls = useAnimation();

  useEffect(() => {
    if (visible === "projects") {
      mainControls.start("visible");
    }
  }, [visible, mainControls]);

  return (
    <section
      id={id}
      ref={ref}
      className="w-full md:min-h-screen md:max-h-fit flex justify-center items-center flex-col
      bg-slate-100 dark:bg-gray-900"
    >
      <motion.div
        ref={ref}
        variants={motionVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex justify-center items-center ml-5 md:mt-5 mt-10">
          <h5 className="mb-10 text-5xl font-semibold text-gray-900 dark:text-white">
            Projects
          </h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {projects.map((project) => (
            <Project
              key={project._id}
              title={project.title}
              deatils={project.details}
              link={project.link}
              repo={project.repo}
              img={project.image}
              status={project.status}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
});

Projects.propTypes = {
  id: PropTypes.string.isRequired,
  visible: PropTypes.string,
};
Projects.displayName = "Projects";
export default Projects;
