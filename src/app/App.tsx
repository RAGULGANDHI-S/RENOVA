import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bot, Cpu, ShoppingBag, BarChart3, Globe, ShieldCheck, Sparkles, Activity } from 'lucide-react';

export const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ta' : 'en');
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-white flex flex-col justify-between selection:bg-emerald-500 selection:text-white">
      {/* Header Bar */}
      <header className="glass-panel sticky top-0 z-50 px-6 py-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center glow-emerald">
            <Sparkles className="w-6 h-6 text-slate-950" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              RENOVA-AI
            </h1>
            <p className="text-xs text-slate-400 font-mono">ENTERPRISE PLATFORM v1.0</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 transition border border-slate-700 text-xs font-medium"
          >
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>{i18n.language === 'en' ? 'தமிழ்' : 'English'}</span>
          </button>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            System Online
          </span>
        </div>
      </header>

      {/* Main Core Hero */}
      <main className="container mx-auto px-6 py-16 flex-1 flex flex-col justify-center items-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
          <Activity className="w-4 h-4 animate-pulse" />
          <span>Next-Gen Autonomous Waste Intelligence Engine</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-tight mb-6">
          {t('hero.title')}
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          {t('hero.subtitle')}
        </p>

        {/* Core Feature Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-5xl mt-8">
          <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all group text-left">
            <Bot className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">YOLOv8 Vision AI</h3>
            <p className="text-sm text-slate-400">Real-time webcam and camera feed material classification pipeline.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all group text-left">
            <Cpu className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">IoT Smart Telemetry</h3>
            <p className="text-sm text-slate-400">ESP32 sensor feed simulator for fill level, weight, and automated gates.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-teal-500/50 transition-all group text-left">
            <ShoppingBag className="w-8 h-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Circular Marketplace</h3>
            <p className="text-sm text-slate-400">B2B recycled material catalog, smart checkout & automated invoicing.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all group text-left">
            <BarChart3 className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Multi-Stakeholder</h3>
            <p className="text-sm text-slate-400">Tailored dashboards for Hotels, Vendors, Farmers, & Super Admins.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 px-6 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>RENOVA-AI Enterprise Framework &bull; Independent Project</span>
        </div>
        <p>&copy; {new Date().getFullYear()} RENOVA-AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
