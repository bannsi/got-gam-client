import React from 'react';
import styled from 'styled-components';
import { Piece } from '../../piece/utils/piece.interface';
import PieceSelectorItem from './PieceSelectorItem';

interface PieceListProps {
  list: Piece[];
  selectList: Piece[];
  setSelectList: (id: Piece[]) => void;
}

const PieceSelector = ({ selectList, setSelectList, list }: PieceListProps) => {
  console.log(selectList);
  return (
    <Container>
      {list.map((item) => (
        <PieceSelectorItem
          onSelect={() => {
            if (!selectList.includes(item)) {
              setSelectList([...selectList, item]);
            } else {
              const newList = selectList.filter((ele) => ele !== item);
              setSelectList(newList);
            }
          }}
          selected={selectList.includes(item)}
          key={item.peiceId}
          piece={item}
        />
      ))}
    </Container>
  );
};

export default PieceSelector;

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
