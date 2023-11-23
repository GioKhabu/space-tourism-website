import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from './assets/utils';
import HamburgerMenueContextPorvider from './context/HamburgerMenu.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HamburgerMenueContextPorvider>
        <App
          style={{
            '--color-main': Theme.mainColor,
            '--color-secondary': Theme.secondaryColor,
            '--color-third': Theme.thirdColor,
          }}
        />
      </HamburgerMenueContextPorvider>
    </BrowserRouter>
  </React.StrictMode>
);
