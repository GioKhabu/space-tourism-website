import React from 'react';

export const HamburgerMenueContext = React.createContext();

function HamburgerMenueContextPorvider({ children }) {
  const [hamMenue, setHamMenue] = React.useState(false);
  const value = {
    hamMenue,
    setHamMenue,
  };
  return <HamburgerMenueContext.Provider value={value}>{children}</HamburgerMenueContext.Provider>;
}

export default HamburgerMenueContextPorvider;
