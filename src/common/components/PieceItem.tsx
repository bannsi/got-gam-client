import React, { useState } from 'react';
import styled from 'styled-components';
import ArchiveButton from '../buttons/ArchiveButton';
import ArchiveFilledIcon from '../icons/ArchiveFilledIcon';
import ArchiveOutlinedIcon from '../icons/ArchiveOutlinedIcon copy';

const PieceItem = () => {
  const [isArchived, setIsArchived] = useState(false);
  const onArchive = () => {
    setIsArchived(!isArchived);
  };
  return (
    <Container>
      <Button isArchived={isArchived} onArchive={() => onArchive}></Button>
    </Container>
  );
};

export default PieceItem;

const Container = styled.div`
  width: 336px;
  height: 220px;
  min-height: 220px;
  display: flex;
  flex-direction: column;
`;

const Button = styled(ArchiveButton)`
  display: flex;
  align-self: flex-end;
`;
