import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PlusIcon from '../icons/PlusIcon';

const MakePieceNavButton = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/make-piece')}>
      <PlusIcon />
    </Button>
  );
};

export default MakePieceNavButton;

const Button = styled.div``;
