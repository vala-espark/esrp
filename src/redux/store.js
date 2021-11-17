import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root.reducer';

const Middleware = [];

if (process.env.NODE_ENV === 'development') {
  Middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...Middleware));

export const persistor = persistStore(store);

const exportStore = { store, persistor };

export default exportStore;
