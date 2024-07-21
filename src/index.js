import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import './style/utilities.scss';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { ContextProvider } from "./contextProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <App />
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  // </React.StrictMode>
);

reportWebVitals();
