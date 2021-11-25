import React from 'react';
import styled from 'styled-components';
import AddNewFolderIcon from '../../../common/icons/AddNewFolderButton';
import { Caption } from '../../../common/text/Caption';

interface AddFolderItemProps {
  onClick: () => void;
}

const AddFolderItem = ({ onClick }: AddFolderItemProps) => {
  return (
    <Container onClick={onClick}>
      <AddNewFolderIcon />
      <Caption>새로운 폴더 추가하기</Caption>
    </Container>
  );
};

export default AddFolderItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e1e1e1;
`;
