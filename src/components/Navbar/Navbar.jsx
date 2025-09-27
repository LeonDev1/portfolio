import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Beim ersten Laden den Theme-Status aus localStorage lesen
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkmode");
    if (savedTheme === "active") {
      setDarkMode(true);
      document.body.classList.add("darkmode");
    }
  }, []);

  // Bei Änderungen von darkMode den localStorage und CSS-Klasse aktualisieren
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkmode");
      localStorage.setItem("darkmode", "active");
    } else {
      document.body.classList.remove("darkmode");
      localStorage.setItem("darkmode", "null");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div id="navbar">
      <div className="language-container">
        <p>en</p>
      </div>
      <div className="links-container">
        <a href="#home">
          <p>Home</p>
        </a>
        <a href="#work">
          <p>Projekte</p>
        </a>
        {/* <a href="#features">
          <p>Features</p>
        </a> */}
        <a href="#about-me">
          <p>About Me</p>
        </a>
        <a href="#contact">
          <p>Contact</p>
        </a>
      </div>
      <motion.div
        id="themeswitch-container"
        onClick={toggleDarkMode}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <svg
          id="darkmode-switch"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-moon"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>

        <svg
          id="lightmode-switch"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-sun"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      </motion.div>
    </div>
  );
}

export default Navbar;
