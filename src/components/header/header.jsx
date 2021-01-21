import React from 'react';
import styles from './header.module.css';
const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logoutButton} onClick={onLogout}>
          Log out
        </button>
      )}
      <img className={styles.logo} src='/images/logo.png' alt='logo' />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
};

export default Header;
