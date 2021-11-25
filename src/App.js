import React, { useCallback, useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    /* 
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        setData(response.data);
      });
    */
  };

  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      {/*      
      <div>
        <div>
          <button onClick={onClick}> 불러오기 </button>
        </div>
        {data && (
          <textarea
            row={7}
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          />
        )}
      </div> */}
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
