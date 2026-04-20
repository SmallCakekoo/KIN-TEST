import React, { useState } from 'react';
import { Settings, X } from 'lucide-react';

const DemoController = ({ scenarios, currentIndex, onSelect, onClose, forceOpen }) => {
  const [internalOpen, setInternalOpen] = useState(false);

  // Show panel if either internal gear is clicked OR if forced by logo click
  const isPanelVisible = internalOpen || forceOpen;

  const styles = {
    backdrop: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 11000,
      background: 'transparent',
      display: isPanelVisible ? 'block' : 'none',
    },
    container: {
      position: 'fixed',
      top: '56px', // Below mobile logo
      left: '12px',
      zIndex: 12000,
      display: isPanelVisible ? 'flex' : 'none',
      flexDirection: 'column',
      gap: '8px',
    },
    desktopTrigger: {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 12000,
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      background: 'var(--night)',
      color: 'var(--dorado)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid rgba(197, 169, 106, 0.4)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    panel: {
      background: 'var(--night)',
      borderRadius: 'var(--radius-md)',
      padding: '8px',
      width: '180px',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      border: '1px solid rgba(197, 169, 106, 0.4)',
      animation: 'fadeIn 0.2s ease forwards',
    },
    scenarioItem: (active) => ({
      padding: '8px 12px',
      borderRadius: 'var(--radius-sm)',
      fontSize: '0.8rem',
      color: active ? 'var(--dorado)' : 'rgba(255,255,255,0.6)',
      textAlign: 'left',
      background: active ? 'rgba(197, 169, 106, 0.1)' : 'transparent',
      fontWeight: active ? '600' : '400',
      width: '100%',
      border: 'none',
      cursor: 'pointer',
    })
  };

  const handleSelect = (idx) => {
    onSelect(idx);
    setInternalOpen(false);
    onClose(); // In case it was opened via logo
  };

  return (
    <>
      <div 
        style={styles.backdrop} 
        onClick={() => {
          setInternalOpen(false);
          onClose();
        }} 
      />
      
      {/* Gear button (Visible on Desktop only) */}
      <div 
        className="desktop-only" 
        style={styles.desktopTrigger}
        onClick={() => setInternalOpen(!internalOpen)}
        title="Escenarios de Demostración"
      >
        {isPanelVisible ? <X size={20} /> : <Settings size={20} />}
      </div>

      <div style={styles.container}>
        <div style={styles.panel}>
          {scenarios.map((scenario, index) => (
            <button
              key={index}
              style={styles.scenarioItem(index === currentIndex)}
              onClick={() => handleSelect(index)}
            >
              {scenario._scenarioLabel}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default DemoController;
