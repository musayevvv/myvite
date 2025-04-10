import React from 'react';
import styles from './Header.module.css';
import { FaPhone } from 'react-icons/fa'; // Telefon ikonu

const Header = () => {
  return (

      <nav>
        <div className={styles.navbar}>
        <div className={styles.leftDiv}>
          <div className={styles.logo}>
            <img src="	https://preview.colorlib.com/theme/restauco/assets/img/logo/logo.png" alt="" />
          </div>
          <div className={styles.pages}>
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className={styles.rightDiv}>
          <div className={styles.book}>Book a Table</div>
          <button className={styles.numberButton}><FaPhone className={styles.phoneIcon}/> <span>+10 (78) 783 3674</span></button>
        </div>
        </div>
      </nav>
      
  
  );
};

export default Header;
