import React from 'react';
import { CheckCircle, AlertTriangle, Sparkles, Tag, ShieldCheck } from 'lucide-react';

export const DetectionBox = ({ detection }) => {
  if (!detection) return null;

  const isOrganic = detection.category === 'Organic';

  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-700/80 space-y-4 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-400" />
          <h4 className="font-bold text-slate-100">YOLOv8 Detection Result</h4>
        </div>
        <span className="text-xs font-mono text-slate-400">ID: {detection.id}</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <p className="text-xs text-slate-400 mb-1">Detected Material</p>
          <p className="text-lg font-bold text-emerald-400">{detection.label}</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <p className="text-xs text-slate-400 mb-1">Confidence Score</p>
          <p className="text-lg font-bold text-cyan-400">{(detection.confidence * 100).toFixed(1)}%</p>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {isOrganic ? (
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>
          )}
          <div>
            <p className="text-sm font-bold text-slate-200">
              {isOrganic ? 'Organic Waste (Compostable)' : 'Inorganic Waste (Recyclable)'}
            </p>
            <p className="text-xs text-slate-400">
              {isOrganic ? 'Suitable for bio-fertilizer processing' : 'Route to scrap & vendor recycling facility'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetectionBox;
