import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export const DashboardLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        <Sidebar />
        <main className="flex-1 p-6 md:p-8 space-y-6 overflow-y-auto">
          {title && (
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-100 tracking-tight">{title}</h1>
              {subtitle && <p className="text-sm text-slate-400 mt-1">{subtitle}</p>}
            </div>
          )}
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
