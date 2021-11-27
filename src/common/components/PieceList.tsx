import React from 'react';
import styled from 'styled-components';
import { Piece } from '../../modules/piece/utils/piece.interface';
import PieceItem from './PieceItem';

interface PieceListProps {
  list: Piece[];
}

const PieceList = ({ list }: PieceListProps) => {
  return (
    <Container>
      {list.map((item) => (
        <PieceItem key={item.peiceId} piece={item} />
      ))}
    </Container>
  );
};

export default PieceList;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: 1fr;
  column-gap: 2px;
  row-gap: 2px;
  &::before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`;
