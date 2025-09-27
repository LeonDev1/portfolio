import "./AboutMe.css";
import Button from "../../components/Button/Button.jsx";
import Heading from "../../components/Heading/Heading.jsx";

function AboutMe() {
  return (
    <>
      <Heading content={"About Me"}></Heading>
      <section id="about-me">
        <div>
          <img src="" alt="" />
          <p></p>
          <Button bgColor={"black"} content={"Kontaktiere mich"}></Button>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
