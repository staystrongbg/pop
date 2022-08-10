import styles from '../styles/Home.module.scss';

const Sports = () => {
  return (
    <div className={styles.sportIcons}>
      <span className={styles.imageContainer}>
        <img src='/icons/handball.png' />
        <p>handball</p>
      </span>

      <span className={styles.imageContainer}>
        <img src='/icons/football.png' />
        <p>football</p>
      </span>
      <span className={styles.imageContainer}>
        <img src='/icons/voleyball.png' />
        <p>volleyball</p>
      </span>
      <span className={styles.imageContainer}>
        <img src='/icons/basketball.png' />
        <p>basketball</p>
      </span>
      <span className={styles.imageContainer}>
        <img src='/icons/shooting.png' />
        <p>shooting</p>
      </span>
      <span className={styles.imageContainer}>
        <img src='/icons/judo.png' /> <p>judo</p>
      </span>
      <span className={styles.imageContainer}>
        <img src='/icons/karate.png' />
        <p>karate</p>
      </span>
      <span className={styles.imageContainer}>
        <img src='/icons/tennis.png' />
        <p>tennis</p>
      </span>
      <span className={styles.imageContainer}>
        <img src='/icons/running.png' />
        <p>athletics</p>
      </span>
      <span className={styles.imageContainer}>
        <img src='/icons/triathlon.png' />
        <p>biathlon</p>
      </span>
    </div>
  );
};

export default Sports;
