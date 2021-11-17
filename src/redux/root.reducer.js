import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeReducer from "./theme/theme.reducer";

const persistConfig = {
  key: 'esrp',
  storage,
};

const rootReducer = combineReducers({
  theme:themeReducer,
});

export default persistReducer(persistConfig, rootReducer);
