import Button from './Button';
import styles from '../styles/Home.module.scss';
const Contact = () => {
  const STYLES = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    textAlign: 'center',
  };
  return (
    <div style={STYLES}>
      <h3>McClintock, a latin proffesor</h3>
      <Button text='Contact me' style={styles.btn} />
    </div>
  );
};

export default Contact;
