import ThemeActionTypes from './theme.type';

const INITIAL_STATE = {
  theme_color:null,
}

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemeActionTypes.SET_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
