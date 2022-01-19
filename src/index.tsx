import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
// import { Provider } from 'react-redux'

import App from './App';
import reportWebVitals from './reportWebVitals';
/* Core CSS required for Ionic components to work properly */

ReactDOM.render(
    <React.StrictMode>
      <HashRouter basename={(window as any).__MICRO_APP_BASE_ROUTE__ || '/'}>
        <App />
      </HashRouter>
    </React.StrictMode>,
  // </Provider>,
  document.getElementById('root-ng')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
