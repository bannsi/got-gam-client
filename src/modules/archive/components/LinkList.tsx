import React from 'react';
import styled from 'styled-components';
import LinkItem from './LinkItem';

const LinkList = () => {
  return (
    <Container>
      <LinkItem />
      <LinkItem />
      <LinkItem />
      <LinkItem />
    </Container>
  );
};

export default LinkList;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
`;
