import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Counter from '../components/Counter';
// import FileContext from '../context/FileContext';
import {FileContextProvider} from '../context/FileContext';

function App() {

  return (
    <>
      <FileContextProvider>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <Counter />
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </FileContextProvider>
    </>
  );
}

export default App;
