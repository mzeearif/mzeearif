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
  
  const [isCollapsibleOpen1, setIsCollapsibleOpen1] = useState(false);
  const [isCollapsibleOpen2, setIsCollapsibleOpen2] = useState(false);
  const [isCollapsibleOpen3, setIsCollapsibleOpen3] = useState(false);
  const [isCollapsibleOpen4, setIsCollapsibleOpen4] = useState(false);

  
  const toggleCollapsible1 = () => {
    setIsCollapsibleOpen1(!isCollapsibleOpen1);
  };


  const toggleCollapsible2 = () => {
    setIsCollapsibleOpen2(!isCollapsibleOpen2);
  };
  const toggleCollapsible3 = () => {
    setIsCollapsibleOpen3(!isCollapsibleOpen3);
  };
  const toggleCollapsible4 = () => {
    setIsCollapsibleOpen4(!isCollapsibleOpen4);
  };
  const collapsible1ButtonText = isCollapsibleOpen1 ? ' ▲' : ' ▼';
  return (
    <>
    <nav className={`${styles.navbar1} ${isOpen ? styles.open : ''}`}>
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
            pathname: '/supportpage',
            query: { name: 'smartkort' },
          }}> Smartkort</Link>
           </li>
        <li>
        <Link
           href={{
            pathname: '../Omoss',
            query: { name: 'nyheter' },
          }}> Om oss</Link>
        </li>
        <li>
        <Link
           href='/landingpage'
          >Ledige stillinger</Link></li>


      </ul>
      <ul className={styles.navList}>

      <li>Fastlege
            {/* <div className={styles.collapsicon}>
              <span>Fastlege</span>
              <button className={styles.collapsible} onClick={toggleCollapsible1}>
              {collapsible1ButtonText}
              </button></div>
              <ul
                className={styles.content}
                style={{
                  display: isCollapsibleOpen1 ? 'block' : 'none',
                }}
              >
                <li><Link href="#">Dropdown Item 1</Link></li>
                <li> <Link href="#">Dropdown Item 2</Link></li>
                <li><Link href="#">Dropdown Item 3</Link></li>
                <li><Link href="#">Dropdown Item 4</Link></li>
                <li><Link href="#">Dropdown Item 5</Link></li>
              </ul> */}
            
          </li>

        <li>Specialist</li>
        <li>Legevakt</li>
        <li>Tilleggstjenester</li>
        <li>
          <Link href="/hvordan">
          Hvordan bil kunde </Link>
          </li>

      </ul></div>

    </nav>
    <nav className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.logo}>
        <Image src={mypic}  alt="Logo" />
        </div>
      <MobileToggle onClick={toggleMenu} isOpen={isOpen} />
      <div className={styles.doublenav}> 
      <ul className={styles.navList}>

      <li>
            <div className={styles.collapsicon}>
              <span>Fastlege</span>
              <button className={styles.collapsible} onClick={toggleCollapsible1}>
              {collapsible1ButtonText}
              </button></div>
              <ul
                className={styles.content}
                style={{
                  display: isCollapsibleOpen1 ? 'block' : 'none',
                }}
              >
                <li><Link href="#">Dropdown Item 1</Link></li>
                <li> <Link href="#">Dropdown Item 2</Link></li>
                <li><Link href="#">Dropdown Item 3</Link></li>
                <li><Link href="#">Dropdown Item 4</Link></li>
                <li><Link href="#">Dropdown Item 5</Link></li>
              </ul>
            
          </li>

        <li>
             <div className={styles.collapsicon}>
              <span>Specialist</span>
              <button className={styles.collapsible} onClick={toggleCollapsible2}>
              {collapsible1ButtonText}
              </button></div>
              <ul
                className={styles.content}
                style={{
                  display: isCollapsibleOpen2 ? 'block' : 'none',
                }}
              >
                <li><Link href="#">Dropdown Item 1</Link></li>
                <li> <Link href="#">Dropdown Item 2</Link></li>
                <li><Link href="#">Dropdown Item 3</Link></li>
                <li><Link href="#">Dropdown Item 4</Link></li>
                <li><Link href="#">Dropdown Item 5</Link></li>
              </ul>
        </li>
        <li>
        <div className={styles.collapsicon}>
              <span>Legevakt</span>
              <button className={styles.collapsible} onClick={toggleCollapsible3}>
              {collapsible1ButtonText}
              </button></div>
              <ul
                className={styles.content}
                style={{
                  display: isCollapsibleOpen3 ? 'block' : 'none',
                }}
              >
                <li><Link href="#">Dropdown Item 1</Link></li>
                <li> <Link href="#">Dropdown Item 2</Link></li>
                <li><Link href="#">Dropdown Item 3</Link></li>
                <li><Link href="#">Dropdown Item 4</Link></li>
                <li><Link href="#">Dropdown Item 5</Link></li>
              </ul>
        </li>
        <li>
        <div className={styles.collapsicon}>
              <span>Tilleggstjenester</span>
              <button className={styles.collapsible} onClick={toggleCollapsible4}>
              {collapsible1ButtonText}
              </button></div>
              <ul
                className={styles.content}
                style={{
                  display: isCollapsibleOpen4 ? 'block' : 'none',
                }}
              >
                <li><Link href="#">Dropdown Item 1</Link></li>
                <li> <Link href="#">Dropdown Item 2</Link></li>
                <li><Link href="#">Dropdown Item 3</Link></li>
                <li><Link href="#">Dropdown Item 4</Link></li>
                <li><Link href="#">Dropdown Item 5</Link></li>
              </ul>
        </li>
        <li>
          <Link href="/hvordan">
          Hvordan bil kunde </Link>
          </li>

      </ul>
      <ul className={styles.navList1}>
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
      
      </div>

    </nav>
    </>
  );
};

