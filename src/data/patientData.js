import { Pill, Activity, Droplets, Footprints, Moon, Utensils } from 'lucide-react';

export const patientData = {
  name: "Manuel Rodríguez",
  age: 78,
  doctor: "Dr. Aristhène",
  indicators: [
    { id: 'meds', name: 'Medication', icon: Pill, status: 'success', text: 'All doses taken', detail: '3/3 medications', device: 'MedMinder Hub' },
    { id: 'bp', name: 'Blood Pressure', icon: Activity, status: 'success', text: '127/82 mmHg', detail: 'Measured at 8:30 AM', device: 'Omron BP Monitor' },
    { id: 'glucose', name: 'Glucose', icon: Droplets, status: 'warn', text: '6.8 mmol/L', detail: 'Slightly elevated post-breakfast', device: 'Contour Next' },
    { id: 'activity', name: 'Activity', icon: Footprints, status: 'success', text: '4,102 steps', detail: 'Daily goal: 3,000 steps', device: 'Smart Cane' },
    { id: 'sleep', name: 'Sleep', icon: Moon, status: 'success', text: '7h 20min', detail: '85% sleep quality', device: 'Withings Sleep' },
    { id: 'nutrition', name: 'Nutrition', icon: Utensils, status: 'danger', text: 'Low fluid intake', detail: 'Only 0.8L logged today', device: 'Philips Hue Sync' },
  ],
  weeklySummary: {
    period: "Apr 6 - Apr 12",
    medicationAdherence: [
      { day: 'Mon', percentage: 100 },
      { day: 'Tue', percentage: 100 },
      { day: 'Wed', percentage: 66 },
      { day: 'Thu', percentage: 100 },
      { day: 'Fri', percentage: 100 },
      { day: 'Sat', percentage: 100 },
      { day: 'Sun', percentage: 100 },
    ],
    stats: {
      avgSleep: "7.2h",
      daysOut: 4,
      bpReadings: 14,
      glucoseTrend: "stable"
    },
    narrative: "Manuel had a great week: 6 out of 7 medications on time, went out 4 days."
  },
  alerts: [
    { id: 1, severity: 'HIGH', title: 'Low Fluid Intake', timestamp: '2 hours ago', resolved: false },
    { id: 2, severity: 'MEDIUM', title: 'Missed Lunch Meds', timestamp: 'Yesterday', resolved: true },
    { id: 3, severity: 'LOW', title: 'Sleep Interruption', timestamp: '2 days ago', resolved: true },
  ],
  devices: [
    { 
      name: 'Smart Cane', 
      status: 'connected',
      model: 'ESP32 Physical Prototype (v2.1)',
      function: 'Assistive obstacle detection and fall monitoring. Detects movement via MPU6050 accelerometer/gyroscope. Provides haptic (vibration) and audible (buzzer) feedback.',
      connectivity: 'Dual-band WiFi (ESP32-WROOM-32) + BLE 4.2 fallback for direct-to-phone sync.',
      battery: '18650 Li-ion 2600mAh — 5–7 days per charge. USB-C charging port.',
      sensors: 'Ultrasonic (60° coverage), 6-axis Accelerometer, Capacitive Touch handle.',
      notifications: 'Pushes critical events to cloud via WiFi; long-press triggers emergency contact.'
    },
    { 
      name: 'MedMinder', 
      status: 'connected',
      model: 'Maya Smart Dispenser',
      function: 'Automated medication management. Features 28 compartments with dual-channel locking system. Releases doses with auditory/visual cues.',
      connectivity: 'Built-in Cellular modem + backup WiFi 802.11 b/g/n.',
      safety: 'Audible alarm + flashing compartment. Unlocks only the scheduled dose; others remain secured.',
      refill: 'Integrated with pharmacy network for pre-filled monthly tray shipments.',
      notifications: 'SMS/Push to caregiver if missed after 30m; automated re-order when 5 days remaining.'
    },
    { 
      name: 'Withings Sleep', 
      status: 'connected',
      model: 'Sleep Analyzer Mat',
      function: 'Medical-grade sleep monitoring mat. Tracks sleep cycles (Deep, Light, REM), heart rate, and respiratory rate.',
      clinical: 'Clinically validated for sleep apnea detection and snoring monitoring.',
      form_factor: 'Slim under-mattress pneumatic sensor pad (approx. 637mm x 190mm).',
      connectivity: 'Automatic Wi-Fi sync after every sleep session. Bluetooth 4.0 for setup.',
      compatibility: 'Works with 4" to 15" thickness mattresses; supports Spring, Foam, and Latex.',
      notifications: 'Morning trend report; alerts Laura for recovery dips or absence by midnight.'
    },
    { 
      name: 'Omron BP', 
      status: 'connected',
      model: 'Evolv Wireless (BP7000)',
      function: 'Integrated wrap-around blood pressure monitor. One-piece, tube-less design for portability and accuracy.',
      cuff_tech: 'Intelli Wrap Cuff (360° accuracy) fits 9" to 17" arms.',
      connectivity: 'Bluetooth Low Energy (BLE) direct-sync to phone hub.',
      storage: 'Internal memory for up to 100 offline readings; auto-uploaded when in range.',
      validation: 'Clinically validated for accuracy; specialized for elderly and pregnancy hypertension.',
      notifications: 'Out-of-range systolic/diastolic readings; irregular heartbeat detection.'
    },
    { 
      name: 'Contour Glucose', 
      status: 'connected',
      model: 'Contour Next One',
      function: 'Smart blood glucose monitoring system. Highly accurate test-strip technology with Second-Chance sampling.',
      smart_light: 'Instant feedback via color-coded light: Green (In Target), Amber (High), Red (Low).',
      sampling: 'Second-Chance Sampling allows applying more blood if the first drop was insufficient.',
      connectivity: 'Active Bluetooth sync to smartphone hub; automatic data logging and trending.',
      accuracy: 'Exceeds ISO 15197:2013 accuracy standards.',
      notifications: 'Immediate push for critical spikes (>10 mmol/L) or lows (<3.9 mmol/L).'
    },
    { 
      name: 'Philips Hue', 
      status: 'connected',
      model: 'White & Color Ambiance',
      function: 'Dynamic lighting system for circadian support. Programmed for Sunset/Sunrise simulations.',
      connectivity: 'Connected via Zigbee to Hue Bridge (WiFi 802.11 b/g/n gateway) to IFTTT server.',
      hardware: '3x A19 800-lumen bulbs + 1x Hue Bridge.',
      automation: 'Fully passive; motion-triggered low-level floor lighting for nighttime safety.',
      notifications: 'Laura informed if bathroom motion sensor detects atypical night activity.'
    },
    { 
      name: 'Door Sensor', 
      status: 'offline',
      model: 'Kinetic Contact Sensor',
      function: 'Contact sensor for perimeter security and activity tracking. Logs entry/exit timestamps.',
      connectivity: 'Zigbee 3.0 ultra-low power; 2-year battery life on CR2032 cell.',
      mounting: 'Non-invasive adhesive mount on main entry door.',
      integration: 'Feeds into activity dashboard to confirm excursions or deliveries.',
      notifications: '"No Exit" alert on social days; "Atypical Exit" alert during late night.'
    },
  ]
};
