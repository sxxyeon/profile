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
    padding: 2.5rem 0 0;
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
    padding: 100px 5% 50px;
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
                healthy log - 다양한 건강관련 기능을 포함한 건강관리 앱 입니다.
                식품의약품안전처의 공공 api와 카카오맵 api를 사용하였습니다.
              </li>
              <li>
                myvie - 영화 검색 및 영화공유 커뮤니티 앱 입니다. 찜하기, 관람평
                달기, 로그인/회원가입등의 기능을 포함해 mdb api를 사용해서
                구현하였습니다.
              </li>
              <li>
                goodstore - 간단한 굿즈 쇼핑몰 앱 입니다. 상품을 카테고리 별로
                분류하고, 장바구니에 담고 주문 조회를 하는 등 일반적인 쇼핑몰
                기능을 구현하였습니다.
              </li>
              <li>
                mylog - vue3를 활용한 블로그 게시판 앱 입니다. 목록조회, 글
                쓰기, 수정, 삭제, 댓글 달기, 좋아요한 글 저장 등의 기능을 수행할
                수 있습니다.
              </li>
              <li>
                gptherapy - gpt api를 이용한 심리상담 앱입니다. 사용자가 전송한
                메세지에 기반한 상담 피드백을 구현했습니다.
              </li>
              <li>
                profile - 프로필 사이트입니다. 다양한 동적인 효과를
                적용하였습니다.
              </li>
            </ul>
          </div>
        </div>
      </ProjectWrap>
      <ProjectList data={projectArray} />
    </>
  );
};

export default Project;
