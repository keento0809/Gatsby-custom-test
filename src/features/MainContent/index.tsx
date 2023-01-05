import styled from 'styled-components';
import BottomContent from './BottomContent';
import TopContent from './topContent';

const MainContentStyle = styled.main`
  min-height: 85svh;
`;

const MainContent = () => {
  return (
    <MainContentStyle className="mainContent">
      <TopContent />
      <BottomContent />
    </MainContentStyle>
  );
};

export default MainContent;
