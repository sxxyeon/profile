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
    width: 100%;
  }
  .m-img-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    .m-img {
      width: 40%;
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
  return (
    <ImgBox>
      {projectImages ? (
        <>
          {imgData.length > 0 && (
            <div className="img-wrapper">
              <h3>PC ver</h3>
              {/* 일반 img로 시작하는 이미지는 단일로 표시 */}
              {imgData.map((key, index) => (
                <img
                  key={index}
                  src={projectImages[key]}
                  alt={`Image ${index + 1}`}
                />
              ))}{" "}
            </div>
          )}

          {/* m으로 시작하는 이미지는 2개씩 나열 */}
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
      ) : (
        <p>이미지를 찾을 수 없습니다.</p>
      )}
    </ImgBox>
  );
};

export default ProjectDetail;
