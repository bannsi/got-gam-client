import React, { useState } from 'react';
import styled from 'styled-components';
import CollectionList from '../common/components/CollectionList';
import PieceList from '../common/components/PieceList';
import ArchiveSelector from '../modules/archive/components/ArchiveSelector';
import LinkList from '../modules/archive/components/LinkList';
import { SelectorType } from '../modules/archive/utils/SelectorType';
const Folder = () => {
  const [selected, setSelected] = useState<SelectorType>('piece');
  return (
    <Container>
      <ArchiveSelector selected={selected} setSelected={setSelected} />
      {selected === 'piece' ? (
        <PieceList />
      ) : selected === 'collection' ? (
        <CollectionList />
      ) : (
        <LinkList />
      )}
    </Container>
  );
};

export default Folder;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
