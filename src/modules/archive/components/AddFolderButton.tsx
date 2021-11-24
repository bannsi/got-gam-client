import React from 'react';
import styled from 'styled-components';
import PlusIcon from '../../../common/icons/PlusIcon';

const AddFolderButton = () => {
  return (
    <Container>
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
