import styles from '../assets/css/NotFound.module.css';

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <img src="img/404.png" alt="Not Found" />
      <p>Oops! Invalid location :/</p>
    </section>
  );
};

export default NotFound;