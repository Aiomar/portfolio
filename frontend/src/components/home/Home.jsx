import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Bio from "./Bio";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";
import Tech from "./Tech";
import Form from "./Suggestion";
import Nav from "./Nav";

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
    <div className="relative min-h-screen bg-cover bg-center">
      <div className="fixed top-0 right-0 left-0 z-40">
        <Header toggleNavBar={toggleNavBar} />
      </div>

      {isOpen && (
        <aside
          className="bg-gray-100 dark:bg-gray-900 h-screen z-10 fixed  w-full shadow-lg shadow-gray-600 
          dark:shadow-gray-950"
          onClick={toggleNavBar}
        >
          <div className="lg:hidden mt-32">
            <Nav />
          </div>
        </aside>
      )}
      <div>
        <Bio />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Tech />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
