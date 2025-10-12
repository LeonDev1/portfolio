import { motion } from "framer-motion";
import "./AboutMe.css";
import Button from "../../components/Button/Button.jsx";
import Heading from "../../components/Heading/Heading.jsx";

import profileImg from "../../assets/img/profilepicture.webp";

function AboutMe() {
  return (
    <section id="about-me">
      <div className="about-wrapper">
        <motion.img
          className="about-img full-shadow"
          src={profileImg}
          alt="profilepicture"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
        <h2 className="about-text">
          Hi, ich bin <span>Leon</span>,
          <br /> 13 Jahre alt und <span>Webdeveloper</span>.<br /> Ich baue gern
          Webseites und lerne dabei immer mehr über <span>Programmieren</span>
          und <span>Design</span>.
        </h2>
        <div className="about-button">
          <Button
            bgColor={"black"}
            content={"Kontaktiere mich"}
            href={"#contact"}
            reverse
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
