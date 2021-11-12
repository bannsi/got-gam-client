import React from 'react';
import './App.css';
import Home from './routes/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Archive from './routes/Archive';
import Feed from './routes/Feed';
import MyPage from './routes/MyPage';
import NotFound from './routes/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="feed" element={<Feed />} />
        <Route path="archive" element={<Archive />} />
        <Route path="my-page" element={<MyPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

    // </div>
  );
}

export default App;
