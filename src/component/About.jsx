import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Profile from "/img/profile.png";
import styled from "styled-components";
import Skills from "./Skills";

const AboutWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  overflow: hidden;
  padding: 100px 100px 0;

  .img-container {
    display: flex;
    align-items: center;
    position: relative;
    img {
      width: 500px;
      height: 500px;
      position: relative;
      z-index: 1;
      vertical-align: middle;
      border-radius: 100%;
    }

    .bottom-shadow {
      background: radial-gradient(
        circle,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.7) 59%,
        rgba(0, 0, 0, 0) 69%
      );
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 0;
      border-radius: 100%;
    }
  }

  .copy {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > div {
      margin-bottom: 2rem;
      p {
        font-size: 24px;
        font-weight: bold;
      }
    }
    p {
      text-align: right;
      line-height: 1.5;
    }
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    padding: 5%;
    text-align: center;
    img {
      width: 70%;
      height: 70%;
    }
    .bottom-shadow {
      width: 80%;
    }
  }
`;

const About = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const bottomShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );
  const imageValue = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  return (
    <>
      <AboutWrap id="About" className="scroll-container" ref={containerRef}>
        <div className="copy">
          <div>
            <p className="name">김수연</p>
            <p className="birth">1993.04.01</p>
            <p className="job">프론트엔드 개발자</p>
          </div>
          <p>
            항상 배우는 자세로 일하며, 새로운 도전에 두려움 없이 임합니다.
            <br />
            능동적이고 탐구적인 성향을 바탕으로 더 나은 사용자 경험을 만들고자
            합니다. <br />
            내일 더 발전하는 프론트엔드 개발자가 되기 위해 노력을 게을리 하지
            않겠습니다.
          </p>
        </div>
        <div className="img-container">
          <motion.div className="img-inner" style={{ translateX: imageValue }}>
            <img src={Profile} alt="Profile" />
            <motion.div
              className="bottom-shadow"
              style={{ translateX: bottomShadowValue }}
            />
          </motion.div>
        </div>
      </AboutWrap>
      <Skills />
    </>
  );
};

export default About;
