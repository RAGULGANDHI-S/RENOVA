import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, UserPlus } from 'lucide-react';

import Button from '../components/common/Button';
import Card from '../components/common/Card';


export const Register = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Hotel',
    organization: ''
  });


  const navigate = useNavigate();



  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

  };



  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Registered User:", formData);

    alert('Account created successfully! Please sign in.');

    navigate('/login');

  };



  return (

    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">


      <Card className="w-full max-w-md p-8 border border-slate-800">


        {/* HEADER */}

        <div className="text-center space-y-3 mb-8">


          <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-slate-950 mx-auto glow-cyan">

            <Sparkles className="w-6 h-6"/>

          </div>



          <h2 className="text-2xl font-extrabold tracking-tight">

            Create Enterprise Account

          </h2>



          <p className="text-xs text-slate-400">

            Join the RENOVA-AI circular waste network

          </p>


        </div>





        {/* FORM */}


        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >



          <div>

            <label className="block text-xs font-semibold text-slate-300 mb-1">

              Full Name

            </label>


            <input

              name="name"

              type="text"

              required

              value={formData.name}

              onChange={handleChange}

              placeholder="Jane Smith"

              className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-slate-100"

            />

          </div>





          <div>

            <label className="block text-xs font-semibold text-slate-300 mb-1">

              Organization / Entity Name

            </label>


            <input

              name="organization"

              type="text"

              required

              value={formData.organization}

              onChange={handleChange}

              placeholder="Grand Hyatt Chennai / BioTerra Organics"

              className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-slate-100"

            />

          </div>





          <div>

            <label className="block text-xs font-semibold text-slate-300 mb-1">

              Primary Role

            </label>


            <select

              name="role"

              value={formData.role}

              onChange={handleChange}

              className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-slate-100 bg-slate-900"

            >

              <option value="Hotel">
                Hotel
              </option>

              <option value="Restaurant">
                Restaurant
              </option>

              <option value="Vendor">
                Recycling Vendor
              </option>

              <option value="Farmer">
                Organic Farmer
              </option>

              <option value="Delivery">
                Logistics Delivery Agent
              </option>

              <option value="Admin">
                Administrator
              </option>


            </select>


          </div>





          <div>

            <label className="block text-xs font-semibold text-slate-300 mb-1">

              Email

            </label>


            <input

              name="email"

              type="email"

              required

              value={formData.email}

              onChange={handleChange}

              placeholder="contact@entity.com"

              className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-slate-100"

            />


          </div>





          <div>

            <label className="block text-xs font-semibold text-slate-300 mb-1">

              Password

            </label>


            <input

              name="password"

              type="password"

              required

              value={formData.password}

              onChange={handleChange}

              className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-slate-100"

            />


          </div>





          <Button
            type="submit"
            className="w-full"
          >

            <UserPlus className="w-4 h-4"/>

            Create Account


          </Button>





          <p className="text-center text-xs text-slate-500">


            Already registered?{' '}


            <Link
              to="/login"
              className="text-emerald-400 font-semibold hover:underline"
            >

              Sign in

            </Link>


          </p>



        </form>



      </Card>



    </div>

  );

};


export default Register;