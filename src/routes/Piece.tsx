import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../app/rootReducer';
import Footer from '../common/components/Footer';
import { selectPieceById } from '../modules/myPage/utils/myPage.reducer';
import Keywords from '../modules/piece/components/Keywords';
import LocationItem from '../modules/piece/components/LocationItem';
import PieceDetailItem from '../modules/piece/components/PieceDetailItem';
import PieceHeader from '../modules/piece/components/PieceHeader';
import PieceMaker from '../modules/piece/components/PieceMaker';
import RecommendPieceList from '../modules/piece/components/RecommendPieceList';
import { selectPiece } from '../modules/piece/utils/piece.reducer';

const Piece = () => {
  const { pieceId } = useParams();
  const navigate = useNavigate();
  const piece = pieceId
    ? useSelector((state: RootState) => selectPieceById(state, parseInt(pieceId)))
    : null;

  const createdPiece = useSelector((state: RootState) => selectPiece(state));

  useEffect(() => {
    if (!piece && !createdPiece) {
      navigate('/');
    }
  }, []);

  console.log(pieceId, piece);
  return piece ? (
    <Container>
      <PieceHeader />
      <ElementContainer>
        <PieceMaker></PieceMaker>
        <PieceDetailItem piece={piece} />
        <LocationItem piece={piece} />
        <Keywords piece={piece} />
      </ElementContainer>
      <RecommendPieceList />
      <Footer />
    </Container>
  ) : createdPiece ? (
    <Container>
      <PieceHeader />
      <ElementContainer>
        <PieceMaker></PieceMaker>
        <PieceDetailItem piece={createdPiece} />
        <LocationItem piece={createdPiece} />
        <Keywords piece={createdPiece} />
      </ElementContainer>
      <RecommendPieceList />
      <Footer />
    </Container>
  ) : (
    <></>
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
  /* height: 100%; */
  padding: 16px;
`;
