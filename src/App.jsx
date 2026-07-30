import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import HotelDashboard from './pages/hotel/HotelDashboard';
import RestaurantDashboard from './pages/restaurant/RestaurantDashboard';
import VendorDashboard from './pages/vendor/VendorDashboard';
import FarmerDashboard from './pages/farmer/FarmerDashboard';
import DeliveryDashboard from './pages/delivery/DeliveryDashboard';
import Presentation from './pages/Presentation';
import './App.css';

// Scroll to top helper on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/login" element={<Login />} />
        
        {/* Role Dashboards */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/hotel" element={<HotelDashboard />} />
        <Route path="/restaurant" element={<RestaurantDashboard />} />
        <Route path="/vendor" element={<VendorDashboard />} />
        <Route path="/farmer" element={<FarmerDashboard />} />
        <Route path="/delivery" element={<DeliveryDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
