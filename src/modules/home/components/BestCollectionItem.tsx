import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ArchiveButton from '../../../common/buttons/ArchiveButton';
import { Headline } from '../../../common/text/Headline';
import { SubTitle } from '../../../common/text/SubTitle';
import { CollectionItemType } from '../../myPage/utils/myPage.api';

interface CollectionItemProps {
  item: CollectionItemType;
}

const BestCollectionItem = ({ item }: CollectionItemProps) => {
  const [isArchived, setIsArchived] = useState(false);
  const navigate = useNavigate();
  const onArchive = () => {
    setIsArchived(!isArchived);
  };
  return (
    <ContainerBox className="item">
      <ArchiveButton isArchived={isArchived} onArchive={onArchive} />
      <Container
        style={{ backgroundImage: `url(${item.coverImage})` }}
        onClick={() => navigate(`/collection/${item.id}`)}
      >
        <Content>
          <Title type={'6'}>{item.title}</Title>
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
  width: 304px;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #cccccc;
  border-radius: 8px;
  justify-content: flex-end;
  color: #ffffff;
  background-size: cover;
`;
const Content = styled.div`
  width: 100%;
`;

const Title = styled(Headline)`
  margin-bottom: 8px;
`;
