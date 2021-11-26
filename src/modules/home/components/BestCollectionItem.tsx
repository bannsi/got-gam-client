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
    <ContainerBox className="item">
      <ArchiveButton isArchived={isArchived} onArchive={onArchive} />
      <Container>
        <Content>
          <Title type={'6'}>제주 첫 여행</Title>
          <SubTitle type={'2'}>제주</SubTitle>
        </Content>
      </Container>
    </ContainerBox>
  );
};

export default BestCollectionItem;

const ContainerBox = styled.div`
  width: 304px;
  height: 200px;
  min-width: 304px;
  min-height: 200px;
  display: flex;
  margin: 0 8px 8px 8px;
  border-radius: 8px;
  position: relative;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #cccccc;
  border-radius: 8px;
  justify-content: flex-end;
  color: #ffffff;
`;
const Content = styled.div`
  width: 100%;
`;

const Title = styled(Headline)`
  margin-bottom: 8px;
`;
