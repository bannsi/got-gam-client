import React, { useState } from 'react';
import styled from 'styled-components';
import { DateRange } from 'react-date-range';
import NextButton from '../../../common/buttons/NextButton';

interface DateRangeProps {
  date: any;
  setDate: (date: any) => void;
  onNext: () => void;
  dayCount: number;
  setDayCount: (cnt: number) => void;
}
const DateRangePick = ({ setDayCount, date, setDate, onNext }: DateRangeProps) => {
  const [sub, setSub] = useState('');

  return (
    <Container>
      <TextContainer>
        <Text>다녀온 여행일정을</Text>
        <Text>알려주세요</Text>
      </TextContainer>
      <Content>
        <DateRange
          rangeColors={['#F45400']}
          color={'#F45400'}
          editableDateInputs={true}
          onChange={(item) => {
            setDate([item.selection]);
            console.log(item);
            if (item.selection.startDate && item.selection.endDate) {
              const Difference_In_Time =
                item.selection.endDate.getTime() - item.selection.startDate.getTime();
              const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
              setDayCount(Difference_In_Days);
              if (Difference_In_Days == 0) {
                setSub('(당일치기)');
              } else {
                setSub(`(${Difference_In_Days}박${Difference_In_Days + 1}일)`);
              }
            } else {
              setSub('');
            }
          }}
          moveRangeOnFirstSelection={false}
          ranges={date}
        ></DateRange>
      </Content>
      <NextButton text={`다음 ${sub}`} onNext={onNext} />
    </Container>
  );
};

export default DateRangePick;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 16px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  display: flex;
  font-family: Noto Sans KR;
  font-size: 23px;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  color: #000000;
`;

const Content = styled.div`
  display: flex;
  margin: auto;
  margin-top: 58px;
`;
