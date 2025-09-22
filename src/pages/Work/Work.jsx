import { motion, scale } from "framer-motion";

import "./Work.css";
import powerpeakImg from "../../assets/img/powerpeak.png";
import gardenartImg from "../../assets/img/gardenart.png";
import { a } from "motion/react-client";

function Work() {
  return (
    <section id="work">
      <Workcard
        bgColor={"#A886E4"}
        imgSrc={powerpeakImg}
        link="https://leondev1.github.io/powerpeak-fitness/"
      />
      <Workcard
        bgColor={"#B8CF82"}
        imgSrc={gardenartImg}
        link="https://leondev1.github.io/garten-art/"
      />
      <Workcard
        bgColor={"#6D9ED3"}
        imgSrc={powerpeakImg}
        link="https://leondev1.github.io/powerpeak-fitness/"
      />
    </section>
  );
}

export default Work;

//& Components

function Workcard({ bgColor, imgSrc, link = "https://google.com" }) {
  return (
    <a href={link}>
      {" "}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="workcard full-shadow"
        style={{ backgroundColor: bgColor }}
      >
        <img src={imgSrc} />
        <img src={imgSrc} />
      </motion.div>
    </a>
  );
}
