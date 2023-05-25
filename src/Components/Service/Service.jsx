import React from "react";
import "./service.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Service = () => {
  const {scrollYProgress} = useScroll()
  const frontend = useTransform(scrollYProgress, [0,1],[0,600])
  const backend = useTransform(scrollYProgress, [0,1],[0,600])
  const fullstack = useTransform(scrollYProgress, [0,1],[0,600])
  return (
    <section id="service">
      <div className="serveTypo">
        <motion.span style={{x:frontend}}>
          Frontend <span className="outlineTypo">Developer</span> -{" "}
          <span className="outlineTypo">Frontend</span> Developer - Frontend{" "}
          <span className="outlineTypo">Developer</span> -{" "}
        </motion.span>
        <motion.span style={{x:backend}}>
          {" "}
          <span className="outlineTypo">Backend</span> Developer - Backend{" "}
          <span className="outlineTypo">Developer</span> -{" "}
          <span className="outlineTypo">Backend</span> Developer -
        </motion.span>
        <motion.span style={{x:fullstack}}>
          Fullstack <span className="outlineTypo">Developer</span> -{" "}
          <span className="outlineTypo">Fullstack</span> Developer - Fullstack{" "}
          <span className="outlineTypo">Developer</span> -{" "}
        </motion.span>
      </div>
      <div className="serveStack">
        <div className="serveTechStack">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React JS</span>
          <span>Java</span>
        </div>
        <div className="serveTechStack">
          <span>MySQL</span>
          <span>PHP</span>
        </div>
      </div>
    </section>
  );
};

export default Service;
