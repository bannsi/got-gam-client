import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import ArchiveNavButton from './common/buttons/ArchiveNavButton';
import FeedNavButton from './common/buttons/FeedNavButton';
import HomeNavButton from './common/buttons/HomeNavButton';
import MakePieceNavButton from './common/buttons/MakePieceNavButton';
import MyNavButton from './common/buttons/MyNavButton';

const Layout = () => {
  return (
    <Container>
      <Outlet />
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
          <Link to="make-piece">
            <MakePieceNavButton />
          </Link>
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
  height: 57px;
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
