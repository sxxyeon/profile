import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ImgArray } from "../data/ImgData";

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1200px;
  margin: 70px auto;
  padding: 20px;
  h3 {
    font-size: 25px;
    margin-top: 50px;
  }
  .img-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 30px;
  }
  img {
    width: 90%;
    margin: 0 auto;
  }
  .m-img-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, auto));
    grid-gap: 30px;
    .m-img {
      width: 100%;
      height: fit-content;
    }
  }

  .t-img-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    .t-img {
      width: 47%;
    }
  }

  @media only screen and (max-width: 768px) {
    .m-img {
      width: 45% !important;
    }
    .t-img {
      width: 100% !important;
    }
  }
`;

const ProjectDetail = () => {
  const { id } = useParams();

  const projectImages = ImgArray.find((item) => item.id === parseInt(id));
  const imgData = Object.keys(projectImages).filter((key) =>
    key.startsWith("img")
  );
  const mimgData = Object.keys(projectImages).filter((key) =>
    key.startsWith("m")
  );
  const timgData = Object.keys(projectImages).filter((key) =>
    key.startsWith("t")
  );
  return (
    <ImgBox>
      {projectImages ? (
        <>
          {imgData.length > 0 && (
            <>
              <h3>PC ver</h3>
              <div className="img-wrapper">
                {/* 일반 img로 시작하는 이미지는 단일로 표시 */}
                {imgData.map((key, index) => (
                  <img
                    key={index}
                    src={projectImages[key]}
                    alt={`Image ${index + 1}`}
                  />
                ))}{" "}
              </div>
            </>
          )}

          {/* m으로 시작하는 이미지는 3개씩 나열 */}
          {mimgData.length > 0 && (
            <>
              <h3>mobile ver</h3>
              <div className="m-img-wrapper">
                {mimgData.map((key, index) => (
                  <img
                    key={index}
                    src={projectImages[key]}
                    alt={`Image ${index + 1}`}
                    className="m-img"
                  />
                ))}
              </div>
            </>
          )}

          {/* t으로 시작하는 이미지는 2개씩 나열 */}
          {timgData.length > 0 && (
            <>
              <h3>tablet ver</h3>
              <div className="t-img-wrapper">
                {timgData.map((key, index) => (
                  <img
                    key={index}
                    src={projectImages[key]}
                    alt={`Image ${index + 1}`}
                    className="t-img"
                  />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <p>이미지를 찾을 수 없습니다.</p>
      )}
    </ImgBox>
  );
};

export default ProjectDetail;
