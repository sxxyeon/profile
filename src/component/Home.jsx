import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrap = styled.div`
  padding: 100px 100px 0;

  .wavy-text-container {
    overflow: hidden;
    font-size: 6rem;
    word-break: break-all;
    span {
      display: block;
      line-height: 6.5rem;
      font-weight: 900;
      color: transparent;
      -webkit-text-stroke: 1px #fff;
    }
    span.name {
      color: #fff;
    }
  }

  @media only screen and (max-width: 1000px) {
    padding: 100px 5%;
    .wavy-text-container {
      font-size: 3rem !important;
      span {
        line-height: 4rem !important;
      }
    }
  }
`;

const Home = () => {
  const [replay, setReplay] = useState(true);
  const duration = 0.05; // 기본값 설정
  const delay = 0; // 기본값 설정

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 5, // 낮은 댐핑 값으로 반동을 더 크게
        stiffness: 500, // 높은 스티프니스 값으로 강한 반동
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 5, // 낮은 댐핑 값으로 반동을 더 크게
        stiffness: 500, // 높은 스티프니스 값으로 강한 반동
      },
    },
  };
  return (
    <Wrap id="Home">
      <motion.div
        variants={container}
        initial="hidden"
        animate={replay ? "visible" : "hidden"}
        className="wavy-text-container"
      >
        {/* <span className="sub">HI, I'M</span> */}
        <motion.span variants={child}>
          FRONT-END
          <br />
          DEVELOPER
        </motion.span>
        <motion.span className="name" variants={child}>
          KIM SUYEON
        </motion.span>
      </motion.div>
    </Wrap>
  );
};

export default Home;
