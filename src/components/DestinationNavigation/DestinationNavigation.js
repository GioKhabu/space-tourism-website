import React from 'react';
import data from '../../assets/data.json';
import { NavLink } from 'react-router-dom';
import styles from './DestinationNavigation.module.css';

function DestinationNavigation() {
  const id = React.useId();
  return (
    <nav className={`${styles.DestinationNavigationWrapper}`}>
      {Object.values(data.destinations).map((item, index) => {
        let name = String(item.name)
        return (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.DestinationNavLinks} ${styles.DestinationNavLinksActive}`
                : `${styles.DestinationNavLinks}`
            }
            to={`/destinations/${name}`}
            key={`${index}-${id}`}
          >
            {name}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default DestinationNavigation;
