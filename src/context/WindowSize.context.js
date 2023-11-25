import React from 'react';
import { getWindowSize } from '../assets/utils';


export const WindowSizeContext = React.createContext();

function WindowSizeContextProvider({ children }) {
  const [windowSize, setWindowSize] = React.useState(getWindowSize());
  const [navbarSize, setNavbarSize] = React.useState(0);
  const [navbarBackgroundSize, setNavbarBackgroundSize] = React.useState(0);
  const value = {
    windowSize,
    setWindowSize,
    navbarSize,
    setNavbarSize,
    navbarBackgroundSize,
    setNavbarBackgroundSize,
  };
  return <WindowSizeContext.Provider value={value}>{children}</WindowSizeContext.Provider>;
}

export default WindowSizeContextProvider;
