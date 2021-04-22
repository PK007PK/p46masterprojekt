import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toogleIsActive = () => setIsActive((prevValue) => !prevValue);
  const toogleIsMobile = () => setIsMobile((prevValue) => !prevValue);

  return (
    <AppContext.Provider
      value={{ isActive, toogleIsActive, isMobile, toogleIsMobile }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
}

export default AppContext;
