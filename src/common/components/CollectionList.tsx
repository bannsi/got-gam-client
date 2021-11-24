import React from 'react';
import styled from 'styled-components';
import CollectionItem from './CollectionItem';

const CollectionList = () => {
  return (
    <Container>
      <CollectionItem />
      <CollectionItem />
      <CollectionItem />
      <CollectionItem />
    </Container>
  );
};

export default CollectionList;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
`;
