import React from 'react';
import data from '../../assets/data.json';
import { Link } from 'react-router-dom';
import styles from './DestinationNavigation.module.css';

function DestinationNavigation() {
  const id = React.useId();

  return (
    <nav className={`${styles.DestinationNavigationWrapper}`}>
      {Object.values(data.destinations).map((item, index) => {
        return (
          <Link
            className={`${styles.DestinationNavLinks}`}
            to={`/destination/${item.name}`}
            key={`${index}-${id}`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default DestinationNavigation;
