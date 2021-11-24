import React from 'react';
import styled from 'styled-components';
import PieceItem from '../../../common/components/PieceItem';
import PieceList from '../../../common/components/PieceList';
import { SubTitle } from '../../../common/text/SubTitle';

const BestPieces = () => {
  return (
    <Container>
      <Label type={'1'}>베스트 조각</Label>
      <PieceList />
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
