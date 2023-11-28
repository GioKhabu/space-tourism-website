import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Crew.module.css';
import data from '../../assets/data.json';
import { WindowSizeContext } from '../../context/WindowSize.context';
import CrewInfo from '../../components/CrewInfo/CrewInfo';

function Crew() {
  const { windowSize } = React.useContext(WindowSizeContext);
  const param = useParams();
  const CrewData = Object.values(data.crew).filter((item) => {
    return item.name === param.id;
  });
  const [crew] = CrewData;
  let imageURL = String(param.id).toLowerCase().split(' ').join('-');
  return (
    <div className={`${styles.CrewWrapper}`}>
      <main className={`${styles.Crew}`}>
        <h1 style={{ marginLeft: windowSize.innerWidth / 9 }}>
          <span>02</span>MEET YOUR CREW
        </h1>
        <div className={`${styles.CrewBack}`}>
          <div className={`${styles.CrewGroup}`}>
            <div className={`${styles.CrewInfoBack}`}>
              <CrewInfo name={crew.name} role={crew.role} bio={crew.bio} />
            </div>
            <div className={`${styles.CrewImage}`}>
              <img
                src={require(`../../assets/crew/image-${imageURL}.png`)}
                alt="destination planet"
              />
              <hr />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Crew;
