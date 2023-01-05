import { useState } from 'react';
import styled from 'styled-components';
import BasicModalOverlay from '../ModalOverlays/BasicModalOverlay';

const BasicModalStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
  opacity: 0.8;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BasicModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      {isModalOpen && (
        <BasicModalStyle>
          <BasicModalOverlay
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </BasicModalStyle>
      )}
    </>
  );
};

export default BasicModal;
