import React from 'react';
import data from '../../assets/data.json';
import { NavLink } from 'react-router-dom';
import styles from './TechnologyNavigation.module.css';

function TechnologyNavigation() {
  const id = React.useId();
  return (
    <nav className={`${styles.TechnologyNavigationWrapper}`}>
      {Object.values(data.technology).map((item, index) => {
        return (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.TechnologyNavLinks} ${styles.TechnologyNavLinksActive}`
                : `${styles.TechnologyNavLinks}`
            }
            to={`/technology/${item.name}`}
            key={`${index}-${id}`}
          >
            {index + 1}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default TechnologyNavigation;
