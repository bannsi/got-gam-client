import React from 'react';
import styled from 'styled-components';

const PieceMakerItem = () => {
  return <Container></Container>;
};

export default PieceMakerItem;

const Container = styled.div`
  width: 72px;
  height: 72px;
  min-width: 72px;
  min-height: 72px;
  background: #c4c4c4;
  border-radius: 100%;
  margin: 0 4px;
  &:last-child {
    margin-right: 16px;
  }
  &:first-child {
    margin-left: 16px;
  }
  border: 1px solid #ffffff;
`;
