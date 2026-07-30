import React, { useState } from 'react';
import { Truck, Navigation, CheckCircle2, ArrowLeft, LogOut, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { getStoredUser, logoutUser } from '../../services/auth';

const DeliveryDashboard = () => {
  const user = getStoredUser() || { name: 'EcoExpress Logistics Fleet', role: 'delivery' };
  const navigate = useNavigate();

  const [assignedRoutes, setAssignedRoutes] = useState([
    {
      id: 'RT-401',
      sourceName: 'Grand Eco Hotel',
      pickupAddress: '742 Evergreen Terrace, Bay Area',
      dropoffFacility: 'RENOVA Bioreactor Facility A',
      wasteType: 'Organic Kitchen Scraps',
      weightKg: 350,
      scheduledTime: '2:30 PM',
      status: 'Assigned'
    },
    {
      id: 'RT-402',
      sourceName: 'Agro Fresh Wholesale',
      pickupAddress: '45 Produce Way, Logistics Park',
      dropoffFacility: 'RENOVA Composting Yard B',
      wasteType: 'Spoiled Tomatoes & Produce',
      weightKg: 850,
      scheduledTime: '4:15 PM',
      status: 'In-Transit'
    }
  ]);

  const [completedDeliveries, setCompletedDeliveries] = useState([
    { id: 'RT-398', source: 'Green Leaf Bistro', weightKg: 120, time: '11:45 AM', distanceKm: '8.4 km', ecoBonus: '$25.00' },
    { id: 'RT-395', source: 'Central Fruit Market', weightKg: 1200, time: '09:15 AM', distanceKm: '14.2 km', ecoBonus: '$60.00' }
  ]);

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  const handleUpdateStatus = (routeId) => {
    setAssignedRoutes(assignedRoutes.map(r => {
      if (r.id === routeId) {
        let nextStatus = 'In-Transit';
        if (r.status === 'In-Transit') nextStatus = 'Delivered';
        if (nextStatus === 'Delivered') {
          setCompletedDeliveries([
            { id: r.id, source: r.sourceName, weightKg: r.weightKg, time: 'Just Now', distanceKm: '6.5 km', ecoBonus: '$35.00' },
            ...completedDeliveries
          ]);
        }
        return { ...r, status: nextStatus };
      }
      return r;
    }).filter(r => r.status !== 'Delivered'));
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: '#fff' }}>
      <header style={{
        background: 'rgba(10, 18, 13, 0.9)',
        borderBottom: '1px solid var(--border-color)',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', fontSize: '0.85rem' }}>
            <ArrowLeft size={16} /> Site
          </Link>
          <div style={{ height: '20px', width: '1px', background: 'rgba(255,255,255,0.1)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Truck size={22} color="#22c55e" />
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800 }}>EV Logistics Fleet Partner Portal</h2>
          </div>
        </div>

        <button onClick={handleLogout} className="btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
          <LogOut size={14} /> Exit
        </button>
      </header>

      <div className="container" style={{ padding: '2rem 1.5rem' }}>
        {/* Fleet Header */}
        <div className="glass-panel" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge badge-organic" style={{ marginBottom: '0.4rem' }}>Zero-Emission EV Fleet Unit</span>
              <h1 style={{ fontSize: '1.8rem', color: '#fff' }}>{user.name}</h1>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Vehicle Unit #EV-921 • Driver: Alex Rivers</p>
            </div>
            <div style={{ background: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22c55e', padding: '0.8rem 1.5rem', borderRadius: '12px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Today's Haul Earnings</span>
              <h3 style={{ color: '#4ade80', fontSize: '1.4rem' }}>$185.00</h3>
            </div>
          </div>
        </div>

        {/* Assigned Route Cards */}
        <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '1.2rem' }}>Assigned Waste Pickups & Route Tracking</h3>
        <div className="grid-2" style={{ marginBottom: '3rem' }}>
          {assignedRoutes.map((route) => (
            <div key={route.id} className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#4ade80', fontWeight: 700 }}>{route.id}</span>
                <span className={`badge ${route.status === 'In-Transit' ? 'badge-info' : 'badge-warning'}`}>
                  {route.status}
                </span>
              </div>

              <h4 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>{route.sourceName}</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={16} color="#f87171" /> Pickup: <strong style={{ color: '#fff' }}>{route.pickupAddress}</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Navigation size={16} color="#4ade80" /> Destination: <strong style={{ color: '#fff' }}>{route.dropoffFacility}</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={16} color="#fde047" /> Time: {route.scheduledTime} • Payload: {route.weightKg} kg
                </div>
              </div>

              <button
                onClick={() => handleUpdateStatus(route.id)}
                className="btn-primary"
                style={{ width: '100%' }}
              >
                {route.status === 'Assigned' ? 'Start GPS Navigation & Load Waste' : 'Confirm Delivery at Bioreactor'}
              </button>
            </div>
          ))}

          {assignedRoutes.length === 0 && (
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', gridColumn: 'span 2' }}>
              All assigned pickups for this shift have been successfully completed!
            </div>
          )}
        </div>

        {/* Completed Deliveries History */}
        <div className="glass-panel">
          <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '1.2rem' }}>Shift Delivery History</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Task ID</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Pickup Origin</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Hauled Weight</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Distance Covered</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Driver Bonus</th>
                </tr>
              </thead>
              <tbody>
                {completedDeliveries.map((d) => (
                  <tr key={d.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', fontWeight: 600, color: '#4ade80' }}>{d.id}</td>
                    <td style={{ padding: '1rem' }}>{d.source}</td>
                    <td style={{ padding: '1rem', fontWeight: 600 }}>{d.weightKg} kg</td>
                    <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{d.distanceKm}</td>
                    <td style={{ padding: '1rem', color: '#4ade80', fontWeight: 700 }}>{d.ecoBonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDashboard;
