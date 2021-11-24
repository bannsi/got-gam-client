import React from 'react';
import styled from 'styled-components';
import { Caption } from '../../../common/text/Caption';
import { SelectorType } from '../utils/SelectorType';

interface SelectorItemProps {
  isSelected: boolean;
}

interface ArchiveSelectorProps {
  selected: SelectorType;
  setSelected: (selected: SelectorType) => void;
}

const ArchiveSelector = ({ selected, setSelected }: ArchiveSelectorProps) => {
  return (
    <Container>
      <SelectorItem isSelected={selected === 'piece'} onClick={() => setSelected('piece')}>
        <Caption>조각</Caption>
      </SelectorItem>
      <SelectorItem
        isSelected={selected === 'collection'}
        onClick={() => setSelected('collection')}
      >
        <Caption>조각모음</Caption>
      </SelectorItem>
      <SelectorItem isSelected={selected === 'link'} onClick={() => setSelected('link')}>
        <Caption>링크</Caption>
      </SelectorItem>
    </Container>
  );
};

export default ArchiveSelector;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 40px;
`;

const SelectorItem = styled.div<SelectorItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.isSelected
      ? `color: #F45400;
      border-bottom: 1px solid #F45400;`
      : `color:#CCCCCC;
      border-bottom: 1px solid #CCCCCC;`}
`;
