import styles from '../assets/css/SearchBar.module.css';
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <section className={styles.form}>
      <h3>Confira o clima de uma cidade</h3>
      <section className={styles.formInputContainer}>
        <input
          type="text"
          placeholder="Digite o nome da cidade"
          className={styles.cityInput}
        />
        <button className={styles.search} >
          <FaMagnifyingGlass />
        </button> 
      </section>
    </section>
  );
};

export default SearchBar;