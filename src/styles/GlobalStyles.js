import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  /* 리셋 CSS */
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  form,
  label,
  table {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  body {
    line-height: 1;
    font-family: 'Noto Sans KR', sans-serif;
    background-color:${(props) => props.theme.colors.primary};
    margin-bottom: 100px;
    overflow-x: hidden;

  }
  ol,
  ul {
    list-style: none;
  }
  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  /* 폰트 */

  @font-face {
    font-family: 'LINESeedKR';
    font-weight: light;
    src: url('/font/LINESeedKR-Th.woff2');
}
@font-face {
    font-family: 'LINESeedKR';
    font-weight: normal;
    src: url('/font/LINESeedKR-Rg.woff2');
}
@font-face {
    font-family: 'LINESeedKR';
    font-weight: bold;
    src: url('/font/LINESeedKR-Bd.woff2');
}

html,body,#root{
    font-family: 'LINESeedKR';
    letter-spacing: 0rem;
    color:#fff;
    height:100%;
}

  /* 공통 스타일 */
  .App {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .contWrap {
    flex: 1;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }
  h2.title{
    font-size: 45px;
    font-weight: 900;
  }
  @media only screen and (max-width: 1000px) {
    h2.title{
    font-size: 35px;
    font-weight: 900;
  }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default GlobalStyles;
