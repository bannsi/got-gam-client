import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PlusIcon from '../icons/PlusIcon';

const MakePieceNavButton = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/MakePiece')}>
      <PlusIcon />
    </Button>
  );
};

export default MakePieceNavButton;

const Button = styled.div``;
