import React from 'react';
import styled from 'styled-components';
import { Piece } from '../utils/piece.interface';

interface PieceDetailItemProps {
  piece: Piece;
}

const PieceDetailItem = ({ piece }: PieceDetailItemProps) => {
  return (
    <Container>
      <Img src={piece.images[0]}></Img>
      <Desc>{piece.content}</Desc>
    </Container>
  );
};

export default PieceDetailItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 8px;
`;

const Img = styled.img`
  width: calc(100vw - 32px);
  height: calc(100vw - 32px);
  border-radius: 8px 8px 0 0;
  background-color: #cccccc;
  object-fit: cover;
`;

const Desc = styled.div`
  display: flex;
  padding: 24px 16px;
`;
