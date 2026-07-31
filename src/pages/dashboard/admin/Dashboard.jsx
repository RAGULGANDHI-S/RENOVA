import React from 'react';
import { DashboardLayout } from '../../../layouts/DashboardLayout';

export const AdminDashboard = () => {
  return (
    <DashboardLayout title="Enterprise HQ Admin Console" role="admin">
      {/* Metric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '4px solid #10B981' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Active Smart Facilities</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', margin: '0.3rem 0' }}>1,842</div>
          <div style={{ fontSize: '0.8rem', color: '#34d399' }}>+12% this month</div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '4px solid #06B6D4' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Total Diversion Volume</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', margin: '0.3rem 0' }}>1.42M Tons</div>
          <div style={{ fontSize: '0.8rem', color: '#22d3ee' }}>99.4% landfill bypass</div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '4px solid #3B82F6' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Neural Vision Accuracy</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', margin: '0.3rem 0' }}>99.6%</div>
          <div style={{ fontSize: '0.8rem', color: '#60a5fa' }}>v4.2 Model Active</div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '4px solid #F59E0B' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Platform Commodity Revenue</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', margin: '0.3rem 0' }}>$48.2M</div>
          <div style={{ fontSize: '0.8rem', color: '#fbbf24' }}>+24% YoY Growth</div>
        </div>
      </div>

      {/* Main Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        
        {/* Activity Stream */}
        <div className="glass-card" style={{ padding: '1.8rem', borderRadius: '20px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '1.2rem' }}>
            Real-Time System Logs & Telemetry
          </h3>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              { time: '10:42 AM', node: 'Node #802 (Grand Haven)', event: 'Processed 450kg organic food waste -> Bioreactor #4', status: 'Optimal' },
              { time: '10:38 AM', node: 'Node #114 (Apex Recycling)', event: 'Vendor bid accepted for 12.5T PET clear flakes ($0.85/kg)', status: 'Verified' },
              { time: '10:15 AM', node: 'Fleet Dispatch #409', event: 'Route optimized: 6 hotel pick-ups completed (saved 14L diesel)', status: 'Dispatched' },
              { time: '09:50 AM', node: 'Node #305 (Verde Bistro)', event: '240kg Compost Credits credited to account balance', status: 'Settled' }
            ].map((log, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '1rem', borderRadius: '12px', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.78rem', marginBottom: '0.3rem' }}>
                  <span>{log.time} • {log.node}</span>
                  <span style={{ color: '#10B981', fontWeight: 600 }}>{log.status}</span>
                </div>
                <div style={{ color: '#fff' }}>{log.event}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Facility Status Table */}
        <div className="glass-card" style={{ padding: '1.8rem', borderRadius: '20px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '1.2rem' }}>
            Multi-Facility Operational Health
          </h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', color: '#64748b', textAlign: 'left' }}>
                <th style={{ padding: '0.6rem' }}>Facility Name</th>
                <th style={{ padding: '0.6rem' }}>Type</th>
                <th style={{ padding: '0.6rem' }}>Today (Tons)</th>
                <th style={{ padding: '0.6rem' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Marriott Resort HQ', type: 'Hotel', tons: '4.8T', status: 'Online' },
                { name: 'ITC Grand Garden', type: 'Hotel', tons: '6.2T', status: 'Online' },
                { name: 'Verde Gourmet Kitchen', type: 'Restaurant', tons: '1.2T', status: 'Online' },
                { name: 'SunValley Co-op', type: 'Agriculture', tons: '18.4T', status: 'Active Dispatch' }
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <td style={{ padding: '0.8rem 0.6rem', fontWeight: 600, color: '#fff' }}>{row.name}</td>
                  <td style={{ padding: '0.8rem 0.6rem', color: '#94a3b8' }}>{row.type}</td>
                  <td style={{ padding: '0.8rem 0.6rem', color: '#34d399', fontWeight: 700 }}>{row.tons}</td>
                  <td style={{ padding: '0.8rem 0.6rem', color: '#10B981', fontWeight: 600 }}>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </DashboardLayout>
  );
};
