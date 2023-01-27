import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import DataContextComponent from 'context/DataContext';
import ModeContextComponent from 'context/ModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContextComponent>
    <ModeContextComponent>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModeContextComponent>
  </DataContextComponent>
);
