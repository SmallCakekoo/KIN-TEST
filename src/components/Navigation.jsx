import React from "react";
import { NavLink } from "react-router-dom";
import { Home, BarChart2, Bell, Settings } from "lucide-react";
import KinLogo from "./KinLogo";
import styles from "./Navigation.module.css";

const tabs = [
  { id: "home", path: "/", icon: Home, label: "Inicio" },
  { id: "week", path: "/week", icon: BarChart2, label: "Semanal" },
  { id: "alerts", path: "/alerts", icon: Bell, label: "Alertas" },
  { id: "settings", path: "/settings", icon: Settings, label: "Ajustes" },
];

const Navigation = ({ hasRedAlerts, onLogoClick }) => {
  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav className={`${styles.mobileNav} mobile-only`}>
        {tabs.map((tab) => (
          <NavLink
            key={tab.id}
            to={tab.path}
            end={tab.path === "/"}
            className={({ isActive }) =>
              `${styles.tabButtonMobile} ${isActive ? styles.tabButtonMobileActive : ""}`
            }
          >
            {({ isActive }) => (
              <>
                <div className={styles.iconContainer}>
                  <tab.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  {tab.id === "alerts" && hasRedAlerts && (
                    <div className={styles.badge} />
                  )}
                </div>
                <span className={styles.labelMobile}>{tab.label}</span>
                {isActive && <div className={styles.activeIndicatorMobile} />}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Desktop Sidebar Navigation */}
      <nav className={`${styles.desktopNav} desktop-only`}>
        <div className={styles.logoContainer}>
          <KinLogo size="normal" showTagline={true} onClick={onLogoClick} />
        </div>

        {tabs.map((tab) => (
          <NavLink
            key={tab.id}
            to={tab.path}
            end={tab.path === "/"}
            className={({ isActive }) =>
              `${styles.tabButtonDesktop} ${isActive ? styles.tabButtonDesktopActive : ""}`
            }
          >
            <div style={{ position: "relative", display: "flex" }}>
              <tab.icon size={20} />
              {tab.id === "alerts" && hasRedAlerts && (
                <div className={styles.badgeDesktop} />
              )}
            </div>
            <span>{tab.label}</span>
          </NavLink>
        ))}

        <div className={styles.profileCard}>
          <div className={styles.profileName}>Manuel Rodríguez</div>
          <div className={styles.profileStats}>Edad: 78 • Estable</div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
