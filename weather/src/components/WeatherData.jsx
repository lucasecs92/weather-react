import styles from '../assets/css/WeatherData.module.css';
import { FaDroplet, FaLocationDot, FaWind } from "react-icons/fa6";
import PropTypes from 'prop-types';
import Forecast from './Forecast';

const apiCountryURL = "https://flagcdn.com/w640/";

const WeatherData = ({ weatherData, fourDayForecastData }) => {
  // Verificando se os dados do clima estão disponíveis
  if (!weatherData) {
    return null;
  }

  // Desestruturando os dados do clima
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
        // Renderizando o componente Forecast se os dados de previsão de quatro dias estiverem disponíveis
        <Forecast forecastData={fourDayForecastData} />
      )}
    </section>
  );
};

// Definindo as propriedades do componente
WeatherData.propTypes = {
  weatherData: PropTypes.object,
  fourDayForecastData: PropTypes.array,
};

export default WeatherData;

// Este componente é responsável por exibir os dados do clima atual. Ele recebe duas propriedades: weatherData, que contém os dados do clima atual, e fourDayForecastData, que contém os dados da previsão de quatro dias. O componente verifica se os dados do clima estão disponíveis e, em seguida, desestrutura os dados para obter as informações necessárias, como nome da cidade, país, temperatura, descrição do clima, umidade e velocidade do vento. Ele usa ícones do pacote react-icons/fa6 para exibir ícones relacionados ao clima, e usa o pacote prop-types para verificar se as propriedades weatherData e fourDayForecastData são do tipo correto. Se os dados da previsão de quatro dias estiverem disponíveis, o componente renderiza o componente Forecast para exibir a previsão do tempo para os próximos quatro dias.