import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Outlet />
      <nav>
        <Link to="/">홈</Link>
        <Link to="feed">피드</Link>
        <Link to="archive">아카이브</Link>
        <Link to="my-page">마이페이지</Link>
      </nav>
    </div>
  );
};

export default Layout;
