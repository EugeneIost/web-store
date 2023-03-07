import styles from './Card.module.scss';

const Card = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Card;
