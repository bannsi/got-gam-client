import React from 'react';
import styled from 'styled-components';

interface FilterItemProps {
  content: React.ReactElement;
}

const FilterItem = ({ content }: FilterItemProps) => {
  return <Container>{content}</Container>;
};

export default FilterItem;

const Container = styled.div`
  background: '#F7F7F7';
  border-radius: 8px;
  padding: 5px 12px;
  margin-right: 8px;
`;
