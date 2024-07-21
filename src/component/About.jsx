import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Profile from "/img/profile.png";
import styled from "styled-components";
import Skills from "./Skills";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/series/scroll-animations-with-framer-motion/scroll-linked-content-reveal-animation
 */

const AboutWrap = styled.div`
  /* height: calc(100vh - 200px); */
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  overflow: hidden;
  padding: 100px 100px 0;

  img {
    width: 500px;
    height: 500px;
    position: relative;
    z-index: 1;
    vertical-align: middle;
    border-radius: 100%;
  }
  .img-container {
    display: flex;
    align-items: center;
    position: relative;
  }

  .copy {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .copy > div {
    margin-bottom: 2rem;
  }
  .copy > div > p {
    text-align: right;
    font-size: 24px;
    font-weight: bold;
  }

  .copy h2 {
    font-size: 3rem;
    margin-top: 0;
    color: #fff;
    line-height: 4rem;
  }
  .copy p {
    line-height: 2rem;
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

  .top-shadow {
    background: linear-gradient(
      90deg,
      rgba(0, 184, 96, 0) 0%,
      rgba(0, 184, 96, 1) 25%
    );
    height: 100%;
    width: 140%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
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
  const topShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "100%"]
  );

  return (
    <>
      <AboutWrap id="About" className="scroll-container" ref={containerRef}>
        <div className="copy">
          {/* <h2>
            프론트엔드 개발자
            <br />
            김수연입니다.
          </h2> */}
          <div>
            <p className="name">김수연</p>
            <p className="birth">1993.04.01</p>
            <p className="job">프론트엔드 개발자</p>
          </div>
          <p>
            누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을
            권리를 가진다. 다만, 형사피고인이 스스로 변호인을 구할 수 없을
            때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다. 나는 헌법을
            준수하고 국가를 보위하며 조국의 평화적 통일과 국민의 자유와 복리의
            증진 및 민족문화의 창달에 노력하여 대통령으로서의 직책을 성실히
            수행할 것을 국민 앞에 엄숙히 선서합니다.
          </p>
        </div>
        <div className="img-container">
          <motion.div className="img-inner" style={{ translateX: imageValue }}>
            <motion.div
              className="bottom-shadow"
              style={{ translateX: bottomShadowValue }}
            />
            <img src={Profile} alt="Profile" />
            <motion.div
              className="top-shadow"
              style={{ translateX: topShadowValue }}
            />
          </motion.div>
        </div>
      </AboutWrap>
      <Skills />
    </>
  );
};

export default About;
