import React from 'react';
import { Link } from 'react-router';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Home</Link>
      </div>
      <div className={styles.logo}>
        <Link to="/basket">Basket</Link>
      </div>
    </nav>
  );
};

export default Navbar;
