import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../../common/icons/SearchIcon';
import SettingIcon from '../../../common/icons/SettingIcon';
import { SubTitle } from '../../../common/text/SubTitle';

const MyPageHeader = () => {
  return (
    <Container>
      <SubTitle type="2">내 조각</SubTitle>
      <SettingIcon />
    </Container>
  );
};

export default MyPageHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  min-height: 48px;
`;
