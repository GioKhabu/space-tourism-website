import React from 'react';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Navigation.module.css';
import Logo from '../../assets/shared/logo.svg';
import { Link } from 'react-router-dom';

function Navigation() {
  const [windowSize, setWindowSize] = React.useState(getWindowSize());
  const [navbarSize, setNavbarSize] = React.useState(0);
  const [navbarBackgroundSize, setNavbarBackgroundSize] = React.useState(0);


  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    if (windowSize.innerWidth > 768) {
      setNavbarSize(windowSize.innerWidth - windowSize.innerWidth * 0.55);
      setNavbarBackgroundSize(windowSize.innerWidth - windowSize.innerWidth * 0.40);
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
        <nav className={`${styles.NavLinksWrapper}`} style={{ width: navbarSize }}>
          <div className={`${styles.NavBackground}`} style={{ width: navbarBackgroundSize }}></div>
          <Link className={`${styles.NavLink}`}>
            <span>00</span> HOME
          </Link>
          <Link className={`${styles.NavLink}`}>
            <span>01</span> DESTINATION
          </Link>
          <Link className={`${styles.NavLink}`}>
            <span>02</span> CREW
          </Link>
          <Link className={`${styles.NavLink}`}>
            <span>03</span> TECHNOLOGY
          </Link>
        </nav>
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
