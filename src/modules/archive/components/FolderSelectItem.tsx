import React from 'react';
import styled from 'styled-components';
import { Caption } from '../../../common/text/Caption';

interface FolderSelectItemProps {
  selected: boolean;
  onClick: () => void;
  title: string;
  thumbnail: string;
}

const FolderSelectItem = ({ title, thumbnail, selected, onClick }: FolderSelectItemProps) => {
  return (
    <Container selected={selected} onClick={onClick}>
      <Block src={thumbnail}></Block>
      <Caption>{title} </Caption>
    </Container>
  );
};

export default FolderSelectItem;

interface ContainerProps {
  selected: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e1e1e1;
  ${(props) => (props.selected ? 'background: #F7F7F7;' : 'background: #FFFFFF;')}
`;

const Block = styled.img`
  display: flex;
  object-fit: cover;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #c4c4c4;
  border-radius: 8px;
  margin-right: 8px;
`;
