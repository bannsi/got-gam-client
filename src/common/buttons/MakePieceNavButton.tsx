import React from 'react';
import styled from 'styled-components';
import PlusIcon from '../icons/PlusIcon';

interface MakePieceNavButtonProps {
  onClick: () => void;
}
const MakePieceNavButton = ({ onClick }: MakePieceNavButtonProps) => {
  return (
    <Button onClick={onClick}>
      <PlusIcon />
    </Button>
  );
};

export default MakePieceNavButton;

const Button = styled.div``;
