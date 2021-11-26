import React, { useState } from 'react';
import styled from 'styled-components';
import { Caption } from '../../text/Caption';

const Follow = () => {
  const [follow, setFollow] = useState(false);
  return (
    <Container onClick={() => setFollow(!follow)}>
      <Caption className="text">{follow ? '팔로우' : '언팔로우'}</Caption>
    </Container>
  );
};

export default Follow;

const Container = styled.div`
  width: 66px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  .text {
    color: #ffffff;
  }
  background: #000000;
  border-radius: 6px;
`;
