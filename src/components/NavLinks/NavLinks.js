import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './NavLinks.module.css'

function NavLinks({ navbarBackgroundSize }) {
  return (
    <nav className={`${styles.NavigationGroup}`}>
      <div className={`${styles.NavBackground}`} style={{ width: navbarBackgroundSize }}></div>
      <div className={`${styles.NavLinksGroup}`}>
        <Link className={`${styles.NavLink}`} to='/'>
          <span>00</span> HOME
        </Link>
        <Link className={`${styles.NavLink}`} to='/destination/moon'>
          <span>01</span> DESTINATION
        </Link>
        <Link className={`${styles.NavLink}`}>
          <span>02</span> CREW
        </Link>
        <Link className={`${styles.NavLink}`}>
          <span>03</span> TECHNOLOGY
        </Link>
      </div>
    </nav>
  );
}

export default NavLinks;
