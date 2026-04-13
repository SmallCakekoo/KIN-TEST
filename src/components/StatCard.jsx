import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import styles from './StatCard.module.css';

const StatCard = ({ label, value, trend }) => (
  <div className={styles.card}>
    <div className={styles.label}>
      {label}
    </div>
    <div className={styles.value}>
      {value}
    </div>
    {trend && (
      <div className={styles.trendContainer}>
        {trend === 'up' && <TrendingUp size={16} color="var(--success)" />}
        {trend === 'down' && <TrendingDown size={16} color="var(--danger)" />}
        {trend === 'stable' && <Minus size={16} color="var(--dorado)" />}
      </div>
    )}
  </div>
);

export default StatCard;
