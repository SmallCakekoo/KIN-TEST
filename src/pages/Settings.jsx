import React, { useState } from 'react';
import { FileText, Smartphone, X } from 'lucide-react';
import KinLogo from '../components/KinLogo';
import styles from './Settings.module.css';

const DeviceDetailModal = ({ device, onClose }) => {
  if (!device) return null;

  // Filter out common props to get specific details
  const standardFields = ['name', 'status', 'model', 'id', 'key'];
  const detailFields = Object.keys(device).filter(key => !standardFields.includes(key));

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={20} />
        </button>
        
        <div className={styles.modalHeader}>
          <span className={styles.modalModel}>{device.model || 'Device'}</span>
          <h2 className={styles.modalTitle}>{device.name}</h2>
        </div>

        <div className={styles.modalBody}>
          {detailFields.map(field => (
            <div key={field} className={styles.detailRow}>
              <div className={styles.detailLabel}>
                {field.replace(/([A-Z])/g, ' $1').toUpperCase()}
              </div>
              <div className={styles.detailValue}>
                {device[field]}
              </div>
            </div>
          ))}
          {detailFields.length === 0 && (
            <p className={styles.detailValue}>No additional specifications available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Settings = ({ data }) => {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [notifications, setNotifications] = useState([
    { id: 1, label: 'Notificaciones push para alertas críticas', active: true },
    { id: 2, label: 'Resumen semanal vía WhatsApp', active: false },
    { id: 3, label: 'Recordatorios de actividad', active: true }
  ]);

  const toggleNotification = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, active: !n.active } : n));
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileCard}>
        <div className={styles.avatar}>MR</div>
        <div>
          <div className={styles.profileName}>{data.name}</div>
          <div className={styles.profileMeta}>{data.age} años</div>
        </div>
      </div>

      <h3 className={styles.sectionTitle}>Notificaciones</h3>
      <div className={styles.listCard}>
        {notifications.map((item) => (
          <div key={item.id} className={styles.listItem}>
            <span className={styles.listItemLabel}>{item.label}</span>
            <button 
              className={`${styles.toggle} ${item.active ? styles.toggleActive : ''}`}
              onClick={() => toggleNotification(item.id)}
            >
              <div className={styles.toggleHandle} />
            </button>
          </div>
        ))}
      </div>

      <h3 className={styles.sectionTitle}>Ecosistema</h3>
      <div className={styles.listCard}>
        {data.devices.map((device) => (
          <div 
            key={device.name} 
            className={styles.listItem} 
            style={{ cursor: 'pointer' }}
            onClick={() => setSelectedDevice(device)}
          >
            <div className={styles.deviceItem}>
              <Smartphone size={18} className={styles.deviceIcon} />
              <span className={styles.listItemLabel}>{device.name}</span>
            </div>
            <div className={styles.statusIndicator}>
              <div 
                className={styles.statusDot} 
                style={{ backgroundColor: device.status === 'connected' ? 'var(--success)' : '#ccc' }} 
              />
              <span className={styles.statusText}>{device.status === 'connected' ? 'CONECTADO' : 'DESCONECTADO'}</span>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.reportButton}>
        <FileText size={20} />
        Generar reporte PDF para el doctor
      </button>

      <div className={styles.footer}>
        <KinLogo size="small" showTagline={true} />
      </div>

      <DeviceDetailModal 
        device={selectedDevice} 
        onClose={() => setSelectedDevice(null)} 
      />
    </div>
  );
};

export default Settings;
