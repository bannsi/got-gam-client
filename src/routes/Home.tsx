import React from 'react';
import styled from 'styled-components';
import BestCollections from '../modules/home/containers/BestCollections';
import BestPieceMakers from '../modules/home/containers/BestPieceMakers';
import BestPieces from '../modules/home/containers/BestPieces';
import DDay from '../modules/home/containers/DDay';
import Header from '../modules/home/containers/Header';

const Home = () => {
  return (
    <Container>
      <Header />
      <DDay></DDay>
      <BestCollections />
      <BestPieces />
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
