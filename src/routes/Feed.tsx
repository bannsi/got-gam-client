import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../common/components/Header';
import { Headline } from '../common/text/Headline';
import Filter from '../modules/feed/components/Filter';
import PieceFeed from '../modules/feed/components/PieceFeed';
import CollectionFeed from '../modules/feed/components/CollectionFeed';

const Feed = () => {
  const [showPiece, setShowPiece] = useState(true);
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
      {showPiece ? <PieceFeed /> : <CollectionFeed />}
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
