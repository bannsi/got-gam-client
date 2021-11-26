import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackIcon from '../../../common/icons/BackIcon';
import { SubTitle } from '../../../common/text/SubTitle';

interface ArchiveHeaderProps {
  folder: string | undefined;
}
interface ContainerProps {
  isFolder: boolean;
}

const ArchiveHeader = ({ folder }: ArchiveHeaderProps) => {
  const navigator = useNavigate();
  return (
    <Container isFolder={!!folder}>
      {folder && <BackIcon onBack={() => navigator('/archive')} />}
      <SubTitle type="1">{folder ? folder : '아카이브'}</SubTitle>
    </Container>
  );
};

export default ArchiveHeader;

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  padding-left: ${(props) => (props.isFolder ? '4px' : '16px')};
  height: 48px;
  min-height: 48px;
`;
