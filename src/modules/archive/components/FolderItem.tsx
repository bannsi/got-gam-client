import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '../../../common/text/SubTitle';

interface FolderItemProps {
  onClick: () => void;
  title: string;
  thumbnail: string;
}

const FolderItem = ({ title, thumbnail, onClick }: FolderItemProps) => {
  return (
    <ContainerBox onClick={onClick}>
      <Container src={thumbnail}></Container>
      <Title type="2">{title}</Title>
    </ContainerBox>
  );
};

export default FolderItem;

const ContainerBox = styled.div`
  position: relative;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  background: #cccccc;
  border-radius: 8px;
  height: 216px;
  min-height: 216px;
  color: #ffffff;
  /* overflow: hidden; */
`;

const Container = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: #cccccc;
  object-fit: cover;
`;

const Title = styled(SubTitle)`
  z-index: 10;
  position: absolute;
  bottom: 16px;
  left: 16px;
`;
