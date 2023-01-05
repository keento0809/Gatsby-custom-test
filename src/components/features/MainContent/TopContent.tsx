import styled from 'styled-components';
import { useLocation } from '@reach/router';
import { useEffect, useState } from 'react';

const TopContentStyle = styled.section`
  min-height: 55svh;
  display: flex;
  justify-content: center;
  align-items: center;
  & h1 {
    font-size: 4rem;
  }
`;

export default function TopContent() {
  // const [isHomePage, setIsHomePage] = useState(false);
  // const location = useLocation();
  // useEffect(() => {
  //   const { pathname } = location;
  //   if (pathname === '/home') {
  //     setIsHomePage(true);
  //   }
  // }, []);
  return (
    <>
      <TopContentStyle className="topContent">
        <div className="topContent_container">
          <h1 className="topContent_temperature">22°</h1>
          <p>Sunny</p>
          <p>5m/s</p>
        </div>
      </TopContentStyle>
    </>
  );
}
