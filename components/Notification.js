import styles from '../styles/Notification.module.scss';
const Notification = () => {
  const removeNotification = (e) => {
    e.target.offsetParent.remove();
  };
  return (
    <div className={styles.notification}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, soluta.
        Ipsum voluptates quasi nam. Necessitatibus ab labore.
        <span
          style={{ marginLeft: '10px', cursor: 'pointer' }}
          onClick={(e) => removeNotification(e)}
          title='click to close'
        >
          &#10006;
        </span>
      </p>
    </div>
  );
};

export default Notification;
