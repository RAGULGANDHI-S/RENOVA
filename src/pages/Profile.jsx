import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { useAuth } from '../context/AuthContext';

export const Profile = () => {

  const { user } = useAuth();


  return (

    <DashboardLayout
      title="Account Settings & Profile"
      subtitle="Manage your enterprise stakeholder identity and API keys"
    >


      <div className="max-w-2xl space-y-6">


        <Card className="space-y-6">


          {/* PROFILE HEADER */}

          <div className="flex items-center gap-4 border-b border-slate-800 pb-6">


            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-2xl border border-emerald-500/30">

              {user?.name?.[0] || 'U'}

            </div>



            <div>


              <h2 className="text-xl font-bold text-slate-100">

                {user?.name || "RENOVA User"}

              </h2>



              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/30">

                {user?.role || "User"} Stakeholder

              </span>


            </div>


          </div>





          {/* USER DETAILS */}


          <div className="space-y-4 text-xs">


            <div>


              <label className="block font-semibold text-slate-400 mb-1">

                Email Address

              </label>



              <input

                type="text"

                disabled

                value={user?.email || "admin@renova-ai.io"}

                className="w-full px-4 py-2.5 rounded-xl glass-input text-slate-200"

              />


            </div>





            <div>


              <label className="block font-semibold text-slate-400 mb-1">

                Organization / Commercial Entity

              </label>



              <input

                type="text"

                defaultValue="Grand Hyatt Chennai - Commercial Kitchen Division"

                className="w-full px-4 py-2.5 rounded-xl glass-input text-slate-200"

              />


            </div>





            <div>


              <label className="block font-semibold text-slate-400 mb-1">

                Account Type

              </label>



              <input

                type="text"

                disabled

                value={user?.role || "Enterprise Partner"}

                className="w-full px-4 py-2.5 rounded-xl glass-input text-slate-200"

              />


            </div>



          </div>





          {/* SAVE BUTTON */}


          <Button className="w-full">

            Save Profile Changes

          </Button>



        </Card>


      </div>



    </DashboardLayout>

  );

};


export default Profile;