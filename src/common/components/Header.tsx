import React from 'react';
import styled from 'styled-components';
import BellIcon from '../icons/BellIcon';
import SearchIcon from '../icons/SearchIcon';

const Header = () => {
  return (
    <Container>
      <SearchIcon />
      <BellIcon />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 16px;
  min-height: 53px;
  svg {
    width: 24px;
    height: 24px;
    margin-left: 13px;
  }
`;
