import React from 'react';
import KinLogo from './KinLogo';

const ModeSelector = ({ onSelect }) => {
  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'var(--lino)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 11000,
      padding: '24px',
      textAlign: 'center',
    },
    logoContainer: {
      marginBottom: '48px',
      animation: 'fadeIn 0.6s ease forwards',
    },
    title: {
      fontSize: '2rem',
      color: 'var(--night)',
      fontWeight: '600',
      marginBottom: '12px',
      animation: 'fadeIn 0.8s ease forwards',
    },
    subtitle: {
      fontSize: '1rem',
      color: 'var(--text-mid)',
      marginBottom: '40px',
      maxWidth: '400px',
      animation: 'fadeIn 1s ease forwards',
    },
    options: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      animation: 'fadeIn 1.2s ease forwards',
    },
    card: {
      background: 'white',
      borderRadius: 'var(--radius-lg)',
      padding: '32px 24px',
      width: '280px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      boxShadow: 'var(--shadow-md)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '2px solid transparent',
    },
    cardGuided: {
      background: 'var(--night)',
      color: 'white',
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
    },
    cardText: {
      fontSize: '0.9rem',
      opacity: 0.7,
      lineHeight: '1.5',
    },
    btnGuided: {
      marginTop: '12px',
      padding: '10px 24px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--dorado)',
      color: 'var(--night)',
      fontWeight: '600',
      fontSize: '0.9rem',
    },
    btnDashboard: {
      marginTop: '12px',
      padding: '10px 24px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--selva)',
      color: 'white',
      fontWeight: '600',
      fontSize: '0.9rem',
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.logoContainer}>
        <KinLogo size="large" showTagline={true} />
      </div>
      
      <h1 style={styles.title}>¿Cómo quieres empezar?</h1>
      <p style={styles.subtitle}>
        Selecciona una opción para comenzar la demostración de Kin.
      </p>

      <div style={styles.options}>
        {/* Guided Experience */}
        <div 
          style={{ ...styles.card, ...styles.cardGuided }}
          onClick={() => onSelect('guided')}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div style={styles.cardTitle}>Demo Guiada</div>
          <p style={styles.cardText}>
            Una experiencia narrativa paso a paso con escenarios reales de Manuel.
          </p>
          <button style={styles.btnGuided}>Empezar Narrativa</button>
        </div>

        {/* Dashboard Direct */}
        <div 
          style={styles.card}
          onClick={() => onSelect('dashboard')}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            e.currentTarget.style.borderColor = 'var(--selva)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            e.currentTarget.style.borderColor = 'transparent';
          }}
        >
          <div style={{ ...styles.cardTitle, color: 'var(--night)' }}>Dashboard Final</div>
          <p style={{ ...styles.cardText, color: 'var(--text-mid)' }}>
            Acceso directo al panel de control con el estado estable de Manuel.
          </p>
          <button style={styles.btnDashboard}>Explorar App</button>
        </div>
      </div>
    </div>
  );
};

export default ModeSelector;
