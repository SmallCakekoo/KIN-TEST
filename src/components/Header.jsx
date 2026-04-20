import React from 'react';
import KinLogo from './KinLogo';
import styles from './Header.module.css';

const Header = ({ title, showDate, onLogoClick }) => {
  const today = new Date().toLocaleDateString('es-ES', { month: 'short', day: 'numeric' });
  
  return (
    <header className={styles.header}>
      <KinLogo size="small" onClick={onLogoClick} />
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
        {showDate && <span className={styles.date}>{today}</span>}
      </div>
    </header>
  );
};

export default Header;
