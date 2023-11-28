import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Technology.module.css';
import data from '../../assets/data.json';
import { WindowSizeContext } from '../../context/WindowSize.context';
import TechnologyInfo from '../../components/TechnologyInfo';

function Technology() {
  const { windowSize } = React.useContext(WindowSizeContext);
  const param = useParams();
  const TechnologyData = Object.values(data.technology).filter((item) => {
    return item.name === param.id;
  });
  const [technology] = TechnologyData;
  let imageURL = String(param.id).toLowerCase().split(' ').join('-');
  return (
    <div className={`${styles.TechnologyWrapper}`}>
      <main className={`${styles.Technology}`}>
        <h1 style={{ marginLeft: windowSize.innerWidth / 9 }}>
          <span>03</span>SPACE LAUNCH 101
        </h1>
        <div className={`${styles.TechnologyBack}`}>
          <div className={`${styles.TechnologyGroup}`}>
            <div className={`${styles.TechnologyInfoBack}`}>
              <TechnologyInfo name={technology.name} description={technology.description} />
            </div>
            <picture>
              <source
                media="(max-width: 1050px)"
                srcSet={`${require(`../../assets/technology/image-${imageURL}-landscape.jpg`)}`}
              />
              <source
                srcSet={require(`../../assets/technology/image-${imageURL}-portrait.jpg`)}
                sizes="1450px"
              />
              <img
                src={require(`../../assets/technology/image-${imageURL}-portrait.jpg`)}
                alt="destination planet"
              />
            </picture>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Technology;
