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

const CoverSelectItem = ({ piece, selected, onSelect }: PieceItemProps) => {
  return (
    <ContainerBox onClick={onSelect}>
      {selected && <SelectIcon />}
      {selected && <Overlay />}
      <Content src={piece?.images[0]}></Content>
    </ContainerBox>
  );
};

export default CoverSelectItem;

const ContainerBox = styled.div`
  position: relative;
  display: flex;
  width: 304px;
  height: 304px;
  min-width: 304px;
  min-height: 304px;
  margin-right: 16px;
  left: 0px;
  top: 0px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(.jpg);
`;

const Overlay = styled.div`
  position: absolute;
  width: 304px;
  height: 304px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);

  border-radius: 8px;
`;
const Content = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
