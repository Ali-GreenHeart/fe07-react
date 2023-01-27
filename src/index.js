import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import DataContextComponent from 'context/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContextComponent>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataContextComponent>
);
