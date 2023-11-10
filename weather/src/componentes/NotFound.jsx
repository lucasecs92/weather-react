import styles from '../assets/css/NotFound.module.css';

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <img src="../assets/img/404.png" alt="Not Found" />
      <p>Oops! Localização inválida :/</p>
    </section>
  );
};

export default NotFound;