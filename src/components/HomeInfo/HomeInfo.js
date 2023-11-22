import React from 'react';

import styles from './HomeInfo.module.css'

function HomeInfo() {
  return (
    <div className={`${styles.HomeInfoWrapper}`}>
      <article className={`${styles.HomeInfoBlock}`}>
        <h1>SO, YOU WANT TO TRAVEL TO</h1>
        <h2>SPACE</h2>
        <h3>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </h3>
      </article>
      <button>EXPLORE</button>
    </div>
  );
}

export default HomeInfo;
