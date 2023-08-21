import React from 'react';
import styles from './MobileToggle.module.scss';

interface MobileToggleProps {
  onClick: () => void;
  isOpen: boolean;
}

const MobileToggle: React.FC<MobileToggleProps> = ({ onClick, isOpen }) => {
  return (
    <div className={`${styles.mobileToggle} ${isOpen ? styles.open : ''}`} onClick={onClick}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  );
};

export default MobileToggle;
