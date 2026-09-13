import React, { useMemo, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

import {
  Tractor,
  Leaf,
  ShoppingCart,
  Package,
  IndianRupee,
  TrendingUp,
  Sparkles,
  BarChart3,
  CloudSun,
  Cpu,
  Award,
  Calendar,
  MapPinned,
  Sprout,
  CheckCircle2,
  Truck,
} from "lucide-react";

export default function FarmerDashboard() {

  /* ============================================================
        STATES
  ============================================================ */

  const [loading, setLoading] = useState(false);

  const [orderPlaced, setOrderPlaced] = useState(false);

  /* ============================================================
        DASHBOARD STATS
  ============================================================ */

  const stats = [

    {
      title: "Available Fertilizer",
      value: "245 Tons",
      change: "+18%",
      icon: <Leaf className="w-6 h-6"/>,
    },

    {
      title: "Orders",
      value: "18",
      change: "3 Pending",
      icon: <ShoppingCart className="w-6 h-6"/>,
    },

    {
      title: "Money Saved",
      value: "₹18,450",
      change: "+12%",
      icon: <IndianRupee className="w-6 h-6"/>,
    },

    {
      title: "Soil Health",
      value: "92%",
      change: "Excellent",
      icon: <Sprout className="w-6 h-6"/>,
    },

  ];

  /* ============================================================
        MARKETPLACE PRODUCTS
  ============================================================ */

  const fertilizers = [

    {
      name:"Organic Compost",
      stock:"80 Tons",
      price:"₹850 / Ton",
      quality:"Premium",
    },

    {
      name:"Bio Fertilizer",
      stock:"65 Tons",
      price:"₹960 / Ton",
      quality:"Grade A",
    },

    {
      name:"Vermicompost",
      stock:"54 Tons",
      price:"₹1,150 / Ton",
      quality:"Premium",
    },

    {
      name:"Natural Compost",
      stock:"46 Tons",
      price:"₹780 / Ton",
      quality:"Standard",
    },

  ];

  /* ============================================================
        AI RECOMMENDATIONS
  ============================================================ */

  const recommendations = [

    "Suitable crop : Paddy",

    "Increase potassium content this month.",

    "Rain expected within 48 hours.",

    "Organic compost recommended for current soil.",

    "Best sowing period begins next week.",

  ];

  /* ============================================================
        FARM METRICS
  ============================================================ */

  const metrics = useMemo(
    () => [

      {
        label:"Total Purchases",
        value:"42 Tons",
      },

      {
        label:"Crop Yield",
        value:"+18%",
      },

      {
        label:"Soil Moisture",
        value:"76%",
      },

      {
        label:"Water Efficiency",
        value:"89%",
      },

    ],
    []
  );

  /* ============================================================
        PLACE ORDER
  ============================================================ */

  const handleOrder = () => {

    setLoading(true);

    setTimeout(()=>{

      setLoading(false);

      setOrderPlaced(true);

      setTimeout(()=>{

        setOrderPlaced(false);

      },3000);

    },1500);

  };

  return(

    <DashboardLayout
      title="Farmer Dashboard"
      subtitle="Purchase eco-friendly fertilizer, monitor farm health and receive AI recommendations."
    >

      {/* =======================================================
                WELCOME
      ======================================================= */}

      <Card className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 via-green-500/10 to-transparent"/>

        <div className="relative flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-400 mb-5">

              <Tractor className="w-4 h-4"/>

              Farmer Dashboard

            </div>

            <h1 className="text-4xl font-bold mb-3">

              Welcome,

              <span className="text-lime-400">

                {" "}Farmer

              </span>

            </h1>

            <p className="text-slate-400 max-w-2xl">

              Purchase premium organic fertilizer directly from RENOVA,
              monitor soil health and receive AI-powered crop recommendations.

            </p>

          </div>

          <Button
            onClick={handleOrder}
            isLoading={loading}
          >

            <ShoppingCart className="w-4 h-4"/>

            Place Order

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
            className="hover:border-lime-500 transition-all"
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

                  <TrendingUp className="w-4 h-4 text-lime-400"/>

                  <span className="text-xs text-lime-400">

                    {item.change}

                  </span>

                </div>

              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-lime-400">

                {item.icon}

              </div>

            </div>

          </Card>

        ))}

      </div>

      {/* =======================================================
                FERTILIZER MARKETPLACE
      ======================================================= */}

      <Card>

        <div className="flex justify-between items-center mb-6">

          <div>

            <h2 className="text-xl font-bold">

              Fertilizer Marketplace

            </h2>

            <p className="text-sm text-slate-400">

              Eco-friendly fertilizers available for purchase

            </p>

          </div>

          <Leaf className="text-lime-400"/>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {fertilizers.map((item)=>(

            <div
              key={item.name}
              className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-lime-500 transition"
            >

              <h3 className="text-xl font-bold">

                {item.name}

              </h3>

              <p className="text-slate-400 mt-2">

                Stock : {item.stock}

              </p>

              <p className="text-slate-400">

                Price : {item.price}

              </p>

              <p className="text-lime-400 mt-2">

                {item.quality}

              </p>

              <Button
                className="mt-5 w-full"
                onClick={handleOrder}
                isLoading={loading}
              >

                <ShoppingCart className="w-4 h-4"/>

                Buy Now

              </Button>

            </div>

          ))}

        </div>

      </Card>
            {/* =======================================================
                  ORDER HISTORY & DELIVERY
      ======================================================= */}

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Order History */}

        <Card className="lg:col-span-2">

          <div className="flex justify-between items-center mb-6">

            <div>

              <h2 className="text-xl font-bold">

                Order History

              </h2>

              <p className="text-sm text-slate-400">

                Recent fertilizer purchases

              </p>

            </div>

            <Button variant="outline">

              <Calendar className="w-4 h-4"/>

              Export

            </Button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              <thead>

                <tr className="border-b border-slate-800">

                  <th className="text-left py-3">Order ID</th>

                  <th className="text-left py-3">Fertilizer</th>

                  <th className="text-left py-3">Quantity</th>

                  <th className="text-left py-3">Status</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b border-slate-800 hover:bg-slate-900">

                  <td className="py-4">#RN2045</td>

                  <td>Organic Compost</td>

                  <td>3 Tons</td>

                  <td>

                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">

                      Delivered

                    </span>

                  </td>

                </tr>

                <tr className="border-b border-slate-800 hover:bg-slate-900">

                  <td className="py-4">#RN2046</td>

                  <td>Bio Fertilizer</td>

                  <td>2 Tons</td>

                  <td>

                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400">

                      On Route

                    </span>

                  </td>

                </tr>

                <tr>

                  <td className="py-4">#RN2047</td>

                  <td>Vermicompost</td>

                  <td>5 Tons</td>

                  <td>

                    <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400">

                      Processing

                    </span>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </Card>

        {/* Delivery Tracking */}

        <Card>

          <div className="flex justify-between items-center mb-6">

            <h2 className="font-bold">

              Delivery Tracking

            </h2>

            <Truck className="text-lime-400"/>

          </div>

          <div className="space-y-4">

            <div className="p-4 rounded-xl bg-slate-900">

              <h4 className="font-semibold">

                Vehicle

              </h4>

              <p className="text-slate-400 mt-2">

                TN-45 AB-2456

              </p>

            </div>

            <div className="p-4 rounded-xl bg-slate-900">

              <h4 className="font-semibold">

                Driver

              </h4>

              <p className="text-slate-400 mt-2">

                Mr. Arun Kumar

              </p>

            </div>

            <div className="p-4 rounded-xl bg-slate-900">

              <h4 className="font-semibold">

                Estimated Arrival

              </h4>

              <p className="text-lime-400 mt-2">

                Today - 05:30 PM

              </p>

            </div>

          </div>

          {orderPlaced && (

            <div className="mt-5 p-4 rounded-xl bg-green-500/10 border border-green-500/20">

              <p className="text-green-400 text-sm">

                ✔ Order placed successfully.

              </p>

            </div>

          )}

        </Card>

      </div>

      {/* =======================================================
                  SOIL HEALTH
      ======================================================= */}

      <div className="grid lg:grid-cols-2 gap-6">

        <Card>

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-bold">

              Soil Health Analysis

            </h2>

            <Sprout className="text-lime-400"/>

          </div>

          <div className="space-y-5">

            {metrics.map((item)=>(

              <div key={item.label}>

                <div className="flex justify-between mb-2">

                  <span>{item.label}</span>

                  <span>{item.value}</span>

                </div>

                <div className="w-full bg-slate-800 rounded-full h-3">

                  <div
                    className="bg-gradient-to-r from-lime-500 to-green-500 h-3 rounded-full"
                    style={{ width: "85%" }}
                  />

                </div>

              </div>

            ))}

          </div>

        </Card>

        {/* Weather */}

        <Card>

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-bold">

              Weather Forecast

            </h2>

            <CloudSun className="text-yellow-400"/>

          </div>

          <div className="text-center py-5">

            <CloudSun className="w-20 h-20 text-yellow-400 mx-auto"/>

            <h2 className="text-5xl font-bold mt-4">

              31°C

            </h2>

            <p className="text-slate-400 mt-3">

              Partly Cloudy

            </p>

          </div>

          <div className="grid grid-cols-3 gap-4 mt-6 text-center">

            <div>

              <p className="font-semibold">

                Humidity

              </p>

              <p className="text-slate-400 mt-2">

                68%

              </p>

            </div>

            <div>

              <p className="font-semibold">

                Rain

              </p>

              <p className="text-slate-400 mt-2">

                40%

              </p>

            </div>

            <div>

              <p className="font-semibold">

                Wind

              </p>

              <p className="text-slate-400 mt-2">

                14 km/h

              </p>

            </div>

          </div>

        </Card>

      </div>
            {/* =======================================================
                    AI CROP RECOMMENDATIONS
      ======================================================= */}

      <Card>

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold">

            AI Crop Recommendations

          </h2>

          <Cpu className="text-lime-400"/>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {recommendations.map((item,index)=>(

            <div
              key={index}
              className="flex gap-4 p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-lime-500 transition"
            >

              <CheckCircle2 className="text-lime-400 mt-1"/>

              <p className="text-slate-300">

                {item}

              </p>

            </div>

          ))}

        </div>

      </Card>

      {/* =======================================================
                    FARM ANALYTICS
      ======================================================= */}

      <Card>

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold">

            Farm Performance Analytics

          </h2>

          <BarChart3 className="text-lime-400"/>

        </div>

        <div className="space-y-5">

          {[
            {
              label:"Crop Yield",
              value:92
            },
            {
              label:"Soil Quality",
              value:88
            },
            {
              label:"Water Efficiency",
              value:81
            },
            {
              label:"Organic Farming Score",
              value:95
            },
            {
              label:"Fertilizer Efficiency",
              value:89
            }

          ].map((item,index)=>(

            <div key={index}>

              <div className="flex justify-between mb-2">

                <span>{item.label}</span>

                <span>{item.value}%</span>

              </div>

              <div className="w-full bg-slate-800 rounded-full h-3">

                <div
                  className="bg-gradient-to-r from-lime-500 to-green-500 h-3 rounded-full"
                  style={{width:`${item.value}%`}}
                />

              </div>

            </div>

          ))}

        </div>

      </Card>

      {/* =======================================================
                    QUICK ACTIONS & NOTIFICATIONS
      ======================================================= */}

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Quick Actions */}

        <Card>

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-bold">

              Quick Actions

            </h2>

            <Sparkles className="text-lime-400"/>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <Button className="h-24 flex-col">

              <ShoppingCart className="w-7 h-7"/>

              Buy Fertilizer

            </Button>

            <Button variant="secondary" className="h-24 flex-col">

              <Truck className="w-7 h-7"/>

              Track Order

            </Button>

            <Button variant="outline" className="h-24 flex-col">

              <Leaf className="w-7 h-7"/>

              Soil Report

            </Button>

            <Button variant="outline" className="h-24 flex-col">

              <MapPinned className="w-7 h-7"/>

              Nearby Centers

            </Button>

          </div>

        </Card>

        {/* Notifications */}

        <Card className="lg:col-span-2">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-bold">

              Notifications

            </h2>

            <Award className="text-lime-400"/>

          </div>

          <div className="space-y-5">

            {[
              {
                title:"Your fertilizer order has been dispatched.",
                time:"15 minutes ago"
              },
              {
                title:"AI recommends Organic Compost for next cultivation.",
                time:"1 hour ago"
              },
              {
                title:"Heavy rainfall expected tomorrow.",
                time:"2 hours ago"
              },
              {
                title:"Soil moisture dropped by 6%.",
                time:"Today"
              },
              {
                title:"New fertilizer stock available in marketplace.",
                time:"Yesterday"
              }

            ].map((item,index)=>(

              <div
                key={index}
                className="flex gap-4 items-start border-b border-slate-800 pb-5 last:border-none"
              >

                <div className="w-3 h-3 rounded-full bg-lime-500 mt-2"/>

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
                    FARM SUMMARY
      ======================================================= */}

      <Card>

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold">

            Farm Summary

          </h2>

          <Tractor className="text-lime-400"/>

        </div>

        <div className="grid md:grid-cols-4 gap-5">

          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">

            <Leaf className="text-lime-400 mb-3"/>

            <h3 className="text-3xl font-bold">

              42 T

            </h3>

            <p className="text-slate-400 mt-2">

              Fertilizer Purchased

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">

            <ShoppingCart className="text-cyan-400 mb-3"/>

            <h3 className="text-3xl font-bold">

              18

            </h3>

            <p className="text-slate-400 mt-2">

              Total Orders

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">

            <Sprout className="text-green-400 mb-3"/>

            <h3 className="text-3xl font-bold">

              92%

            </h3>

            <p className="text-slate-400 mt-2">

              Soil Health

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">

            <TrendingUp className="text-yellow-400 mb-3"/>

            <h3 className="text-3xl font-bold">

              +18%

            </h3>

            <p className="text-slate-400 mt-2">

              Crop Yield

            </p>

          </div>

        </div>

      </Card>

      {/* =======================================================
                    SUSTAINABILITY
      ======================================================= */}

      <Card>

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold">

            Sustainability Statistics

          </h2>

          <Leaf className="text-lime-400"/>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="text-center p-6 rounded-xl bg-slate-900 border border-slate-800">

            <Leaf className="w-12 h-12 mx-auto text-green-400 mb-4"/>

            <h3 className="text-4xl font-bold">

              3.6 T

            </h3>

            <p className="text-slate-400 mt-3">

              Chemical Fertilizer Reduced

            </p>

          </div>

          <div className="text-center p-6 rounded-xl bg-slate-900 border border-slate-800">

            <Sprout className="w-12 h-12 mx-auto text-lime-400 mb-4"/>

            <h3 className="text-4xl font-bold">

              94%

            </h3>

            <p className="text-slate-400 mt-3">

              Organic Farming Score

            </p>

          </div>

          <div className="text-center p-6 rounded-xl bg-slate-900 border border-slate-800">

            <Award className="w-12 h-12 mx-auto text-yellow-400 mb-4"/>

            <h3 className="text-4xl font-bold">

              A+

            </h3>

            <p className="text-slate-400 mt-3">

              Sustainability Rating

            </p>

          </div>

        </div>

      </Card>

      {/* =======================================================
                    SYSTEM STATUS
      ======================================================= */}

      <Card>

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold">

            System Status

          </h2>

          <Cpu className="text-lime-400"/>

        </div>

        <div className="grid md:grid-cols-4 gap-5">

          <div className="p-5 rounded-xl bg-slate-900">

            <Cpu className="text-lime-400 mb-3"/>

            <h4 className="font-semibold">

              AI Recommendation

            </h4>

            <p className="text-sm text-slate-400 mt-2">

              Active

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900">

            <Truck className="text-cyan-400 mb-3"/>

            <h4 className="font-semibold">

              Delivery Tracking

            </h4>

            <p className="text-sm text-slate-400 mt-2">

              Live

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900">

            <CloudSun className="text-yellow-400 mb-3"/>

            <h4 className="font-semibold">

              Weather Service

            </h4>

            <p className="text-sm text-slate-400 mt-2">

              Updated Every Hour

            </p>

          </div>

          <div className="p-5 rounded-xl bg-slate-900">

            <Leaf className="text-green-400 mb-3"/>

            <h4 className="font-semibold">

              Marketplace

            </h4>

            <p className="text-sm text-slate-400 mt-2">

              Online

            </p>

          </div>

        </div>

      </Card>

    </DashboardLayout>

  );

}