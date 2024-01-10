import styles from '../assets/css/SearchBar.module.css';
import { FaMagnifyingGlass } from "react-icons/fa6";
import PropTypes from 'prop-types';

const WeatherForm = ({ city, handleSearch, setCity, handleKeyDown }) => {
  return (
    <section className={styles.form}>
      <h3>Confira o clima de uma cidade</h3>
      <search className={styles.formInputContainer}>
        <input
          type="search"
          placeholder="ex. São Paulo, New York..."
          className={styles.cityInput}
          value={city}
          onChange={(e) => setCity(e.target.value)} // Atualiza o estado da cidade quando o usuário digita
          onKeyDown={handleKeyDown} // Chama a função handleKeyDown quando a tecla Enter é pressionada
        />
        <button className={styles.search} onClick={handleSearch}> 
          <FaMagnifyingGlass/>
        </button>
      </search>
    </section>
  );
};

// Definindo as propriedades do componente
WeatherForm.propTypes = {
  city: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
};

export default WeatherForm;

// Este componente é um formulário que permite ao usuário inserir o nome de uma cidade e pesquisar o clima nessa cidade. Ele recebe quatro propriedades: city (o nome da cidade a ser pesquisada), handleSearch (a função a ser chamada quando o botão de pesquisa é clicado), setCity (a função para atualizar o nome da cidade) e handleKeyDown (a função para lidar com a tecla Enter). O componente usa o pacote prop-types para verificar se as propriedades recebidas são do tipo esperado.