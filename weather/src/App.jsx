import styles from './assets/css/App.module.css';

import NotFound from "./components/NotFound.jsx";
import SearchBar from "./components/SearchBar.jsx";
import WeatherData from "./components/WeatherData.jsx";
import useWeatherSearch from "./hooks/useWeatherSearch.jsx";

const App = () => {
  // lógica de busca dos dados do clima é gerenciada pelo hook personalizado useWeatherSearch
  const { city, setCity, weatherData, fourDayForecastData, error, handleSearch } = useWeatherSearch();

  // Função para lidar com a tecla Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Renderizando o componente
  return (
    <section className={styles.container}>
      <SearchBar
        city={city}
        handleSearch={handleSearch}
        setCity={setCity}
        handleKeyDown={handleKeyDown}
      />

      {weatherData && (
        <WeatherData
          weatherData={weatherData}
          fourDayForecastData={fourDayForecastData}
        />
      )}

      {error && <NotFound/>}     
    </section>
  );
};

export default App;


// o weatherData é verificado usando a expressão {weatherData && ...}. Isso significa que se weatherData existir (ou seja, não for nulo ou indefinido), o código dentro do bloco será renderizado.