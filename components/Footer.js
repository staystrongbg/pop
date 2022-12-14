import styles from '../styles/Home.module.scss';
import { FaFacebookF } from 'react-icons/fa';
import { mobile } from '../lib/media';
const Footer = () => {
  const STYLES = {
    display: 'flex',
    padding: ' 40px',
    alignItems: 'center',
  };
  const LEFT = {
    flex: 1,
    display: 'flex',
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

        <p
          style={{
            whiteSpace: 'nowrap',
            fontSize: mobile ? '0.75rem' : '1rem',
          }}
        >
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
            fontSize: mobile ? '0.75rem' : '1rem',
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
        <p
          style={{
            fontSize: mobile ? '0.75rem' : '1rem',
          }}
        >
          Design and development PopArt Studio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
