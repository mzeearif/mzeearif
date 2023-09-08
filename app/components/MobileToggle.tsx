<<<<<<< HEAD
import React from 'react';
import styles from './MobileToggle.module.scss';

interface MobileToggleProps {
  onClick: () => void;
  isOpen: boolean;
=======
import React from 'react'
import Image from 'next/image' // Import Image component
import styles from './MobileToggle.module.scss'
import mobileOpen from '../assets/images/mobilOpen.svg'
import mobileClose from '../assets/images/mobilClose.svg'

interface MobileToggleProps {
  onClick: () => void
  isOpen: boolean
>>>>>>> abb4ce1 (New landing page)
}

const MobileToggle: React.FC<MobileToggleProps> = ({ onClick, isOpen }) => {
  return (
<<<<<<< HEAD
    <div className={`${styles.mobileToggle} ${isOpen ? styles.open : ''}`} onClick={onClick}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  );
};

export default MobileToggle;
=======
    <div
      className={`${styles.mobileToggle} ${isOpen ? styles.open : ''}`}
      onClick={onClick}
    >
      <div className={styles.imageContainer}>
        {isOpen ? (
          <Image src={mobileClose} alt="Close" width={43} height={43} />
        ) : (
          <Image src={mobileOpen} alt="Open" width={30} height={30} />
        )}
      </div>
    </div>
  )
}

export default MobileToggle
>>>>>>> abb4ce1 (New landing page)
