import React from 'react';
import styles from './CrewInfo.module.css';
import CrewNavigation from '../CrewNavigation/CrewNavigation';

function CrewInfo({ role, name, bio }) {
  return (
    <article className={`${styles.CrewInfoWrapper}`}>
      <div className={`${styles.CrewInfoGroup}`}>
        <h2>{role}</h2>
        <h3>{name}</h3>
        <p>{bio}</p>
      </div>
      <CrewNavigation />
    </article>
  );
}

export default CrewInfo;
