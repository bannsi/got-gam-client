import React from 'react';
import styled from 'styled-components';
import PlusIcon from '../../../common/icons/PlusIcon';

interface AddFolderButtonProps {
  onClick: () => void;
}

const AddFolderButton = ({ onClick }: AddFolderButtonProps) => {
  return (
    <Container onClick={onClick}>
      <PlusIcon />
    </Container>
  );
};

export default AddFolderButton;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 8px;
  height: 216px;
  min-height: 216px;
`;
