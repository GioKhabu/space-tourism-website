import React from 'react';
import styles from './DestinationInfo.module.css'

function DestinationInfo({name, description, distance, travelTime}) {
  
  return (
    <article className={`${styles.DestinationInfoWrapper}`}>
      <h2>{name}</h2>
      <p>{description}</p>
      <hr />
      <div className={`${styles.DestinationDetails}`}>
        <div className={`${styles.Distance}`}>
          <h3>AVG. DISTANCE</h3>
          <p>{distance}</p>
        </div>
        <div className={`${styles.TravelTime}`}>
          <h3>EST. TRAVEL TIME</h3>
          <p>{travelTime}</p>
        </div>
      </div>
    </article>
  );
}

export default DestinationInfo;
