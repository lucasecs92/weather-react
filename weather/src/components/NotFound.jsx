import Indisponivel from '../assets/img/404.png';
import styles from '../assets/css/NotFound.module.css';

const NotFound = () => {
  return (
    <>
      <section className={styles.notFoundContainer}>
        <img className={styles.notFoundImg} src={Indisponivel} alt="Not Found" />
        <p className={styles.notFoundP}>Oops! Localização inválida :/</p>
      </section>
    </>
  );
};

export default NotFound;

// Este é um componente simples que é renderizado quando uma localização inválida é inserida. Ele exibe uma imagem de erro e uma mensagem de erro. 