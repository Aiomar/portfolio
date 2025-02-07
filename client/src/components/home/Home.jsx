import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Bio from "./Bio";
import Projects from "./Projects";
import Footer from "./Footer";
import Resume from "./Resume";
import Form from "./Suggestion";
import Nav from "./Nav";
import Aside from "./Aside";

const Home = () => {
  //Recuperation d une message depuis l url (Get method)
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const message = params.get("message");

  //Affichage du message recuperer
  useEffect(() => {
    if (message) {
      alert(message);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [message]);

  //Open/Close Mobile Nav controll
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-screen max-h-fit relative overflow-x-hidden">
      <div className="fixed right-0 left-0 z-40 w-full">
        <Header toggleNavBar={toggleNavBar} isOpen={isOpen} />
      </div>
      {isOpen && (
        <Aside toggleNavBar={toggleNavBar}/>
      )}
      <Bio />
      <Projects />
      <Resume />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
