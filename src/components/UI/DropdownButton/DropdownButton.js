import { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import HeaderButton from '../HeaderButton';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import styles from './DropdownButton.module.scss';

const DropdownButton = ({ icon, title, elements, onClickDropdownItem }) => {
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);

  const clickDropdownHandler = () => {
    setIsActiveDropdown((current) => {
      return !current;
    });
  };

  const closeDropdown = () => {
    setIsActiveDropdown(false);
  };

  const ref = useDetectClickOutside({ onTriggered: closeDropdown });

  return (
    <div className={styles['dropdown-button']} ref={ref}>
      <HeaderButton src={icon} title={title} onClick={clickDropdownHandler} />
      <DropdownMenu
        setIsActive={setIsActiveDropdown}
        elements={elements}
        isActive={isActiveDropdown}
        onClickDropdownItem={onClickDropdownItem}
      />
    </div>
  );
};

export default DropdownButton;
