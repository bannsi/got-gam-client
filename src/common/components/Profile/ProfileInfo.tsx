import React from 'react';
import styled from 'styled-components';
import PieceMakerItem from '../PieceMakerItem';
import { SubTitle } from '../../text/SubTitle';
import Follow from './Follow';

const ProfileInfo = () => {
  return (
    <Container>
      <PieceMakerItem />
      <Name type="1">이곧감</Name>
      <Follow />
    </Container>
  );
};

export default ProfileInfo;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;

const Name = styled(SubTitle)`
  margin-left: 11px;
`;
