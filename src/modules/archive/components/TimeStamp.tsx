import React from 'react';
import styled from 'styled-components';
import { Caption } from '../../../common/text/Caption';
import { timeParser } from '../utils/timeParser';

interface TimeStampProps {
  time: string;
  url: string;
}

const TimeStamp = ({ url, time }: TimeStampProps) => {
  return (
    <Container onClick={() => window.open(`${timeParser(url, time)}`)}>
      <Caption>{time}</Caption>
    </Container>
  );
};

export default TimeStamp;

const Container = styled.div`
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
  margin-right: 4px;
`;