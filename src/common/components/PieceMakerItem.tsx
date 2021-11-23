import React from 'react';
import styled from 'styled-components';

const PieceMakerItem = () => {
  return <Container className="profileImg"></Container>;
};

export default PieceMakerItem;

const Container = styled.div`
  width: 72px;
  height: 72px;
  min-width: 72px;
  min-height: 72px;
  background: #c4c4c4;
  border-radius: 100%;

  border: 1px solid #ffffff;
`;
