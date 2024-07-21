import styled from "styled-components";

const FooterWrap = styled.footer`
  text-align: center;
  padding: 50px 0;
  border-top: 1px solid #fff;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <div className="footer_wrap">Sy All right reserved.</div>
    </FooterWrap>
  );
};
export default Footer;
