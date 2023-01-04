import styled from 'styled-components';

const BasicButtonStyle = styled.button`
  padding: 0.8rem 2rem;
  background: #fff;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    transition: all 0.6s ease-in;
    border-color: #000;
  }
`;

interface Props {
  buttonText?: string;
}

const BasicButton = ({ buttonText = 'Get started' }: Props) => {
  return <BasicButtonStyle>{buttonText}</BasicButtonStyle>;
};

export default BasicButton;
