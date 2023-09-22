import React from 'react';
import Image from 'next/image'
import mypic from '../assets/images/logo.png.png'
import styles from './Footer.module.scss'; // Import your SCSS styles here

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footeritems}>
          <div className={styles.div1}>
            <h3>Fastlege</h3>
      <div className={styles.footerItem}><p>Must be one of the following:
         A statically imported image file</p>  </div>
<div>
  <h3>Spesialist</h3>
  <p>Must be one of the following:
         A statically imported image file</p>
</div>
    </div>
    <div className={styles.div2}>
            <h3>Legevakt</h3>
      <div className={styles.footerItem}><p>Must be one of the following:
         A statically imported image file</p>  </div>
<div>
  <h3>Tilleggstjenester</h3>
  <h3>Hvordan bli kunde</h3>
</div>
    </div>
      <div className={styles.footerItem2}>
        <h3>Hvorfor WebMed?</h3>
        <h3>Nyheter</h3>
        <h3>Om oss</h3>
        <h3>Smartkort</h3>
        <h3>Ledige stillinger</h3>
      </div>
      <div className={styles.footerItem3}>
        <h3>Kontkt</h3>
        <h3>Support</h3>
</div>
      <div className={styles.footerItem4}>
        <h3>Meld deg pa vart nyhetsbrev</h3>
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
