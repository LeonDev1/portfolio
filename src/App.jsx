import { ReactLenis, useLenis } from "lenis/react";
import ClickSpark from "./ClickSpark";
import "./i18n";
import { useTranslation } from "react-i18next";

import Heading from "./components/Heading/Heading.jsx";

import Hero from "./pages/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Work from "./pages/Work/Work.jsx";
import AboutMe from "./pages/AboutMe/AboutMe.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  const lenis = useLenis((lenis) => {
    console.log(lenis);
  });

  const { t } = useTranslation();

  return (
    <ClickSpark sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div id="root-div">
        <ReactLenis root />
        <Navbar></Navbar>
        <Hero></Hero>
        <Heading content={t("work")}></Heading>
        <Work></Work>
        <Heading content={"About Me"}></Heading>
        <AboutMe></AboutMe>
        <Heading content={t("contact")}></Heading>
        <Contact></Contact>
      </div>
    </ClickSpark>
  );
}

export default App;
