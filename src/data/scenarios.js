import { Pill, Activity, Droplets, Footprints, Moon, Utensils } from 'lucide-react';
import { patientData } from './patientData';

// Spanish translations for indicators
const indicatorNames = {
  meds: 'Medicación',
  bp: 'Presión Arterial',
  glucose: 'Glucosa',
  activity: 'Actividad',
  sleep: 'Sueño',
  nutrition: 'Nutrición'
};

const baseIndicators = patientData.indicators.map(ind => ({
  ...ind,
  name: indicatorNames[ind.id] || ind.name
}));

const LAYERS = {
  medical: {
    name: "Medical Cape",
    desc: "Gestiona la salud esencial mediante dispositivos conectados que apoyan la toma de medicamentos y monitorean signos vitales.",
    devices: "MedMinder · TimerCap · Omron · Contour"
  },
  contextual: {
    name: "Contextual Detection",
    desc: "Usa sensores y el bastón inteligente para entender comportamientos diarios (movimiento, sueño y presencia).",
    devices: "Withings Sleep · Smart Cane · Arlo Doorbell"
  },
  nutrition: {
    name: "Nutrition",
    desc: "Combina entrega de comida, compra de víveres y recetas adaptadas para promover hábitos saludables.",
    devices: "Mom's Meals · Market"
  },
  environment: {
    name: "Smart Environment",
    desc: "Aprovecha dispositivos conectados como iluminación y asistentes de voz para dar forma a las rutinas diarias.",
    devices: "Philips Hue · Alexa · Adaptive Routines"
  },
  notifications: {
    name: "Notifications",
    desc: "Integra todos los componentes mediante herramientas de automatización y comunicación.",
    devices: "IFTTT · WhatsApp · Laura's Dashboard"
  }
};

