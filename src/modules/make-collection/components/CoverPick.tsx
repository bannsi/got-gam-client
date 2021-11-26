import React, { useState } from 'react';
import styled from 'styled-components';
import NextButton from '../../../common/buttons/NextButton';
import { Piece } from '../../piece/utils/piece.interface';
import CoverSelectItem from './CoverSelectItem';

interface CoverPickProps {
  selectList: Piece[];
  onNext: () => void;
  setSelectedCover: (url: string) => void;
  selectedCover: string;
}
const CoverPick = ({ selectedCover, setSelectedCover, selectList, onNext }: CoverPickProps) => {
  return (
    <Container>
      <TextContainer>
        <Text>커버 사진을</Text>
        <Text>선택해주세요</Text>
      </TextContainer>
      <Content>
        {selectList.map((item) => (
          <CoverSelectItem
            onSelect={() => setSelectedCover(item.images[0])}
            key={item.peiceId}
            piece={item}
            selected={selectedCover === item.images[0]}
          />
        ))}
      </Content>
      <NextButton text={`다음`} onNext={onNext} />
    </Container>
  );
};

export default CoverPick;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 16px;
  overflow-x: hidden;
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
  width: 100%;
  overflow-x: scroll;
  margin-top: 58px;
  margin: auto;
`;
