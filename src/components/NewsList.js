import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBLock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b4e7f1442f7a4dfb9c4ff87f460bc64a`,
    );
  }, [category]);

  if (loading) {
    return <NewsListBLock>대기중</NewsListBLock>;
  }

  if(!response){
    return null;
  }

  if(error){
    return <NewsListBLock>에러발생</NewsListBLock>;
  }

  const { articles } = response.data;
  return (
    <NewsListBLock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBLock>
  );
};

export default NewsList;
