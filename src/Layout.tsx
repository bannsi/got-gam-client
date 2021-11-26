import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ArchiveNavButton from './common/buttons/ArchiveNavButton';
import FeedNavButton from './common/buttons/FeedNavButton';
import HomeNavButton from './common/buttons/HomeNavButton';
import MakePieceNavButton from './common/buttons/MakePieceNavButton';
import MyNavButton from './common/buttons/MyNavButton';
import Modal from './common/modal/Modal';
import { ButtonText } from './common/text/ButtonText';
import { Caption } from './common/text/Caption';
import { SubTitle } from './common/text/SubTitle';

const Layout = () => {
  const [visible, setVisible] = useState(false);
  const navigator = useNavigate();
  return (
    <Container>
      <Outlet></Outlet>
      <Navigation>
        <NavItem>
          <Link to="/">
            <HomeNavButton />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="feed">
            <FeedNavButton />
          </Link>
        </NavItem>
        <NavItem>
          <MakePieceNavButton onClick={() => setVisible(true)} />
        </NavItem>
        <NavItem>
          <Link to="archive">
            <ArchiveNavButton />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="my-page">
            <MyNavButton />
          </Link>
        </NavItem>
      </Navigation>
      <Modal onClose={() => setVisible(false)} visible={visible}>
        <ModalContent>
          <SubTitle className="title" type="1">
            기록하기
          </SubTitle>
          <ModalItem onClick={() => navigator('/make-piece')}>
            <ButtonText>조각</ButtonText>
            <Caption>다녀온 장소마다 세세하게 기록해요</Caption>
          </ModalItem>
          <ModalItem>
            <ButtonText>조각모음</ButtonText>
            <Caption>조각들을 모아 여행을 한눈에 정리해요</Caption>
          </ModalItem>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Navigation = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;
  box-shadow: 0px -1.04167px 1.04167px rgba(0, 0, 0, 0.1);
  svg {
    width: 24px;
    height: 24px;
  }
`;

const NavItem = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 100%;
  display: flex;
  padding-top: 16px;
  flex-direction: column;
  .title {
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
    color: #666666;
  }
  margin-bottom: 48px;
`;

const ModalItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px 16px;
  border-bottom: 1px solid #e1e1e1;
`;
