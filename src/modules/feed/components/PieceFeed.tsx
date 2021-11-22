import React from 'react';
import styled from 'styled-components';
import PieceItem from '../../../common/components/PieceItem';

const PieceFeed = () => {
  return (
    <Container>
      <PieceItem />
      <PieceItem />
      <PieceItem />
      <PieceItem />
      <PieceItem />
      <PieceItem />
      <PieceItem />
      <PieceItem />
    </Container>
  );
};

export default PieceFeed;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
