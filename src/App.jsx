import { useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";

import Hero from "./pages/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Work from "./pages/Work/Work.jsx";

function App() {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });

  const [count, setCount] = useState(0);

  return (
    <div>
      <ReactLenis root />
      <Navbar></Navbar>
      <Hero></Hero>
      <Work></Work>
    </div>
  );
}

export default App;
