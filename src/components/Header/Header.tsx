import styled from 'styled-components';

const HeaderStyle = styled.header`
  height: 15svh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  & h3 {
    font-size: 1.5rem;
    padding-bottom: 0.6rem;
  }
  & span {
    display: block;
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

const Header = () => {
  return (
    <HeaderStyle className="header">
      <div className="header_container">
        <h3>Osaka, Japan</h3>
        <span>Now</span>
      </div>
    </HeaderStyle>
  );
};

export default Header;
