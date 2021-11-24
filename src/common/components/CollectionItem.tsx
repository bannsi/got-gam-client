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
    <Container className="item">
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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 216px;
  min-height: 216px;
  margin: 4px 0;
  padding: 16px;
  background: #cccccc;
  border-radius: 8px;
  align-items: flex-end;
  justify-content: space-between;
  color: #ffffff;
`;
const Content = styled.div`
  width: 100%;
`;

const Title = styled(Headline)`
  margin-bottom: 8px;
`;
