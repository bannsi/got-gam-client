import React from 'react';
import styled from 'styled-components';
import JuunieIcon from '../../../common/icons/JuunieIcon';
import { Headline } from '../../../common/text/Headline';

const DDay = () => {
  return (
    <Container>
      <JuunieIcon />
      <Headline type={'5'}>
        30일만 버티면
        <br />
        제주도로 곧,감
      </Headline>
    </Container>
  );
};

export default DDay;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 27px 0 38px 16px;
  svg {
    width: 28px;
  }
`;
