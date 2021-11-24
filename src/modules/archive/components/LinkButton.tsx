import React from 'react';
import styled from 'styled-components';
import LinkIcon from '../../../common/icons/LinkIcon';

interface LinkButtonProps {
  onClick: () => void;
}

const LinkButton = ({ onClick }: LinkButtonProps) => {
  return (
    <Container onClick={onClick}>
      <LinkIcon />
    </Container>
  );
};

export default LinkButton;

const Container = styled.div`
  position: fixed;
  bottom: 72px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: #000000;
  border-radius: 100%;
`;
