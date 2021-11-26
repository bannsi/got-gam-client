import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../../common/icons/SearchIcon';

const SearchInput = () => {
  return (
    <InputContainer>
      <SearchIcon />
      <Input placeholder="검색" />
    </InputContainer>
  );
};

export default SearchInput;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background: #f3f3f3;
  border-radius: 4px;
  padding: 8px;
  svg {
    width: 24px;
    height: 24px;
  }
`;
const Input = styled.input`
  margin-left: 8px;
  background-color: transparent;
  border: none;
  outline: none;
`;
