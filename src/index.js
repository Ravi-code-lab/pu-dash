import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './Styles/index.scss'

import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
// import Layout from './Layout';
// import Protect from './Protect';
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();


reportWebVitals();