import React from 'react';
import styled from 'styled-components';
import CollectionItem from '../../../common/components/CollectionItem';
import { SubTitle } from '../../../common/text/SubTitle';

const BestCollections = () => {
  return (
    <Container>
      <Label type={'1'}>베스트 조각 모음</Label>
      <CollectionList>
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
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
`;
