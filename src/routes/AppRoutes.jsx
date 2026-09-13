<<<<<<< HEAD
import React, { lazy, Suspense } from "react";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import Loader from "../components/common/Loader";


// =====================
// PUBLIC PAGES
// =====================

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));



// =====================
// AI / OPERATIONS
// =====================

const WasteManagement = lazy(
  () => import("../pages/WasteManagement")
);


const Marketplace = lazy(
  () => import("../pages/Marketplace")
);


const Reports = lazy(
  () => import("../pages/Reports")
);


const Profile = lazy(
  () => import("../pages/Profile")
);



// =====================
// DASHBOARDS
// =====================

const AdminDashboard = lazy(
  () => import("../pages/dashboards/AdminDashboard")
);


const HotelDashboard = lazy(
  () => import("../pages/dashboards/HotelDashboard")
);


const RestaurantDashboard = lazy(
  () => import("../pages/dashboards/RestaurantDashboard")
);


const VendorDashboard = lazy(
  () => import("../pages/dashboards/VendorDashboard")
);


const FarmerDashboard = lazy(
  () => import("../pages/dashboards/FarmerDashboard")
);


const DeliveryDashboard = lazy(
  () => import("../pages/dashboards/DeliveryDashboard")
);



// =====================
// ERROR PAGE
// =====================

const NotFound = lazy(
  () => import("../pages/NotFound")
);




// =====================
// ROUTES
// =====================

const AppRoutes = () => {


  return (

    <Suspense fallback={<Loader />}>

      <Routes>


        {/* PUBLIC ROUTES */}


        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/about"
          element={<About />}
        />


        <Route
          path="/contact"
          element={<Contact />}
        />


        <Route
          path="/login"
          element={<Login />}
        />


        <Route
          path="/register"
          element={<Register />}
        />




        {/* AI ROUTE */}


        <Route
          path="/ai-detection"
          element={<WasteManagement />}
        />





        {/* PROTECTED ROUTES */}


        <Route element={<ProtectedRoute />}>


          <Route
            path="/waste-management"
            element={<WasteManagement />}
          />


          <Route
            path="/marketplace"
            element={<Marketplace />}
          />


          <Route
            path="/reports"
            element={<Reports />}
          />


          <Route
            path="/profile"
            element={<Profile />}
          />




          {/* DASHBOARDS */}


          <Route
            path="/dashboard/admin"
            element={<AdminDashboard />}
          />


          <Route
            path="/dashboard/hotel"
            element={<HotelDashboard />}
          />


          <Route
            path="/dashboard/restaurant"
            element={<RestaurantDashboard />}
          />


          <Route
            path="/dashboard/vendor"
            element={<VendorDashboard />}
          />


          <Route
            path="/dashboard/farmer"
            element={<FarmerDashboard />}
          />


          <Route
            path="/dashboard/delivery"
            element={<DeliveryDashboard />}
          />


        </Route>





        {/* 404 */}


        <Route
          path="/404"
          element={<NotFound />}
        />


        <Route
          path="*"
          element={
            <Navigate
              to="/404"
              replace
            />
          }
        />


      </Routes>


    </Suspense>

  );

};


export default AppRoutes;
=======
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
>>>>>>> 0795af187bcd4eea9fc84bc410602ad457b1ff2b
