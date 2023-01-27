import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import DataContextComponent from 'context/DataContext';
import ModeContextComponent from 'context/ModeContext';
import AlertContextComponent from 'context/AlertContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContextComponent>
    <ModeContextComponent>
      <AlertContextComponent>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AlertContextComponent>
    </ModeContextComponent>
  </DataContextComponent>
);
