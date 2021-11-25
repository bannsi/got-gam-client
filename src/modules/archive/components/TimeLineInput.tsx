import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface TimeLineInputProps {
  setTimeline: (timeLine: string) => void;
}
interface TimeLine {
  hour: undefined | number;
  min: undefined | number;
  sec: undefined | number;
}

const TimeLineInput = ({ setTimeline }: TimeLineInputProps) => {
  const [time, setTime] = useState<TimeLine>({ hour: undefined, min: undefined, sec: undefined });
  const minRef = useRef<any>(null);
  const secRef = useRef<any>(null);
  useEffect(() => {
    setTimeline(`${time.hour}:${time.min}:${time.sec}`);
  }, [time]);
  return (
    <Container>
      <Input
        autoFocus
        value={time.hour}
        onChange={(e: any) => {
          if (e.target.value >= 10) {
            minRef.current.focus();
          }
          const numHour = e.target.value > 10 ? 10 : e.target.value;
          setTime({ ...time, hour: numHour });
        }}
        type="number"
        placeholder="시간"
      ></Input>
      :
      <Input
        ref={minRef}
        value={time.min}
        onChange={(e: any) => {
          if (e.target.value >= 10) {
            secRef.current.focus();
          }
          // const min = e.target.value.slice(0, 2);
          const numMin = e.target.value > 60 ? 60 : e.target.value;
          setTime({ ...time, min: numMin });
        }}
        placeholder="분"
        type="number"
      ></Input>
      :
      <Input
        ref={secRef}
        value={time.sec}
        onChange={(e: any) => {
          const numSec = e.target.value > 60 ? 60 : e.target.value;
          setTime({ ...time, sec: numSec });
        }}
        placeholder="초"
        type="number"
      ></Input>
    </Container>
  );
};

export default TimeLineInput;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 307px;
  background: #f7f7f7;
  border-radius: 8px;
  height: 40px;
  padding: 0 12px;
  margin-top: 4px;
`;

const Input = styled.input`
  text-align: center;
  width: 40px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 12px;
  ::placeholder {
    color: #cccccc;
  }
`;
