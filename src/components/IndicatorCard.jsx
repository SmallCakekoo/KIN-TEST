import React, { useState } from 'react';
import { Smartphone } from 'lucide-react';
import styles from './IndicatorCard.module.css';

const IndicatorCard = ({ indicator }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = indicator.icon;
  
  const getStatusClass = (status) => {
    switch(status) {
      case 'success': return styles.statusSuccess;
      case 'warn': return styles.statusWarn;
      case 'danger': return styles.statusDanger;
      default: return '';
    }
  };

  return (
    <div 
      className={styles.card} 
      onClick={() => setExpanded(!expanded)}
    >
      <div className={styles.header}>
        <div className={styles.iconWrapper}><Icon size={18} /></div>
        <span className={styles.title}>{indicator.name}</span>
        <div className={`${styles.statusDot} ${getStatusClass(indicator.status)}`} />
      </div>
      <div className={styles.value}>
        {indicator.text}
      </div>
      
      {expanded && (
        <div className={styles.expandedArea}>
          <div className={styles.detail}>
            <strong>Detail:</strong> {indicator.detail}
          </div>
          <div className={styles.deviceInfo}>
            <Smartphone size={10} /> {indicator.device}
          </div>
        </div>
      )}
    </div>
  );
};

export default IndicatorCard;
