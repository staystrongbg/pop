import styles from '../styles/Home.module.scss';
const Button = ({ style, text }) => {
  return (
    <a className={style}>
      <span>{text}</span>
    </a>
  );
};

export default Button;
