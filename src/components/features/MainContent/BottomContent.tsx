import styled from 'styled-components';
import BasicButton from '@/components/Buttons/BasicButton';

const BottomContentStyle = styled.section`
  min-height: 30svh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomContent = () => {
  return (
    <BottomContentStyle className="bottomContent">
      <div className="bottomContent_container">
        <BasicButton />
      </div>
    </BottomContentStyle>
  );
};

export default BottomContent;
