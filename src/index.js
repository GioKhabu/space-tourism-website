import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { Theme } from './assets/utils';
import HamburgerMenueContextPorvider from './context/HamburgerMenu.context';
import WindowSizeContextProvider from './context/WindowSize.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <WindowSizeContextProvider>
        <HamburgerMenueContextPorvider>
          <App
            style={{
              '--color-main': Theme.mainColor,
              '--color-secondary': Theme.secondaryColor,
              '--color-third': Theme.thirdColor,
            }}
          />
        </HamburgerMenueContextPorvider>
      </WindowSizeContextProvider>
    </HashRouter>
  </React.StrictMode>
);
