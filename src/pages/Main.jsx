import React from "react";
import About from "./../component/About";
import Skills from "./../component/Skills";
import Career from "./../component/Career";
import Home from "./../component/Home";
import Project from "./../component/Project";
import { ScrollAnimation } from "@lasbe/react-scroll-animation";
import Contact from "../component/Contact";
const Main = () => {
  return (
    <div>
      <div className="section sec1">
        <Home />
      </div>

      <ScrollAnimation
        startingPoint="bottom"
        duration={2}
        amount="xl"
        delay={0.3}
        repeat
      >
        <div className="section sec2">
          <About />
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        startingPoint="bottom"
        duration={2}
        amount="xl"
        delay={0.3}
        repeat
      >
        <div className="section sec4">
          <Career title={"CAREER"} />
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        startingPoint="bottom"
        duration={2}
        amount="xl"
        delay={0.3}
        repeat
      >
        <div className="section sec5">
          <Project title={"PROJECT"} />
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        startingPoint="bottom"
        duration={2}
        amount="xl"
        delay={0.3}
        repeat
      >
        <div className="section sec6">
          <Contact title={"CONTACT"} />
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Main;
