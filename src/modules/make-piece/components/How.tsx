import React, { useEffect } from 'react';
import styled from 'styled-components';
import moment, { Moment } from 'moment';
import NextButton from '../../../common/buttons/NextButton';
import { Question } from './Question';
import Keyword from './Keyword';
import { useDispatch, useSelector } from 'react-redux';
import { fetchKeywordsStart } from '../../piece/utils/piece.action';
import { selectKeywords } from '../../piece/utils/piece.reducer';
import { RootState } from '../../../app/rootReducer';

interface HowProps {
  locationName?: string;
  date: string;
  onNext: () => void;
  keywords: number[];
  setKeywords: (arr: number[]) => void;
}
const dateFormat = 'YYYY년 MM월 DD일';
const How = ({ locationName, date, onNext, keywords, setKeywords }: HowProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchKeywordsStart());
  }, []);
  const keylist = useSelector((state: RootState) => selectKeywords(state));

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
            {keylist.map((key) => (
              <Keyword
                key={key.id}
                onSelect={() => {
                  if (!keywords.includes(key.id)) {
                    setKeywords([...keywords, key.id]);
                  } else {
                    const newKeyword = keywords.filter((word) => word !== key.id);
                    setKeywords(newKeyword);
                  }
                }}
                selected={keywords.includes(key.id)}
                text={key.name}
              />
            ))}
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
