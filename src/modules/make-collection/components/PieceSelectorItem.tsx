import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SelectIcon from '../../../common/icons/SelectIcon';
import { Piece } from '../../piece/utils/piece.interface';

interface PieceItemProps {
  piece: Piece;
  selected: boolean;
  onSelect: () => void;
}

const PieceSelectorItem = ({ piece, selected, onSelect }: PieceItemProps) => {
  return (
    <ContainerBox onClick={onSelect}>
      {selected && <SelectIcon />}
      {selected && <Overlay />}
      <Content src={piece?.images[0]}></Content>
    </ContainerBox>
  );
};

export default PieceSelectorItem;

const ContainerBox = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: calc(50vw - 1.5px);
  height: calc(50vw - 1.5px);
`;

const Overlay = styled.div`
  position: absolute;
  width: calc(50vw - 1.5px);
  height: calc(50vw - 1.5px);
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
`;
const Content = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
