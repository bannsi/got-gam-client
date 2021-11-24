import React from 'react';
import styled from 'styled-components';
import { ButtonText } from '../text/ButtonText';

interface NextButtonProps {
  text: string;
  onNext: () => void;
}

const NextButton = ({ text, onNext }: NextButtonProps) => {
  return (
    <Container onClick={onNext}>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
};

export default NextButton;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 53px;
  margin: 0 16px;
  color: #ffffff;
  background: #cccccc;
  border-radius: 8px;
`;
