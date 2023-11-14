import styles from '../assets/css/App.module.css';
import { FaDroplet, FaLocationDot, FaWind } from "react-icons/fa6";
import PropTypes from 'prop-types';
import Forecast from './Forecast';

const apiCountryURL = "https://flagcdn.com/w640/";

const WeatherData = ({ weatherData, fourDayForecastData }) => {
  if (!weatherData) {
    return null;
  }

  const { name, sys, main, weather, wind } = weatherData;

  return (
    <section className={styles.weatherData}>
      <h2>
        <FaLocationDot/>
        <span className={styles.city}>{name}</span>
        <img
          src={`${apiCountryURL}${sys.country.toLowerCase()}.png`}
          className={styles.country}
          alt="Country Flag"  
        />
      </h2>
      <p className={styles.temperature}>
        <span>{parseInt(main.temp)}</span>&deg;
      </p>
      <section className={styles.descriptionContainer}>
        <p className={styles.description}>{weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
          className={styles.weatherIcon}
          alt="Condições atuais"
        />
      </section>
      <section className={styles.detailsContainer}>
        <p className={styles.humidity}>
          <FaDroplet/>
          <span>{main.humidity}%</span>
        </p>
        <p className={styles.wind}>
          <FaWind/>
          <span>{wind.speed}m/s</span>
        </p>
      </section>
      {fourDayForecastData && (
        <Forecast forecastData={fourDayForecastData} />
      )}
    </section>
  );
};

WeatherData.propTypes = {
  weatherData: PropTypes.object,
  fourDayForecastData: PropTypes.array,
};

export default WeatherData;