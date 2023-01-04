import styled from 'styled-components';

const FooterStyle = styled.footer`
  padding: 1rem 0;
  font-size: 0.6rem;
`;

const Footer = () => {
  return (
    <FooterStyle className="footer">
      ©︎ KENTO HONDA 2022. All Rights Reserved.
    </FooterStyle>
  );
};

export default Footer;
