import React from 'react';
import data from '../../assets/data.json';
import { NavLink } from 'react-router-dom';
import styles from './CrewNavigation.module.css';

function CrewNavigation() {
  const id = React.useId();
  return (
    <nav className={`${styles.CrewNavigationWrapper}`}>
      {Object.values(data.crew).map((item, index) => {
        return (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.CrewNavLinks} ${styles.CrewNavLinksActive}`
                : `${styles.CrewNavLinks}`
            }
            to={`/crew/${item.name}`}
            key={`${index}-${id}`}
          ></NavLink>
        );
      })}
    </nav>
  );
}

export default CrewNavigation;
