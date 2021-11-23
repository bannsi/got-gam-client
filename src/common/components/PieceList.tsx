import React from 'react';
import styled from 'styled-components';
import PieceItem from './PieceItem';

const PieceList = () => {
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

export default PieceList;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
