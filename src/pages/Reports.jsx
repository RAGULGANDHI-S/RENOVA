import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { BarChart3, Download } from 'lucide-react';


export const Reports = () => {

  return (

    <DashboardLayout
      title="Analytics & Sustainability Reports"
      subtitle="ESG compliance verification, carbon offset metrics, & waste audit logs"
    >


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


        {/* ANALYTICS */}

        <Card className="md:col-span-2 space-y-4">


          <div className="flex items-center justify-between border-b border-slate-800 pb-3">


            <h3 className="font-bold text-slate-100 flex items-center gap-2">

              <BarChart3 className="w-5 h-5 text-emerald-400"/>

              <span>
                Waste Diversion & Recycling Breakdown
              </span>

            </h3>



            <Button
              size="sm"
              variant="outline"
            >

              <Download className="w-4 h-4"/>

              <span>
                Download PDF Audit
              </span>

            </Button>


          </div>




          <div className="h-64 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-center p-6 text-center text-slate-400">


            <div>


              <p className="text-sm font-semibold text-slate-200">

                Interactive Analytics Visualizer

              </p>


              <p className="text-xs text-slate-500 mt-1">

                Organic Diversion vs Inorganic Recycling vs Carbon Credit Accumulation

              </p>


            </div>


          </div>


        </Card>





        {/* ESG */}

        <Card className="space-y-4">


          <h3 className="font-bold text-slate-100 border-b border-slate-800 pb-3">

            ESG Certification

          </h3>



          <div className="space-y-3 text-xs">


            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">


              <p className="text-emerald-400 font-bold">

                Grade A+ Zero Landfill

              </p>


              <p className="text-slate-400 mt-0.5">

                Verified by RENOVA Circular Protocol

              </p>


            </div>


          </div>


        </Card>



      </div>



    </DashboardLayout>

  );

};


export default Reports;