export default Navbar;
// 'use client'
// import React, { useState, useRef } from 'react'
// import styles from './Navbar.module.scss'
// import MobileToggle from './MobileToggle'
// import Image from 'next/image'
// import mypic from '../assets/images/logo.svg'
// import Link from 'next/link'
// import ClickAwayListener from '@mui/material/ClickAwayListener'

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//   }

//   const toggleSubMenu = () => {
//     setIsSubMenuOpen(!isSubMenuOpen)
//   }

//   const handleClickAway = () => {
//     setIsSubMenuOpen(false)
//   }

//   const ref = useRef()

//   return (
//     <nav className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
//       <div className={styles.logo}>
//         <Image src={mypic} alt="Logo" />
//       </div>
//       <MobileToggle onClick={toggleMenu} isOpen={isOpen} />
//       <div className={styles.doublenav}>
//         {' '}
//         <ul className={styles.navList1}>
//           <li>
//             {' '}
//             <Link href="/reasons"> Hvorfor Webmed</Link>
//           </li>
//           <li>
//             {' '}
//             <Link href="/nyheter"> Nyheter </Link>
//           </li>
//           <li>
//             <Link
//               href={{
//                 pathname: '/omoss',
//               }}
//             >
//               Om oss
//             </Link>
//           </li>
//           <li>
//             <Link
//               href={{
//                 pathname: '/smartkort',
//               }}
//             >
//               Smartkort
//             </Link>
//           </li>
//           <li>
//             <Link
//               href={{
//                 pathname: '/jobb',
//               }}
//             >
//               Ledige stillinger
//             </Link>
//           </li>
//         </ul>
//         <ul className={styles.navList}>
//           <ClickAwayListener onClickAway={handleClickAway}>
//             <li
//               onClick={toggleSubMenu}
//               className={`${styles.menuWithSubMenu} ${
//                 isSubMenuOpen ? styles.subMenuOpen : ''
//               }`}
//             >
//               Fastlege
//               <ul className={styles.subMenu}>
//                 {' '}
//                 <span>Fastlege</span>
//                 {isSubMenuOpen && (
//                   <>
//                     <div>Utforsk vårt innhold innenfor fastlege →</div>
//                     <li>
//                       <Link href="/products/fastlege">
//                         Områder/Moduler/funksjonaliteter
//                       </Link>
//                     </li>
//                     <li>Samleside/demo</li>
//                     <li>
//                       <Link href="/products/fastlege/systemkrav">
//                         Teknologi og systemkrav
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/products/fastlege/priser">Pris og info</Link>
//                     </li>
//                     <li>Evt. nye sider</li>
//                   </>
//                 )}
//               </ul>
//             </li>
//           </ClickAwayListener>
//           <li
//             onClick={toggleSubMenu}
//             className={`${styles.menuWithSubMenu} ${
//               isSubMenuOpen ? styles.subMenuOpen : ''
//             }`}
//           >
//             Specialist
//             <ul className={styles.subMenu}>
//               {' '}
//               <span>Fastlege</span>
//               {isSubMenuOpen && (
//                 <>
//                   <div>Utforsk vårt innhold innenfor Specialist →</div>
//                   <li>
//                     <Link href="/products/specialist">
//                       Områder/Moduler/funksjonaliteter
//                     </Link>
//                   </li>
//                   <li>Samleside/demo</li>
//                   <li>
//                     <Link href="/products/specialist/systemkrav">
//                       Teknologi og systemkrav
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/products/fastlege/priser">Pris og info</Link>
//                   </li>
//                   <li>Evt. nye sider</li>
//                 </>
//               )}
//             </ul>
//           </li>
//           <li>Legevakt</li>
//           <li>
//             {' '}
//             <Link href="/tilleggstjenester"> Tilleggstjenester </Link>
//           </li>
//           <li>
//             {' '}
//             <Link href="/hvordan-blir-kunde"> Hvordan bil kunde </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   )
// }

// export default Navbar