import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Bio from "./Bio";
import Projects from "./Projects";
import Footer from "./Footer";
import Resume from "./Resume";
import Form from "./Suggestion";
import Aside from "./Aside";
import { ToastContainer, toast } from "react-toastify";
import { currentTheme } from "../../utils/control";

const Home = () => {
  // Retrieve message from URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const message = params.get("message");

  //* get the current theme for toast
  const theme = currentTheme() ? "light" : "dark";

  useEffect(() => {
    if (message) {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: { theme },
      });
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [message, theme]);

  // Mobile navigation control
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => setIsOpen((prev) => !prev);

  // Create a ref to store your sections’ DOM nodes
  const sectionsRefs = useRef([]);

  // State to track which section is visible
  const [visible, setVisible] = useState("about");

  // Setup Intersection Observer (using useLayoutEffect ensures refs are populated)
  useEffect(() => {
    const sections = ["about", "projects", "resume", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && sections.includes(entry.target.id)) {
            setVisible(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe each section stored in the refs array
    sectionsRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    const currentSection = sectionsRefs.current;
    return () => {
      currentSection.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="w-full h-screen max-h-fit relative overflow-x-hidden">
      <div className="fixed right-0 left-0 z-40 w-full">
        <Header toggleNavBar={toggleNavBar} isOpen={isOpen} visible={visible} />
      </div>
      <ToastContainer />
      {isOpen && <Aside toggleNavBar={toggleNavBar} visible={visible} />}
      <Bio
        ref={(el) => {
          sectionsRefs.current[0] = el;
        }}
        id="about"
        visible={visible}
      />
      <Projects
        ref={(el) => {
          sectionsRefs.current[1] = el;
        }}
        id="projects"
        visible={visible}
      />
      <Resume
        ref={(el) => {
          sectionsRefs.current[2] = el;
        }}
        id="resume"
        visible={visible}
      />
      <Form
        ref={(el) => {
          sectionsRefs.current[3] = el;
        }}
        id="contact"
        visible={visible}
      />
      <Footer />
    </div>
  );
};

export default Home;