export const ALL_SCENARIOS = [
  {
    ...patientData,
    _scenarioLabel: "All Good",
    _layerId: "environment",
    _layer: LAYERS.environment,
    _narrativeText: "Manuel está teniendo una mañana maravillosa. Tomó sus medicamentos a tiempo y ya ha alcanzado la mitad de su meta de pasos. La casa está tranquila y sus signos vitales son estables.",
    indicators: baseIndicators.map(ind => {
      if (ind.id === 'meds') return { ...ind, status: 'success', text: '3/3 tomadas', detail: 'Todo a tiempo' };
      if (ind.id === 'bp') return { ...ind, status: 'success', text: '120/80 mmHg', detail: 'Rango ideal' };
      if (ind.id === 'glucose') return { ...ind, status: 'success', text: '5.4 mmol/L', detail: 'Estable' };
      if (ind.id === 'activity') return { ...ind, status: 'success', text: '6,230 pasos', detail: 'Meta superada' };
      if (ind.id === 'sleep') return { ...ind, status: 'success', text: '8h 15min', detail: 'Sueño reparador' };
      if (ind.id === 'nutrition') return { ...ind, status: 'success', text: 'Hidratado', detail: '2.1L hoy' };
      return { ...ind, status: 'success' };
    }),
    weeklySummary: {
      period: "13 Abr - 19 Abr",
      medicationAdherence: Array(7).fill(0).map((_, i) => ({ day: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'][i], percentage: 100 })),
      stats: { avgSleep: "7.5h", daysOut: 6, bpReadings: 14, glucoseTrend: "stable" },
      narrative: "Una semana perfecta para Manuel. Se ha mantenido activo y ha cumplido con todo su tratamiento médico sin retrasos."
    },
    alerts: []
  },
  {
    ...patientData,
    _scenarioLabel: "Missed Meds L1",
    _layerId: "medical",
    _layer: LAYERS.medical,
    _narrativeText: "El dispensador MedMinder parpadea, pero Manuel no responde. El sistema ha enviado una vibración a su bastón. Manuel puede usar el botón 'Posponer' en el mango para avisar que lo tomará en 15 minutos.",
    indicators: baseIndicators.map(ind => {
      if (ind.id === 'meds') return { ...ind, status: 'warn', text: 'Dosis pendiente', detail: 'Recordatorio enviado' };
      if (ind.id === 'bp') return { ...ind, status: 'success', text: '125/82 mmHg', detail: 'Normal' };
      if (ind.id === 'glucose') return { ...ind, status: 'success', text: '6.1 mmol/L', detail: 'Estable' };
      if (ind.id === 'activity') return { ...ind, status: 'success', text: '2,105 pasos', detail: 'En progreso' };
      if (ind.id === 'sleep') return { ...ind, status: 'success', text: '7h 10min', detail: 'Normal' };
      if (ind.id === 'nutrition') return { ...ind, status: 'success', text: 'Hidratado', detail: '1.5L hoy' };
      return { ...ind, status: 'success' };
    }),
    weeklySummary: {
      period: "13 Abr - 19 Abr",
      medicationAdherence: [100, 100, 100, 66, 100, 100, 100].map((p, i) => ({ day: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'][i], percentage: p })),
      stats: { avgSleep: "7.2h", daysOut: 4, bpReadings: 12, glucoseTrend: "stable" },
      narrative: "Manuel tuvo un pequeño descuido el jueves, pero el sistema logró recordárselo a tiempo."
    },
    alerts: [
      { id: 101, severity: 'MEDIUM', title: 'Recordatorio enviado al bastón', timestamp: 'Hace 5 min', resolved: false }
    ]
  },
  {
    ...patientData,
    _scenarioLabel: "Missed Meds L2",
    _layerId: "contextual",
    _layer: LAYERS.contextual,
    _narrativeText: "Han pasado 15 minutos. Manuel está en el jardín y parece haber ignorado la vibración. No pulsó 'Pausar' ni 'Posponer'. El sistema está aumentando la intensidad de la alerta visual en casa.",
    indicators: baseIndicators.map(ind => {
      if (ind.id === 'meds') return { ...ind, status: 'warn', text: '1 dosis omitida', detail: 'Escalando alerta' };
      if (ind.id === 'bp') return { ...ind, status: 'success', text: '130/85 mmHg', detail: 'Leve aumento' };
      if (ind.id === 'glucose') return { ...ind, status: 'warn', text: '7.2 mmol/L', detail: 'Elevado' };
      if (ind.id === 'activity') return { ...ind, status: 'success', text: '2,450 pasos', detail: 'Normal' };
      if (ind.id === 'sleep') return { ...ind, status: 'success', text: '6h 45min', detail: 'Normal' };
      if (ind.id === 'nutrition') return { ...ind, status: 'success', text: 'Hidratado', detail: '1.4L hoy' };
      return { ...ind, status: 'success' };
    }),
    weeklySummary: {
      period: "13 Abr - 19 Abr",
      medicationAdherence: [100, 100, 100, 33, 100, 100, 100].map((p, i) => ({ day: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'][i], percentage: p })),
      stats: { avgSleep: "7.0h", daysOut: 3, bpReadings: 10, glucoseTrend: "stable" },
      narrative: "Hoy se ha detectado una demora inusual en la toma de medicamentos. El sistema está en seguimiento activo."
    },
    alerts: [
      { id: 102, severity: 'MEDIUM', title: 'Dosis omitida persistente', timestamp: 'Hace 15 min', resolved: false }
    ]
  },
  {
    ...patientData,
    _scenarioLabel: "Missed Meds L3",
    _layerId: "notifications",
    _layer: LAYERS.notifications,
    _narrativeText: "La ventana para la medicación se ha cerrado. Manuel aún no ha tomado su dosis. Se te ha enviado una alerta crítica, Laura, para que contactes con él y verifiques que se encuentra bien.",
    indicators: baseIndicators.map(ind => {
      if (ind.id === 'meds') return { ...ind, status: 'danger', text: 'CRÍTICO: Perdida', detail: 'Laura notificada' };
      if (ind.id === 'bp') return { ...ind, status: 'warn', text: '145/95 mmHg', detail: 'Hipertensión detectada' };
      if (ind.id === 'glucose') return { ...ind, status: 'danger', text: '9.4 mmol/L', detail: 'Pico crítico' };
      if (ind.id === 'activity') return { ...ind, status: 'success', text: '1,102 pasos', detail: 'Bajo' };
      if (ind.id === 'sleep') return { ...ind, status: 'warn', text: '4h 20min', detail: 'Mala calidad' };
      if (ind.id === 'nutrition') return { ...ind, status: 'warn', text: 'Baja', detail: '0.9L hoy' };
      return { ...ind, status: 'success' };
    }),
    weeklySummary: {
      period: "13 Abr - 19 Abr",
      medicationAdherence: [100, 100, 100, 0, 100, 100, 100].map((p, i) => ({ day: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'][i], percentage: p })),
      stats: { avgSleep: "6.8h", daysOut: 2, bpReadings: 8, glucoseTrend: "unstable" },
      narrative: "Día crítico: Se ha perdido una dosis completa. Es vital retomar el horario normal mañana."
    },
    alerts: [
      { id: 103, severity: 'HIGH', title: 'Escalación de Medicación', timestamp: 'Ahora mismo', resolved: false }
    ]
  },
  {
    ...patientData,
    _scenarioLabel: "Sedentary Day",
    _layerId: "contextual",
    _layer: LAYERS.contextual,
    _narrativeText: "Manuel ha estado muy quieto hoy. No salió a su caminata matutina habitual y su calidad de sueño fue baja anoche. ¿Quizás una llamada rápida podría animarle un poco?",
    indicators: baseIndicators.map(ind => {
      if (ind.id === 'meds') return { ...ind, status: 'success', text: '3/3 tomadas', detail: 'Normal' };
      if (ind.id === 'bp') return { ...ind, status: 'success', text: '122/80 mmHg', detail: 'Normal' };
      if (ind.id === 'glucose') return { ...ind, status: 'success', text: '5.8 mmol/L', detail: 'Normal' };
      if (ind.id === 'activity') return { ...ind, status: 'warn', text: '850 pasos', detail: 'Sedentario' };
      if (ind.id === 'sleep') return { ...ind, status: 'warn', text: '5h 10min', detail: 'Interrumpido' };
      if (ind.id === 'nutrition') return { ...ind, status: 'warn', text: 'Baja', detail: '0.8L hoy' };
      return { ...ind, status: 'success' };
    }),
    weeklySummary: {
      period: "13 Abr - 19 Abr",
      medicationAdherence: Array(7).fill(100).map((p, i) => ({ day: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'][i], percentage: p })),
      stats: { avgSleep: "5.5h", daysOut: 1, bpReadings: 14, glucoseTrend: "stable" },
      narrative: "Esta semana se nota una falta de actividad física significativa. Se recomienda motivar a Manuel a salir."
    },
    alerts: [
      { id: 104, severity: 'MEDIUM', title: 'Bajo nivel de actividad', timestamp: 'Hace 3 horas', resolved: false }
    ]
  },
  {
    ...patientData,
    _scenarioLabel: "Emergency",
    _layerId: "notifications",
    _layer: LAYERS.notifications,
    _narrativeText: "Manuel ha presionado el botón de emergencia en su bastón inteligente. Se encuentra en el pasillo y necesita asistencia inmediata. Por favor, contacta con emergencias.",
    indicators: baseIndicators.map(ind => {
      if (ind.id === 'activity') return { ...ind, status: 'danger', text: 'FALLA DETECTADA', detail: 'Botón de pánico' };
      if (ind.id === 'bp') return { ...ind, status: 'danger', text: '160/105 mmHg', detail: 'CRÍTICO' };
      if (ind.id === 'meds') return { ...ind, status: 'success', text: '3/3 tomadas', detail: 'Normal' };
      if (ind.id === 'glucose') return { ...ind, status: 'success', text: '6.2 mmol/L', detail: 'Normal' };
      if (ind.id === 'sleep') return { ...ind, status: 'success', text: '7h 20min', detail: 'Normal' };
      if (ind.id === 'nutrition') return { ...ind, status: 'success', text: 'Normal', detail: '2.0L hoy' };
      return { ...ind, status: 'success' };
    }),
    weeklySummary: {
      period: "13 Abr - 19 Abr",
      medicationAdherence: Array(7).fill(100).map((p, i) => ({ day: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'][i], percentage: p })),
      stats: { avgSleep: "7.1h", daysOut: 4, bpReadings: 6, glucoseTrend: "stable" },
      narrative: "Incidente reportado hoy. El historial semanal era estable hasta el momento de la alerta."
    },
    alerts: [
      { id: 105, severity: 'HIGH', title: 'Señal de emergencia del bastón', timestamp: 'Hace 1 min', resolved: false }
    ]
  },
  {
    ...patientData,
    _scenarioLabel: "Low Supply",
    _layerId: "nutrition",
    _layer: LAYERS.nutrition,
    _narrativeText: "El sistema ha detectado que la medicación para el corazón de Manuel se está agotando. Solo quedan 5 días de dosis. Ya se ha tramitado el pedido de renovación en la farmacia.",
    indicators: baseIndicators.map(ind => {
      if (ind.id === 'meds') return { ...ind, status: 'warn', text: 'Suministro bajo', detail: 'Quedan 5 días' };
      if (ind.id === 'bp') return { ...ind, status: 'success', text: '124/82 mmHg', detail: 'Normal' };
      if (ind.id === 'glucose') return { ...ind, status: 'success', text: '6.0 mmol/L', detail: 'Normal' };
      if (ind.id === 'activity') return { ...ind, status: 'success', text: '4,500 pasos', detail: 'Normal' };
      if (ind.id === 'sleep') return { ...ind, status: 'success', text: '7h 30min', detail: 'Normal' };
      if (ind.id === 'nutrition') return { ...ind, status: 'success', text: 'Normal', detail: '1.8L hoy' };
      return { ...ind, status: 'success' };
    }),
    weeklySummary: {
      period: "13 Abr - 19 Abr",
      medicationAdherence: Array(7).fill(100).map((p, i) => ({ day: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'][i], percentage: p })),
      stats: { avgSleep: "7.4h", daysOut: 5, bpReadings: 14, glucoseTrend: "stable" },
      narrative: "Todo bajo control, pero recuerda recoger el nuevo paquete de medicamentos este viernes."
    },
    alerts: [
      { id: 106, severity: 'MEDIUM', title: 'Renovación de receta necesaria', timestamp: 'Hoy', resolved: false }
    ]
  }
];
