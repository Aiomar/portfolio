import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { FcFeedback } from "react-icons/fc";

export default function Form() {
  //On Scroll Animation
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
      id="Suggestion"
      className="flex flex-col justify-center items-center bg-slate-100 dark:bg-gray-900 w-full h-screen md:p-20"
    >
      <motion.div
        ref={ref}
        variants={motionVariants}
        initial="hidden"
        animate={mainControlls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <form
          action="http://localhost:3000/suggestion"
          method="post"
          className="w-full  p-10 rounded-2xl mb-4 "
        >
          <div className="mb-4 w-full">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium dark:text-white"
            >
              <div className="flex items-center">
                <p className="ml-1 roboto-regular">NAME</p>
              </div>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full px-5 py-2 mt-2 border border-gray-500 rounded-md focus:outline-none  focus:border-none 
              focus:ring-2 focus:ring-sky-500 roboto-regular dark:bg-slate-800 
             dark:placeholder:text-gray-200 text-white"
              placeholder="Enter your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium dark:text-white"
            >
              <p className="ml-1 roboto-regular">PHONE NUMBER</p>
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full px-5 py-2 mt-2 border border-gray-500 rounded-md focus:outline-none  
              focus:border-none focus:ring-2 focus:ring-sky-500 roboto-regular dark:bg-slate-800
              dark:placeholder:text-gray-200 text-white"
              placeholder="+216"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium dark:text-white"
            >
              <p className="ml-1 roboto-regular">EMAIL</p>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-5 py-2 mt-2 border border-gray-500 rounded-md focus:outline-none  
              focus:border-none  focus:ring-2 focus:ring-sky-500 dark:bg-slate-800 dark:placeholder:text-gray-200
              text-white"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium dark:text-white"
            >
              <p className="ml-1 roboto-regular"> MESSAGE</p>
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-5 py-2 mt-2 border border-gray-500 rounded-md focus:outline-none focus:border-none
               focus:ring-2 roboto-regular focus:ring-sky-500 dark:bg-slate-800 
              dark:placeholder:text-gray-200 text-white max-h-28"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="mb-5">
            <label
              htmlFor=""
              className="dark:text-white roboto-regular text-center"
            >
              Leave me a suggestion or a project idea or contact me if you want
              us to work together
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-sky-700 rounded-md hover:bg-sky-600 focus:outline-none"
          >
            <p className="flex flex-row items-center justify-center">
              <FcFeedback className="mr-1 "/> Submit
            </p>
          </button>
        </form>
      </motion.div>
    </section>
  );
}
