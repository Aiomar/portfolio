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
      className="flex flex-col items-center justify-center w-full"
    >
      <div className="grid grid-cols-3 md:grid-cols-10">
        <Social
          name="aidi360omar@gmail.com"
          details="send me an email"
          img="assets/gmail.svg"
          link="mailto:aidi360omar@gmail.com"
        />
        <Social
          name="Omar Aidi"
          details="Contact me on Facebook"
          img="assets/facebook.svg"
          link="https://www.facebook.com/omar.aidi.12139"
        />
        <Social
          name="omar.ai.di"
          details="Contact me on Instagram"
          img="assets/instagram.svg"
          link="https://www.instagram.com/omar.ai.di/"
        />

        {/*Github Card */}

        <Social
          name="omar aidi"
          details="Visit My Github profile "
          img="assets/github.svg"
          link="https://github.com/Aiomar"
        />

        <Social
          name="Dev & Coding"
          details="Visit My Discord Server"
          img="assets/discord.svg"
          link="https://discord.gg/dzWm6DCztZ"
        />

        <Social
          name="omar aidi"
          details="Visit My Fiverr profile "
          img="assets/fiverr.svg"
          link="https://www.fiverr.com/omaraydi/buying?source=avatar_menu_profile"
        />
      </div>
    </motion.div>
  );
}
