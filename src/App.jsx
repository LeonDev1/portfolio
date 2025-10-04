import { useState, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import ClickSpark from "./ClickSpark";

import Hero from "./pages/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Work from "./pages/Work/Work.jsx";
import AboutMe from "./pages/AboutMe/AboutMe.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  const lenis = useLenis((lenis) => {
    console.log(lenis);
  });

  return (
    <ClickSpark sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div>
        <ReactLenis root />
        <Navbar></Navbar>
        <Hero></Hero>
        <Work></Work>
        <AboutMe></AboutMe>
        <Contact></Contact>
      </div>
    </ClickSpark>
  );
}

export default App;
