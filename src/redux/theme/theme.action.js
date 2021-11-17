import ThemeActionTypes from './theme.type';

export const setThemeSetting = (theme) => ({
  type: ThemeActionTypes.SET_THEME,
  payload: theme,
});
