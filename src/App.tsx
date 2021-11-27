import React from 'react';
import './App.css';
import Home from './routes/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Archive from './routes/Archive';
import Feed from './routes/Feed';
import MyPage from './routes/MyPage';
import NotFound from './routes/NotFound';
import Piece from './routes/Piece';
import MakePiece from './routes/MakePiece';
import Login from './routes/Login';
import Folder from './routes/Folder';
import LoginRedirect from './routes/LoginRedirect';
import MakeCollection from './routes/MakeCollection';
import Collection from './routes/Collection';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="feed" element={<Feed />} />
        <Route path="archive" element={<Archive />}>
          <Route path=":archiveId" element={<Folder />} />
        </Route>
        <Route path="my-page" element={<MyPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="piece" element={<Piece />}>
        <Route path=":pieceId" element={<Piece />}></Route>
        {/* <Route path=":peiceId" element={<Peice />}></Route> */}
      </Route>
      <Route path="collection" element={<Collection />}>
        <Route path=":collectionId" element={<Collection />}></Route>
        {/* <Route path=":peiceId" element={<Peice />}></Route> */}
      </Route>
      <Route path="make-piece" element={<MakePiece />} />
      <Route path="make-collection" element={<MakeCollection />} />
      <Route path="login" element={<Login />} />
      <Route path="login/kakao" element={<LoginRedirect />} />
    </Routes>
  );
}

export default App;
