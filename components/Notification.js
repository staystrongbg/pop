import styles from '../styles/Notification.module.scss';
const Notification = () => {
  return (
    <div className={styles.notification}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, soluta.
        Ipsum voluptates quasi nam. Necessitatibus ab labore.
        <span style={{ marginLeft: '10px' }}>&#10006;</span>
      </p>
    </div>
  );
};

export default Notification;
