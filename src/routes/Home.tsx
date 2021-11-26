import React, { useEffect } from 'react';
import styled from 'styled-components';
import BestCollections from '../modules/home/components/BestCollections';
import BestPieceMakers from '../modules/home/components/BestPieceMakers';
import BestPieces from '../modules/home/components/BestPieces';
import DDay from '../modules/home/components/DDay';
import Header from '../common/components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyPieceStart } from '../modules/myPage/utils/myPage.action';
import { RootState } from '../app/rootReducer';
import { selectMyPieceList } from '../modules/myPage/utils/myPage.reducer';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMyPieceStart());
  }, []);

  const pieceList = useSelector((state: RootState) => selectMyPieceList(state));

  return (
    <Container>
      <Header />
      <DDay></DDay>
      <BestCollections />
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
