import React from 'react';
import styled from 'styled-components';
import { Caption } from '../../../common/text/Caption';

interface TimeStampProps {
  time: string;
}

const TimeStamp = ({ time }: TimeStampProps) => {
  return (
    <Container>
      <Caption>{time}</Caption>
    </Container>
  );
};

export default TimeStamp;

const Container = styled.div`
  position: absolute;
  top: 202px;
  left: 16px;
  z-index: 1;
  width: 57px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f45400;
  color: #f45400;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: #ffffff;
`;
