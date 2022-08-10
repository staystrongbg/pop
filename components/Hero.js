import styles from '../styles/Home.module.scss';
import Button from './Button';
const Hero = () => {
  return (
    <>
      <div className={`${styles.heroText} ${styles.firstHeading}`}>
        <h2 id='typedtext'></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure
          praesentium quasi rem minima asperiores cum earum, nam hic nostrum
          quibusdam perferendis esse illum pariatur, consectetur, sint sequi.
          Tempora, beatae.
        </p>
        <Button text='Tell me more' style={styles.btn} />
      </div>
      <div className={`${styles.heroText} ${styles.secondHeading}`}>
        <h2>Train your train</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nobis
          eveniet earum assumenda, veniam modi neque, reprehenderit porro
          asperiores recusandae, totam officia ipsam quia nam culpa. Explicabo,
          magni distinctio. Ea.
        </p>
      </div>
    </>
  );
};

export default Hero;
