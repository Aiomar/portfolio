import Project from "./Project";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import FetchProjectApi from "../../apis/home/FetchProjectApi";
export default function Projects() {
  //Project fetch API
  const projects = FetchProjectApi();

  //On Scroll animation
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
      id="Projects"
      className="w-full md:min-h-screen md:max-h-fit flex justify-center items-center flex-col
       bg-slate-100 dark:bg-gray-900"
    >
      <motion.div
        ref={ref}
        variants={motionVariants}
        initial="hidden"
        animate={mainControlls}
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
}
