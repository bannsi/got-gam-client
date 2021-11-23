import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../../common/icons/SearchIcon';

const MyPageHeader = () => {
  return (
    <Container>
      <SearchIcon /> 설정아이콘필요
    </Container>
  );
};

export default MyPageHeader;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 16px;
  min-height: 53px;
  margin-top: 24px;
  svg {
    width: 24px;
    height: 24px;
    margin-left: 13px;
  }
`;
