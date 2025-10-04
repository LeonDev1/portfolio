import React, { useState } from "react";
import { motion, scale } from "framer-motion";

import "./Contact.css";
import Heading from "../../components/Heading/Heading.jsx";

function Contact() {
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
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Heading content={"Contact"}></Heading>{" "}
      <section id="contact">
        <form onSubmit={onSubmit} className="inputs">
          <div className="inputs">
            <input
              type="text"
              className="field"
              placeholder="Name"
              name="name"
              required
            />
            <input
              type="email"
              className="field"
              placeholder="Email"
              name="email"
              required
            />
            <textarea
              id="contact-textarea"
              className="field message"
              placeholder="Inhalt"
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
              Submit
            </motion.button>
          </div>
          <span>
            {result === "loading" ? <div className="loader"></div> : result}
          </span>
        </form>
      </section>
    </>
  );
}

export default Contact;
