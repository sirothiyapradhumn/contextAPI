import React, { createContext, useMemo, useState } from 'react';

const FileContext = createContext({
  theme: '',
  setTheme: () => {},
  count: 0,
  setCount: () => {},
});

// const FileContext = createContext('fileContext');

export const FileContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [counter, setCounter] = useState(0);

  const value = useMemo(() => ({
    theme,
    setTheme,
    counter,
    setCounter,
  }), [
    theme,
    setTheme,
    counter,
    setCounter,
  ])
  return <FileContext.Provider value={value}>
    {children}
    </FileContext.Provider>;
};

export default FileContext;
