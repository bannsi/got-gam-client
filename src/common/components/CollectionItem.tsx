import React, { useState } from 'react';
import styled from 'styled-components';
import ArchiveButton from '../buttons/ArchiveButton';
import { Headline } from '../text/Headline';
import { SubTitle } from '../text/SubTitle';

const CollectionItem = () => {
  const [isArchived, setIsArchived] = useState(false);
  const onArchive = () => {
    setIsArchived(!isArchived);
  };
  return (
    <Container>
      <ArchiveButton isArchived={isArchived} onArchive={onArchive} />
      <Content>
        <Title type={'6'}>제주 첫 여행</Title>
        <SubTitle type={'2'}>제주</SubTitle>
      </Content>
    </Container>
  );
};

export default CollectionItem;

const Container = styled.div`
  width: 336px;
  height: 220px;
  min-width: 336px;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  margin: 0 8px;
  padding: 16px;
  /* Gray scale/disable */
  background: #cccccc;
  border-radius: 8px;
  align-items: flex-end;
  justify-content: space-between;
  &:last-child {
    margin-right: 16px;
  }
  &:first-child {
    margin-left: 16px;
  }
  color: #ffffff;
`;
const Content = styled.div`
  width: 100%;
`;

const Title = styled(Headline)`
  margin-bottom: 8px;
`;
