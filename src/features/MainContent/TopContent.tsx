import styled from 'styled-components';

const TopContentStyle = styled.section`
  min-height: 55svh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopContent = () => {
  return (
    <TopContentStyle className="topContent">
      <div className="topContent_container">Top</div>
    </TopContentStyle>
  );
};

export default TopContent;
