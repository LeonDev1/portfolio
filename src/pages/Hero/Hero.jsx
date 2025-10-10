import { motion } from "framer-motion";
import "./Hero.css";
import profileImg from "../../assets/img/profilepicture.webp";
import Button from "../../components/Button/Button.jsx";

function Hero() {
  return (
    <section id="home">
      <div className="header-container">
        <h1>Hi, Ich bin Leon!</h1>
        <h2>Webdeveloper・Webdesigner</h2>
        <Button
          content={"Meine Projekte"}
          bgColor={"blue"}
          href={"#work"}
        ></Button>
      </div>
      <motion.img
        src={profileImg}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        className="header-image full-shadow"
        alt="profile-image"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      />
    </section>
  );
}

export default Hero;
