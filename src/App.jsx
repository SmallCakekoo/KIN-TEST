import React, { useMemo } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Week from "./pages/Week";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";
import { patientData } from "./data/patientData";
import styles from "./App.module.css";

export default function App() {
  const data = patientData;
  const location = useLocation();

  const hasRedAlerts = useMemo(
    () => data.alerts.some((a) => !a.resolved),
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
        return "Good morning, Laura";
      case "week":
        return "Weekly Summary";
      case "alerts":
        return "Safety Alerts";
      case "settings":
        return "Settings";
      default:
        return "Kin";
    }
  };

  return (
    <div className={styles.layoutRoot}>
      {/* Mobile Header */}
      <div className="mobile-only">
        <Header title={getHeaderTitle()} showDate={activeTab === "home"} />
      </div>

      <div className={styles.mainWrapper}>
        <div className={styles.desktopLayout}>
          {/* Desktop Navigation (Sidebar) */}
          <div className="desktop-only">
            <Navigation hasRedAlerts={hasRedAlerts} />
          </div>

          {/* Main Content Area */}
          <main className={styles.desktopMain}>
            {/* Desktop Header Title */}
            <div className={`${styles.headerContainer} desktop-only`}>
              <h1 className={styles.headerTitle}>{getHeaderTitle()}</h1>
              {activeTab === "home" && (
                <p className={styles.headerSubtitle}>
                  Welcome back, Laura. Here is Manuel's health overview.
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
      <div className="mobile-only">
        <Navigation hasRedAlerts={hasRedAlerts} />
      </div>
    </div>
  );
}
