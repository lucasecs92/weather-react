// hook personalizado para lidar com a busca dos dados do clima
import { useState } from "react";

// Definindo a chave da API
const apiKey = "8620c8ae0a772573c0e8c99ca53cf4e6";

const useWeatherSearch = () => {
  // Definindo estados do projeto
  const [city, setCity] = useState("");   // cidade a ser pesquisada
  const [weatherData, setWeatherData] = useState(null);  // dados do clima atual
  const [error, setError] = useState(false);  // erro na busca
  const [fourDayForecastData, setFourDayForecastData] = useState(null);  // previsão para os próximos 4 dias

  // Função para buscar os dados do clima
  const handleSearch = async () => {
    if (city === "") {
      return;
    }

    try {
      // Buscando os dados do clima atual
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
      );
      const weatherData = await weatherResponse.json();
      
      // Verificando se a cidade foi encontrada
      if (weatherData.cod === "404") {
        setError(true);
        setWeatherData(null);
      } else {
        setError(false);
        setWeatherData(weatherData);

        // Buscando a previsão para os próximos 5 dias
        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
        );
        const forecastData = await forecastResponse.json();
        
        // Agrupando as previsões por dia
        const groupedForecasts = forecastData.list.reduce((groups, forecast) => {
          const date = new Date(forecast.dt * 1000).toDateString();
          if (!groups[date]) {
            groups[date] = [];
          }
          groups[date].push(forecast);
          return groups;
        }, {});

        // Para cada dia, escolha a previsão com a temperatura mais alta e obtendo o ícone correspondente
        const oneForecastPerDay = Object.values(groupedForecasts).map(forecasts => {
          return forecasts.reduce((highest, forecast) => {
            return forecast.main.temp > highest.main.temp ? forecast : highest;
          });
        });

        // Atualizando o estado com a previsão para os próximos 4 dias
        setFourDayForecastData(oneForecastPerDay.slice(0, 4));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { city, setCity, weatherData, fourDayForecastData, error, handleSearch };
};

export default useWeatherSearch;

