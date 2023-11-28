import React from 'react';
import data from '../../assets/data.json';
import { Link } from 'react-router-dom';
import styles from './CrewNavigation.module.css';

function CrewNavigation() {
  const id = React.useId();
  return (
    <nav className={`${styles.CrewNavigationWrapper}`}>
      {Object.values(data.crew).map((item, index) => {
        return (
          <Link
            className={`${styles.CrewNavLinks}`}
            to={`/crew/${item.name}`}
            key={`${index}-${id}`}
          ></Link>
        );
      })}
    </nav>
  );
}

export default CrewNavigation;
