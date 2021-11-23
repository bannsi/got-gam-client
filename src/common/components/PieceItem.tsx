import React, { useState } from 'react';
import styled from 'styled-components';
import ArchiveButton from '../buttons/ArchiveButton';

const PieceItem = () => {
  const [isArchived, setIsArchived] = useState(false);
  const onArchive = () => {
    setIsArchived(!isArchived);
  };

  return (
    <Container>
      <ArchiveButton isArchived={isArchived} onArchive={onArchive} />
    </Container>
  );
};

export default PieceItem;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  width: 186px;
  height: 186px;
  min-width: 186px;
  min-height: 186px;
  background: #cccccc;
`;
