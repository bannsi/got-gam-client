import React from 'react';
import styled from 'styled-components';
import ArchiveGrayOutlinedIcon from '../icons/ArchiveGrayOutlinedIcon';
import CommentIcon from '../icons/CommentIcon';
import LikeOutlinedIcon from '../icons/LikeOutlinedIcon';

const Footer = () => {
  return (
    <Container>
      <LikeOutlinedIcon />
      <CommentIcon />
      <ArchiveGrayOutlinedIcon />
    </Container>
  );
};

export default Footer;

const Container = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 56px;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px -1.04167px 1.04167px rgba(0, 0, 0, 0.1);
  svg {
    width: 24px;
    height: 24px;
  }
`;
