import React from 'react';
import Header from "./Header"
import Card from "./Card"
import About from "./About"
import Contact from './Contact';
import Prog from './Prog';
import Frame from './Frame';
import Projects from './Projects';
import Footer from './Footer';


function App() {
  return(
    <div className="relative min-h-screen bg-hacker bg-cover bg-center">
       <div className="absolute inset-0 backdrop-blur-sm "></div>
      <div className='relative z-10'>
        <Header/>
      </div>
      <div className="relative z-10 flex flex-wrap justify-center space-x-4">
        <Card/>
        <div>
          <About/>
          <Contact/>
        </div>
      </div>
      <div className="max-w-10/12 relative z-10 flex flex-wrap justify-center space-x-4">
        <Prog/>
        <Frame/>
      </div>
      <div className="relative z-10 flex flex-wrap justify-center space-x-4 ">
        <Projects/>
      </div>
      <div className="relative z-10">
        <Footer/>
      </div>
    </div>
  );
}

export default App
