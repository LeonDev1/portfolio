import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./Contact.css";
import Heading from "../../components/Heading/Heading.jsx";

import FooterImg from "../../assets/img/profilepicture.webp";

function Contact() {
  const currentDate = new Date().getFullYear();
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("loading");
    const formData = new FormData(event.target);

    formData.append("access_key", "a89c3495-2df3-4115-bcd4-ec746e803d54");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("send");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const { t, i18n } = useTranslation();

  return (
    <>
      <section id="contact">
        <form onSubmit={onSubmit} className="inputs">
          <div className="inputs">
            <input
              type="text"
              className="field"
              placeholder={t("contact-name")}
              name="name"
              required
            />
            <input
              type="email"
              className="field"
              placeholder={t("contact-email")}
              name="email"
              required
            />
            <textarea
              id="contact-textarea"
              className="field message"
              placeholder={t("contact-message")}
              name="message"
              required
            ></textarea>
            <motion.button
              type="submit"
              id="contact-button"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {t("contact-button")}
            </motion.button>
          </div>
          <span>
            {result === "loading" ? <div className="loader"></div> : result}
          </span>
        </form>
      </section>
      <div id="footer">
        <motion.img
          className="full-shadow"
          src={FooterImg}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
        <h3 id="copyright">Copyright © {currentDate} Leondev</h3>
      </div>
    </>
  );
}

export default Contact;
