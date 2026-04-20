import { Pill, Activity, Droplets, Footprints, Moon, Utensils } from 'lucide-react';

export const patientData = {
  name: "Manuel Rodríguez",
  age: 78,
  indicators: [
    { id: 'meds', name: 'Medicación', icon: Pill, status: 'success', text: 'Todas tomadas', detail: '3/3 medicamentos', device: 'MedMinder Hub' },
    { id: 'bp', name: 'Presión Arterial', icon: Activity, status: 'success', text: '127/82 mmHg', detail: 'Medido a las 8:30 AM', device: 'Omron BP Monitor' },
    { id: 'glucose', name: 'Glucosa', icon: Droplets, status: 'warn', text: '6.8 mmol/L', detail: 'Algo elevado post-desayuno', device: 'Contour Next' },
    { id: 'activity', name: 'Actividad', icon: Footprints, status: 'success', text: '4,102 pasos', detail: 'Meta diaria: 3,000', device: 'Bastón Inteligente' },
    { id: 'sleep', name: 'Sueño', icon: Moon, status: 'success', text: '7h 20min', detail: '85% calidad de sueño', device: 'Withings Sleep' },
    { id: 'nutrition', name: 'Nutrición', icon: Utensils, status: 'danger', text: 'Baja hidratación', detail: 'Solo 0.8L hoy', device: 'Philips Hue Sync' },
  ],
  weeklySummary: {
    period: "6 Abr - 12 Abr",
    medicationAdherence: [
      { day: 'Lun', percentage: 100 },
      { day: 'Mar', percentage: 100 },
      { day: 'Mié', percentage: 66 },
      { day: 'Jue', percentage: 100 },
      { day: 'Vie', percentage: 100 },
      { day: 'Sáb', percentage: 100 },
      { day: 'Dom', percentage: 100 },
    ],
    stats: {
      avgSleep: "7.2h",
      daysOut: 4,
      bpReadings: 14,
      glucoseTrend: "estable"
    },
    narrative: "Manuel tuvo una gran semana: 6 de 7 medicaciones a tiempo, salió 4 días."
  },
  alerts: [
    { id: 1, severity: 'HIGH', title: 'Baja ingesta de líquidos', timestamp: 'Hace 2 horas', resolved: false },
    { id: 2, severity: 'MEDIUM', title: 'Dosis almuerzo omitida', timestamp: 'Ayer', resolved: true },
    { id: 3, severity: 'LOW', title: 'Interrupción del sueño', timestamp: 'Hace 2 días', resolved: true },
  ],
  devices: [
    { 
      name: 'Bastón Inteligente', 
      status: 'connected',
      model: 'Prototipo Físico ESP32 (v2.1)',
      function: 'Asistencia en detección de obstáculos y monitoreo de caídas. Incluye dos botones físicos: Pausar (Pause) y Posponer (Snooze). Detecta movimiento mediante acelerómetro/giroscopio MPU6050. Proporciona retroalimentación háptica (vibración) y sonora.',
      connectivity: 'WiFi de doble banda (ESP32-WROOM-32) + respaldo BLE 4.2 para sincronización directa con el teléfono.',
      battery: 'Li-ion 18650 2600mAh — 5–7 días por carga. Puerto de carga USB-C.',
      sensors: 'Ultrasonido (cobertura 60°), acelerómetro de 6 ejes, mango con tacto capacitivo.',
      notifications: 'Botón de pausa para alertas no críticas; botón de posponer (15 min); pulsación larga activa el contacto de emergencia.'
    },
    { 
      name: 'MedMinder', 
      status: 'connected',
      model: 'Dispensador Inteligente Maya',
      function: 'Gestión automatizada de medicación. Cuenta con 28 compartimentos con sistema de bloqueo de doble canal. Libera dosis con señales sonoras y visuales.',
      connectivity: 'Módem celular integrado + respaldo WiFi 802.11 b/g/n.',
      safety: 'Alarma sonora + compartimento parpadeante. Solo desbloquea la dosis programada; las demás permanecen seguras.',
      refill: 'Integrado con red de farmacias para envíos mensuales de bandejas precargadas.',
      notifications: 'SMS/Push al cuidador si se omite tras 30 min; reorden automática cuando quedan 5 días.'
    },
    { 
      name: 'Withings Sleep', 
      status: 'connected',
      model: 'Alfombrilla Analizadora de Sueño',
      function: 'Alfombrilla de monitoreo de sueño de grado médico. Rastrea ciclos de sueño (Profundo, Ligero, REM), frecuencia cardíaca y frecuencia respiratoria.',
      clinical: 'Clínicamente validado para la detección de apnea del sueño y monitoreo de ronquidos.',
      form_factor: 'Almohadilla de sensor neumático delgada debajo del colchón (aprox. 637mm x 190mm).',
      connectivity: 'Sincronización WiFi automática después de cada sesión de sueño. Bluetooth 4.0 para configuración.',
      compatibility: 'Funciona con colchones de 10cm a 38cm de grosor; soporta resortes, espuma y látex.',
      notifications: 'Informe de tendencias matutinas; alerta a Laura por caídas en la recuperación o ausencia a medianoche.'
    },
    { 
      name: 'Omron BP', 
      status: 'connected',
      model: 'Evolv Inalámbrico (BP7000)',
      function: 'Monitor de presión arterial integrado y envolvente. Diseño de una sola pieza, sin tubos, para portabilidad y precisión.',
      cuff_tech: 'Manguito Intelli Wrap (precisión 360°) se adapta a brazos de 22cm a 42cm.',
      connectivity: 'Bluetooth Low Energy (BLE) sincronización directa al hub telefónico.',
      storage: 'Memoria interna para hasta 100 lecturas; carga automática al estar en rango.',
      validation: 'Clínicamente validado; especializado para personas mayores e hipertensión en el embarazo.',
      notifications: 'Lecturas sistólicas/diastólicas fuera de rango; detección de latidos irregulares.'
    },
    { 
      name: 'Contour Glucose', 
      status: 'connected',
      model: 'Contour Next One',
      function: 'Sistema inteligente de monitoreo de glucosa en sangre. Tecnología de tiras reactivas de alta precisión con muestreo de segunda oportunidad.',
      smart_light: 'Retroalimentación instantánea mediante luz codificada por colores: Verde (En objetivo), Ámbar (Alto), Rojo (Bajo).',
      sampling: 'El muestreo de segunda oportunidad permite aplicar más sangre si la primera gota fue insuficiente.',
      connectivity: 'Sincronización Bluetooth activa al hub del smartphone; registro automático de datos y tendencias.',
      accuracy: 'Supera los estándares de precisión ISO 15197:2013.',
      notifications: 'Push inmediato para picos críticos (>10 mmol/L) o mínimos (<3.9 mmol/L).'
    },
    { 
      name: 'Philips Hue', 
      status: 'connected',
      model: 'White & Color Ambiance',
      function: 'Sistema de iluminación dinámica para soporte circadiano. Programado para simulaciones de atardecer/amanecer.',
      connectivity: 'Conectado vía Zigbee al Hue Bridge (puerta de enlace WiFi 802.11 b/g/n) al servidor IFTTT.',
      hardware: '3 bombillas A19 de 800 lúmenes + 1 Hue Bridge.',
      automation: 'Totalmente pasivo; iluminación de suelo de bajo nivel activada por movimiento para seguridad nocturna.',
      notifications: 'Laura informada si el sensor de movimiento del baño detecta actividad nocturna atípica.'
    },
    { 
      name: 'Door Sensor', 
      status: 'offline',
      model: 'Sensor de Contacto Cinético',
      function: 'Sensor de contacto para seguridad perimetral y seguimiento de actividad. Registra marcas de tiempo de entrada/salida.',
      connectivity: 'Zigbee 3.0 de ultra bajo consumo; 2 años de duración de batería con pila CR2032.',
      mounting: 'Montaje adhesivo no invasivo en la puerta de entrada principal.',
      integration: 'Se alimenta al panel de actividad para confirmar excursiones o entregas.',
      notifications: 'Alerta de "Sin Salida" en días sociales; alerta de "Salida Atípica" durante la noche.'
    },
  ]
};
