import React from 'react';
import styled from 'styled-components';
import PieceItem from '../../../common/components/PieceItem';
import { SubTitle } from '../../../common/text/SubTitle';

const BestPieces = () => {
  return (
    <Container>
      <Label type={'1'}>베스트 조각</Label>
      <PieceList>
        <PieceItem />
        <PieceItem />
        <PieceItem />
        <PieceItem />
        <PieceItem />
        <PieceItem />
      </PieceList>
    </Container>
  );
};

export default BestPieces;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
`;

const Label = styled(SubTitle)`
  margin: 15px 16px;
`;

const PieceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
