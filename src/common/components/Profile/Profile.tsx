import React, { useState } from 'react';
import styled from 'styled-components';
import CollectionList from '../CollectionList';
import PieceList from '../PieceList';
import FollowInfo from './FollowInfo';
import ProfileInfo from './ProfileInfo';
import Selector from './Selector';

const Profile = () => {
  const [showPiece, setShowPiece] = useState(true);
  return (
    <Container>
      <ProfileInfo></ProfileInfo>
      <FollowInfo></FollowInfo>
      <Selector showPiece={showPiece} setShowPiece={setShowPiece}></Selector>
      {showPiece ? <PieceList /> : <CollectionList />}
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
