import React, { useRef, useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { throttle } from "throttle-debounce-ts";
import styled from "styled-components";
import ModalPopup from "./modal/ModalPopup";

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
  const [isMobile, setIsMobile] = useState(false);
  const nav = useNavigate();

  const ProjectWrap = styled.div`
    .container {
      height: ${isMobile ? "" : "1000vh"};
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.8) 4%,
        rgba(0, 0, 0, 1) 51%,
        rgba(0, 0, 0, 0.8) 95%,
        rgba(0, 0, 0, 0) 100%
      );
      padding-bottom: ${isMobile ? "80px" : ""};
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
      position: ${isMobile ? "" : "sticky"};
      top: 0;
      height: ${isMobile ? "auto" : "100vh"};
      width: 100%;
      display: flex;
      flex-direction: ${isMobile ? "column" : ""};
      align-items: center;
      overflow: ${isMobile ? "" : "hidden"};
    }

    .carousel {
      display: flex;
      flex-direction: ${isMobile ? "column" : "row"};
      gap: ${isMobile ? "40vw" : "15vw"};
      align-items: ${isMobile ? "center" : "center"};

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
        //opacity: 0.7;
        width: ${isMobile ? "90vw" : "80vw"};

        .project_cont {
          display: flex;
          gap: ${isMobile ? "20px" : "40px"};
          flex-direction: ${isMobile ? "column" : "row"};
          justify-content: ${isMobile ? "center" : "space-around"};
          .project_img {
            img {
              width: 100%;
              max-width: 900px;
              border-radius: 10px;
              box-shadow: ${isMobile
                ? "10px 10px 20px 10px rgb(0,0,0,80%)"
                : "20px 40px 40px 10px rgb(0, 0, 0, 50%)"};
              &:hover {
                scale: 1.01;
                transition: all 0.3s ease-in-out;
              }
            }
          }
          article {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: ${isMobile ? "100%" : "550px"};
            .project_info {
              align-self: flex-start;
              display: flex;
              flex-direction: column;
              gap: ${isMobile ? "20px" : "40px"};
              > div {
                display: flex;
                flex-direction: column;
                gap: 5px;
                .main {
                  font-size: 1.5rem;
                }
                .sub {
                  font-size: 13px;
                }
              }
              .skill {
                p {
                  font-weight: bold;
                }
              }
              p {
                line-height: 2rem;
              }
            }
          }
        }
      }
    }
  `;

  const BtnBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 20px 0 0;
    box-sizing: border-box;
    button {
      width: 100%;
      background: ${(props) => props.theme.colors.primary};
      color: #fff;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 500;
      box-sizing: border-box;
      padding: 15px 10px;
      cursor: pointer;
      a {
        display: block;
      }
    }
    button:nth-child(2) {
      background: #fff;
      color: ${(props) => props.theme.colors.primary};
      border: 1px solid ${(props) => props.theme.colors.primary};
    }
  `;

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
  const x = useTransform(
    scrollYProgress,
    position,
    isMobile ? [0, 0] : [0, carouselEndPosition]
  ); // isMobile일 경우 x값을 고정);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onClickDetail = (id) => {
    nav(`/detail/${id}`);
    document.body.style.overflowY = "auto";
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ProjectWrap ref={ref}>
        <div className="container">
          <div className="sticky-wrapper">
            <motion.div
              ref={carouselRef}
              className="carousel"
              style={{ x: isMobile ? "0%" : x }}
            >
              {!isMobile && (
                <motion.div className="carousel_arrow">
                  <img src="/img/arrow_r.png" alt="" />
                </motion.div>
              )}

              {data?.map((item, idx) => (
                <motion.div className={`project`} key={idx}>
                  <div className="project_cont">
                    <div className="project_img">
                      <img src={item.img} alt="img" />
                    </div>
                    <article>
                      <div className="project_info">
                        <div className="tit">
                          <p className="sub">{item.content} [PC, MOB]</p>
                          <h3 className="main">{item.title}</h3>
                        </div>
                        <div className="skill">
                          <p>{item.skills}</p>
                        </div>
                        <div className="desc">
                          <p>{item.desc}</p>
                        </div>
                      </div>
                      <div className="btn_area">
                        <BtnBox>
                          {item.url && (
                            <button>
                              <Link to={item.url} target="_blank">
                                방문하기
                              </Link>
                            </button>
                          )}
                          {item.photo && (
                            <button
                              onClick={() => onClickDetail(item.id)}
                              target="_blank"
                            >
                              스크린샷
                            </button>
                          )}
                          {item.github && (
                            <button>
                              <Link to={item.github} target="_blank">
                                Github
                              </Link>
                            </button>
                          )}
                        </BtnBox>
                      </div>
                    </article>
                  </div>
                </motion.div>
              ))}
              {!isMobile && (
                <motion.div className="carousel_arrow">
                  <img src="/img/arrow_l.png" alt="" />
                </motion.div>
              )}
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
