import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import Utilities from './style/utilities.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
