import Social from "./Social";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";

export default function Contact() {
  //on scorll animation
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
    <motion.div
      ref={ref}
      variants={motionVariants}
      initial="hidden"
      animate={mainControlls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className=""
    >
      <div
        className="w-full mb-2 flex flex-col justify-center
          rounded-3xl md:flex-row  "
      >
        <div className="flex flex-col md:flex-row md:justify-center">
          {/*Gmail Card */}
          <div className="mb-5 md:mb-10">
            <Social
              name="aidi360omar@gmail.com"
              details="send me an email"
              img="assets/gmail.svg"
              link="mailto:aidi360omar@gmail.com"
            />
          </div>
          {/*Facebook Card */}
          <div className="mb-5 md:mb-10">
            <Social
              name="Omar Aidi"
              details="Contact me on Facebook"
              img="assets/facebook.svg"
              link="mailto:aidi360omar@gmail.com"
            />
          </div>
          {/*Insatgram Card */}
          <div className="mb-5">
            <Social
              name="omar.ai.di"
              details="Contact me on Instagram"
              img="assets/instagram.svg"
              link="https://www.instagram.com/omar.ai.di/"
            />
          </div>
        </div>
        {/*Github Card */}
        <div>
          <Social
            name="omar aidi"
            details="Visit My Github profile "
            img="assets/github.svg"
            link="https://github.com/Aiomar"
          />
        </div>
        {/*Discord Card */}
        <div className="mb-5 mt-5 md:mt-0">
          <Social
            name="Dev & Coding"
            details="Visit My Discord Server"
            img="assets/discord.svg"
            link="https://discord.gg/dzWm6DCztZ"
          />
        </div>
        {/*fiverr Card */}
        <div>
          <Social
            name="omar aidi"
            details="Visit My Fiverr profile "
            img="assets/fiverr.svg"
            link="https://www.fiverr.com/omaraydi/buying?source=avatar_menu_profile"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center mb-5"></div>
    </motion.div>
  );
}
