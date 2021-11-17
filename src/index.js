import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import './sass/index.scss';
import './sass/light-theme-style.scss';
import './sass/dark-theme-style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import 'mapbox-gl/dist/mapbox-gl.css';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  <BrowserRouter>
  <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
