import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackIcon from '../../../common/icons/BackIcon';

const PieceHeader = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <BackIcon onBack={() => navigate(-1)} />
    </Container>
  );
};

export default PieceHeader;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
