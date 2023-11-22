import React from 'react';
import styles from './Home.module.css'
import HomeInfo from '../../components/HomeInfo';



import ImageDesctop from '../../assets/home/background-home-desktop.jpg';
import ImageTablet from '../../assets/home/background-home-tablet.jpg';
import ImageMobile from '../../assets/home/background-home-mobile.jpg';

function Home() {
  return (
    <main className={`${styles.Home}`}>
      <picture>
        <source
          media="(max-width: 375px)"
          srcSet={`${ImageMobile} 375w`}
          sizes="375px"
          className={`${styles.backgroundImage}`}
        />
        <source
          media="(max-width: 768px)"
          srcSet={`${ImageTablet} 768w`}
          sizes="768px"
          className={`${styles.backgroundImage}`}
        />
        <img src={ImageDesctop} alt="earth in space" className={`${styles.backgroundImage}`} />
      </picture>
      <HomeInfo />
    </main>
  );
}

export default Home;
