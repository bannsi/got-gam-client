import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../app/rootReducer';
import { fetchMyPieceStart } from '../../../modules/myPage/utils/myPage.action';
import { selectMyPieceList } from '../../../modules/myPage/utils/myPage.reducer';
import CollectionList from '../CollectionList';
import PieceList from '../PieceList';
import FollowInfo from './FollowInfo';
import ProfileInfo from './ProfileInfo';
import Selector from './Selector';

const Profile = () => {
  const [showPiece, setShowPiece] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMyPieceStart());
  }, []);

  const list = useSelector((state: RootState) => selectMyPieceList(state));

  return (
    <Container>
      <ProfileInfo></ProfileInfo>
      <FollowInfo></FollowInfo>
      <Selector showPiece={showPiece} setShowPiece={setShowPiece}></Selector>
      {showPiece ? <PieceList list={list} /> : <CollectionList />}
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
