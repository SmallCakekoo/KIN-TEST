import React, { useMemo, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Week from "./pages/Week";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";
import NarrativeOverlay from "./components/NarrativeOverlay";
import DemoController from "./components/DemoController";
import ModeSelector from "./components/ModeSelector";
import { ALL_SCENARIOS } from "./data/scenarios";
import styles from "./App.module.css";

export default function App() {
  const [mode, setMode] = useState(null); // null, 'guided', 'dashboard'
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [showNarrative, setShowNarrative] = useState(false);
  const [showDemoPanel, setShowDemoPanel] = useState(false);
  
  const data = ALL_SCENARIOS[scenarioIndex];
  const location = useLocation();

  const hasRedAlerts = useMemo(
    () => data.alerts.some((a) => !a.resolved && a.severity === 'HIGH'),
    [data.alerts],
  );

  const activeTab = useMemo(() => {
    switch (location.pathname) {
      case "/":
        return "home";
      case "/week":
        return "week";
      case "/alerts":
        return "alerts";
      case "/settings":
        return "settings";
      default:
        return "home";
    }
  }, [location.pathname]);

  const getHeaderTitle = () => {
    switch (activeTab) {
      case "home":
        return "Buenos días, Laura";
      case "week":
        return "Resumen Semanal";
      case "alerts":
        return "Alertas de Seguridad";
      case "settings":
        return "Ajustes";
      default:
        return "Kin";
    }
  };

  const handleNextScenario = () => {
    const nextIndex = (scenarioIndex + 1) % ALL_SCENARIOS.length;
    setScenarioIndex(nextIndex);
    setShowNarrative(true);
    setShowDemoPanel(false);
  };

  const handleSelectScenario = (index) => {
    setScenarioIndex(index);
    setMode('guided');
    setShowNarrative(true);
    setShowDemoPanel(false);
  };

  const handleModeSelect = (selectedMode) => {
    setMode(selectedMode);
    if (selectedMode === 'guided') {
      setScenarioIndex(0);
      setShowNarrative(true);
    } else {
      setScenarioIndex(0);
      setShowNarrative(false);
    }
    setShowDemoPanel(false);
  };

  const toggleDemoPanel = () => setShowDemoPanel(!showDemoPanel);

  if (!mode) {
    return <ModeSelector onSelect={handleModeSelect} />;
  }

  return (
    <div className={styles.layoutRoot}>
      {showNarrative && (
        <NarrativeOverlay 
          scenario={data}
          scenarioIndex={scenarioIndex}
          totalScenarios={ALL_SCENARIOS.length}
          onEnter={() => setShowNarrative(false)}
          onNext={handleNextScenario}
        />
      )}

      {mode === 'guided' && (
        <DemoController 
          scenarios={ALL_SCENARIOS}
          currentIndex={scenarioIndex}
          onSelect={handleSelectScenario}
          onClose={() => setShowDemoPanel(false)}
          forceOpen={showDemoPanel}
        />
      )}
 Riverside:
      {/* Mobile Header */}
      <div className="mobile-only" style={{ filter: showNarrative ? 'blur(4px)' : 'none', transition: 'filter 0.3s ease' }}>
        <Header title={getHeaderTitle()} showDate={activeTab === "home"} onLogoClick={toggleDemoPanel} />
      </div>

      <div className={styles.mainWrapper} style={{ filter: showNarrative ? 'blur(8px)' : 'none', transition: 'filter 0.3s ease' }}>
        <div className={styles.desktopLayout}>
          {/* Desktop Navigation (Sidebar) */}
          <div className="desktop-only">
            <Navigation hasRedAlerts={hasRedAlerts} onLogoClick={toggleDemoPanel} />
          </div>

          {/* Main Content Area */}
          <main className={styles.desktopMain}>
            {/* Desktop Header Title */}
            <div className={`${styles.headerContainer} desktop-only`}>
              <h1 className={styles.headerTitle}>{getHeaderTitle()}</h1>
              {activeTab === "home" && (
                <p className={styles.headerSubtitle}>
                  Bienvenida, Laura. Este es el estado general de Manuel.
                </p>
              )}
            </div>

            <Routes>
              <Route path="/" element={<Home data={data} />} />
              <Route path="/week" element={<Week data={data} />} />
              <Route path="/alerts" element={<Alerts data={data} />} />
              <Route path="/settings" element={<Settings data={data} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-only" style={{ filter: showNarrative ? 'blur(4px)' : 'none', transition: 'filter 0.3s ease' }}>
        <Navigation hasRedAlerts={hasRedAlerts} onLogoClick={toggleDemoPanel} />
      </div>
    </div>
  );
}
