import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '../../../common/text/SubTitle';
import { CollectionItemType } from '../../myPage/utils/myPage.api';
import BestCollectionItem from './BestCollectionItem';

interface BestCollectionsProps {
  list: CollectionItemType[];
}

const BestCollections = ({ list }: BestCollectionsProps) => {
  return (
    <Container>
      <Label type={'1'}>베스트 조각 모음</Label>
      <CollectionList>
        {list.map((item) => (
          <BestCollectionItem key={item.id} item={item} />
        ))}
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
