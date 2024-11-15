import Header from "./Header";
import Bio from "./Bio";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";
import Tech from "./Tech";

function App() {
  return (
    <div className="relative min-h-screen bg-cover bg-center">
      <div className="fixed top-0 right-0 left-0 z-10">
        <Header />
      </div>
      <div>
        <Bio />
      </div>
      <div>
        <About />
        <Contact />
      </div>
      <div>
        <Tech />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
