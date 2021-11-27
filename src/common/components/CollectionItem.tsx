import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CollectionItemType } from '../../modules/myPage/utils/myPage.api';
import ArchiveButton from '../buttons/ArchiveButton';
import { Headline } from '../text/Headline';
import { SubTitle } from '../text/SubTitle';

interface CollectionItemProps {
  item: CollectionItemType;
}
const CollectionItem = ({ item }: CollectionItemProps) => {
  const navigate = useNavigate();
  const [isArchived, setIsArchived] = useState(false);
  const onArchive = () => {
    setIsArchived(!isArchived);
  };
  console.log(item.id);
  return (
    <ContainerBox>
      <ArchiveButton isArchived={isArchived} onArchive={onArchive} />
      <Container
        style={{ backgroundImage: `url(${item.coverImage})` }}
        onClick={() => navigate(`/collection/${item.id}`)}
        className="item"
      >
        <Content>
          <Title type={'6'}>{item.title}</Title>
          <SubTitle type={'2'}>부산</SubTitle>
        </Content>
      </Container>
    </ContainerBox>
  );
};

export default CollectionItem;

const ContainerBox = styled.div`
  display: flex;
  width: 100%;
  height: 216px;
  min-height: 216px;
  margin: 4px 0;
  border-radius: 8px;
  color: #ffffff;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 216px;
  min-height: 216px;
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
