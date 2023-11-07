import styles from '../assets/css/Forecast.module.css'

const Forecast = () => {
  return (
    <section className={styles.forecast}>
      <ul className={styles.weatherList}>
        <li className={styles.list}>
          <p className={styles.dailyForecast}></p>
          <img src="" className={styles.weatherIcon} />
          <p className={styles.tempForecast}></p>
        </li>
        <li className={styles.list}>
          <p className={styles.dailyForecast}></p>
          <img src="" className={styles.weatherIcon} />
          <p className={styles.tempForecast}></p>
        </li>
        <li className={styles.list}>
          <p className={styles.dailyForecast}></p>
          <img src="" className={styles.weatherIcon} />
          <p className={styles.tempForecast}></p>
        </li>
        <li className={styles.list}>
          <p className={styles.dailyForecast}></p>
          <img src="" className={styles.weatherIcon} />
          <p className={styles.tempForecast}></p>
        </li>
      </ul>
    </section>
  );
};

export default Forecast;