import "./Button.css";
import { motion } from "framer-motion";

function Button({ content, bgColor, outline, href }) {
  let style = {};

  if (outline) {
    style.backgroundColor = "var(--background)";
    style.border = "1px solid var(--text-color)";
  } else if (bgColor === "black") {
    style.backgroundColor = "var(--text-color)";
    style.color = "var(--background)";
    style.border = "none";
  } else if (bgColor === "blue") {
    style.backgroundColor = "#007CFF";
    style.border = "none";
    style.color = "white";
  } else {
    style.backgroundColor = "var(--text-color)";
    style.color = "var(--background)";
    style.border = "none";
  }

  return (
    <a href={href}>
      <motion.button
        style={style}
        className="default-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.button>
    </a>
  );
}

export default Button;
