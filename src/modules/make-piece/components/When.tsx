import { DatePicker } from 'antd';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import moment, { Moment } from 'moment';
import NextButton from '../../../common/buttons/NextButton';

interface WhenProps {
  locationName?: string;
  date: string;
  setDate: (date: string) => void;
  fileList?: File[];
  onNext: () => void;
}

const When = ({ locationName, date, onNext, setDate, fileList }: WhenProps) => {
  function onChange(value: Moment | null, dateString: string) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
    setDate(value ? value.format('YYYY-MM-DD') : '');
  }

  return (
    <Container>
      <TextContainer>
        <Text>
          <DatePicker
            onChange={onChange}
            defaultValue={
              moment(date, dateFormat).isValid()
                ? moment(date, dateFormat)
                : moment(new Date(), dateFormat)
            }
            format={dateFormat}
          />
          <span className="gray">에 갔던</span>
        </Text>
        <Text>
          <span className="black">{locationName}</span> <span className="gray">은</span>
        </Text>
      </TextContainer>
      <Images>
        {fileList &&
          [...fileList].map((file) => <Image key={file.name} src={URL.createObjectURL(file)} />)}
      </Images>
      <NextButton
        text="다음"
        onNext={() => {
          onNext();
        }}
      />
    </Container>
  );
};

export default When;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  .ant-picker {
    height: 36px;
    border: 1px solid #e1e1e1;
    box-sizing: border-box;
    border-radius: 8px;
  }
  .ant-picker-suffix {
    display: none;
  }
  .ant-picker-input input {
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 28px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.0015em;

    /* Gray scale/body */

    color: #666666;
  }
`;

const dateFormat = 'YYYY년 MM월 DD일';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  display: flex;
  font-family: Noto Sans KR;
  align-items: center;
  font-size: 23px;
  .gray {
    color: #999999;
    font-style: normal;
    font-weight: normal;
    margin-left: 2px;
  }
  .black {
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    color: #000000;
  }
`;

const Images = styled.div`
  display: flex;
  overflow-x: scroll;
`;

const Image = styled.img`
  width: 304px;
  height: 304px;
  border-radius: 8px;
  min-width: 304px;
  min-height: 304px;
  border-radius: 8px;
  margin-right: 16px;
  object-fit: cover;
`;
