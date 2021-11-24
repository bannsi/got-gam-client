import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '../../../common/text/SubTitle';

interface FolderItemProps {
  onClick: () => void;
}

const FolderItem = ({ onClick }: FolderItemProps) => {
  return (
    <Container onClick={onClick}>
      <SubTitle type="2">Title</SubTitle>
    </Container>
  );
};

export default FolderItem;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 16px;
  background: #cccccc;
  border-radius: 8px;
  height: 216px;
  min-height: 216px;
  color: #ffffff;
`;
