import React from 'react';
import styled from 'styled-components';
import NextButton from '../../../common/buttons/NextButton';

interface DescriptionProps {
  onNext: () => void;
  description: string;
  setDescription: (desc: string) => void;
}

const Description = ({ description, setDescription, onNext }: DescriptionProps) => {
  return (
    <Container>
      <TextContainer>
        <Text>
          <span className="black">기록하고 싶은 게 있다면</span>
          <span className="black">자유롭게 작성해주세요</span>
        </Text>
        <TextArea
          maxLength={200}
          placeholder="200자 이내"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></TextArea>
      </TextContainer>
      <NextButton text="다음" onNext={onNext} />
    </Container>
  );
};

export default Description;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const TextArea = styled.textarea`
  margin-top: 56px;
  height: 400px;
  font-size: 16px;
  ::placeholder {
    color: #cccccc;
  }
  border: none;
  outline: none;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 23px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  color: #000000;
`;
