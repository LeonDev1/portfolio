import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./AboutMe.css";
import Button from "../../components/Button/Button.jsx";
import profileImg from "../../assets/img/profilepicture.webp";

function AboutMe() {
  const { t, i18n } = useTranslation();

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
        <h2 className="about-text">{t("about-me-text")}</h2>
        <div className="about-button">
          <Button
            bgColor={"black"}
            content={t("about-me-button")}
            href={"#contact"}
            reverse
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
