'use client'
import { ReactNode } from 'react';
import { lightTheme, darkTheme } from './ColorModeContext';
import { ThemeProvider } from 'styled-components';

import { useColorModeContext } from './ColorModeContext';

const ThemeContext = ({ children }: { children: ReactNode }) => {
  const { colorMode } = useColorModeContext();
  return (
    <ThemeProvider theme={colorMode === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeContext;
