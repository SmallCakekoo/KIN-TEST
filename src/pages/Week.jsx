import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CheckCircle } from 'lucide-react';
import StatCard from '../components/StatCard';
import styles from './Week.module.css';

const Week = ({ data }) => (
  <div className={styles.container}>
    <h3 className={styles.sectionTitle}>
      Esta semana ({data.weeklySummary.period})
    </h3>
    
    <div className={styles.chartCard}>
      <div className={styles.chartHeader}>Adherencia a la medicación</div>
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.weeklySummary.medicationAdherence}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--text-light)' }} />
            <YAxis hide domain={[0, 100]} />
            <Tooltip 
              cursor={{ fill: 'var(--selva-light)', opacity: 0.4 }} 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: 'var(--shadow-md)' }} 
            />
            <Bar dataKey="percentage" radius={[4, 4, 0, 0]} barSize={24}>
              {data.weeklySummary.medicationAdherence.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.percentage === 100 ? 'var(--selva)' : 'var(--perg)'} 
                  stroke={entry.percentage === 100 ? 'none' : 'var(--border)'} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className={styles.statsGrid}>
      <StatCard label="Sueño prom." value={data.weeklySummary.stats.avgSleep} />
      <StatCard label="Días fuera" value={data.weeklySummary.stats.daysOut} />
      <StatCard label="P. Arterial" value={data.weeklySummary.stats.bpReadings} />
      <StatCard label="Glucosa" value={data.weeklySummary.stats.glucoseTrend === 'stable' ? 'ESTABLE' : 'INESTABLE'} trend={data.weeklySummary.stats.glucoseTrend} />
    </div>

    <div className={styles.divider} />

    <div className={styles.insightCard}>
      <div className={styles.insightHeader}>
        <div className={styles.insightIcon}>
          <CheckCircle size={14} color="white" />
        </div>
        <span className={styles.insightTitle}>Resumen semanal</span>
      </div>
      <p className={styles.insightText}>
        {data.weeklySummary.narrative}
      </p>
    </div>
  </div>
);

export default Week;
