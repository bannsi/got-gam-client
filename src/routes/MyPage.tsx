import React from 'react';
import styled from 'styled-components';
import Profile from '../common/components/Profile/Profile';
import MyPageHeader from '../modules/myPage/components/MyPageHeader';

const MyPage = () => {
  return (
    <Container>
      <MyPageHeader />
      <Profile />
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  margin-bottom: 57px;
`;
