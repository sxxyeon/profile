import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { useState } from "react";

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  width: 100%;
  border-bottom: 1px solid #fff;
  height: 50px;
  font-weight: 700;
  box-sizing: border-box;
  background: transparent;

  .header_cont {
    max-width: 1200px;
    width: 100%;
    //padding: 0 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 50px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    .header_left {
      ul {
        display: flex;
        flex-direction: row;
        gap: 3% !important;
        li {
          a {
            font-weight: 500 !important;
            cursor: pointer;
          }
        }
      }
    }
    .header_right {
      ul {
        display: flex;
        flex-direction: row;
        gap: 3% !important;
        li {
          a {
            cursor: pointer;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    .header_cont {
      justify-content: center !important;
      .header_left {
        display: none;
        ul {
          gap: 3% !important;
        }
      }

      .header_right {
        ul {
          gap: 3% !important;
        }
      }
    }
  }
`;

const VerHeader = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 50px;
  height: 100vh;
  border-right: 1px solid #fff;
  box-sizing: border-box;
  z-index: 2;
  &:nth-of-type(2) {
    left: auto;
    right: 0;
    border-right: 0;
    border-left: 1px solid #fff;
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1rem;

  color: ${(props) => (props.isactive === "true" ? "black" : "white")};

  /* variant prop에 따른 스타일 변경 */
  ${(props) =>
    props.variant === "primary" &&
    css`
      background-color: #007bff;
    `}
`;

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const onClickLink = (link) => {
    setActiveLink(link);
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };
  return (
    <>
      <div>
        <HeaderWrap>
          <div className="header_cont">
            <div className="header_left">
              <ul>
                <li>
                  <RouterLink to={"https://github.com/sxxyeon"} target="_blank">
                    github
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to={"https://velog.io/@sxxyeon/posts"}
                    target="_blank"
                  >
                    velog
                  </RouterLink>
                </li>
              </ul>
            </div>
            <div className="header_right">
              <ul>
                <li>
                  <Link
                    to={"Home"}
                    spy={true}
                    smooth={true}
                    onSetActive={handleSetActive}
                  >
                    <Button
                      isactive={activeLink === "Home" ? "true" : "false"}
                      onClick={() => onClickLink("Home")}
                    >
                      Home
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"About"}
                    spy={true}
                    smooth={true}
                    onSetActive={handleSetActive}
                  >
                    <Button
                      isactive={activeLink === "About" ? "true" : "false"}
                      onClick={() => onClickLink("About")}
                    >
                      About
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"Career"}
                    spy={true}
                    smooth={true}
                    onSetActive={handleSetActive}
                  >
                    <Button
                      isactive={activeLink === "Career" ? "true" : "false"}
                      onClick={() => onClickLink("Career")}
                    >
                      Career
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"Project"}
                    spy={true}
                    smooth={true}
                    onSetActive={handleSetActive}
                  >
                    <Button
                      isactive={activeLink === "Project" ? "true" : "false"}
                      onClick={() => onClickLink("Project")}
                    >
                      Project
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"Contact"}
                    spy={true}
                    smooth={true}
                    onSetActive={handleSetActive}
                  >
                    <Button
                      isactive={activeLink === "Contact" ? "true" : "false"}
                      onClick={() => onClickLink("Contact")}
                    >
                      Contact
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </HeaderWrap>
        <VerHeader></VerHeader>
        <VerHeader></VerHeader>
      </div>
    </>
  );
};
export default Header;
