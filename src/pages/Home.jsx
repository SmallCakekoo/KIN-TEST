import React, { useMemo } from 'react';
import { Phone, Bell } from 'lucide-react';
import IndicatorCard from '../components/IndicatorCard';
import KinLogo from '../components/KinLogo';
import styles from './Home.module.css';

const Home = ({ data }) => {
  const hasCriticalIssue = useMemo(() => data.indicators.some(i => i.status === 'danger'), [data]);
  
  return (
    <div className={styles.container}>
      {hasCriticalIssue && (
        <div className={styles.criticalAlert}>
          <Bell size={18} />
          <span>Atención necesaria: {data.indicators.find(i => i.status === 'danger')?.name}</span>
        </div>
      )}
      
      <div className={styles.heroCard}>
        <h1 className={styles.heroTitle}>
          {hasCriticalIssue ? "Algo requiere tu atención" : "Tu padre está bien hoy"}
        </h1>
        <div className={styles.logoWatermark}>
          <KinLogo size="large" />
        </div>
      </div>

      <div className={styles.grid}>
        {data.indicators.map(indicator => (
          <IndicatorCard key={indicator.id} indicator={indicator} />
        ))}
      </div>

      <button className={styles.callButton}>
        <Phone size={20} fill="white" />
        <span>Llamar a papá</span>
      </button>
    </div>
  );
};

export default Home;
