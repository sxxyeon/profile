import React from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const ModalWrap = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  inset: 0;
  z-index: 10;
`;

const Modal = styled.div`
  position: fixed !important;
  max-width: 500px;
  min-width: 350px;
  width: 60%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.95);
  color: #000;
  border-radius: 10px;
  box-shadow: 0 2px 100px rgba(0, 0, 0, 0.5);
  z-index: 100;
  .modal_top {
    display: flex;
    justify-content: end;
    padding: 15px;
    button {
      cursor: pointer;
      padding: 0;
    }
  }
  .modal_cont {
    display: flex;
    flex-direction: column;
    min-height: calc(100% - 60px);
    padding: 0 20px 40px;
    box-sizing: border-box;
  }
  @media only screen and (max-width: 1000px) {
    width: 80%;
    .modal_cont {
      padding: 0 20px 20px;
    }
  }
`;

const ModalInfo = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: 5px;
  box-sizing: border-box;
  .tit {
    font-size: 1.4rem;
  }
  p {
    white-space: pre-line;
  }
  .sub {
    padding-top: 10px;
    color: #555;
  }
  .skills {
    padding: 20px 0;
    font-weight: 800;
    line-height: 23px;
  }
  .desc {
    line-height: 30px;
    max-height: 200px;
    overflow-y: auto;
  }
  .desc::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  .desc::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  .desc::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #ddd;
  }
  @media only screen and (max-width: 1000px) {
    padding: 0;
  }
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px 0 0;
  box-sizing: border-box;
  button {
    width: 70%;
    background: ${(props) => props.theme.colors.primary};
    color: #fff;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    box-sizing: border-box;
    cursor: pointer;
    a {
      display: block;
      padding: 15px 10px;
    }
  }
  button:nth-child(2) {
    background: #fff;
    color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;

const ModalPopup = ({ modal, setIsModalOpen }) => {
  const { id, title, skills, content, desc, img, url, github, photo } = modal;
  const nav = useNavigate();
  return ReactDOM.createPortal(
    <ModalWrap>
      <Modal className={id}>
        <div className="modal_top">
          <button onClick={() => setIsModalOpen(false)}>
            <Icon icon="mdi:close" width={20} color={`#00B860`} />
          </button>
        </div>
        <div className="modal_cont">
          <ModalInfo>
            <h2 className="tit">{title}</h2>
            <p className="sub">{content}</p>
            <p className="skills">{skills}</p>
            <p className="desc">{desc}</p>
          </ModalInfo>

          <BtnBox>
            {url && (
              <button>
                <Link to={url} target="_blank">
                  방문하기
                </Link>
              </button>
            )}
            {photo && (
              <button>
                <Link to={() => nav(`/detail/${id}`)} target="_blank">
                  스크린샷
                </Link>
              </button>
            )}
            {github && (
              <button>
                <Link to={github} target="_blank">
                  Github
                </Link>
              </button>
            )}
          </BtnBox>
        </div>
      </Modal>
    </ModalWrap>,
    document.body // Rendering the modal at the root level
  );
};

export default ModalPopup;
