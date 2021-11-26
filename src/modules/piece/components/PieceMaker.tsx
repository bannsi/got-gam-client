import React from 'react';
import styled from 'styled-components';
import Follow from '../../../common/components/Profile/Follow';
import { Caption } from '../../../common/text/Caption';

const PieceMaker = () => {
  return (
    <Container>
      <Maker>
        <img />
        <Caption>이곧감</Caption>
      </Maker>
      <Follow />
    </Container>
  );
};

export default PieceMaker;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const Maker = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background: #c4c4c4;
    margin-right: 4px;
  }
`;
