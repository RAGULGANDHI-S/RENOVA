import React, { useRef, useState } from 'react';
import { Camera, RefreshCw, Upload, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import { useAI } from '../../context/AIContext';

export const CameraFeed = ({ onDetectionComplete }) => {
  const [activeTab, setActiveTab] = useState('upload'); // 'upload' | 'camera'
  const [previewImage, setPreviewImage] = useState(null);
  const { runDetection, isAnalyzing } = useAI();
  const fileInputRef = useRef(null);

  const sampleImages = [
    { name: 'Organic Waste', url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80' },
    { name: 'Plastic Bottles', url: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80' },
    { name: 'Paper & Boxes', url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80' },
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      triggerAnalysis(url);
    }
  };

  const selectSample = (url) => {
    setPreviewImage(url);
    triggerAnalysis(url);
  };

  const triggerAnalysis = async (imgUrl) => {
    const res = await runDetection(imgUrl);
    if (onDetectionComplete) {
      onDetectionComplete(res);
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Camera className="w-5 h-5 text-emerald-400" />
          <span>Waste Vision Feed</span>
        </h3>
        <div className="flex gap-2 bg-slate-900/80 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('upload')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === 'upload' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Upload Image
          </button>
          <button
            onClick={() => setActiveTab('camera')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === 'camera' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Live Camera
          </button>
        </div>
      </div>

      {activeTab === 'upload' ? (
        <div className="space-y-4">
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-700 hover:border-emerald-500/50 rounded-2xl p-8 text-center cursor-pointer bg-slate-900/40 hover:bg-slate-900/80 transition flex flex-col items-center justify-center gap-3 group relative overflow-hidden min-h-[220px]"
          >
            {previewImage ? (
              <div className="relative w-full h-48 rounded-xl overflow-hidden">
                <img src={previewImage} alt="Waste Feed" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-slate-900/90 text-emerald-400 text-xs font-bold border border-emerald-500/40 flex items-center gap-2">
                    <RefreshCw className={`w-4 h-4 ${isAnalyzing ? 'animate-spin' : ''}`} />
                    Change Image
                  </span>
                </div>
              </div>
            ) : (
              <>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-200">Click to upload waste photo</p>
                  <p className="text-xs text-slate-500">Supports JPG, PNG, WEBP</p>
                </div>
              </>
            )}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              className="hidden"
            />
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400 mb-2">Or select sample image:</p>
            <div className="grid grid-cols-3 gap-3">
              {sampleImages.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => selectSample(s.url)}
                  className="rounded-xl overflow-hidden border border-slate-800 hover:border-emerald-500/60 transition group relative text-left"
                >
                  <img src={s.url} alt={s.name} className="w-full h-16 object-cover group-hover:scale-105 transition-transform" />
                  <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-slate-950/80 text-[10px] text-slate-300 font-medium">
                    {s.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="border border-slate-800 rounded-2xl p-8 text-center bg-slate-900/50 flex flex-col items-center justify-center gap-4 min-h-[260px]">
          <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 animate-pulse">
            <Camera className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-200">Camera Feed Initialized</p>
            <p className="text-xs text-slate-500">Connect WebRTC camera stream for automated conveyor sorting</p>
          </div>
          <Button size="sm" onClick={() => triggerAnalysis(sampleImages[0].url)} isLoading={isAnalyzing}>
            <Sparkles className="w-4 h-4" />
            Capture Snapshot
          </Button>
        </div>
      )}
    </div>
  );
};

export default CameraFeed;
