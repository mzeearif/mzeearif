"use client";
import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import MobileToggle from './MobileToggle';
import Image from 'next/image'
import mypic from '../assets/images/logo.png.png'
import Link from 'next/link';
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.logo}>
        <Image src={mypic}  alt="Logo" />
        </div>
      <MobileToggle onClick={toggleMenu} isOpen={isOpen} />
      <div className={styles.doublenav}> <ul className={styles.navList1}>
      <li> Hvorfor WebMed</li>
        <li>
           <Link
           href=
            '/nyheter'
          >
              Nyheter
            </Link></li>
        <li>
          <Link
           href={{
            pathname: '../Omoss',
            query: { name: 'nyheter' },
          }}> Om oss</Link>
           </li>
        <li>Smartkort</li>
        <li>Ledige stillinger</li>


      </ul>
      <ul className={styles.navList}>

        <li>Fastlege</li>
        <li>Specialist</li>
        <li>Legevakt</li>
        <li>Tilleggstjenester</li>
        <li>
          <Link href="/hvordan">
          Hvordan bil kunde </Link>
          </li>

      </ul></div>

    </nav>
  );
};

export default Navbar;
