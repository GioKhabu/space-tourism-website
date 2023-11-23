import React from 'react';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Navigation.module.css';
import Logo from '../../assets/shared/logo.svg';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import NavLinks from '../NavLinks/NavLinks';
import { HamburgerMenueContext } from '../../context/HamburgerMenu.context';

function Navigation() {
  const [windowSize, setWindowSize] = React.useState(getWindowSize());
  const [navbarSize, setNavbarSize] = React.useState(0);
  const [navbarBackgroundSize, setNavbarBackgroundSize] = React.useState(0);
  const { hamMenue } = React.useContext(HamburgerMenueContext);
  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    if (windowSize.innerWidth > 768) {
      setNavbarSize(windowSize.innerWidth - windowSize.innerWidth * 0.55);
      setNavbarBackgroundSize(windowSize.innerWidth - windowSize.innerWidth * 0.4);
    } else {
      setNavbarSize(windowSize.innerWidth - windowSize.innerWidth * 0.15);
      setNavbarBackgroundSize(windowSize.innerWidth - windowSize.innerWidth * 0.15);
    }
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize.innerWidth]);
  return (
    <Fragment>
      <header className={`${styles.Navigation}`}>
        <img src={Logo} alt="logo" />
        <hr style={{ height: windowSize.innerWidth - windowSize.innerWidth * 0.64 }} />

        <div className={`${styles.NavLinksWrapper}`} style={{ width: navbarSize }}>
          <HamburgerMenu />
          {windowSize.innerWidth < 440 && hamMenue && (
            <NavLinks navbarBackgroundSize={navbarBackgroundSize} />
          )}
          {windowSize.innerWidth > 440 && <NavLinks navbarBackgroundSize={navbarBackgroundSize} />}
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
}

function getWindowSize() {
  const { innerWidth } = window;
  return { innerWidth };
}

export default Navigation;
