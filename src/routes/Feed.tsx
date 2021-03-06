import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../common/components/Header';
import { Headline } from '../common/text/Headline';
import Filter from '../modules/feed/components/Filter';
import PieceList from '../common/components/PieceList';
import CollectionList from '../common/components/CollectionList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyPieceStart, fetchMyCollectionStart } from '../modules/myPage/utils/myPage.action';
import { RootState } from '../app/rootReducer';
import { selectMyPieceList, selectMyCollectionList } from '../modules/myPage/utils/myPage.reducer';

const Feed = () => {
  const [showPiece, setShowPiece] = useState(true);
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
      <TitleContainer>
        <Title onClick={() => setShowPiece(true)} showPiece={showPiece} type="6">
          조각
        </Title>
        <Title onClick={() => setShowPiece(false)} showPiece={!showPiece} type="6">
          조각모음
        </Title>
      </TitleContainer>
      <Filter />
      {showPiece ? <PieceList list={pieceList} /> : <CollectionList list={collectionList} />}
    </Container>
  );
};

export default Feed;

interface TitleProps {
  showPiece: boolean;
}

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  margin-bottom: 57px;
`;
const TitleContainer = styled.div`
  display: flex;
`;

const Title = styled(Headline)<TitleProps>`
  padding-left: 16px;
  color: ${(props) => (props.showPiece ? '#000000' : '#cccccc')};
`;
