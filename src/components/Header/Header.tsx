import styled from 'styled-components';
import usePathContext from '@/hooks/usePathContext';
import { useLocation } from '@reach/router';
import { useEffect } from 'react';

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
  const { isTopPage } = usePathContext();
  return (
    <HeaderStyle className="header">
      <div className="header_container">
        {isTopPage && (
          <div>
            <h3>Gatsby Weather</h3>
            <span>Start now</span>
          </div>
        )}
        {!isTopPage && (
          <div>
            <h3>Osaka, Japan</h3>
            <span>Now</span>
          </div>
        )}
      </div>
    </HeaderStyle>
  );
};

export default Header;
