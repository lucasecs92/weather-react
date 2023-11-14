import Indisponivel from '../assets/img/404.png';
import styles from '../assets/css/App.module.css';

const NotFound = () => {
  return (
    <>
      <section className={styles.container}>
        <img className={styles.notFoundImg} src={Indisponivel} alt="Not Found" />
        <p className={styles.notFoundP}>Oops! Localização inválida :/</p>
      </section>
    </>
  );
};

export default NotFound;