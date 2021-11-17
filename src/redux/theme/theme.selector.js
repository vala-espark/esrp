import { createSelector } from 'reselect';

const selectTheme = (state) => state.theme;

export const selectThemeSetting = createSelector(
  [selectTheme],
  (theme) => theme
);
