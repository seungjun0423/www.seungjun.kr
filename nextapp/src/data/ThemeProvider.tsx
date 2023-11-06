'use client'
import { ReactNode } from 'react';
import { lightTheme, darkTheme } from '../styles/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { useColorModeContext } from './ColorModeContext';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { colorMode } = useColorModeContext();
  return (
    <StyledThemeProvider theme={colorMode === 'light' ? lightTheme : darkTheme}>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
