import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../common/components/Footer';
import Keywords from '../modules/piece/components/Keywords';
import LocationItem from '../modules/piece/components/LocationItem';
import PieceDetailItem from '../modules/piece/components/PieceDetailItem';
import PieceHeader from '../modules/piece/components/PieceHeader';
import PieceMaker from '../modules/piece/components/PieceMaker';
import RecommendPieceList from '../modules/piece/components/RecommendPieceList';

const Piece = () => {
  const { pieceId } = useParams();
  return (
    <Container>
      <PieceHeader />
      <ElementContainer>
        <PieceMaker></PieceMaker>
        <PieceDetailItem />
        <LocationItem />
        <Keywords />
        <RecommendPieceList />
      </ElementContainer>
      <Footer />
    </Container>
  );
};

export default Piece;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
  background: #e5e5e5;
`;

const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
`;
