import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';
import CollectionList from '../common/components/CollectionList';
import PieceList from '../common/components/PieceList';
import ArchiveSelector from '../modules/archive/components/ArchiveSelector';
import LinkList from '../modules/archive/components/LinkList';
import { SelectorType } from '../modules/archive/utils/SelectorType';
import { fetchMyPieceStart } from '../modules/myPage/utils/myPage.action';
import { selectMyPieceList } from '../modules/myPage/utils/myPage.reducer';
const Folder = () => {
  const [selected, setSelected] = useState<SelectorType>('piece');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMyPieceStart());
  }, []);

  const pieceList = useSelector((state: RootState) => selectMyPieceList(state));

  return (
    <Container>
      <ArchiveSelector selected={selected} setSelected={setSelected} />
      {selected === 'piece' ? (
        <PieceList list={pieceList} />
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
