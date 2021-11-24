import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '../../../common/text/SubTitle';
import BestCollectionItem from './BestCollectionItem';
const BestCollections = () => {
  return (
    <Container>
      <Label type={'1'}>베스트 조각 모음</Label>
      <CollectionList>
        <BestCollectionItem />
        <BestCollectionItem />
        <BestCollectionItem />
        <BestCollectionItem />
      </CollectionList>
    </Container>
  );
};

export default BestCollections;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
`;

const Label = styled(SubTitle)`
  margin: 15px 16px;
`;

const CollectionList = styled.div`
  display: flex;
  overflow-x: scroll;
  .item {
    &:last-child {
      margin-right: 16px;
    }
    &:first-child {
      margin-left: 16px;
    }
  }
`;
