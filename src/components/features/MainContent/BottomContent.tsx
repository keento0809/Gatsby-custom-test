import styled from 'styled-components';
import BasicButton from '@/components/Buttons/BasicButton';
import { Link } from 'gatsby';
import usePathContext from '@/hooks/usePathContext';

const BottomContentStyle = styled.section`
  min-height: 30svh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomContent = () => {
  const { isTopPage } = usePathContext();
  return (
    <BottomContentStyle className="bottomContent">
      <div className="bottomContent_container">
        {isTopPage && (
          <Link to="/home">
            <BasicButton />
          </Link>
        )}
      </div>
    </BottomContentStyle>
  );
};

export default BottomContent;
