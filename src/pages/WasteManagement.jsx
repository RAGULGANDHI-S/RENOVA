import React, { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import Card from '../components/common/Card';
import CameraFeed from '../components/ai/CameraFeed';
import DetectionBox from '../components/ai/DetectionBox';


export const WasteManagement = () => {

  const [activeDetection, setActiveDetection] = useState(null);


  return (

    <DashboardLayout
      title="AI Waste Detection & Management"
      subtitle="Real-time YOLO organic vs inorganic material classification engine"
    >


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


        {/* AI CAMERA */}

        <CameraFeed

          onDetectionComplete={(result)=>setActiveDetection(result)}

        />




        {/* DETAILS */}

        <div className="space-y-6">


          <DetectionBox detection={activeDetection}/>



          <Card className="space-y-4">


            <h3 className="font-bold text-slate-100 border-b border-slate-800 pb-3">

              AI Vision Pipeline Information

            </h3>



            <p className="text-xs text-slate-400 leading-relaxed">

              Our YOLOv8 deep learning model processes camera feeds
              at 30 FPS to detect bounding boxes around food waste,
              plastic bottles, paper, and metal scrap, classifying
              them instantly into Organic (Compostable) or Inorganic
              (Recyclable) streams.

            </p>




            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 flex items-center justify-between">


              <span>
                FastAPI Inference API
              </span>


              <span>
                Online • 45ms Latency
              </span>


            </div>



          </Card>


        </div>


      </div>


    </DashboardLayout>

  );

};


export default WasteManagement;