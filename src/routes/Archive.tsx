import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import AddFolderButton from '../modules/archive/components/AddFolderButton';
import ArchiveHeader from '../modules/archive/components/ArchiveHeader';
import FolderItem from '../modules/archive/components/FolderItem';
import LinkButton from '../modules/archive/components/LinkButton';
import Folder from './Folder';

const Archive = () => {
  const navigate = useNavigate();
  const params = useParams();
  const folder = {
    title: '폴더 타이틀'
  };

  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <ArchiveHeader folder={params.archiveId ? folder : null} />
      {params.archiveId ? (
        <Folder />
      ) : (
        <FolderContainer>
          <FolderItem onClick={() => navigate(`/archive/${1}`)} />
          <FolderItem onClick={() => navigate(`/archive/${1}`)} />
          <FolderItem onClick={() => navigate(`/archive/${1}`)} />
          <AddFolderButton />
        </FolderContainer>
      )}
      {!params.archiveId && <LinkButton onClick={() => setVisible(true)} />}
    </Container>
  );
};

export default Archive;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  margin-bottom: 57px;
`;
const FolderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  row-gap: 16px;
  padding: 16px;
`;
