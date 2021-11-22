import React from 'react';
import styled from 'styled-components';
import BestCollections from '../modules/home/components/BestCollections';
import BestPieceMakers from '../modules/home/components/BestPieceMakers';
import BestPieces from '../modules/home/components/BestPieces';
import DDay from '../modules/home/components/DDay';
import Header from '../common/components/Header';

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
