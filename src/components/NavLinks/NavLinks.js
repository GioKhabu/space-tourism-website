import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './NavLinks.module.css'
import data from '../../assets/data.json'

function NavLinks({ navbarBackgroundSize }) {
  const pathname = useLocation().pathname.split('/');
  return (
    <nav className={`${styles.NavigationGroup}`}>
      <div className={`${styles.NavBackground}`} style={{ width: navbarBackgroundSize }}></div>
      <div className={`${styles.NavLinksGroup}`}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.NavLink} ${styles.NavLinkActive}` : `${styles.NavLink}`
          }
          to="/"
        >
          <span>00</span> HOME
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.NavLink} ${styles.NavLinkActive}` : `${styles.NavLink}`
          }
          to={`/destinations/${
            pathname[1] === 'destinations' ? pathname[2] : data.destinations[0].name
          }`}
        >
          <span>01</span> DESTINATION
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.NavLink} ${styles.NavLinkActive}` : `${styles.NavLink}`
          }
          to={`/crew/${pathname[1] === 'crew' ? pathname[2] : data.crew[0].name}`}
        >
          <span>02</span> CREW
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.NavLink} ${styles.NavLinkActive}` : `${styles.NavLink}`
          }
          to={`/technology/${pathname[1] === 'technology' ? pathname[2] : data.technology[0].name}`}
        >
          <span>03</span> TECHNOLOGY
        </NavLink>
      </div>
    </nav>
  );
}

export default NavLinks;
