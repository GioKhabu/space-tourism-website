import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Destination.module.css';
import data from '../../assets/data.json';
import { WindowSizeContext } from '../../context/WindowSize.context';
import DestinationNavigation from '../../components/DestinationNavigation/DestinationNavigation';
import DestinationInfo from '../../components/DestinationInfo/DestinationInfo';

function Destination() {
  const { windowSize } = React.useContext(WindowSizeContext);
  const param = useParams()

  const DestinationData = Object.values(data.destinations).filter((item) => {
    return String(item.name).toLocaleLowerCase() === param.id;
  });
  const [destinations] = DestinationData;
  let imageURL = String(param.id).toLowerCase();
  return (
    <div className={`${styles.DestinationWrapper}`}>
      <main className={`${styles.Destination}`}>
        <h1 style={{ marginLeft: windowSize.innerWidth / 9 }}>
          <span>01</span>Pick your destination
        </h1>
        <div className={`${styles.DestinationBack}`}>
          <div className={`${styles.DestinationGroup}`}>
            <img
              src={require(`../../assets/destination/image-${imageURL}.png`)}
              alt="destination planet"
            />
            <div className={`${styles.DestinationInfoBack}`}>
              <DestinationNavigation />
              <DestinationInfo
                name={destinations.name}
                description={destinations.description}
                distance={destinations.distance}
                travelTime={destinations.travel}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Destination;
