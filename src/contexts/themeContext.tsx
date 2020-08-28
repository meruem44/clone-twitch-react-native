import React, { useState, useCallback, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import Light from '../styles/themes/ligth';
import Darck from '../styles/themes/dark';

interface GlobalContextProps {
    toggleTheme(): void;
}

const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps)

const ProviderTheme: React.FC = ({ children }) => {
    const [theme, setTheme] = useState(Light);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? Darck : Light);
    }
        
  return (
     <GlobalContext.Provider value={{ toggleTheme }} >
          <ThemeProvider theme={theme}>
          {children}
      </ThemeProvider>
     </GlobalContext.Provider>
  );
}

export { ProviderTheme, GlobalContext };