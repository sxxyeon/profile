import React, { useRef } from "react";
import styled from "styled-components";
import ProjectList from "./ProjectList";
import { projectArray } from "../data/ModalData";

const ProjectWrap = styled.div`
  padding: 100px 100px 0;
  h2 {
    &::before {
      content: "";
    }
  }
  .info_wrap {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 3rem 0 0;
    .info_top {
      display: flex;
      flex-direction: column;
      gap: 10px;
      h3 {
        font-size: ${(props) => props.theme.fontSize.xl};
        font-weight: 900;
      }
    }
    .info_bottom {
      p {
        margin-bottom: 20px;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
    p {
      font-weight: 800;
      font-size: ${(props) => props.theme.fontSize.lg};
    }
  }
  @media only screen and (max-width: 1000px) {
    padding: 0 5% 0;
  }
`;

const Project = ({ title }) => {
  return (
    <>
      <ProjectWrap id="Project">
        <h2 className="title">{title}</h2>
        <div className="info_wrap">
          <div className="info_bottom">
            <p>프로젝트 내용</p>
            <ul>
              <li>
                B2B - 기업은행, 우리은행, 신한은행, 화이자 등 금융기관 및 기업
                복지 폐쇄몰
              </li>
              <li>B2C - 위비마켓(우리은행), 딜라이브몰, 꿀콘비즈</li>
              <li>B0 , 자사 사이트 등</li>
              <li>UI 구축 및 유지보수 업무 담당</li>
            </ul>
          </div>
        </div>
      </ProjectWrap>
      <ProjectList data={projectArray} />
    </>
  );
};

export default Project;
