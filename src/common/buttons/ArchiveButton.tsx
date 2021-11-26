import React from 'react';
import styled from 'styled-components';
import ArchiveFilledIcon from '../icons/ArchiveFilledIcon';
import ArchiveOutlinedIcon from '../icons/ArchiveOutlinedIcon';

interface Props {
  isArchived: boolean;
  onArchive: () => void;
}

const ArchiveButton = ({ isArchived, onArchive }: Props) => {
  return (
    <Button onClick={onArchive}>
      {isArchived ? <ArchiveFilledIcon /> : <ArchiveOutlinedIcon />}
    </Button>
  );
};

export default ArchiveButton;

const Button = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  right: 0;
`;
