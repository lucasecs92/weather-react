
import { FaDroplet, FaLocationDot, FaWind } from 'react-icons/fa6';
import styles from '../assets/css/WeatherData.module.css';
import Forecast from '../componentes/Forecast';

const WeatherData = () => {
  return (
    <section className={`${styles.weatherData} ${styles.hide}`}>

        <h2>
          <FaLocationDot/>
          <span className={styles.city}></span>
          <img src="" className={styles.country} />
        </h2>
        <p className={styles.temperature}>
          <span></span>&deg;
        </p>

        <section className={styles.descriptionContainer}>
          <p className={styles.description}></p>
          <img
            src=""
            className={styles.weatherIcon}
            alt="Condições atuais"
          />
        </section>

        <section className={styles.detailsContainer}>
          <p className={styles.humidity}>
            <FaDroplet/>
            <span></span>
          </p>
          <p className={styles.wind}>
            <FaWind/>
            <span></span>
          </p>
        </section>
        <Forecast/>
        
    </section>
  );
};

export default WeatherData;