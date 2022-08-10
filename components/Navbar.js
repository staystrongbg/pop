import styles from '../styles/Home.module.scss';
import { useState, useEffect } from 'react';
import Image from 'next/image';
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isMobile) {
      document.body.style = 'overflow:hidden';
    } else {
      document.body.style = '';
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1260) {
        setIsMobile(false);
      }
      () => window.removeEventListener('resize');
    });
  }, [isMobile]);
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src='/nada-macura-logo.png'
          height={100}
          width={200}
          objectFit='contain'
          alt='logo'
        />
      </div>
      <ul className={` ${isMobile ? styles.linksMobile : styles.links} `}>
        <li>homepage</li>
        <li>about</li>
        <li>services</li>
        <li>references</li>
        <li>blog</li>
        <li>contact</li>
      </ul>
      <ul className={styles.lng}>
        <li>sr</li>
        <li>en</li>
      </ul>
      <span
        className={styles['mobile-menu']}
        title='Navigation'
        onClick={() => setIsMobile(!isMobile)}
      >
        {' '}
        &#9776;{' '}
      </span>
    </nav>
  );
};

export default Navbar;
