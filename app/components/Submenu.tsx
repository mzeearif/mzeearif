import React, { useState, useRef } from 'react'
import Link from 'next/link'
import ClickAwayListener from '@mui/material/ClickAwayListener'
<<<<<<< HEAD
import styles from './Navbar.module.scss' // Adjust the import path

interface SubmenuProps {
  menuTitle: string
  submenuItems: string[]
}

const Submenu: React.FC<SubmenuProps> = ({ menuTitle, submenuItems }) => {
=======
import styles from './Submenu.module.scss' // Adjust the import path

interface SubmenuItem {
  name: string
  path: string
}

interface SubmenuProps {
  title: string
  items: SubmenuItem[]
}

const Submenu: React.FC<SubmenuProps> = ({ title, items }) => {
>>>>>>> abb4ce1 (New landing page)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen)
  }

  const handleClickAway = () => {
    setIsSubMenuOpen(false)
  }

  const ref = useRef(null)

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <li
        onClick={toggleSubMenu}
        className={`${styles.menuWithSubMenu} ${
          isSubMenuOpen ? styles.subMenuOpen : ''
        }`}
      >
<<<<<<< HEAD
        {menuTitle}
        <ul className={styles.subMenu}>
          {isSubMenuOpen &&
            submenuItems.map((item, index) => (
              <li key={index}>
                <Link href={`/moduler/${item}`}>{item}</Link>
              </li>
            ))}
        </ul>
=======
        <div className={styles.title}>
          {title}
          <img
            src="/dropdown.svg"
            alt="dropDowm"
            className={isSubMenuOpen ? styles.rotateImage : ''}
          />
        </div>
        {isSubMenuOpen && (
          <ul className={styles.subMenu}>
            <span>{title}</span>
            <div>Utforsk vårt innhold innenfor {title} →</div>
            {items.map((item, index) => (
              <li key={index} className={styles.subList}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        )}
>>>>>>> abb4ce1 (New landing page)
      </li>
    </ClickAwayListener>
  )
}

<<<<<<< HEAD
export default Submenu
=======
export default Submenu
>>>>>>> abb4ce1 (New landing page)
