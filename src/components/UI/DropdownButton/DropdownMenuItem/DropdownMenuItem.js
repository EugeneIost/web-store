import styles from '../DropdownMenu/DropdownMenu.module.scss';

const DropdownMenuItem = ({ title, onClick }) => {
  // DONE убрать isLast, убрать div, сделать в родителе через css border-bottom, :not(:last-child)
  return (
    <li onClick={onClick} className={styles.dropdown__link}>
      {title}
    </li>
  );
};

export default DropdownMenuItem;
