import React from 'react';
import data from '../../assets/data.json';
import { Link } from 'react-router-dom';
import styles from './TechnologyNavigation.module.css';

function TechnologyNavigation() {
  const id = React.useId();
  return (
    <nav className={`${styles.TechnologyNavigationWrapper}`}>
      {Object.values(data.technology).map((item, index) => {
        return (
          <Link
            className={`${styles.TechnologyNavLinks}`}
            to={`/technology/${item.name}`}
            key={`${index}-${id}`}
          >
            {index + 1}
          </Link>
        );
      })}
    </nav>
  );
}

export default TechnologyNavigation;
