import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Piece } from '../../modules/piece/utils/piece.interface';
import ArchiveButton from '../buttons/ArchiveButton';

interface PieceItemProps {
  piece: Piece;
}

const PieceItem = ({ piece }: PieceItemProps) => {
  const [isArchived, setIsArchived] = useState(false);
  const onArchive = () => {
    setIsArchived(!isArchived);
  };
  const navigate = useNavigate();

  return (
    <ContainerBox>
      <ArchiveButton isArchived={isArchived} onArchive={onArchive} />
      <Container
        src={piece?.images[0]}
        onClick={() => navigate(`/piece/${piece.peiceId}`)}
      ></Container>
    </ContainerBox>
  );
};

export default PieceItem;

const ContainerBox = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: calc(50vw - 1.5px);
  height: calc(50vw - 1.5px);
  /* min-width: 186px;
  min-height: 186px; */
`;

const Container = styled.img`
  width: 100%;
  height: 100%;
  background: #cccccc;
  object-fit: cover;
`;
