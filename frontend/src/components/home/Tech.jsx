import Prog from "./Prog";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import Education from "./Education";
import FetchTechApi from "../../apis/home/FetchTechApi";
import Button from "./buttons/Button";

export default function Tech() {
  //Tech stack  Fetch Api call
  const stacks = FetchTechApi();

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

  //Nav controll
  //Toggle tech stack div
  const [toggleTechStack, setToggleTechStack] = useState(true);
  const updateToggleTech = () => {
    setToggleTechStack(true);
    setToggleEducation(false);
    setToggleExperience(false);
  };

  //Toggle education div
  const [toggleEducation, setToggleEducation] = useState(false);
  const updateToggleEducation = () => {
    setToggleEducation(true);
    setToggleTechStack(false);
    setToggleExperience(false);
  };

  //Toggle Experience div
  const [toggleExperience, setToggleExperience] = useState(false);
  const updateToggleExperience = () => {
    setToggleExperience(true);
    setToggleEducation(false);
    setToggleTechStack(false);
  };

  return (
    <section
      id="TechStack"
      className="flex flex-col items-center bg-slate-100 dark:bg-gray-900 w-full h-screen"
    >
      <h1 className="text-gray-gray-900 dark:text-white text-5xl roboto-medium mt-32">
        {" "}
        My Resume
      </h1>
      <nav className="flex justify-center w-full  mt-5 mb-10 mr-5">
        <Button
          className="w-56 h-16 ml-5 bg-gray-300 hover:bg-gray-300 dark:bg-gray-800 dark:text-white 
          roboto-regular dark:hover:bg-gray-700 rounded focus:ring-2 focus:ring-sky-400 text-xl"
          onClick={updateToggleTech}
          title={"Tech Stack"}
        />
        <Button
          className="w-56 h-16 ml-5 bg-gray-300 hover:bg-gray-300 dark:bg-gray-800 dark:text-white 
          roboto-regular dark:hover:bg-gray-700 rounded focus:ring-2 focus:ring-sky-400 text-xl"
          onClick={updateToggleEducation}
          title={" Education"}
        />
        <Button
          className="w-56 h-16 ml-5 bg-gray-300 hover:bg-gray-300 dark:bg-gray-800 dark:text-white 
          roboto-regular dark:hover:bg-gray-700 rounded focus:ring-2 focus:ring-sky-400 text-xl"
          onClick={updateToggleExperience}
          title={"Experience"}
        />
      </nav>
      {toggleTechStack && !toggleEducation && !toggleExperience ? (
        <div className="flex md:flex-col  items-center bg-slate-100 dark:bg-gray-900 w-full h-fit">
          <motion.div
            ref={ref}
            variants={motionVariants}
            initial="hidden"
            animate={mainControlls}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center w-full"
          >
            <div id="prog" className="grid grid-cols-3 md:grid-cols-6">
              {stacks.map((stack) => (
                <div key={stack._id}>
                  <Prog logo={stack.logo} link={stack.link} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      ) : toggleEducation && !toggleTechStack && !toggleExperience ? (
        <div
          id="Education"
          className="flex flex-col  items-center bg-slate-100 dark:bg-gray-900 w-full h-screen "
        >
          <motion.div
            ref={ref}
            variants={motionVariants}
            initial="hidden"
            animate={mainControlls}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Education
              title={"CS Baccalaureate Degree"}
              img={"uploads/bac.jpg"}
              details={"Graduated Bac Informatique 2024"}
            />
            <Education
              title={"  CS Licence Degree"}
              img={"uploads/licence.jpg"}
              details={"Currently Studying"}
            />
          </motion.div>
        </div>
      ) : (
        <div
          id="Experience"
          className="flex flex-col items-center bg-gray-100 dark:bg-gray-900 w-full h-screen"
        >
          <motion.div
            ref={ref}
            variants={motionVariants}
            initial="hidden"
            animate={mainControlls}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Education
              title={" Freelancer"}
              img={"uploads/freelance.jpg"}
              details={
                " Cureently A freelancer and Working on personnel projects to enhance my experience"
              }
            />
          </motion.div>
        </div>
      )}
    </section>
  );
}
