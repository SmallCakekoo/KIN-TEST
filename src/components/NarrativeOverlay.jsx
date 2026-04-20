import React from 'react';

const NarrativeOverlay = ({ scenario, scenarioIndex, totalScenarios, onEnter, onNext }) => {
  if (!scenario) return null;

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(28,31,42,0.94)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '20px',
      animation: 'fadeIn 0.3s ease forwards',
      textAlign: 'center',
      backdropFilter: 'blur(4px)',
    },
    container: {
      maxWidth: '520px',
      width: '100%',
    },
    label: {
      color: 'var(--dorado)',
      fontSize: '0.9rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      justifyContent: 'center',
    },
    progressBar: {
      width: '100%',
      height: '2px',
      background: 'rgba(255,255,255,0.1)',
      marginBottom: '32px',
      borderRadius: '2px',
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      background: 'var(--dorado)',
      width: `${((scenarioIndex + 1) / totalScenarios) * 100}%`,
      transition: 'width 0.4s ease',
    },
    narrative: {
      color: 'white',
      fontSize: '1.4rem',
      lineHeader: '1.4',
      fontWeight: '300',
      marginBottom: '2rem',
      fontStyle: 'italic',
      maxWidth: '480px',
    },
    layerCard: {
      background: 'rgba(197, 169, 106, 0.1)',
      border: '1px solid rgba(197, 169, 106, 0.2)',
      borderRadius: 'var(--radius-md)',
      padding: '20px',
      textAlign: 'left',
      marginBottom: '2.5rem',
      width: '100%',
    },
    layerHeader: {
      color: 'var(--dorado)',
      fontSize: '0.8rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginBottom: '8px',
      display: 'block',
    },
    layerName: {
      color: 'white',
      fontSize: '1.1rem',
      fontWeight: '600',
      marginBottom: '4px',
      display: 'block',
    },
    layerDesc: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: '0.85rem',
      lineHeight: '1.5',
      marginBottom: '12px',
      display: 'block',
    },
    layerDevices: {
      color: 'var(--dorado)',
      fontSize: '0.75rem',
      fontWeight: '500',
      opacity: 0.8,
    },
    buttonGroup: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      width: '100%',
    },
    primaryBtn: {
      background: 'var(--selva)',
      color: 'white',
      padding: '12px 32px',
      borderRadius: 'var(--radius-md)',
      fontSize: '1rem',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      flex: 1,
      justifyContent: 'center',
      minWidth: '200px',
    },
    secondaryBtn: {
      background: 'transparent',
      color: 'rgba(255,255,255,0.6)',
      border: '1px solid rgba(255,255,255,0.2)',
      padding: '12px 24px',
      borderRadius: 'var(--radius-md)',
      fontSize: '1rem',
      fontWeight: '500',
      flex: 1,
      minWidth: '200px',
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <div style={styles.progressBar}>
          <div style={styles.progressFill} />
        </div>
        
        <div style={styles.label}>
          <span>Guía de Demostración</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span>Escenario {scenarioIndex + 1} / {totalScenarios}</span>
        </div>

        <h2 style={styles.narrative}>
          "{scenario._narrativeText}"
        </h2>

        <div style={styles.buttonGroup}>
          <button style={styles.primaryBtn} onClick={onEnter}>
            Explorar Dashboard →
          </button>
          {scenarioIndex < totalScenarios - 1 && (
            <button style={styles.secondaryBtn} onClick={onNext}>
              Siguiente Escenario →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NarrativeOverlay;
