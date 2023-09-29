
const lightTheme = {
  mode: 'light',
  text: 'black',
	headerColor: '#ffffff',
  background: '#fafafa',
  borderColor: '#a9a9a93c',
  bodyColor: '#fafafa',
};

const darkTheme = {
  mode: 'dark',
  text: '#eaeaea',
	headerColor: '#292e2e',
  background: '#a9a9a9',
  borderColor: '#a9a9a9',
  bodyColor: 'gray',
};

const COLOR_MODE_KEY = 'color-mode';
const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
// const INITIAL_COLOR_MODE_CSS_PROP = 'light';

const themeProperties = {
  'mode-color': {
    light: lightTheme.mode,
    dark: darkTheme.mode,
  },
	'header-color': {
		light: lightTheme.headerColor,
    dark: darkTheme.headerColor,
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
};

export { lightTheme, darkTheme, themeProperties, COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP };
