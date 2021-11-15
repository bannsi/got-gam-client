import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <Container>
      <Outlet />
      <Navigation>
        <NavItem>
          <Link to="/">홈</Link>
        </NavItem>
        <NavItem>
          <Link to="feed">피드</Link>
        </NavItem>
        <NavItem>
          <Link to="make-piece">+</Link>
        </NavItem>
        <NavItem>
          <Link to="archive">아카이브</Link>
        </NavItem>
        <NavItem>
          <Link to="my-page">마이</Link>
        </NavItem>
      </Navigation>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div``;

const Navigation = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 57px;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid black;
`;

const NavItem = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
