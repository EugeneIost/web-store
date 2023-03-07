import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.scss';
import backIcon from '../../../assets/icons/icon-back.png';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className={styles['back-button']} onClick={() => navigate(-1)}>
      <img
        src={backIcon}
        alt="Кнопка назад"
        className={styles['back-button__icon']}
      />
      <h4 className={styles['back-button__title']}>Назад</h4>
    </div>
  );
};

export default BackButton;
