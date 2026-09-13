import React, { useMemo, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

import CameraFeed from "../../components/ai/CameraFeed";
import DetectionBox from "../../components/ai/DetectionBox";

import {
  UtensilsCrossed,
  Truck,
  Leaf,
  Activity,
  Sparkles,
  TrendingUp,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Camera,
  Cpu,
  BarChart3,
  Recycle,
  Award,
  Bell,
  Package,
  ChefHat,
} from "lucide-react";

export default function RestaurantDashboard() {

  /* ============================================================
        STATES
  ============================================================ */

  const [latestDetection, setLatestDetection] = useState(null);

  const [pickupRequested, setPickupRequested] = useState(false);

  const [loading, setLoading] = useState(false);

  /* ============================================================
        RESTAURANT STATISTICS
  ============================================================ */

  const stats = [
    {
      title: "Food Waste Today",
      value: "168 kg",
      change: "+11%",
      color: "emerald",
      icon: <Leaf className="w-6 h-6" />,
    },

    {
      title: "Meals Served",
      value: "845",
      change: "+7%",
      color: "cyan",
      icon: <ChefHat className="w-6 h-6" />,
    },

    {
      title: "Today's Pickups",
      value: "4",
      change: "On Schedule",
      color: "indigo",
      icon: <Truck className="w-6 h-6" />,
    },

    {
      title: "AI Accuracy",
      value: "99.1%",
      change: "Excellent",
      color: "amber",
      icon: <Cpu className="w-6 h-6" />,
    },
  ];

  /* ============================================================
        WEEKLY FOOD WASTE
  ============================================================ */

  const weeklyData = [
    { day: "Mon", waste: 145 },
    { day: "Tue", waste: 162 },
    { day: "Wed", waste: 155 },
    { day: "Thu", waste: 181 },
    { day: "Fri", waste: 205 },
    { day: "Sat", waste: 224 },
    { day: "Sun", waste: 198 },
  ];

  /* ============================================================
        AI RECOMMENDATIONS
  ============================================================ */

  const recommendations = [
    "Separate cooked and uncooked food waste.",
    "Reduce buffet leftovers during weekends.",
    "Compost vegetable waste for fertilizer production.",
    "Pickup vehicle arriving in 20 minutes.",
    "Monitor kitchen waste during lunch hours.",
  ];

  /* ============================================================
        QUICK METRICS
  ============================================================ */

  const metrics = useMemo(
    () => [
      {
        label: "Monthly Food Waste",
        value: "2.85 Tons",
      },

      {
        label: "Carbon Saved",
        value: "₹12,600",
      },

      {
        label: "Detection Accuracy",
        value: "99.1%",
      },

      {
        label: "Successful Pickups",
        value: "118",
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
      title="Restaurant Waste Management Dashboard"
      subtitle="Monitor food waste, AI detection, sustainability performance and collection logistics."
    >

      {/* =======================================================
                WELCOME SECTION
      ======================================================= */}

      <Card className="overflow-hidden relative">

        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-emerald-500/10 to-transparent"></div>

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 mb-5">

              <Sparkles className="w-4 h-4"/>

              Restaurant Dashboard

            </div>

            <h1 className="text-4xl font-bold mb-3">

              Welcome back,

              <span className="text-orange-400">

                Green Leaf Restaurant

              </span>

            </h1>

            <p className="text-slate-400 max-w-2xl">

              Your restaurant generated

              <span className="text-white font-semibold">

                {" "}168 kg

              </span>

              {" "}of food waste today.

              AI monitoring is active and pickup is scheduled on time.

            </p>

          </div>

          <Button onClick={handlePickup} isLoading={loading}>

            <Truck className="w-4 h-4"/>

            Request Pickup

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
            className="hover:border-orange-500/40 transition-all"
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

                  <TrendingUp className="w-4 h-4 text-orange-400"/>

                  <span className="text-xs text-orange-400">

                    {item.change}

                  </span>

                </div>

              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-orange-400">

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
            onDetectionComplete={(d) => setLatestDetection(d)}
          />

        </div>

        <DetectionBox detection={latestDetection} />

      </div>
            {/* =======================================================
                ANALYTICS
      ======================================================= */}

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Weekly Food Waste */}

        <Card>

          <div className="flex justify-between items-center mb-6">

            <h3 className="font-bold text-lg">

              Weekly Food Waste Analytics

            </h3>

            <BarChart3 className="text-orange-400"/>

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
                    className="bg-gradient-to-r from-orange-500 to-emerald-500 h-3 rounded-full"
                    style={{
                      width:`${item.waste/2.5}%`
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </Card>

        {/* Sustainability */}

        <Card>

          <div className="flex justify-between items-center mb-6">

            <h3 className="font-bold text-lg">

              Sustainability Score

            </h3>

            <Award className="text-yellow-400"/>

          </div>

          <div className="text-center py-6">

            <div className="text-6xl font-bold text-orange-400">

              95%

            </div>

            <p className="text-slate-400 mt-4">

              Gold Sustainability Rating

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
              FOOD WASTE HISTORY + PICKUP
      ======================================================= */}

      <div className="grid lg:grid-cols-3 gap-6">

        {/* History */}

        <Card className="lg:col-span-2">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-xl font-bold">

                Food Waste Collection History

              </h2>

              <p className="text-sm text-slate-400">

                Recent AI verified food waste records

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
                  <th className="text-left py-3">Waste Type</th>
                  <th className="text-left py-3">Weight</th>
                  <th className="text-left py-3">Status</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b border-slate-800 hover:bg-slate-900">

                  <td className="py-4">Today</td>

                  <td>Cooked Food</td>

                  <td>95 kg</td>

                  <td>

                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400">

                      Completed

                    </span>

                  </td>

                </tr>

                <tr className="border-b border-slate-800 hover:bg-slate-900">

                  <td className="py-4">Yesterday</td>

                  <td>Vegetable Waste</td>

                  <td>42 kg</td>

                  <td>

                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400">

                      Recycled

                    </span>

                  </td>

                </tr>

                <tr className="border-b border-slate-800 hover:bg-slate-900">

                  <td className="py-4">Monday</td>

                  <td>Mixed Food Waste</td>

                  <td>118 kg</td>

                  <td>

                    <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400">

                      Scheduled

                    </span>

                  </td>

                </tr>

                <tr>

                  <td className="py-4">Sunday</td>

                  <td>Fruit Waste</td>

                  <td>76 kg</td>

                  <td>

                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400">

                      Completed

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

            <Truck className="text-orange-400"/>

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

                10:00 AM

              </p>

            </div>

            <div className="p-4 rounded-xl bg-slate-900">

              <div className="flex justify-between">

                <span className="font-semibold">

                  Afternoon Pickup

                </span>

                <Clock className="text-yellow-400"/>

              </div>

              <p className="text-sm text-slate-400 mt-2">

                03:00 PM

              </p>

            </div>

            <div className="p-4 rounded-xl bg-slate-900">

              <div className="flex justify-between">

                <span className="font-semibold">

                  Evening Pickup

                </span>

                <AlertCircle className="text-cyan-400"/>

              </div>

              <p className="text-sm text-slate-400 mt-2">

                08:30 PM

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

            <div className="mt-5 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">

              <p className="text-sm text-orange-400">

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

          <Sparkles className="text-orange-400"/>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {recommendations.map((item,index)=>(

            <div
              key={index}
              className="flex gap-4 p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-orange-500 transition"
            >

              <CheckCircle2 className="text-orange-400 mt-1"/>

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

            <Sparkles className="text-orange-400"/>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <Button className="h-24 flex-col">

              <Truck className="w-7 h-7"/>

              Schedule Pickup

            </Button>

            <Button variant="secondary" className="h-24 flex-col">

              <Camera className="w-7 h-7"/>

              Scan Food Waste

            </Button>

            <Button variant="outline" className="h-24 flex-col">

              <BarChart3 className="w-7 h-7"/>

              Reports

            </Button>

            <Button variant="outline" className="h-24 flex-col">

              <Package className="w-7 h-7"/>

              Marketplace

            </Button>

          </div>

        </Card>

        {/* Recent Activity */}

        <Card className="lg:col-span-2">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-bold">

              Recent Activity

            </h2>

            <Bell className="text-orange-400"/>

          </div>

          <div className="space-y-6">

            {[
              {
                title:"AI detected Vegetable Waste",
                time:"5 minutes ago"
              },

              {
                title:"Pickup Vehicle Assigned",
                time:"18 minutes ago"
              },

              {
                title:"Organic Waste Sent For Composting",
                time:"40 minutes ago"
              },

              {
                title:"Daily Waste Report Generated",
                time:"1 hour ago"
              },

              {
                title:"Kitchen Bin Reached 85%",
                time:"2 hours ago"
              }

            ].map((item,index)=>(

              <div
                key={index}
                className="flex gap-4 items-start border-b border-slate-800 pb-5 last:border-none"
              >

                <div className="w-3 h-3 rounded-full bg-orange-500 mt-2"/>

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

          <Activity className="text-orange-400"/>

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

              8 Vehicles Active

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900">

            <Recycle className="text-emerald-400 mb-3"/>

            <h4 className="font-semibold">

              Compost Unit

            </h4>

            <p className="text-sm text-slate-400 mt-2">

              Running Normally

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900">

            <Award className="text-yellow-400 mb-3"/>

            <h4 className="font-semibold">

              Eco Rating

            </h4>

            <p className="text-sm text-slate-400 mt-2">

              Gold

            </p>

          </div>

        </div>

      </Card>

    </DashboardLayout>

  );

}