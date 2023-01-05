import styled from 'styled-components';

const FooterStyle = styled.footer`
  padding: 1rem 0;
  font-size: 0.6rem;
  border-top: 1px solid #2d3542;
`;

const Footer = () => {
  return (
    <FooterStyle className="footer">
      ©︎ KENTO HONDA 2022. All Rights Reserved.
    </FooterStyle>
  );
};

export default Footer;
