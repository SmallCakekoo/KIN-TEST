import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CheckCircle } from 'lucide-react';
import StatCard from '../components/StatCard';
import styles from './Week.module.css';

const Week = ({ data }) => (
  <div className={styles.container}>
    <h3 className={styles.sectionTitle}>
      This week ({data.weeklySummary.period})
    </h3>
    
    <div className={styles.chartCard}>
      <div className={styles.chartHeader}>Medication Adherence</div>
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
      <StatCard label="Avg Sleep" value={data.weeklySummary.stats.avgSleep} />
      <StatCard label="Days Out" value={data.weeklySummary.stats.daysOut} />
      <StatCard label="BP Readings" value={data.weeklySummary.stats.bpReadings} />
      <StatCard label="Glucose" value={data.weeklySummary.stats.glucoseTrend.toUpperCase()} trend={data.weeklySummary.stats.glucoseTrend} />
    </div>

    <div className={styles.divider} />

    <div className={styles.insightCard}>
      <div className={styles.insightHeader}>
        <div className={styles.insightIcon}>
          <CheckCircle size={14} color="white" />
        </div>
        <span className={styles.insightTitle}>Weekly Insight</span>
      </div>
      <p className={styles.insightText}>
        {data.weeklySummary.narrative}
      </p>
    </div>
  </div>
);

export default Week;
