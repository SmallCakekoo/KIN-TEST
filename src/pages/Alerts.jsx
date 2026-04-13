import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import styles from './Alerts.module.css';

const Alerts = ({ data }) => {
  const [alerts, setAlerts] = useState(data.alerts);
  
  const toggleResolved = (id) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, resolved: !a.resolved } : a));
  };

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'HIGH': return 'var(--danger)';
      case 'MEDIUM': return 'var(--warn)';
      default: return 'var(--dorado)';
    }
  };

  const activeAlerts = alerts.filter(a => !a.resolved);
  const resolvedAlerts = alerts.filter(a => a.resolved);

  return (
    <div className={styles.container}>
      <h3 className={styles.sectionTitle}>Notifications</h3>
      
      {alerts.length === 0 ? (
        <div className={styles.emptyState}>
          <CheckCircle size={56} className={styles.emptyIcon} />
          <h4 className={styles.emptyTitle}>All clear</h4>
          <p className={styles.emptyText}>No active alerts for Manuel.</p>
        </div>
      ) : (
        <>
          {activeAlerts.map(alert => (
            <div 
              key={alert.id} 
              className={styles.alertCard}
              style={{ borderLeft: `4px solid ${getSeverityColor(alert.severity)}` }}
            >
              <div className={styles.alertInfo}>
                <div className={styles.labelGroup}>
                  <span 
                    className={styles.badge}
                    style={{ backgroundColor: getSeverityColor(alert.severity) }}
                  >
                    {alert.severity}
                  </span>
                  <span className={styles.timestamp}>{alert.timestamp}</span>
                </div>
                <div className={styles.alertTitle}>{alert.title}</div>
              </div>
              <button 
                onClick={() => toggleResolved(alert.id)}
                className={styles.resolveButton}
              >
                {alert.resolved && <CheckCircle size={18} color="var(--success)" />}
              </button>
            </div>
          ))}
          
          {resolvedAlerts.length > 0 && (
            <div className={styles.resolvedSectionHeader}>
              Resolved recently
            </div>
          )}
          
          {resolvedAlerts.map(alert => (
            <div key={alert.id} className={styles.resolvedCard}>
              <div className={styles.alertInfo}>
                <div className={styles.resolvedTitle}>{alert.title}</div>
                <div className={styles.timestamp}>{alert.timestamp}</div>
              </div>
              <button 
                onClick={() => toggleResolved(alert.id)}
                className={`${styles.resolveButton} ${styles.resolveButtonResolved}`}
              >
                <CheckCircle size={18} color="var(--success)" />
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Alerts;
