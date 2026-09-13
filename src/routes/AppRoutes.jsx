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