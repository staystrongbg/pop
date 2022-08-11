import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Button from './Button';
import Triangle from './Triangle';

const About = ({ isMobile }) => {
  return (
    <article className={styles.referenceDetails}>
      <span className={styles.triangleLeft}>
        <Triangle />
      </span>
      <div className={styles.imgAndText}>
        <span className={styles.refImgContainer}>
          <Image
            src='/miss.png'
            alt=''
            width={527}
            height={500}
            placeholder='blur'
            blurDataURL='/miss.png'
            loading='lazy'
          />
        </span>
        <div className={styles.refDesc}>
          <h3>About me</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            repellendus inventore nostrum cupiditate at libero ipsa impedit,
            omnis facere a, reprehenderit velit est, consequuntur unde explicabo
            culpa quod temporibus provident. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. In quos veniam ex et cum accusantium
            rerum molestiae, officia assumenda molestias. Placeat necessitatibus
            error eligendi totam consectetur amet officia ipsam magnam.
          </p>
          <Button style={styles.btnTransparent} text='Go to know me' />
        </div>
        <span className={styles.refbg}>
          <img src='/4000kwp.png' alt='' />
        </span>
      </div>
    </article>
  );
};

export default About;
