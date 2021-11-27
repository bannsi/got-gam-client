import { time } from 'console';
import React from 'react';
import styled from 'styled-components';
import { Piece } from '../../piece/utils/piece.interface';
import { Collection } from '../utils/collection.interface';
import PieceSelectorItem from './PieceSelectorItem';

interface PieceListProps {
  list: Piece[];
  selectList: Piece[];
  setSelectList: (id: Piece[]) => void;
  setItems: (items: Collection[]) => void;
  items: Collection[];
}

const PieceSelector = ({ items, setItems, selectList, setSelectList, list }: PieceListProps) => {
  console.log(selectList);
  return (
    <Container>
      {list.map((item) => (
        <PieceSelectorItem
          onSelect={() => {
            if (!selectList.includes(item)) {
              setSelectList([...selectList, item]);
              const collectItem = {
                peiceId: item.peiceId,
                date: item.date,
                orderNum: 0,
                content: ''
              };
              setItems([...items, collectItem]);
            } else {
              const newList = selectList.filter((ele) => ele !== item);
              setSelectList(newList);
              const newItems = items.filter((ele) => ele.peiceId !== item.peiceId);
              setItems(newItems);
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
