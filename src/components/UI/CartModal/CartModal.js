import React from 'react';
import ReactDOM from 'react-dom';
import styles from './CartModal.module.scss';
import closeIcon from '../../../assets/icons/icon-close.png';
import Title from '../Title/Title';
import { TitleSizes } from '../Title/constants/title-sizes';

const Backdrop = ({ onCloseWindow }) => {
  return <div className={styles.backdrop} onClick={onCloseWindow} />;
};

const Modal = ({ onCloseWindow, children }) => {
  return (
    <div className={styles['modal-container']}>
      <div className={styles['modal-container__title']}>
        <Title size={TitleSizes.SMALL}>Корзина</Title>
      </div>
      <img
        src={closeIcon}
        alt="Иконка закрыть"
        className={styles['modal-container__close-icon']}
        onClick={onCloseWindow}
      />
      {children}
    </div>
  );
};

const CartModal = ({ setIsCartModalActive, children }) => {
  const onCloseClickHandler = () => {
    setIsCartModalActive(false);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseWindow={onCloseClickHandler} />,
        document.getElementById('backdrop')
      )}
      {ReactDOM.createPortal(
        <Modal onCloseWindow={onCloseClickHandler}>{children}</Modal>,
        document.getElementById('modal')
      )}
    </>
  );
};

export default CartModal;
