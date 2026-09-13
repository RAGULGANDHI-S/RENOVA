import React, { useMemo, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

import CameraFeed from "../../components/ai/CameraFeed";
import DetectionBox from "../../components/ai/DetectionBox";

import {
  Store,
  Truck,
  Package,
  IndianRupee,
  Sparkles,
  TrendingUp,
  Cpu,
  BarChart3,
  Recycle,
  Camera,
  CheckCircle2,
  Calendar,
  Leaf,
  Award,
  Bell,
  Activity,
} from "lucide-react";

export default function VendorDashboard() {

  /* ============================================================
        STATES
  ============================================================ */

  const [latestDetection, setLatestDetection] = useState(null);

  const [pickupRequested, setPickupRequested] = useState(false);

  const [loading, setLoading] = useState(false);

  /* ============================================================
        VENDOR STATISTICS
  ============================================================ */

  const stats = [

    {
      title: "Waste Uploaded Today",
      value: "325 kg",
      change: "+14%",
      color: "emerald",
      icon: <Recycle className="w-6 h-6"/>,
    },

    {
      title: "Today's Earnings",
      value: "₹4,850",
      change: "+9%",
      color: "green",
      icon: <IndianRupee className="w-6 h-6"/>,
    },

    {
      title: "Pickup Requests",
      value: "8",
      change: "Scheduled",
      color: "cyan",
      icon: <Truck className="w-6 h-6"/>,
    },

    {
      title: "AI Accuracy",
      value: "99.2%",
      change: "Excellent",
      color: "amber",
      icon: <Cpu className="w-6 h-6"/>,
    },

  ];

  /* ============================================================
        WEEKLY WASTE UPLOAD
  ============================================================ */

  const weeklyData = [

    { day: "Mon", waste: 220 },
    { day: "Tue", waste: 245 },
    { day: "Wed", waste: 232 },
    { day: "Thu", waste: 285 },
    { day: "Fri", waste: 310 },
    { day: "Sat", waste: 335 },
    { day: "Sun", waste: 295 },

  ];

  /* ============================================================
        AI RECOMMENDATIONS
  ============================================================ */

  const recommendations = [

    "Separate plastic and paper before uploading.",

    "Compress cardboard to increase selling price.",

    "Organic waste quality improved by 12% this week.",

    "Nearest pickup vehicle arriving in 15 minutes.",

    "Uploading clean recyclable materials increases revenue.",

  ];

  /* ============================================================
        QUICK METRICS
  ============================================================ */

  const metrics = useMemo(
    () => [

      {
        label: "Monthly Earnings",
        value: "₹52,800",
      },

      {
        label: "Total Waste Uploaded",
        value: "7.2 Tons",
      },

      {
        label: "AI Detection Accuracy",
        value: "99.2%",
      },

      {
        label: "Successful Pickups",
        value: "186",
      },

    ],
    []
  );

  /* ============================================================
        PICKUP
  ============================================================ */

  const handlePickup = () => {

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      setPickupRequested(true);

      setTimeout(() => {

        setPickupRequested(false);

      }, 3500);

    }, 1500);

  };

  return (

    <DashboardLayout
      title="Vendor Waste Management Dashboard"
      subtitle="Upload recyclable waste, monitor AI detection, earnings and pickup logistics."
    >

      {/* =======================================================
                WELCOME SECTION
      ======================================================= */}

      <Card className="overflow-hidden relative">

        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-transparent"></div>

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 mb-5">

              <Sparkles className="w-4 h-4"/>

              Vendor Dashboard

            </div>

            <h1 className="text-4xl font-bold mb-3">

              Welcome back,

              <span className="text-green-400">

                Green Traders

              </span>

            </h1>

            <p className="text-slate-400 max-w-2xl">

              You uploaded

              <span className="text-white font-semibold">

                {" "}325 kg

              </span>

              {" "}of recyclable waste today.

              AI verification is active and today's pickup schedule is confirmed.

            </p>

          </div>

          <Button
            onClick={handlePickup}
            isLoading={loading}
          >

            <Truck className="w-4 h-4"/>

            Request Pickup

          </Button>

        </div>

      </Card>

      {/* =======================================================
                KPI CARDS
      ======================================================= */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        {stats.map((item)=>(

          <Card
            key={item.title}
            className="hover:border-green-500/40 transition-all"
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

                  <TrendingUp className="w-4 h-4 text-green-400"/>

                  <span className="text-xs text-green-400">

                    {item.change}

                  </span>

                </div>

              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-green-400">

                {item.icon}

              </div>

            </div>

          </Card>

        ))}

      </div>

      {/* =======================================================
                AI DETECTION
      ======================================================= */}

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2">

          <CameraFeed
            onDetectionComplete={(d)=>setLatestDetection(d)}
          />

        </div>

        <DetectionBox detection={latestDetection}/>

      </div>
            {/* =======================================================
                ANALYTICS
      ======================================================= */}

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Weekly Waste Upload */}

        <Card>

          <div className="flex justify-between items-center mb-6">

            <h3 className="font-bold text-lg">

              Weekly Waste Upload Analytics

            </h3>

            <BarChart3 className="text-green-400"/>

          </div>

          <div className="space-y-5">

            {weeklyData.map((item)=>(

              <div key={item.day}>

                <div className="flex justify-between text-sm mb-2">

                  <span>{item.day}</span>

                  <span>{item.waste} kg</span>

                </div>

                <div className="w-full bg-slate-800 rounded-full h-3">

                  <div
                    className="bg-gradient-to-r from-green-500 to-cyan-500 h-3 rounded-full"
                    style={{
                      width:`${item.waste/3.5}%`
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </Card>

        {/* Earnings Summary */}

        <Card>

          <div className="flex justify-between items-center mb-6">

            <h3 className="font-bold text-lg">

              Earnings Summary

            </h3>

            <IndianRupee className="text-green-400"/>

          </div>

          <div className="text-center py-6">

            <div className="text-6xl font-bold text-green-400">

              ₹52K

            </div>

            <p className="text-slate-400 mt-4">

              Total Monthly Earnings

            </p>

          </div>

          <div className="space-y-4 mt-6">

            {metrics.map((item)=>(

              <div
                key={item.label}
                className="flex justify-between border-b border-slate-800 pb-3"
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

      </div>

      {/* =======================================================
              WASTE HISTORY + PICKUP
      ======================================================= */}

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Upload History */}

        <Card className="lg:col-span-2">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-xl font-bold">

                Waste Upload History

              </h2>

              <p className="text-sm text-slate-400">

                AI verified recyclable waste records

              </p>

            </div>

            <Button variant="outline">

              <Calendar className="w-4 h-4"/>

              Export Report

            </Button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              <thead>

                <tr className="border-b border-slate-800">

                  <th className="text-left py-3">Date</th>
                  <th className="text-left py-3">Category</th>
                  <th className="text-left py-3">Weight</th>
                  <th className="text-left py-3">Price</th>
                  <th className="text-left py-3">Status</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b border-slate-800 hover:bg-slate-900">

                  <td className="py-4">Today</td>

                  <td>Plastic Bottles</td>

                  <td>120 kg</td>

                  <td>₹2,400</td>

                  <td>

                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400">

                      Sold

                    </span>

                  </td>

                </tr>

                <tr className="border-b border-slate-800 hover:bg-slate-900">

                  <td className="py-4">Yesterday</td>

                  <td>Cardboard</td>

                  <td>85 kg</td>

                  <td>₹1,700</td>

                  <td>

                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400">

                      Picked Up

                    </span>

                  </td>

                </tr>

                <tr className="border-b border-slate-800 hover:bg-slate-900">

                  <td className="py-4">Monday</td>

                  <td>Metal Scrap</td>

                  <td>70 kg</td>

                  <td>₹3,150</td>

                  <td>

                    <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400">

                      Scheduled

                    </span>

                  </td>

                </tr>

                <tr>

                  <td className="py-4">Sunday</td>

                  <td>Paper Waste</td>

                  <td>95 kg</td>

                  <td>₹1,900</td>

                  <td>

                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400">

                      Sold

                    </span>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </Card>

        {/* Pickup Schedule */}

        <Card>

          <div className="flex items-center justify-between mb-5">

            <h2 className="font-bold">

              Pickup Schedule

            </h2>

            <Truck className="text-green-400"/>

          </div>

          <div className="space-y-4">

            <div className="p-4 rounded-xl bg-slate-900">

              <div className="flex justify-between">

                <span className="font-semibold">

                  Morning Pickup

                </span>

                <CheckCircle2 className="text-green-400"/>

              </div>

              <p className="text-sm text-slate-400 mt-2">

                09:00 AM

              </p>

            </div>

            <div className="p-4 rounded-xl bg-slate-900">

              <div className="flex justify-between">

                <span className="font-semibold">

                  Afternoon Pickup

                </span>

                <Activity className="text-yellow-400"/>

              </div>

              <p className="text-sm text-slate-400 mt-2">

                02:30 PM

              </p>

            </div>

            <div className="p-4 rounded-xl bg-slate-900">

              <div className="flex justify-between">

                <span className="font-semibold">

                  Evening Pickup

                </span>

                <Truck className="text-cyan-400"/>

              </div>

              <p className="text-sm text-slate-400 mt-2">

                07:45 PM

              </p>

            </div>

          </div>

          <Button
            className="w-full mt-6"
            onClick={handlePickup}
            isLoading={loading}
          >

            <Truck className="w-4 h-4"/>

            Request Pickup

          </Button>

          {pickupRequested && (

            <div className="mt-5 p-4 rounded-xl bg-green-500/10 border border-green-500/20">

              <p className="text-sm text-green-400">

                ✔ Pickup request sent successfully.

              </p>

            </div>

          )}

        </Card>

      </div>
            {/* =======================================================
                  AI RECOMMENDATIONS
      ======================================================= */}

      <Card>

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-xl font-bold">

            AI Recommendations

          </h2>

          <Sparkles className="text-green-400"/>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {recommendations.map((item,index)=>(

            <div
              key={index}
              className="flex gap-4 p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-green-500 transition"
            >

              <CheckCircle2 className="text-green-400 mt-1"/>

              <p className="text-slate-300">

                {item}

              </p>

            </div>

          ))}

        </div>

      </Card>

      {/* =======================================================
                  QUICK ACTIONS & RECENT ACTIVITY
      ======================================================= */}

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Quick Actions */}

        <Card>

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-xl font-bold">

              Quick Actions

            </h2>

            <Sparkles className="text-green-400"/>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <Button className="h-24 flex-col">

              <Camera className="w-7 h-7"/>

              Scan Waste

            </Button>

            <Button variant="secondary" className="h-24 flex-col">

              <Truck className="w-7 h-7"/>

              Request Pickup

            </Button>

            <Button variant="outline" className="h-24 flex-col">

              <BarChart3 className="w-7 h-7"/>

              Reports

            </Button>

            <Button variant="outline" className="h-24 flex-col">

              <Package className="w-7 h-7"/>

              Earnings

            </Button>

          </div>

        </Card>

        {/* Recent Activity */}

        <Card className="lg:col-span-2">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-bold">

              Recent Activity

            </h2>

            <Bell className="text-green-400"/>

          </div>

          <div className="space-y-6">

            {[
              {
                title:"Plastic Waste uploaded successfully",
                time:"5 minutes ago"
              },

              {
                title:"AI identified recyclable materials",
                time:"18 minutes ago"
              },

              {
                title:"Pickup Vehicle Assigned",
                time:"35 minutes ago"
              },

              {
                title:"Payment Credited ₹2,400",
                time:"1 hour ago"
              },

              {
                title:"Weekly report generated",
                time:"2 hours ago"
              }

            ].map((item,index)=>(

              <div
                key={index}
                className="flex gap-4 items-start border-b border-slate-800 pb-5 last:border-none"
              >

                <div className="w-3 h-3 rounded-full bg-green-500 mt-2"/>

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

      </div>

      {/* =======================================================
                    SYSTEM STATUS
      ======================================================= */}

      <Card>

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold">

            System Status

          </h2>

          <Activity className="text-green-400"/>

        </div>

        <div className="grid md:grid-cols-4 gap-5">

          <div className="p-5 rounded-xl bg-slate-900">

            <Cpu className="text-green-400 mb-3"/>

            <h4 className="font-semibold">

              AI Detection

            </h4>

            <p className="text-sm text-slate-400 mt-2">

              Operational

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900">

            <Truck className="text-cyan-400 mb-3"/>

            <h4 className="font-semibold">

              Pickup Service

            </h4>

            <p className="text-sm text-slate-400 mt-2">

              Active

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900">

            <Recycle className="text-emerald-400 mb-3"/>

            <h4 className="font-semibold">

              Recycling Center

            </h4>

            <p className="text-sm text-slate-400 mt-2">

              Running Normally

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900">

            <Award className="text-yellow-400 mb-3"/>

            <h4 className="font-semibold">

              Vendor Rating

            </h4>

            <p className="text-sm text-slate-400 mt-2">

              4.9 / 5.0

            </p>

          </div>

        </div>

      </Card>

    </DashboardLayout>

  );

}