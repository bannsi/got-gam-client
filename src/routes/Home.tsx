import React, { useEffect } from 'react';
import styled from 'styled-components';
import BestCollections from '../modules/home/components/BestCollections';
import BestPieceMakers from '../modules/home/components/BestPieceMakers';
import BestPieces from '../modules/home/components/BestPieces';
import DDay from '../modules/home/components/DDay';
import Header from '../common/components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyCollectionStart, fetchMyPieceStart } from '../modules/myPage/utils/myPage.action';
import { RootState } from '../app/rootReducer';
import { selectMyCollectionList, selectMyPieceList } from '../modules/myPage/utils/myPage.reducer';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMyPieceStart());
    dispatch(fetchMyCollectionStart());
  }, []);

  const pieceList = useSelector((state: RootState) => selectMyPieceList(state));
  const collectionList = useSelector((state: RootState) => selectMyCollectionList(state));
  return (
    <Container>
      <Header />
      <DDay></DDay>
      <BestCollections list={collectionList} />
      <BestPieces pieceList={pieceList} />
      <BestPieceMakers />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  margin-bottom: 57px;
`;
