import React from 'react';
import data from '../../assets/data.json';
import { Link } from 'react-router-dom';
import styles from './DestinationNavigation.module.css';

function DestinationNavigation({ params }) {
  const id = React.useId();

  return (
    <nav className={`${styles.DestinationNavigationWrapper}`}>
      {Object.values(data.destinations).map((item, index) => {
        let name = String(item.name).toLocaleLowerCase();
        return (
          <Link
            className={`${styles.DestinationNavLinks}`}
            to={`/destination/${name}`}
            key={`${index}-${id}`}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
}

export default DestinationNavigation;
