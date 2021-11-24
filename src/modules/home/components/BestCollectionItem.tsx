import React, { useState } from 'react';
import styled from 'styled-components';
import ArchiveButton from '../../../common/buttons/ArchiveButton';
import { Headline } from '../../../common/text/Headline';
import { SubTitle } from '../../../common/text/SubTitle';

const BestCollectionItem = () => {
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

export default BestCollectionItem;

const Container = styled.div`
  width: 304px;
  height: 200px;
  min-width: 304px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  margin: 0 8px 8px 8px;
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
