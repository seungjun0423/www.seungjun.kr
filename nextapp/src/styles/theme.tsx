
const lightTheme = {
  mode: 'light',
  text: '#5e5e5e',
	headerColor: '#ffffff',
  background: '#fafafa',
  borderColor: '#a9a9a93c',
  bodyColor: '#fafafa',
	categoryColor: '#5e5e5e',
};

const darkTheme = {
  mode: 'dark',
  text: '#484754',
	headerColor: '#292e2e',
  background: 'gray',
  borderColor: '#eaeaea',
  bodyColor: 'gray',
	categoryColor: '#eaeaea',
};

const COLOR_MODE_KEY = 'color-mode';
const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';

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
	'category-color': {
		light: lightTheme.categoryColor,
    dark: darkTheme.categoryColor,
	}
};

export { lightTheme, darkTheme, themeProperties, COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP };
