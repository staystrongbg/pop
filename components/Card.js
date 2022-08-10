import styles from '../styles/Home.module.scss';

const Card = ({ cards }) => {
  return (
    <>
      {cards.map((card, idx) => (
        <div key={idx} className={styles.card}>
          <h4>{card.title}</h4>
          <p>{card.desc}</p>
        </div>
      ))}
    </>
  );
};

export default Card;
