import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import DataContextComponent from 'context/DataContext';
import ModeContextComponent from 'context/ModeContext';
import AlertContextComponent from 'context/AlertContext';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from 'reducers/RootReducer';
import { CssBaseline } from '@mui/material';

const store = createStore(RootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContextComponent>
    <Provider store={store}>
      <ModeContextComponent>
        <AlertContextComponent>
          <BrowserRouter>
            <CssBaseline />
            <App />
          </BrowserRouter>
        </AlertContextComponent>
      </ModeContextComponent>
    </Provider>
  </DataContextComponent>
);
