import { motion } from "framer-motion";
import "./AboutMe.css";
import Button from "../../components/Button/Button.jsx";
import Heading from "../../components/Heading/Heading.jsx";

import profileImg from "../../assets/img/profilepicture.webp";

function AboutMe() {
  return (
    <>
      <Heading content={"About Me"}></Heading>
      <section id="about-me">
        <div className="about-wrapper">
          <motion.img
            className="about-img full-shadow"
            src={profileImg}
            alt="profilepicture"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <p className="about-text">
            Hi, ich bin Leon, 13 Jahre alt und Webdeveloper. Ich baue gern
            Webseiten und lerne dabei immer mehr über Programmieren und Design.
          </p>
          <Button bgColor={"black"} content={"Kontaktiere mich"}></Button>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
