import React, {useState, useContext} from 'react';
import FileContext from '../context/FileContext';
const Counter = () => {
  const {counter, setCounter} = useContext(FileContext);
  return <div className="card">
  <button onClick={() => setCounter((count) => count + 1)}>
    count is {counter}
  </button>
</div>
};

export default Counter;