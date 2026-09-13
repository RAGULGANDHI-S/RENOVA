import React, { useMemo, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

import {
  ShieldCheck,
  Users,
  Hotel,
  UtensilsCrossed,
  Store,
  Tractor,
  Truck,
  Recycle,
  IndianRupee,
  Sparkles,
  TrendingUp,
  Cpu,
  Activity,
  BarChart3,
  Bell,
  Calendar,
  Leaf,
  Factory,
  Package,
  Eye,
  CheckCircle2,
} from "lucide-react";

export default function AdminDashboard() {

  /* ============================================================
        STATES
  ============================================================ */

  const [refreshing, setRefreshing] = useState(false);

  const [systemOnline] = useState(true);

  /* ============================================================
        DASHBOARD KPI
  ============================================================ */

  const stats = [

    {
      title: "Total Users",
      value: "12,485",
      change: "+18%",
      icon: <Users className="w-6 h-6" />,
    },

    {
      title: "Waste Collected",
      value: "428 Tons",
      change: "+12%",
      icon: <Recycle className="w-6 h-6" />,
    },

    {
      title: "Revenue",
      value: "₹28.4 L",
      change: "+23%",
      icon: <IndianRupee className="w-6 h-6" />,
    },

    {
      title: "AI Accuracy",
      value: "99.4%",
      change: "Excellent",
      icon: <Cpu className="w-6 h-6" />,
    },

  ];

  /* ============================================================
        PLATFORM OVERVIEW
  ============================================================ */

  const overview = [

    {
      title: "Hotels",
      value: 142,
      icon: <Hotel className="w-5 h-5" />,
      color: "text-blue-400",
    },

    {
      title: "Restaurants",
      value: 238,
      icon: <UtensilsCrossed className="w-5 h-5" />,
      color: "text-orange-400",
    },

    {
      title: "Vendors",
      value: 524,
      icon: <Store className="w-5 h-5" />,
      color: "text-green-400",
    },

    {
      title: "Farmers",
      value: 684,
      icon: <Tractor className="w-5 h-5" />,
      color: "text-lime-400",
    },

    {
      title: "Delivery",
      value: 112,
      icon: <Truck className="w-5 h-5" />,
      color: "text-cyan-400",
    },

    {
      title: "Industries",
      value: 57,
      icon: <Factory className="w-5 h-5" />,
      color: "text-purple-400",
    },

  ];

  /* ============================================================
        QUICK METRICS
  ============================================================ */

  const metrics = useMemo(
    () => [

      {
        label: "Organic Waste",
        value: "318 Tons",
      },

      {
        label: "Plastic Waste",
        value: "52 Tons",
      },

      {
        label: "Metal Waste",
        value: "28 Tons",
      },

      {
        label: "Paper Waste",
        value: "30 Tons",
      },

    ],
    []
  );

  /* ============================================================
        REFRESH
  ============================================================ */

  const handleRefresh = () => {

    setRefreshing(true);

    setTimeout(() => {

      setRefreshing(false);

    },1500);

  };

  return (

    <DashboardLayout
      title="RENOVA Admin Dashboard"
      subtitle="Monitor users, AI detection, waste collection, fertilizer production and platform performance."
    >

      {/* =======================================================
              WELCOME SECTION
      ======================================================= */}

      <Card className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-green-500/10 to-transparent"></div>

        <div className="relative flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-5">

              <ShieldCheck className="w-4 h-4"/>

              Super Administrator

            </div>

            <h1 className="text-4xl font-bold mb-3">

              Welcome to

              <span className="text-cyan-400">

                {" "}RENOVA Control Center

              </span>

            </h1>

            <p className="text-slate-400 max-w-3xl">

              Monitor the complete ecosystem including hotels,
              restaurants, vendors, delivery partners,
              farmers, AI detection, fertilizer production,
              revenue and operational analytics.

            </p>

          </div>

          <Button
            onClick={handleRefresh}
            isLoading={refreshing}
          >

            <Activity className="w-4 h-4"/>

            Refresh Dashboard

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
            className="hover:border-cyan-500 transition-all"
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

                  <TrendingUp className="w-4 h-4 text-cyan-400"/>

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
              PLATFORM OVERVIEW
      ======================================================= */}

      <div className="grid lg:grid-cols-3 gap-6">

        <Card className="lg:col-span-2">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-xl font-bold">

              Platform Overview

            </h2>

            <BarChart3 className="text-cyan-400"/>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            {overview.map((item)=>(

              <div
                key={item.title}
                className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 transition"
              >

                <div className={`${item.color} mb-4`}>

                  {item.icon}

                </div>

                <h3 className="text-2xl font-bold">

                  {item.value}

                </h3>

                <p className="text-slate-400 mt-2">

                  {item.title}

                </p>

              </div>

            ))}

          </div>

        </Card>

        <Card>

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-bold">

              System Health

            </h2>

            <Cpu className="text-green-400"/>

          </div>

          <div className="space-y-5">

            <div className="flex justify-between">

              <span>Platform Status</span>

              <span className="text-green-400 font-semibold">

                {systemOnline ? "Online" : "Offline"}

              </span>

            </div>

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
                USER MANAGEMENT
      ======================================================= */}

      <div className="grid lg:grid-cols-3 gap-6">

        <Card className="lg:col-span-2">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-xl font-bold">

                User Management

              </h2>

              <p className="text-sm text-slate-400">

                Recently registered platform users

              </p>

            </div>

            <Button variant="outline">

              <Users className="w-4 h-4"/>

              View All

            </Button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              <thead>

                <tr className="border-b border-slate-800">

                  <th className="text-left py-3">Name</th>
                  <th className="text-left py-3">Role</th>
                  <th className="text-left py-3">Status</th>
                  <th className="text-left py-3">Actions</th>

                </tr>

              </thead>

              <tbody>

                {[
                  {
                    name:"Green Hotel",
                    role:"Hotel",
                    status:"Active"
                  },
                  {
                    name:"Fresh Foods",
                    role:"Restaurant",
                    status:"Active"
                  },
                  {
                    name:"ABC Scrap",
                    role:"Vendor",
                    status:"Pending"
                  },
                  {
                    name:"Farmer Kumar",
                    role:"Farmer",
                    status:"Verified"
                  },
                  {
                    name:"Delivery Van 07",
                    role:"Delivery",
                    status:"Online"
                  }

                ].map((user,index)=>(

                  <tr
                    key={index}
                    className="border-b border-slate-800 hover:bg-slate-900"
                  >

                    <td className="py-4">

                      {user.name}

                    </td>

                    <td>

                      {user.role}

                    </td>

                    <td>

                      <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">

                        {user.status}

                      </span>

                    </td>

                    <td>

                      <div className="flex gap-2">

                        <Button size="sm">

                          <Eye className="w-4 h-4"/>

                        </Button>

                        <Button variant="secondary" size="sm">

                          Edit

                        </Button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </Card>

        {/* Notifications */}

        <Card>

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-bold">

              Notifications

            </h2>

            <Bell className="text-cyan-400"/>

          </div>

          <div className="space-y-5">

            {[
              "12 new user registrations",
              "8 pickup requests pending",
              "AI detected unusual waste upload",
              "Revenue report generated",
              "2 delivery vehicles offline"
            ].map((item,index)=>(

              <div
                key={index}
                className="flex gap-3 p-4 rounded-xl bg-slate-900"
              >

                <Bell className="w-5 h-5 text-cyan-400 mt-1"/>

                <p className="text-sm">

                  {item}

                </p>

              </div>

            ))}

          </div>

        </Card>

      </div>

      {/* =======================================================
                MODULE OVERVIEW
      ======================================================= */}

      <div className="grid lg:grid-cols-3 gap-6">

        <Card>

          <div className="flex justify-between items-center mb-6">

            <h2 className="font-bold">

              Hotel Module

            </h2>

            <Hotel className="text-blue-400"/>

          </div>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Total Hotels</span>

              <strong>142</strong>

            </div>

            <div className="flex justify-between">

              <span>Today's Waste</span>

              <strong>18.4 Tons</strong>

            </div>

            <div className="flex justify-between">

              <span>Pending Pickups</span>

              <strong>12</strong>

            </div>

          </div>

        </Card>

        <Card>

          <div className="flex justify-between items-center mb-6">

            <h2 className="font-bold">

              Restaurant Module

            </h2>

            <UtensilsCrossed className="text-orange-400"/>

          </div>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Total Restaurants</span>

              <strong>238</strong>

            </div>

            <div className="flex justify-between">

              <span>Food Waste</span>

              <strong>26.8 Tons</strong>

            </div>

            <div className="flex justify-between">

              <span>AI Accuracy</span>

              <strong>99.3%</strong>

            </div>

          </div>

        </Card>

        <Card>

          <div className="flex justify-between items-center mb-6">

            <h2 className="font-bold">

              Vendor Module

            </h2>

            <Store className="text-green-400"/>

          </div>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Total Vendors</span>

              <strong>524</strong>

            </div>

            <div className="flex justify-between">

              <span>Waste Uploaded</span>

              <strong>64 Tons</strong>

            </div>

            <div className="flex justify-between">

              <span>Revenue</span>

              <strong>₹9.8 L</strong>

            </div>

          </div>

        </Card>

      </div>
            {/* =======================================================
                    DELIVERY & FARMER MANAGEMENT
      ======================================================= */}

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Delivery Management */}

        <Card>

          <div className="flex justify-between items-center mb-6">

            <div>

              <h2 className="text-xl font-bold">

                Delivery Management

              </h2>

              <p className="text-sm text-slate-400">

                Active delivery fleet monitoring

              </p>

            </div>

            <Truck className="text-cyan-400"/>

          </div>

          <div className="space-y-5">

            {[
              {
                vehicle:"Van - 01",
                driver:"Arun",
                status:"On Route"
              },
              {
                vehicle:"Van - 02",
                driver:"Karthik",
                status:"Collecting"
              },
              {
                vehicle:"Van - 03",
                driver:"Rahul",
                status:"Completed"
              },
              {
                vehicle:"Van - 04",
                driver:"Vijay",
                status:"Maintenance"
              }

            ].map((item,index)=>(

              <div
                key={index}
                className="flex justify-between items-center p-4 rounded-xl bg-slate-900 border border-slate-800"
              >

                <div>

                  <h4 className="font-semibold">

                    {item.vehicle}

                  </h4>

                  <p className="text-sm text-slate-400">

                    Driver : {item.driver}

                  </p>

                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm
                  ${
                    item.status==="Completed"
                      ? "bg-green-500/20 text-green-400"
                      : item.status==="Maintenance"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-cyan-500/20 text-cyan-400"
                  }`}
                >

                  {item.status}

                </span>

              </div>

            ))}

          </div>

        </Card>

        {/* Farmer Management */}

        <Card>

          <div className="flex justify-between items-center mb-6">

            <div>

              <h2 className="text-xl font-bold">

                Farmer Marketplace

              </h2>

              <p className="text-sm text-slate-400">

                Fertilizer sales overview

              </p>

            </div>

            <Leaf className="text-lime-400"/>

          </div>

          <div className="space-y-5">

            <div className="flex justify-between">

              <span>Total Farmers</span>

              <strong>684</strong>

            </div>

            <div className="flex justify-between">

              <span>Orders Today</span>

              <strong>126</strong>

            </div>

            <div className="flex justify-between">

              <span>Delivered</span>

              <strong>118</strong>

            </div>

            <div className="flex justify-between">

              <span>Pending</span>

              <strong>8</strong>

            </div>

            <div className="flex justify-between">

              <span>Revenue</span>

              <strong>₹6.4 L</strong>

            </div>

          </div>

        </Card>

      </div>

      {/* =======================================================
                    WASTE COLLECTION
      ======================================================= */}

      <Card>

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold">

            Waste Collection Summary

          </h2>

          <Recycle className="text-green-400"/>

        </div>

        <div className="grid md:grid-cols-4 gap-5">

          <div className="p-5 rounded-xl bg-slate-900">

            <Package className="text-green-400 mb-3"/>

            <h3 className="text-3xl font-bold">

              428T

            </h3>

            <p className="text-slate-400 mt-2">

              Total Waste

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900">

            <Hotel className="text-blue-400 mb-3"/>

            <h3 className="text-3xl font-bold">

              154T

            </h3>

            <p className="text-slate-400 mt-2">

              Hotels

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900">

            <UtensilsCrossed className="text-orange-400 mb-3"/>

            <h3 className="text-3xl font-bold">

              186T

            </h3>

            <p className="text-slate-400 mt-2">

              Restaurants

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900">

            <Store className="text-purple-400 mb-3"/>

            <h3 className="text-3xl font-bold">

              88T

            </h3>

            <p className="text-slate-400 mt-2">

              Vendors

            </p>

          </div>

        </div>

      </Card>

      {/* =======================================================
                    AI PERFORMANCE
      ======================================================= */}

      <Card>

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold">

            AI Detection Analytics

          </h2>

          <Cpu className="text-cyan-400"/>

        </div>

        <div className="grid md:grid-cols-4 gap-5">

          <div className="text-center p-6 rounded-xl bg-slate-900">

            <h2 className="text-5xl font-bold text-cyan-400">

              99.4%

            </h2>

            <p className="mt-3 text-slate-400">

              Detection Accuracy

            </p>

          </div>

          <div className="text-center p-6 rounded-xl bg-slate-900">

            <h2 className="text-5xl font-bold text-green-400">

              18K

            </h2>

            <p className="mt-3 text-slate-400">

              Images Processed

            </p>

          </div>

          <div className="text-center p-6 rounded-xl bg-slate-900">

            <h2 className="text-5xl font-bold text-orange-400">

              562

            </h2>

            <p className="mt-3 text-slate-400">

              AI Alerts

            </p>

          </div>

          <div className="text-center p-6 rounded-xl bg-slate-900">

            <h2 className="text-5xl font-bold text-purple-400">

              24/7

            </h2>

            <p className="mt-3 text-slate-400">

              Monitoring

            </p>

          </div>

        </div>

      </Card>
            {/* =======================================================
                    REVENUE & PRODUCTION
      ======================================================= */}

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Revenue */}

        <Card>

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-bold">

              Revenue Overview

            </h2>

            <IndianRupee className="text-green-400"/>

          </div>

          <div className="text-center py-6">

            <h1 className="text-5xl font-bold text-green-400">

              ₹28.4L

            </h1>

            <p className="text-slate-400 mt-3">

              Monthly Revenue

            </p>

          </div>

          <div className="space-y-4 mt-5">

            <div className="flex justify-between">

              <span>Hotels</span>

              <strong>₹8.2L</strong>

            </div>

            <div className="flex justify-between">

              <span>Restaurants</span>

              <strong>₹9.5L</strong>

            </div>

            <div className="flex justify-between">

              <span>Vendors</span>

              <strong>₹4.3L</strong>

            </div>

            <div className="flex justify-between">

              <span>Marketplace</span>

              <strong>₹6.4L</strong>

            </div>

          </div>

        </Card>

        {/* Fertilizer */}

        <Card>

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-bold">

              Fertilizer Production

            </h2>

            <Leaf className="text-lime-400"/>

          </div>

          <div className="text-center py-6">

            <h1 className="text-5xl font-bold text-lime-400">

              164 T

            </h1>

            <p className="text-slate-400 mt-3">

              Produced This Month

            </p>

          </div>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Available Stock</span>

              <strong>58 Tons</strong>

            </div>

            <div className="flex justify-between">

              <span>Orders</span>

              <strong>742</strong>

            </div>

            <div className="flex justify-between">

              <span>Sold</span>

              <strong>106 Tons</strong>

            </div>

          </div>

        </Card>

        {/* Biogas */}

        <Card>

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-bold">

              Biogas Production

            </h2>

            <Factory className="text-orange-400"/>

          </div>

          <div className="text-center py-6">

            <h1 className="text-5xl font-bold text-orange-400">

              82 K

            </h1>

            <p className="text-slate-400 mt-3">

              Cubic Meters

            </p>

          </div>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Today's Output</span>

              <strong>2.6K m³</strong>

            </div>

            <div className="flex justify-between">

              <span>Efficiency</span>

              <strong>97%</strong>

            </div>

            <div className="flex justify-between">

              <span>Plants Active</span>

              <strong>6</strong>

            </div>

          </div>

        </Card>

      </div>

      {/* =======================================================
                    MONTHLY ANALYTICS
      ======================================================= */}

      <Card>

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold">

            Monthly Analytics

          </h2>

          <BarChart3 className="text-cyan-400"/>

        </div>

        <div className="space-y-5">

          {[
            {label:"Waste Collection",value:92,color:"from-green-500 to-cyan-500"},
            {label:"AI Performance",value:99,color:"from-cyan-500 to-blue-500"},
            {label:"Revenue Growth",value:84,color:"from-purple-500 to-pink-500"},
            {label:"Marketplace Sales",value:76,color:"from-orange-500 to-yellow-500"},
            {label:"Delivery Efficiency",value:94,color:"from-indigo-500 to-cyan-500"},
          ].map((item,index)=>(

            <div key={index}>

              <div className="flex justify-between mb-2">

                <span>{item.label}</span>

                <span>{item.value}%</span>

              </div>

              <div className="w-full bg-slate-800 rounded-full h-3">

                <div
                  className={`bg-gradient-to-r ${item.color} h-3 rounded-full`}
                  style={{width:`${item.value}%`}}
                />

              </div>

            </div>

          ))}

        </div>

      </Card>

      {/* =======================================================
                    LIVE VEHICLE TRACKING
      ======================================================= */}

      <Card>

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold">

            Live Vehicle Tracking

          </h2>

          <Truck className="text-cyan-400"/>

        </div>

        <div className="grid md:grid-cols-4 gap-5">

          {[
            {
              vehicle:"Van-01",
              status:"Collecting",
              location:"Trichy"
            },
            {
              vehicle:"Van-02",
              status:"On Route",
              location:"Srirangam"
            },
            {
              vehicle:"Van-03",
              status:"Returning",
              location:"Thillai Nagar"
            },
            {
              vehicle:"Van-04",
              status:"Maintenance",
              location:"Service Center"
            }
          ].map((item,index)=>(

            <div
              key={index}
              className="p-5 rounded-xl bg-slate-900 border border-slate-800"
            >

              <Truck className="text-cyan-400 mb-4"/>

              <h3 className="font-bold">

                {item.vehicle}

              </h3>

              <p className="text-sm text-slate-400 mt-2">

                {item.location}

              </p>

              <span className="inline-block mt-4 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs">

                {item.status}

              </span>

            </div>

          ))}

        </div>

      </Card>
            {/* =======================================================
                    NOTIFICATION CENTER
      ======================================================= */}

      <div className="grid lg:grid-cols-3 gap-6">

        <Card className="lg:col-span-2">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-bold">

              Notification Center

            </h2>

            <Bell className="text-cyan-400"/>

          </div>

          <div className="space-y-5">

            {[
              {
                title:"15 new pickup requests received",
                time:"5 minutes ago",
                type:"info"
              },
              {
                title:"New Vendor Registration Pending Approval",
                time:"12 minutes ago",
                type:"warning"
              },
              {
                title:"Fertilizer Batch #245 Completed",
                time:"35 minutes ago",
                type:"success"
              },
              {
                title:"Vehicle VAN-04 entered maintenance",
                time:"1 hour ago",
                type:"danger"
              },
              {
                title:"Monthly revenue report generated",
                time:"2 hours ago",
                type:"info"
              }

            ].map((item,index)=>(

              <div
                key={index}
                className="flex justify-between items-center p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 transition"
              >

                <div>

                  <h4 className="font-semibold">

                    {item.title}

                  </h4>

                  <p className="text-sm text-slate-400 mt-1">

                    {item.time}

                  </p>

                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs
                    ${
                      item.type==="success"
                        ? "bg-green-500/20 text-green-400"
                        : item.type==="warning"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : item.type==="danger"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-cyan-500/20 text-cyan-400"
                    }`}
                >

                  {item.type.toUpperCase()}

                </span>

              </div>

            ))}

          </div>

        </Card>

        {/* Quick Actions */}

        <Card>

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-bold">

              Quick Actions

            </h2>

            <Sparkles className="text-cyan-400"/>

          </div>

          <div className="grid gap-4">

            <Button className="justify-start">

              <Users className="w-5 h-5"/>

              Manage Users

            </Button>

            <Button variant="secondary" className="justify-start">

              <Truck className="w-5 h-5"/>

              Assign Pickup

            </Button>

            <Button variant="outline" className="justify-start">

              <Leaf className="w-5 h-5"/>

              Fertilizer Orders

            </Button>

            <Button variant="outline" className="justify-start">

              <Factory className="w-5 h-5"/>

              Biogas Plants

            </Button>

            <Button variant="outline" className="justify-start">

              <BarChart3 className="w-5 h-5"/>

              Generate Report

            </Button>

          </div>

        </Card>

      </div>

      {/* =======================================================
                    RECENT ACTIVITIES
      ======================================================= */}

      <Card>

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold">

            Recent Activities

          </h2>

          <Activity className="text-cyan-400"/>

        </div>

        <div className="space-y-6">

          {[
            {
              title:"Hotel Green Park uploaded 420kg waste",
              time:"8 mins ago"
            },
            {
              title:"Restaurant Fresh Foods completed pickup",
              time:"18 mins ago"
            },
            {
              title:"Vendor ABC received ₹14,800 payment",
              time:"32 mins ago"
            },
            {
              title:"Farmer purchased 3 tons fertilizer",
              time:"48 mins ago"
            },
            {
              title:"AI processed 520 waste images",
              time:"1 hour ago"
            },
            {
              title:"Monthly dashboard synchronized",
              time:"2 hours ago"
            }

          ].map((activity,index)=>(

            <div
              key={index}
              className="flex items-start gap-4 border-b border-slate-800 pb-5 last:border-none"
            >

              <CheckCircle2 className="text-cyan-400 mt-1"/>

              <div>

                <h4 className="font-semibold">

                  {activity.title}

                </h4>

                <p className="text-sm text-slate-400 mt-1">

                  {activity.time}

                </p>

              </div>

            </div>

          ))}

        </div>

      </Card>

      {/* =======================================================
                    SYSTEM STATUS
      ======================================================= */}

      <Card>

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold">

            Platform Status

          </h2>

          <ShieldCheck className="text-green-400"/>

        </div>

        <div className="grid md:grid-cols-4 gap-5">

          <div className="p-5 rounded-xl bg-slate-900">

            <Cpu className="text-green-400 mb-3"/>

            <h4 className="font-semibold">

              AI Engine

            </h4>

            <p className="text-sm text-slate-400 mt-2">

              Running Normally

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900">

            <Truck className="text-cyan-400 mb-3"/>

            <h4 className="font-semibold">

              Fleet Status

            </h4>

            <p className="text-sm text-slate-400 mt-2">

              108 / 112 Active

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900">

            <Users className="text-purple-400 mb-3"/>

            <h4 className="font-semibold">

              Active Users

            </h4>

            <p className="text-sm text-slate-400 mt-2">

              10,842 Online

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900">

            <Recycle className="text-emerald-400 mb-3"/>

            <h4 className="font-semibold">

              Processing Units

            </h4>

            <p className="text-sm text-slate-400 mt-2">

              All Operational

            </p>

          </div>

        </div>

      </Card>

    </DashboardLayout>

  );

}