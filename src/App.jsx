import { useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";

import Hero from "./pages/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Work from "./pages/Work/Work.jsx";
import AboutMe from "./pages/AboutMe/AboutMe.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  const lenis = useLenis((lenis) => {
    console.log(lenis);
  });

  const [count, setCount] = useState(0);

  return (
    <div>
      <ReactLenis root />
      <Navbar></Navbar>
      <Hero></Hero>
      <Work></Work>
      <AboutMe></AboutMe>
      <Contact></Contact>
    </div>
  );
}

export default App;
