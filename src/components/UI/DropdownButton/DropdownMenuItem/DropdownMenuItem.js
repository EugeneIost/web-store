import styles from '../DropdownMenu/DropdownMenu.module.scss';

const DropdownMenuItem = ({ title, onClick }) => {
  return (
    <li onClick={onClick} className={styles.dropdown__link}>
      {title}
    </li>
  );
};

export default DropdownMenuItem;
