import React from 'react';
import styled from 'styled-components';
import { CollectionItemType } from '../../modules/myPage/utils/myPage.api';
import CollectionItem from './CollectionItem';

interface CollectionListProps {
  list: CollectionItemType[];
}

const CollectionList = ({ list }: CollectionListProps) => {
  return (
    <Container>
      {list.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
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
