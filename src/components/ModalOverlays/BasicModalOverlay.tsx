import { Link } from 'gatsby';
import { useState } from 'react';
import styled from 'styled-components';
import BasicButton from '../Buttons/BasicButton';

const BasicModalOverlayStyle = styled.div`
  background: #e6effa;
  padding: 2rem 0rem;
  text-align: center;
  width: 85%;
  margin: 0 auto;
  z-index: 10;
  opacity: 1;
  & .overlay_action {
    padding-top: 1rem;
  }
`;

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: (c: boolean) => void;
}

const BasicModalOverlay = ({ isModalOpen, setIsModalOpen }: Props) => {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <BasicModalOverlayStyle>
      <form className="overlay_customWeatherForm">
        <h3>Custom Weather App</h3>
        <section className="overlay_action">
          <BasicButton buttonText="Go" onClick={handleCloseModal} />
        </section>
      </form>
    </BasicModalOverlayStyle>
  );
};

export default BasicModalOverlay;
