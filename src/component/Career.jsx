import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import ProjectList from "./ProjectList";
import { careerArray } from "../data/ModalData";

const CareerWrap = styled.div`
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
    padding: 2.5rem 0 0;
    .info_top {
      display: flex;
      flex-direction: column;
      gap: 10px;
      h3 {
        font-size: ${(props) => props.theme.fontSize.lg};
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
        gap: 15px;
        line-height: 23px;
      }
    }
    p {
      font-weight: 800;
      font-size: ${(props) => props.theme.fontSize.lg};
    }
  }
  @media only screen and (max-width: 1000px) {
    padding: 100px 5% 0;
  }
`;

const Career = ({ title }) => {
  return (
    <>
      <CareerWrap id="Career">
        <h2 className="title">{title}</h2>
        <div className="info_wrap">
          <div className="info_top">
            <h3>KBNC / 한국이컴</h3>
            <p>ICT 개발본부 / 개발팀 </p>
            <span>2020년 03월</span>
            <span>- 2023년 07월</span>
          </div>
          <div className="info_bottom">
            <p>업무내용</p>
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
      </CareerWrap>
      <ProjectList data={careerArray} />
    </>
  );
};

export default Career;
