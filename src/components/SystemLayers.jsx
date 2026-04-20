import React from 'react';

const layers = [
  { id: 'medical', name: 'MEDICAL', label: 'Capa 1' },
  { id: 'contextual', name: 'CONTEXT', label: 'Capa 2' },
  { id: 'nutrition', name: 'NUTRITION', label: 'Capa 3' },
  { id: 'environment', name: 'SMART ENV', label: 'Capa 4' },
  { id: 'notifications', name: 'NOTIF', label: 'Capa 5' },
];

const SystemLayers = ({ activeLayerId }) => {
  const styles = {
    container: {
      display: 'flex',
      gap: '8px',
      padding: '0 4px',
      marginBottom: '20px',
      overflowX: 'auto',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    },
    layer: (active) => ({
      flex: 1,
      minWidth: '70px',
      padding: '8px 4px',
      borderRadius: '8px',
      background: active ? 'var(--dorado)' : 'var(--white)',
      border: active ? 'none' : '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2px',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      opacity: active ? 1 : 0.6,
      transform: active ? 'scale(1.05)' : 'scale(1)',
      boxShadow: active ? '0 4px 12px rgba(197, 169, 106, 0.3)' : 'none',
    }),
    label: (active) => ({
      fontSize: '0.6rem',
      fontWeight: '700',
      color: active ? 'rgba(0,0,0,0.5)' : 'var(--text-light)',
      textTransform: 'uppercase',
    }),
    name: (active) => ({
      fontSize: '0.65rem',
      fontWeight: '800',
      color: active ? 'var(--night)' : 'var(--text-mid)',
      letterSpacing: '0.02em',
    })
  };

  return (
    <div style={styles.container} className="no-scrollbar">
      {layers.map((layer) => {
        const isActive = activeLayerId === layer.id;
        return (
          <div key={layer.id} style={styles.layer(isActive)}>
            <span style={styles.label(isActive)}>{layer.label}</span>
            <span style={styles.name(isActive)}>{layer.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SystemLayers;
