import { useState } from "react";
import styles from './assets/css/App.module.css';
import { FaDroplet, FaLocationDot, FaMagnifyingGlass, FaWind } from "react-icons/fa6";

import Indisponivel from './assets/img/404.png';

const apiKey = "8620c8ae0a772573c0e8c99ca53cf4e6";
const apiCountryURL = "https://flagcdn.com/w640/";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [fourDayForecastData, setFourDayForecastData] = useState(null);


  const handleSearch = async () => {
    if (city === "") {
      return;
    }

    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
      );
      const weatherData = await weatherResponse.json();

      if (weatherData.cod === "404") {
        setError(true);
        setWeatherData(null);
      } else {
        setError(false);
        setWeatherData(weatherData);

        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
        );
        const forecastData = await forecastResponse.json();

        // Agrupar previsões por dia
        const groupedForecasts = forecastData.list.reduce((groups, forecast) => {
          const date = new Date(forecast.dt * 1000).toDateString();
          if (!groups[date]) {
            groups[date] = [];
          }
          groups[date].push(forecast);
          return groups;
        }, {});

        // Para cada dia, escolha a previsão com a temperatura mais alta e obtenha o ícone correspondente
        const oneForecastPerDay = Object.values(groupedForecasts).map(forecasts => {
          return forecasts.reduce((highest, forecast) => {
            return forecast.main.temp > highest.main.temp ? forecast : highest;
          });
        });

        setFourDayForecastData(oneForecastPerDay.slice(0, 4));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className={styles.container}>
      <section className={styles.form}>
        <h3>Confira o clima de uma cidade</h3>
        <section className={styles.formInputContainer}>
          <input
            type="text"
            placeholder="Digite o nome da cidade"
            className="city-input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="search" onClick={handleSearch}>
          <FaMagnifyingGlass/>
          </button>
        </section>
      </section>

      <section className={error ? `${styles.notFound}` : `${styles.notFound, styles.hide}`}>
        <img className={styles.notFoundImg} src={Indisponivel} alt="Not Found" />
        <p className={styles.notFoundP}>Oops! Localização inválida :/</p>
      </section>

      {weatherData && (
        <section className={styles.weatherData}>
          <h2>
            <FaLocationDot/>
            <span className={styles.city}>{weatherData.name}</span>
            <img
              src={`${apiCountryURL}${weatherData.sys.country.toLowerCase()}.png`}
              className={styles.country}
              alt="Country Flag"  
            />
          </h2>
          <p className={styles.temperature}>
            <span>{parseInt(weatherData.main.temp)}</span>&deg;
          </p>
          <section className={styles.descriptionContainer}>
            <p className={styles.description}>{weatherData.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              className={styles.weatherIcon}
              alt="Condições atuais"
            />
          </section>
          <section className={styles.detailsContainer}>
            <p className={styles.humidity}>
              <FaDroplet/>
              <span>{weatherData.main.humidity}%</span>
            </p>
            <p className={styles.wind}>
              <FaWind/>
              <span>{weatherData.wind.speed}m/s</span>
            </p>
          </section>
          {fourDayForecastData && (
            <section className={styles.forecast}>
              <ul className={styles.weatherList}>
                {fourDayForecastData.map((forecast, index) => (
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
          )}
        </section>
      )}
    </section>
  );
};

export default App;