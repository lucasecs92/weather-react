import styles from '../assets/css/App.module.css';
import PropTypes from 'prop-types';

const Forecast = ({ forecastData }) => {
  return (
    <section className={styles.forecast}>
      <ul className={styles.weatherList}>
        {forecastData.map((forecast, index) => (
          <li className={styles.list} key={index}>
            <p className={styles.dailyForecast}>
              {new Date(forecast.dt * 1000).toLocaleString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              className={styles.weatherIcon}
              alt="Weather Icon"
            />
            <p className={styles.tempForecast}>
              {parseInt(forecast.main.temp)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

Forecast.propTypes = {
  forecastData: PropTypes.array,
};

export default Forecast;