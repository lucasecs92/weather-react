import styles from '../assets/css/Forecast.module.css';
import PropTypes from 'prop-types';

const Forecast = ({ forecastData }) => {
  return (
    <section className={styles.forecast}>
      <ul className={styles.weatherList}>
      {/* Mapeando através dos dados de previsão e renderizando um item de lista para cada previsão */}
        {forecastData.map((forecast, index) => (
          <li className={styles.list} key={index}>      
            <p className={styles.dailyForecast}>
              {/* Formatando a data da previsão para exibir o dia da semana, o mês e o dia do mês
              e removendo o ponto após o nome do dia */}
              {new Date(forecast.dt * 1000).toLocaleString("pt-BR", {
                weekday: "short",
                month: "short",
                day: "numeric",
              }).replace('.','')}
            </p>
            {/* Renderizando o ícone do clima */}
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              className={styles.weatherIcon}
              alt="Weather Icon"
            />
            {/* Renderizando a temperatura da previsão */}
            <p className={styles.tempForecast}>
              <span>{parseInt(forecast.main.temp)}</span>&deg;
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

// Definindo as propriedades do componente
Forecast.propTypes = {
  forecastData: PropTypes.array,
};

export default Forecast;

// Este componente é responsável por renderizar a previsão do tempo para os próximos dias. Ele recebe uma propriedade forecastData, que é um array de objetos de previsão. Para cada objeto de previsão, ele renderiza um item de lista que contém a data da previsão, o ícone do clima e a temperatura. O componente usa o pacote prop-types para verificar se a propriedade forecastData é um array.

