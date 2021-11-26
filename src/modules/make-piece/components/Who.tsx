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
  companion: string[];
  setCompanion: (arr: string[]) => void;
}
const dateFormat = 'YYYY년 MM월 DD일';

const companionList = ['친구와', '연인과', '선/후배와', '형제/자매와', '부모님과', '가족과'];
const Who = ({ locationName, date, onNext, companion, setCompanion }: HowProps) => {
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
          <Question>누구와 함께했나요?</Question>
          <KeywordContainer>
            {companionList.map((com) => (
              <Keyword
                key={com}
                onSelect={() => {
                  if (!companion.includes(com)) {
                    setCompanion([...companion, com]);
                  } else {
                    const newKeyword = companion.filter((key) => key !== com);
                    setCompanion(newKeyword);
                  }
                }}
                selected={companion.includes(com)}
                text={com}
              />
            ))}
          </KeywordContainer>
        </Content>
      </TextContainer>
      <NextButton text="다음" onNext={onNext} />
    </Container>
  );
};

export default Who;

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
