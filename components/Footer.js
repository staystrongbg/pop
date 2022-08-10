import styles from '../styles/Home.module.scss';
import Triangle from './Triangle';
import { FaFacebookF } from 'react-icons/fa';
const Footer = () => {
  const STYLES = {
    display: 'flex',
    padding: ' 40px',
    alignItems: 'center',
  };
  const LEFT = {
    flex: 1,
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#f8fdfe',
    padding: '20px 40px',
    flexDirection: 'column',
    gap: '1.5rem',
  };
  const RIGHT = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '1.5rem',

    justifyContent: 'flex-start',
    color: '#f8fdfe',
    padding: '20px 40px',
  };
  return (
    <footer style={STYLES} className={styles.footer}>
      <div style={LEFT}>
        <img
          src='/nada-macura-logo.png'
          alt=''
          style={{ maxWidth: '30%', minWidth: '250px' }}
        />
        <span
          style={{
            borderBottom: '1px solid rgb(93, 93, 93, 0.4)',
            width: '100%',
          }}
        ></span>

        <p style={{ whiteSpace: 'nowrap' }}>
          Photography copyrights: <a href='#'>link</a> | <a href='#'>link</a>
        </p>
      </div>
      <div style={RIGHT}>
        <p
          style={{
            height: '45px',
            display: 'flex',
            alignItems: 'flex-end',
            whiteSpace: 'nowrap',
            justifyContent: 'space-between',
          }}
        >
          HOMEPAGE ABOUT SERVICES REFERENCES BLOG CONTACT
          <span>
            <FaFacebookF />
          </span>
        </p>
        <span
          style={{
            borderBottom: '1px solid rgb(93, 93, 93, 0.4)',
            width: '100%',
          }}
        ></span>
        <p>Design and development PopArt Studio</p>
      </div>
    </footer>
  );
};

export default Footer;
