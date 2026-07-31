import React, { useState, useEffect } from 'react';
import { Home } from '../pages/Home';
import { AdminLogin } from '../pages/auth/AdminLogin';
import { HotelLogin } from '../pages/auth/HotelLogin';
import { RestaurantLogin } from '../pages/auth/RestaurantLogin';
import { VendorLogin } from '../pages/auth/VendorLogin';
import { FarmerLogin } from '../pages/auth/FarmerLogin';
import { DeliveryLogin } from '../pages/auth/DeliveryLogin';

import { AdminDashboard } from '../pages/dashboard/admin/Dashboard';
import { HotelDashboard } from '../pages/dashboard/hotel/Dashboard';
import { RestaurantDashboard } from '../pages/dashboard/restaurant/Dashboard';
import { VendorDashboard } from '../pages/dashboard/vendor/Dashboard';
import { FarmerDashboard } from '../pages/dashboard/farmer/Dashboard';
import { DeliveryDashboard } from '../pages/dashboard/delivery/Dashboard';

export const AppRoutes = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  switch (currentHash) {
    case '#/auth/admin':
      return <AdminLogin />;
    case '#/auth/hotel':
      return <HotelLogin />;
    case '#/auth/restaurant':
      return <RestaurantLogin />;
    case '#/auth/vendor':
      return <VendorLogin />;
    case '#/auth/farmer':
      return <FarmerLogin />;
    case '#/auth/delivery':
      return <DeliveryLogin />;

    case '#/admin-dashboard':
      return <AdminDashboard />;
    case '#/hotel-dashboard':
      return <HotelDashboard />;
    case '#/restaurant-dashboard':
      return <RestaurantDashboard />;
    case '#/vendor-dashboard':
      return <VendorDashboard />;
    case '#/farmer-dashboard':
      return <FarmerDashboard />;
    case '#/delivery-dashboard':
      return <DeliveryDashboard />;

    default:
      return <Home />;
  }
};
