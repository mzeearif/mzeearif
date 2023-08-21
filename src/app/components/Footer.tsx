import React from 'react';
import Image from 'next/image'
import mypic from '../assets/images/logo.png.png'
import styles from './Footer.module.scss'; // Import your SCSS styles here

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footeritems}>
      <div className={styles.footerItem}>Must be one of the following:
A statically imported image file
.</div>
      <div className={styles.footerItem}>
A statically imported image file
A path string. This can be either an absolute external URL, or an internal path depending on the loader prop.</div>
      <div className={styles.footerItem}>Must be one of the following:

A statically imported image file
A path string. This can be either an absolute external URL, or an internalr prop.</div>
      <div className={styles.footerItem}>Must be<br></br>the following:
A statically imported image file
</div>
      <div className={styles.footerItem}>
        <p>some text type here</p>
        <input type="text" placeholder="Text input" className={styles.inputText} />
        <div className={styles.agree}>
        <input type="checkbox" className={styles.inputCheckbox} /><p>An “agree to terms and conditions” checkbox </p></div>
        <button className={styles.button}>Submit</button>
      </div>
      </div> 
      <div className={styles.footerlogo}>
      <div className={styles.logo}><Image src={mypic}  alt=''/></div>
      <div className={styles.socialIcons}>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
