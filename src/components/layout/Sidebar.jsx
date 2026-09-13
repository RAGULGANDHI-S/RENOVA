import React, { useState } from "react";
import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  LayoutDashboard,
  Trash2,
  ShoppingBag,
  BarChart3,
  Users,
  Truck,
  Leaf,
  Building2,
  Store,
  Settings,
  Bell,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {

  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const [collapsed, setCollapsed] = useState(false);

  const menu = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: `/dashboard/${user?.role?.toLowerCase() || "admin"}`
    },
    {
      title: "Waste Management",
      icon: Trash2,
      path: "/waste-management"
    },
    {
      title: "Marketplace",
      icon: ShoppingBag,
      path: "/marketplace"
    },
    {
      title: "Reports",
      icon: BarChart3,
      path: "/reports"
    },
    {
      title: "Users",
      icon: Users,
      path: "/users"
    },
    {
      title: "Delivery",
      icon: Truck,
      path: "/delivery"
    },
    {
      title: "Farmers",
      icon: Leaf,
      path: "/farmers"
    },
    {
      title: "Hotels",
      icon: Building2,
      path: "/hotels"
    },
    {
      title: "Vendors",
      icon: Store,
      path: "/vendors"
    },
    {
      title: "Notifications",
      icon: Bell,
      path: "/notifications"
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings"
    },
    {
      title: "Support",
      icon: HelpCircle,
      path: "/support"
    }
  ];

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <aside
      className={`sticky top-0 h-screen border-r border-slate-800 bg-slate-950 transition-all duration-300 ${
        collapsed ? "w-24" : "w-72"
      }`}
    >
      <div className="flex h-full flex-col">

        {/* Logo */}

        <div className="flex items-center justify-between border-b border-slate-800 p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-black">

              <Sparkles size={22} />

            </div>

            {!collapsed && (
              <div>
                <h2 className="font-black text-lg text-white">
                  RENOVA-AI
                </h2>

                <p className="text-xs text-slate-400">
                  Smart Waste Platform
                </p>
              </div>
            )}
          </div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-lg border border-slate-700 p-2 hover:bg-slate-800"
          >
            {collapsed ? (
              <ChevronRight size={18} />
            ) : (
              <ChevronLeft size={18} />
            )}
          </button>
        </div>

        {/* User */}

        <div className="border-b border-slate-800 p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 font-bold text-black">
              {user?.name?.charAt(0)?.toUpperCase() || "A"}
            </div>

            {!collapsed && (
              <div>
                <h3 className="font-semibold text-white">
                  {user?.name}
                </h3>

                <p className="text-xs uppercase tracking-wider text-emerald-400">
                  {user?.role}
                </p>
              </div>
            )}
          </div>

        </div>

        {/* Navigation */}

        <nav className="flex-1 overflow-y-auto px-3 py-5">

          {menu.map((item) => {

            const Icon = item.icon;

            return (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                    isActive
                      ? "bg-emerald-500 text-black font-bold"
                      : "text-slate-400 hover:bg-slate-900 hover:text-white"
                  }`
                }
              >
                <Icon size={20} />

                {!collapsed && (
                  <span>{item.title}</span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Logout */}

        <div className="border-t border-slate-800 p-4">

          <button
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-4 py-3 font-semibold text-white hover:bg-red-500"
          >
            <LogOut size={20} />

            {!collapsed && "Logout"}
          </button>

        </div>

      </div>
    </aside>
  );
};

export default Sidebar;