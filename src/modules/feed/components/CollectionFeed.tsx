import React from 'react';
import styled from 'styled-components';
import CollectionItem from '../../../common/components/CollectionItem';

const CollectionFeed = () => {
  return (
    <Container>
      <CollectionItem />
      <CollectionItem />
      <CollectionItem />
      <CollectionItem />
    </Container>
  );
};

export default CollectionFeed;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
