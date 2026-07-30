import React, { useState } from 'react';
import { Sprout, ShoppingBag, ArrowLeft, LogOut, Check, ShoppingCart, Filter, Info } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { getStoredUser, logoutUser } from '../../services/auth';
import { mockDataStore, apiService } from '../../services/api';

const FarmerDashboard = () => {
  const user = getStoredUser() || { name: 'David Miller Farms', role: 'farmer' };
  const navigate = useNavigate();

  const [selectedCrop, setSelectedCrop] = useState('All');
  const [cartMsg, setCartMsg] = useState('');
  const [orders, setOrders] = useState([
    { id: 'ORD-8820', item: 'RENOVA Bio-NPK Max', quantity: '500 kg', total: '$925.00', status: 'Dispatched to Farm', date: 'Jul 29, 2026' },
    { id: 'ORD-7612', item: 'Eco-Humus Vermicompost', quantity: '1,000 kg', total: '$1,200.00', status: 'Delivered', date: 'Jul 15, 2026' }
  ]);

  const cropsList = ['All', 'Tomatoes & Vegetables', 'Wheat & Grains', 'Paddy & Rice', 'Coffee & Tea', 'Cotton & Cash Crops'];

  const fertilizers = mockDataStore.fertilizers;

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  const handleOrderFertilizer = async (item) => {
    const res = await apiService.placeFertilizerOrder({ item: item.name, quantity: 250 });
    if (res.success) {
      setCartMsg(`Successfully ordered 250 kg of ${item.name}! Order ID: ${res.orderId}`);
      setOrders([
        { id: res.orderId, item: item.name, quantity: '250 kg', total: `$${(250 * item.pricePerKg).toFixed(2)}`, status: 'Scheduled for Delivery', date: 'Today' },
        ...orders
      ]);
      setTimeout(() => setCartMsg(''), 4000);
    }
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
            <Sprout size={22} color="#22c55e" />
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Farmer Sustainable Agriculture Hub</h2>
          </div>
        </div>

        <button onClick={handleLogout} className="btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
          <LogOut size={14} /> Exit
        </button>
      </header>

      <div className="container" style={{ padding: '2rem 1.5rem' }}>
        {/* Header Profile */}
        <div className="glass-panel" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge badge-organic" style={{ marginBottom: '0.4rem' }}>Regenerative Agri Member</span>
              <h1 style={{ fontSize: '1.8rem', color: '#fff' }}>{user.name}</h1>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>45 Hectares Organic Farmland • Soil Health Rating: 94/100</p>
            </div>
            <div style={{ background: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22c55e', padding: '0.8rem 1.5rem', borderRadius: '12px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Subsidized Agri Credit</span>
              <h3 style={{ color: '#4ade80', fontSize: '1.4rem' }}>$2,450.00</h3>
            </div>
          </div>
        </div>

        {cartMsg && (
          <div style={{
            background: 'rgba(34, 197, 94, 0.2)',
            border: '1px solid #22c55e',
            color: '#4ade80',
            padding: '1rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem'
          }}>
            <Check size={20} />
            <span>{cartMsg}</span>
          </div>
        )}

        {/* Crop Recommendation Engine Filter */}
        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
            <Filter size={16} color="#22c55e" /> Select Your Crop Type for Bio-Fertilizer Recommendation:
          </label>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {cropsList.map((crop) => (
              <button
                key={crop}
                onClick={() => setSelectedCrop(crop)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '10px',
                  border: selectedCrop === crop ? '1px solid #22c55e' : '1px solid rgba(255,255,255,0.1)',
                  background: selectedCrop === crop ? 'rgba(34, 197, 94, 0.2)' : 'rgba(10, 18, 13, 0.6)',
                  color: selectedCrop === crop ? '#4ade80' : 'var(--text-main)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  transition: 'all 0.2s'
                }}
              >
                {crop}
              </button>
            ))}
          </div>
        </div>

        {/* Bio-Fertilizer Catalog */}
        <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '1.2rem' }}>Available Renovated Bio-Fertilizers</h3>
        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          {fertilizers.map((fert) => (
            <div key={fert.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <img src={fert.image} alt={fert.name} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1rem' }} />
                <span className="badge badge-organic" style={{ marginBottom: '0.5rem' }}>{fert.category}</span>
                <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.3rem' }}>{fert.name}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.5' }}>{fert.description}</p>
                
                {/* N-P-K Breakdown */}
                <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1rem', fontSize: '0.78rem' }}>
                  <span style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#4ade80', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>N: {fert.nitrogen}</span>
                  <span style={{ background: 'rgba(20, 184, 166, 0.15)', color: '#2dd4bf', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>P: {fert.phosphorus}</span>
                  <span style={{ background: 'rgba(234, 179, 8, 0.15)', color: '#fde047', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>K: {fert.potassium}</span>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>${fert.pricePerKg.toFixed(2)} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/ kg</span></span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>In Stock: {(fert.stockKg / 1000).toFixed(1)} T</span>
                </div>

                <button onClick={() => handleOrderFertilizer(fert)} className="btn-primary" style={{ width: '100%' }}>
                  <ShoppingCart size={16} /> Order 250 kg Batch
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Farmer Orders History */}
        <div className="glass-panel">
          <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '1.2rem' }}>My Fertilizer Orders</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Order ID</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Fertilizer Type</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Quantity</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Total Cost</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Delivery Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', fontWeight: 600, color: '#4ade80' }}>{o.id}</td>
                    <td style={{ padding: '1rem' }}>{o.item}</td>
                    <td style={{ padding: '1rem', fontWeight: 600 }}>{o.quantity}</td>
                    <td style={{ padding: '1rem' }}>{o.total}</td>
                    <td style={{ padding: '1rem' }}>
                      <span className="badge badge-organic">{o.status}</span>
                    </td>
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

export default FarmerDashboard;
