import React from 'react';
import styled from 'styled-components';
import PieceItem from '../../../common/components/PieceItem';
import PieceMakerItem from '../../../common/components/PieceMakerItem';
import { SubTitle } from '../../../common/text/SubTitle';

const BestPieceMakers = () => {
  return (
    <Container>
      <Label type={'1'}>이번 주 베스트 조각가는 누구일까요?</Label>
      <MakerList>
        <PieceMakerItem />
        <PieceMakerItem />
        <PieceMakerItem />
        <PieceMakerItem />
        <PieceMakerItem />
        <PieceMakerItem />
        <PieceMakerItem />
      </MakerList>
    </Container>
  );
};

export default BestPieceMakers;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
`;

const Label = styled(SubTitle)`
  margin: 15px 16px;
`;

const MakerList = styled.div`
  display: flex;
  overflow-x: scroll;
`;
