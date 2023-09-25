'use client';

import {
  ReactNode,
  createContext,
  useEffect,
  useRef,
  useContext,
  useState,
  useCallback,
} from 'react';
import useMediaQuery from '../util/useMediaQuery';

type Theme = {
	mode: string;
	text: string;
	headerColor: string;
	background: string;
	borderColor: string;
	bodyColor: string;
}; 

const lightTheme: Theme = {
  mode: 'light',
  text: 'black',
	headerColor: '#ffffff',
  background: '#fafafa',
  borderColor: '#eaeaea',
  bodyColor: '#fafafa',
};

const darkTheme: Theme = {
  mode: 'dark',
  text: '#eaeaea',
	headerColor: '#292e2e',
  background: '#a9a9a9',
  borderColor: '#a9a9a9',
  bodyColor: 'gray',
};

const COLOR_MODE_KEY = 'color-mode';
const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';

const themeProperties = {
  'mode-color': {
    light: lightTheme.mode,
    dark: darkTheme.mode,
  },
  'text-color': {
    light: lightTheme.text,
    dark: darkTheme.text,
  },
  'background-color': {
    light: lightTheme.background,
    dark: darkTheme.background,
  },
  'border-color': {
    light: lightTheme.borderColor,
    dark: darkTheme.borderColor,
  },
  'body-color': {
    light: lightTheme.bodyColor,
    dark: darkTheme.bodyColor,
  },
	'header-color':{
		light: lightTheme.headerColor,
    dark: darkTheme.headerColor,
	}
};

export { lightTheme, darkTheme, themeProperties, COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP };


type ThemeMode = 'light' | 'dark';

interface ColorModeContextValue {
  colorMode: string | undefined;
  setColorMode: (value: ThemeMode) => void;
}

const ColorModeContext = createContext<ColorModeContextValue | null>(null);

const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, setRawColorMode] = useState<string | undefined>(undefined);
  const systemPrefers = useMediaQuery('(prefers-color-scheme: dark)');
  const firstRender = useRef(true);

  const setColorMode = useCallback((value: ThemeMode) => {
    const root = window.document.documentElement;

    Object.entries(themeProperties).forEach(([name, colorByTheme]) => {
      const cssVarName = `--${name}`;
      root.style.setProperty(cssVarName, colorByTheme[value]);
    });

    setRawColorMode(value);
    window.localStorage.setItem(COLOR_MODE_KEY, value);
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      const osTheme = systemPrefers ? 'dark' : 'light';
      const userTheme = window.localStorage.getItem(COLOR_MODE_KEY);
      const theme = userTheme || osTheme;
      setRawColorMode(theme);
      firstRender.current = false;
    } else {
      setColorMode(systemPrefers ? 'dark' : 'light');
    }
  }, [systemPrefers]);

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

const useColorModeContext = () => {
  const context = useContext(ColorModeContext);
  if (context === null) {
    throw new Error('useColorModeContext must be used within a ThemeProvider');
  }
  return context;
};

export { ColorModeProvider, useColorModeContext };

