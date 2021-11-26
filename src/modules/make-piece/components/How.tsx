import React from 'react';
import styled from 'styled-components';
import moment, { Moment } from 'moment';
import NextButton from '../../../common/buttons/NextButton';
import { Question } from './Question';
import Keyword from './Keyword';

interface HowProps {
  locationName?: string;
  date: string;
  onNext: () => void;
  keywords: string[];
  setKeywords: (arr: string[]) => void;
}
const dateFormat = 'YYYY년 MM월 DD일';
const How = ({ locationName, date, onNext, keywords, setKeywords }: HowProps) => {
  return (
    <Container>
      <TextContainer>
        <Text>
          <span className="black">{moment(date).format(dateFormat)}</span>
          <span className="gray">에 갔던</span>
        </Text>
        <Text>
          <span className="black">{locationName}</span>
          <span className="gray">는</span>
        </Text>
        <Content>
          <Question>어땠나요?</Question>
          <KeywordContainer>
            <Keyword
              onSelect={() => {
                if (!keywords.includes('금요일날')) {
                  setKeywords([...keywords, '금요일날']);
                } else {
                  const newKeyword = keywords.filter((key) => key !== '금요일날');
                  setKeywords(newKeyword);
                }
              }}
              selected={keywords.includes('금요일날')}
              text="금요일날"
            />
            <Keyword
              onSelect={() => {
                if (!keywords.includes('맛집탐방')) {
                  setKeywords([...keywords, '맛집탐방']);
                } else {
                  const newKeyword = keywords.filter((key) => key !== '맛집탐방');
                  setKeywords(newKeyword);
                }
              }}
              selected={keywords.includes('맛집탐방')}
              text="맛집탐방"
            />
            <Keyword
              onSelect={() => {
                if (!keywords.includes('카페탐방')) {
                  setKeywords([...keywords, '카페탐방']);
                } else {
                  const newKeyword = keywords.filter((key) => key !== '카페탐방');
                  setKeywords(newKeyword);
                }
              }}
              selected={keywords.includes('카페탐방')}
              text="카페탐방"
            />
          </KeywordContainer>
        </Content>
      </TextContainer>
      <NextButton text="다음" onNext={onNext} />
    </Container>
  );
};

export default How;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 56px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const KeywordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: 23px;
  font-family: Noto Sans KR;
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
