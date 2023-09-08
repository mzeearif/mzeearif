import React, { useState, useRef } from 'react'
import Link from 'next/link'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import styles from './Navbar.module.scss' // Adjust the import path

interface SubmenuProps {
  menuTitle: string
  submenuItems: string[]
}

const Submenu: React.FC<SubmenuProps> = ({ menuTitle, submenuItems }) => {
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
        {menuTitle}
        <ul className={styles.subMenu}>
          {isSubMenuOpen &&
            submenuItems.map((item, index) => (
              <li key={index}>
                <Link href={`/moduler/${item}`}>{item}</Link>
              </li>
            ))}
        </ul>
      </li>
    </ClickAwayListener>
  )
}

export default Submenu