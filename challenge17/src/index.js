import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { MainApp } from './pages/MainApp';
import { HomePage } from './pages/HomePage';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <MainApp />
  </BrowserRouter>
);

reportWebVitals();