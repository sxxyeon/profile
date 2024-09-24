import React, { useRef, useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { throttle } from "throttle-debounce-ts";
import styled from "styled-components";
import ModalPopup from "./modal/ModalPopup";

const ProjectWrap = styled.div`
  .container {
    height: 400vh;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5795110280440301) 24%,
      rgba(0, 0, 0, 1) 51%,
      rgba(0, 0, 0, 0.6999592073157388) 75%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  .motion-progress {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 4px;
    top: 0;
    left: 0;
    background: #424242;
  }

  .motion-progress > div {
    width: 100%;
    height: 100%;
  }

  .sticky-wrapper {
    position: sticky;
    top: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
  }

  .carousel {
    display: flex;
    gap: 48px;
    align-items: center;

    .carousel_arrow {
      width: 600px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
      img {
        width: 500px;
      }
    }
    .project {
      cursor: pointer;
      opacity: 0.7;
      &:hover {
        opacity: 1;
        scale: 1.05;
        transition: all 0.3s;
      }
      .project_img {
        img {
          width: 600px;
        }
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    .container {
      height: 500vh;
    }
    .carousel {
      gap: 38px;
      .carousel_arrow {
        width: 300px;
        img {
          width: 300px;
        }
      }
      .project {
        .project_img {
          img {
            width: 400px;
          }
        }
      }
    }
  }
`;

function useElementViewportPosition(ref) {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetHeight;

    setPosition([start / pageHeight, end / pageHeight]);
  }, [ref]);

  return { position };
}

const ProjectList = ({ data }) => {
  const [modal, setModal] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickModal = (item) => {
    setModal(item);
    setIsModalOpen(true);
    document.body.style.overflowY = "hidden";
  };

  const ref = useRef(null);
  const carouselRef = useRef(null);
  const { position } = useElementViewportPosition(ref);
  const [carouselEndPosition, setCarouselEndPosition] = useState(0);
  const { scrollYProgress, scrollY } = useViewportScroll();
  const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);

  useEffect(() => {
    if (!isModalOpen) document.body.style.overflowY = "scroll";
  }, [isModalOpen]);

  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return;
    const parent = carouselRef.current.parentElement;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        const newPosition =
          carouselRef.current.clientWidth -
          window.innerWidth +
          scrollbarWidth +
          parent.offsetLeft * 2;

        setCarouselEndPosition(-newPosition);
      }
    };

    resetCarouselEndPosition();
    const handleResize = throttle(10, resetCarouselEndPosition);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <ProjectWrap ref={ref}>
        <div className="container">
          <div className="sticky-wrapper">
            <motion.div ref={carouselRef} className="carousel" style={{ x }}>
              <motion.div className="carousel_arrow">
                <img src="/img/arrow_r.png" alt="" />
              </motion.div>
              {data?.map((item, idx) => (
                <motion.div
                  className={`project`}
                  key={idx}
                  onClick={() => onClickModal(item)}
                >
                  <div className="project_img">
                    <img src={item.img} alt="img" />
                  </div>
                </motion.div>
              ))}
              <motion.div className="carousel_arrow">
                <img src="/img/arrow_l.png" alt="" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </ProjectWrap>

      {isModalOpen && (
        <ModalPopup modal={modal} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};

export default ProjectList;
