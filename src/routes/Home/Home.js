import React from 'react';
import styles from './Home.module.css'
import HomeInfo from '../../components/HomeInfo';

function Home() {
  return (
    <div className={`${styles.HomeWrapper}`}>
      <main className={`${styles.Home}`}>
        <HomeInfo />
      </main>
    </div>
  );
}

export default Home;
