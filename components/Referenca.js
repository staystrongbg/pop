import Triangle from './Triangle';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import Button from './Button';

const Referenca = () => {
  return (
    <article className={styles.referenceDetails}>
      <span className={styles.triangleRight}>
        <Triangle />
      </span>
      <div className={styles.imgAndText}>
        <span className={styles.bullets}>
          <img src='/bullets.png' alt='' />
        </span>
        <div className={styles.refDesc}>
          <h3>References</h3>
          <p style={{ position: 'relative' }}>
            <span className={styles.quotes1}>
              <img src='/quote-1.png' alt='' />
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos
            veniam ex et cum accusantium rerum molestiae, officia assumenda
            molestias. Placeat necessitatibus error eligendi totam consectetur
            amet officia ipsam magnam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. In quos veniam ex et cum accusantium rerum
            molestiae, officia assumenda molestias. Placeat necessitatibus error
            eligendi totam consectetur amet officia ipsam magnam.
            <span className={styles.quotes2}>
              <img src='/quotes-2.png' alt='' />
            </span>
          </p>
          <h4>- John Doe</h4>
          <span style={{ marginLeft: '10px' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <Button style={styles.btnTransparent} text='All references' />
        </div>
        <span className={styles.refImgContainer}>
          <Image
            src='/jankovic.png'
            alt=''
            width={565}
            height={562}
            placeholder='blur'
            blurDataURL='/jankovic.png'
            loading='lazy'
          />
        </span>
        <span className={styles.refbg}>
          <img src='/4000kwp.png' alt='' />
          {/* <Image src='/4000kwp.png' layout='fill' /> */}
        </span>
      </div>
    </article>
  );
};

export default Referenca;
