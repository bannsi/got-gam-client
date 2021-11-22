import React from 'react';
import styled from 'styled-components';
import FilterIcon from '../../../common/icons/FilterIcon';
import { Caption } from '../../../common/text/Caption';
import FilterItem from './FilterItem';

const Filter = () => {
  return (
    <Container>
      <FilterItem content={<FilterIcon />} />
      <FilterItem content={<Caption>장소</Caption>} />
      <FilterItem content={<Caption>컨셉</Caption>} />
      <FilterItem content={<Caption>동행자</Caption>} />
    </Container>
  );
};

export default Filter;

const Container = styled.div`
  display: flex;
  padding: 16px;
  color: #666666;
`;
