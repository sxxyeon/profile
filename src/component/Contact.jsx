import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContactWrap = styled.div`
  padding: 100px;
  h2 {
    padding-bottom: 20px;
  }
  .contact_info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10%;
    .left_info {
      p {
        padding: 15px 0;
        word-break: break-all;
      }
    }
    .right_info {
      p {
        padding: 15px 0;
        word-break: break-all;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    padding: 0 5% 100px;
    .contact_info {
      flex-direction: column;
    }
  }
`;

const Contact = ({ title }) => {
  return (
    <>
      <ContactWrap id="Contact">
        <h2 className="title">{title}</h2>
        <div className="contact_info">
          <div className="left_info">
            <p>mobile : 010-4801-5939</p>
            <p>email : iamsxx93@gmail.com</p>
          </div>
          <div className="right_info">
            <p>
              github :{" "}
              <Link to="https://github.com/sxxyeon" target="_blank">
                https://github.com/sxxyeon
              </Link>
            </p>
            <p>
              velog :{" "}
              <Link to="https://velog.io/@sxxyeon" target="_blank">
                https://velog.io/@sxxyeon
              </Link>
            </p>
          </div>
        </div>
      </ContactWrap>
    </>
  );
};

export default Contact;
