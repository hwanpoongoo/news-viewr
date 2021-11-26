import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPages';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<NewsPage/>}></Route>
        <Route path="/:category" element={<NewsPage/>}></Route>
      </Routes>
    </>
  );
};

export default App;
