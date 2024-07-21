import React, { useRef } from "react";
import styled from "styled-components";

const skills = [
  "html",
  "css",
  "Jquery",
  "javascript",
  "react",
  "nextjs",
  "Typescript",
  "git",
  "github",
  "vuetify",
  "tailwindcss",
  "bootstrap",
  "styledcomponent",
  "Figma",
];

const SkillsWrap = styled.div`
  padding: 100px 100px 0;
  h2 {
    text-align: center;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    row-gap: 20px;
    flex-wrap: wrap;
    li {
      display: flex;
      flex-direction: row;
      gap: 7px;
      padding: 0 5px;
      color: #000;
      background: rgba(255, 255, 255, 1);
      border-radius: 5px;
      justify-content: center;
      align-items: center;
      box-shadow: 0 1px 4px rgb(0, 0, 0, 20%);
      height: 50px;
      font-size: 13px;
    }
  }

  @media only screen and (max-width: 1000px) {
    padding: 0 5%;
  }
`;

const Skills = ({ title }) => {
  return (
    <SkillsWrap id="Skills">
      <ul>
        {skills.map((item, idx) => (
          <li key={idx}>
            <img src={`/img/${item}.png`} alt={`item`} width="40" />
            {item}
          </li>
        ))}
      </ul>
    </SkillsWrap>
  );
};

export default Skills;
