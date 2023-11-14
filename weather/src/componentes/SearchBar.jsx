import styles from '../assets/css/App.module.css';
import { FaMagnifyingGlass } from "react-icons/fa6";
import PropTypes from 'prop-types';

const WeatherForm = ({ city, handleSearch, setCity, handleKeyDown }) => {
  return (
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
  );
};

WeatherForm.propTypes = {
  city: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
};

export default WeatherForm;