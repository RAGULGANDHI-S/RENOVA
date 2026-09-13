import React, { useMemo, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

import {
  Truck,
  MapPinned,
  Navigation,
  PackageCheck,
  Clock,
  CheckCircle2,
  AlertCircle,
  Calendar,
  TrendingUp,
  Sparkles,
  Bell,
  Route,
  Map,
  Activity,
  Fuel,
  UserCheck,
  ArrowRight,
} from "lucide-react";

export default function DeliveryDashboard() {
  /* ============================================================
      STATES
  ============================================================ */

  const [loading, setLoading] = useState(false);
  const [pickupStarted, setPickupStarted] = useState(false);

  /* ============================================================
      DELIVERY STATISTICS
  ============================================================ */

  const stats = [
    {
      title: "Assigned Pickups",
      value: "18",
      change: "+4 Today",
      color: "cyan",
      icon: <Truck className="w-6 h-6" />,
    },

    {
      title: "Completed",
      value: "12",
      change: "67%",
      color: "emerald",
      icon: <CheckCircle2 className="w-6 h-6" />,
    },

    {
      title: "Pending",
      value: "6",
      change: "In Progress",
      color: "amber",
      icon: <Clock className="w-6 h-6" />,
    },

    {
      title: "Distance Today",
      value: "82 km",
      change: "+15 km",
      color: "indigo",
      icon: <Navigation className="w-6 h-6" />,
    },
  ];

  /* ============================================================
      TODAY'S PICKUPS
  ============================================================ */

  const pickups = [
    {
      hotel: "Grand Hotel",
      location: "Anna Nagar",
      waste: "Organic Waste",
      weight: "145 kg",
      status: "Pending",
      time: "09:30 AM",
    },

    {
      hotel: "ABC Restaurant",
      location: "KK Nagar",
      waste: "Food Waste",
      weight: "92 kg",
      status: "On Route",
      time: "11:00 AM",
    },

    {
      hotel: "Green Residency",
      location: "Srirangam",
      waste: "Mixed Waste",
      weight: "180 kg",
      status: "Completed",
      time: "02:15 PM",
    },
  ];

  /* ============================================================
      DRIVER PERFORMANCE
  ============================================================ */

  const metrics = useMemo(
    () => [
      {
        label: "Pickup Accuracy",
        value: "98%",
      },

      {
        label: "Today's Earnings",
        value: "₹2,450",
      },

      {
        label: "Fuel Efficiency",
        value: "18 km/L",
      },

      {
        label: "Customer Rating",
        value: "4.9 / 5",
      },
    ],
    []
  );

  /* ============================================================
      START PICKUP
  ============================================================ */

  const handleStartPickup = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setPickupStarted(true);

      setTimeout(() => {
        setPickupStarted(false);
      }, 3500);
    }, 1500);
  };

  return (
    <DashboardLayout
      title="Delivery Partner Dashboard"
      subtitle="Track assigned pickups, delivery routes, collection history and logistics."
    >
      {/* =======================================================
          WELCOME SECTION
      ======================================================= */}

      <Card className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent"></div>

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-5">

              <Sparkles className="w-4 h-4" />

              Delivery Dashboard

            </div>

            <h1 className="text-4xl font-bold mb-3">

              Welcome back,

              <span className="text-cyan-400">
                {" "}
                Driver John
              </span>

            </h1>

            <p className="text-slate-400 max-w-2xl">

              You have

              <span className="text-white font-semibold">
                {" "}
                18 pickups
              </span>

              {" "}assigned today.

              Complete all routes on time to improve your delivery performance and earnings.

            </p>

          </div>

          <Button
            onClick={handleStartPickup}
            isLoading={loading}
          >

            <Truck className="w-4 h-4" />

            Start Pickup

          </Button>

        </div>

      </Card>

      {/* =======================================================
          KPI CARDS
      ======================================================= */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        {stats.map((item) => (

          <Card
            key={item.title}
            className="hover:border-cyan-500/40 transition-all"
          >

            <div className="flex justify-between items-start">

              <div>

                <p className="text-slate-400 text-sm">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-3">
                  {item.value}
                </h2>

                <div className="flex items-center gap-2 mt-4">

                  <TrendingUp className="w-4 h-4 text-cyan-400" />

                  <span className="text-xs text-cyan-400">

                    {item.change}

                  </span>

                </div>

              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400">

                {item.icon}

              </div>

            </div>

          </Card>

        ))}

      </div>
            {/* =======================================================
            ASSIGNED PICKUPS + LIVE ROUTE
      ======================================================= */}

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Assigned Pickup Requests */}

        <Card className="lg:col-span-2">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-xl font-bold">
                Assigned Pickup Requests
              </h2>

              <p className="text-sm text-slate-400">
                Today's assigned waste collection schedule
              </p>

            </div>

            <Button variant="outline">

              <Calendar className="w-4 h-4" />

              View Schedule

            </Button>

          </div>

          <div className="space-y-5">

            {pickups.map((item, index) => (

              <div
                key={index}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-all"
              >

                <div className="flex flex-col lg:flex-row lg:justify-between gap-6">

                  <div className="space-y-3">

                    <h3 className="text-lg font-semibold">

                      {item.hotel}

                    </h3>

                    <div className="flex items-center gap-2 text-slate-400">

                      <MapPinned className="w-4 h-4 text-cyan-400" />

                      {item.location}

                    </div>

                    <div className="flex items-center gap-2 text-slate-400">

                      <PackageCheck className="w-4 h-4 text-emerald-400" />

                      {item.waste}

                    </div>

                    <div className="text-sm">

                      Weight :
                      <span className="font-semibold text-white">

                        {" "}
                        {item.weight}

                      </span>

                    </div>

                  </div>

                  <div className="flex flex-col justify-between items-end">

                    <span
                      className={`px-4 py-2 rounded-full text-sm ${
                        item.status === "Completed"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : item.status === "On Route"
                          ? "bg-cyan-500/20 text-cyan-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >

                      {item.status}

                    </span>

                    <p className="text-slate-400 mt-4">

                      Pickup Time

                    </p>

                    <h4 className="font-semibold">

                      {item.time}

                    </h4>

                    <Button
                      className="mt-5"
                      variant="secondary"
                    >

                      <Navigation className="w-4 h-4" />

                      Navigate

                    </Button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </Card>

        {/* Live Route */}

        <Card>

          <div className="flex items-center justify-between mb-6">

            <h2 className="font-bold">

              Live Route

            </h2>

            <Route className="text-cyan-400" />

          </div>

          <div className="h-64 rounded-2xl bg-slate-900 border border-dashed border-cyan-500 flex flex-col justify-center items-center">

            <Map className="w-16 h-16 text-cyan-400 mb-4" />

            <h3 className="font-semibold">

              Google Maps

            </h3>

            <p className="text-sm text-slate-400 text-center mt-2 px-4">

              Integrate Google Maps API here to display
              live delivery vehicle tracking and optimized routes.

            </p>

          </div>

          <Button className="w-full mt-6">

            <Navigation className="w-4 h-4" />

            Open Navigation

          </Button>

        </Card>

      </div>

      {/* =======================================================
            DRIVER PERFORMANCE
      ======================================================= */}

      <div className="grid lg:grid-cols-2 gap-6">

        <Card>

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-bold">

              Driver Performance

            </h2>

            <UserCheck className="text-cyan-400" />

          </div>

          <div className="space-y-5">

            {metrics.map((item) => (

              <div
                key={item.label}
                className="flex justify-between border-b border-slate-800 pb-4"
              >

                <span className="text-slate-400">

                  {item.label}

                </span>

                <span className="font-semibold">

                  {item.value}

                </span>

              </div>

            ))}

          </div>

        </Card>

        <Card>

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-bold">

              Vehicle Status

            </h2>

            <Fuel className="text-cyan-400" />

          </div>

          <div className="space-y-5">

            <div>

              <div className="flex justify-between mb-2">

                <span>Fuel Level</span>

                <span>82%</span>

              </div>

              <div className="w-full bg-slate-800 rounded-full h-3">

                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full"
                  style={{ width: "82%" }}
                />

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Vehicle Health</span>

                <span>96%</span>

              </div>

              <div className="w-full bg-slate-800 rounded-full h-3">

                <div
                  className="bg-gradient-to-r from-emerald-500 to-green-500 h-3 rounded-full"
                  style={{ width: "96%" }}
                />

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Route Progress</span>

                <span>64%</span>

              </div>

              <div className="w-full bg-slate-800 rounded-full h-3">

                <div
                  className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-3 rounded-full"
                  style={{ width: "64%" }}
                />

              </div>

            </div>

            {pickupStarted && (

              <div className="mt-5 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">

                <p className="text-cyan-400 text-sm">

                  ✔ Pickup route started successfully.

                </p>

              </div>

            )}

          </div>

        </Card>

      </div>
            {/* =======================================================
              COLLECTION HISTORY + TODAY'S TIMELINE
      ======================================================= */}

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Collection History */}

        <Card className="lg:col-span-2">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-xl font-bold">
                Collection History
              </h2>

              <p className="text-sm text-slate-400">
                Recently completed pickup records
              </p>

            </div>

            <Button variant="outline">

              <Calendar className="w-4 h-4" />

              Export

            </Button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              <thead>

                <tr className="border-b border-slate-800">

                  <th className="text-left py-3">Date</th>
                  <th className="text-left py-3">Location</th>
                  <th className="text-left py-3">Weight</th>
                  <th className="text-left py-3">Status</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b border-slate-800 hover:bg-slate-900">

                  <td className="py-4">Today</td>

                  <td>Grand Hotel</td>

                  <td>145 kg</td>

                  <td>

                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400">

                      Delivered

                    </span>

                  </td>

                </tr>

                <tr className="border-b border-slate-800 hover:bg-slate-900">

                  <td className="py-4">Yesterday</td>

                  <td>ABC Restaurant</td>

                  <td>120 kg</td>

                  <td>

                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400">

                      Completed

                    </span>

                  </td>

                </tr>

                <tr className="border-b border-slate-800 hover:bg-slate-900">

                  <td className="py-4">Monday</td>

                  <td>Green Residency</td>

                  <td>175 kg</td>

                  <td>

                    <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400">

                      Scheduled

                    </span>

                  </td>

                </tr>

                <tr>

                  <td className="py-4">Sunday</td>

                  <td>Elite Hotel</td>

                  <td>200 kg</td>

                  <td>

                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400">

                      Delivered

                    </span>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </Card>

        {/* Today's Timeline */}

        <Card>

          <div className="flex items-center justify-between mb-6">

            <h2 className="font-bold">

              Today's Timeline

            </h2>

            <Clock className="text-cyan-400"/>

          </div>

          <div className="space-y-5">

            <div className="flex gap-4">

              <CheckCircle2 className="text-emerald-400"/>

              <div>

                <h4 className="font-semibold">

                  Pickup Started

                </h4>

                <p className="text-sm text-slate-400">

                  08:30 AM

                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <Truck className="text-cyan-400"/>

              <div>

                <h4 className="font-semibold">

                  En Route

                </h4>

                <p className="text-sm text-slate-400">

                  09:15 AM

                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <PackageCheck className="text-yellow-400"/>

              <div>

                <h4 className="font-semibold">

                  Waste Collected

                </h4>

                <p className="text-sm text-slate-400">

                  10:00 AM

                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <AlertCircle className="text-red-400"/>

              <div>

                <h4 className="font-semibold">

                  Next Pickup

                </h4>

                <p className="text-sm text-slate-400">

                  11:30 AM

                </p>

              </div>

            </div>

          </div>

        </Card>

      </div>

      {/* =======================================================
              QUICK ACTIONS
      ======================================================= */}

      <Card>

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-xl font-bold">

            Quick Actions

          </h2>

          <Sparkles className="text-cyan-400"/>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">

          <Button className="h-24 flex-col">

            <Truck className="w-7 h-7"/>

            Start Pickup

          </Button>

          <Button variant="secondary" className="h-24 flex-col">

            <Navigation className="w-7 h-7"/>

            Navigate

          </Button>

          <Button variant="outline" className="h-24 flex-col">

            <PackageCheck className="w-7 h-7"/>

            Complete Pickup

          </Button>

          <Button variant="outline" className="h-24 flex-col">

            <Bell className="w-7 h-7"/>

            Notifications

          </Button>

        </div>

      </Card>
            {/* =======================================================
              AI ROUTE RECOMMENDATIONS
      ======================================================= */}

      <Card>

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-xl font-bold">
            AI Route Recommendations
          </h2>

          <Sparkles className="text-cyan-400" />

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {[
            "Visit Grand Hotel first to avoid heavy traffic.",
            "ABC Restaurant has high priority organic waste.",
            "Use NH45 route to reduce travel time by 12 minutes.",
            "Vehicle fuel is sufficient for today's schedule.",
            "Complete morning pickups before 12 PM.",
            "Rain expected after 3 PM. Finish outdoor pickups early."
          ].map((item, index) => (

            <div
              key={index}
              className="flex gap-4 p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 transition"
            >

              <CheckCircle2 className="text-cyan-400 mt-1" />

              <p className="text-slate-300">

                {item}

              </p>

            </div>

          ))}

        </div>

      </Card>

      {/* =======================================================
              RECENT ACTIVITY
      ======================================================= */}

      <Card className="mt-6">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold">

            Recent Activity

          </h2>

          <Bell className="text-cyan-400" />

        </div>

        <div className="space-y-6">

          {[
            {
              title: "Pickup completed at Grand Hotel",
              time: "10 minutes ago",
            },
            {
              title: "Navigation updated to fastest route",
              time: "25 minutes ago",
            },
            {
              title: "Vehicle reached ABC Restaurant",
              time: "40 minutes ago",
            },
            {
              title: "Fuel status synchronized",
              time: "1 hour ago",
            },
            {
              title: "Today's delivery schedule generated",
              time: "2 hours ago",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="flex gap-4 items-start border-b border-slate-800 pb-5 last:border-none"
            >

              <div className="w-3 h-3 rounded-full bg-cyan-500 mt-2" />

              <div className="flex-1">

                <h4 className="font-semibold">

                  {item.title}

                </h4>

                <p className="text-sm text-slate-400 mt-1">

                  {item.time}

                </p>

              </div>

            </div>

          ))}

        </div>

      </Card>

      {/* =======================================================
              SYSTEM STATUS
      ======================================================= */}

      <Card className="mt-6">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold">

            System Status

          </h2>

          <Activity className="text-cyan-400" />

        </div>

        <div className="grid md:grid-cols-4 gap-5">

          <div className="p-5 rounded-xl bg-slate-900">

            <Navigation className="text-cyan-400 mb-3" />

            <h4 className="font-semibold">

              GPS Tracking

            </h4>

            <p className="text-sm text-slate-400 mt-2">

              Active

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900">

            <Truck className="text-green-400 mb-3" />

            <h4 className="font-semibold">

              Vehicle

            </h4>

            <p className="text-sm text-slate-400 mt-2">

              Ready

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900">

            <PackageCheck className="text-yellow-400 mb-3" />

            <h4 className="font-semibold">

              Pickup Status

            </h4>

            <p className="text-sm text-slate-400 mt-2">

              12 Completed

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900">

            <Bell className="text-red-400 mb-3" />

            <h4 className="font-semibold">

              Notifications

            </h4>

            <p className="text-sm text-slate-400 mt-2">

              3 New Alerts

            </p>

          </div>

        </div>

      </Card>

    </DashboardLayout>

  );

}