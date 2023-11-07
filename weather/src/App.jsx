import SearchBar from './componentes/SearchBar';
import NotFound from './componentes/NotFound';
import WeatherData from './componentes/WeatherData';
import styles from './assets/css/App.module.css';

function App() {

  return (
    <section className={styles.container}>
        <SearchBar/>
        <WeatherData/>

        <NotFound/>
    </section>
  )
}

export default App;
