import React from 'react';
import logoImg from '../assets/logo kin.png';
import styles from './KinLogo.module.css';

const KinLogo = ({ size = 'normal', showTagline = false }) => {
  const height = size === 'small' ? 24 : size === 'large' ? 48 : 32;
  
  return (
    <div className={styles.container}>
      <img 
        src={logoImg} 
        alt="Kin Logo" 
        className={styles.logo}
        style={{ height: `${height}px` }} 
      />
      {showTagline && (
        <span className={styles.tagline}>
          where care begins.
        </span>
      )}
    </div>
  );
};

export default KinLogo;
