import React from 'react';
import styles from './TechnologyInfo.module.css';
import TechnologyNavigation from '../TechnologyNavigation/TechnologyNavigation';

function TechnologyInfo({ name, description }) {
  return (
    <article className={`${styles.TechnologyInfoWrapper}`}>
      <TechnologyNavigation />
      <div className={`${styles.TechnologyInfoGroup}`}>
        <h2>THE TERMINOLOGY...</h2>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default TechnologyInfo;
