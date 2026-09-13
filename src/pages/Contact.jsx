import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Building2,
  Globe,
  MessageCircle,
  CheckCircle2,
  Headphones,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you for contacting RENOVA-AI! Our support team will reach you shortly."
    );

    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  const contactCards = [
    {
      icon: <Mail className="w-7 h-7 text-emerald-400" />,
      title: "Email Support",
      value: "support@renova-ai.io",
      desc: "Technical & General Queries"
    },
    {
      icon: <Phone className="w-7 h-7 text-cyan-400" />,
      title: "Call Us",
      value: "+91 98765 43210",
      desc: "Mon - Sat (9 AM - 6 PM)"
    },
    {
      icon: <MapPin className="w-7 h-7 text-indigo-400" />,
      title: "Head Office",
      value: "Chennai, Tamil Nadu",
      desc: "RENOVA-AI Innovation Center"
    },
    {
      icon: <Clock className="w-7 h-7 text-amber-400" />,
      title: "Working Hours",
      value: "09:00 AM - 06:00 PM",
      desc: "Sunday Closed"
    }
  ];

  return (

    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">

      <Navbar />

      <main className="flex-1">

        {/* HERO */}

        <section className="relative overflow-hidden py-24 px-6">

          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-emerald-500/30 bg-slate-900 text-emerald-400 text-xs uppercase tracking-widest font-bold mb-8">

              <Sparkles className="w-4 h-4"/>

              Let's Build a Greener Future Together

            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-8">

              Contact

              <span className="text-gradient">

                {" "}RENOVA-AI

              </span>

            </h1>

            <p className="max-w-3xl mx-auto text-lg text-slate-400 leading-8">

              Whether you're a hotel, restaurant, municipality,
              recycling company or farmer,
              our team is here to help you transform waste
              into sustainable value.

            </p>

          </div>

        </section>

        {/* CONTACT INFO */}

        <section className="max-w-7xl mx-auto px-6 pb-20">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {contactCards.map((item,index)=>(

              <Card key={index}>

                <div className="mb-5">

                  {item.icon}

                </div>

                <h3 className="text-xl font-bold mb-2">

                  {item.title}

                </h3>

                <p className="text-emerald-400 font-semibold">

                  {item.value}

                </p>

                <p className="text-sm text-slate-400 mt-2">

                  {item.desc}

                </p>

              </Card>

            ))}

          </div>

        </section>

        {/* CONTACT FORM */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <div className="grid lg:grid-cols-2 gap-10">

            <Card>

              <h2 className="text-3xl font-bold mb-8">

                Send us a Message

              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div>

                  <label className="block mb-2 text-sm font-semibold">

                    Full Name

                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl glass-input px-4 py-3"
                    placeholder="John Doe"
                  />

                </div>

                <div>

                  <label className="block mb-2 text-sm font-semibold">

                    Email Address

                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl glass-input px-4 py-3"
                    placeholder="john@example.com"
                  />

                </div>

                <div>

                  <label className="block mb-2 text-sm font-semibold">

                    Company / Organization

                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-xl glass-input px-4 py-3"
                    placeholder="ABC Pvt Ltd"
                  />

                </div>

                <div>

                  <label className="block mb-2 text-sm font-semibold">

                    Subject

                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl glass-input px-4 py-3"
                    placeholder="Project Inquiry"
                  />

                </div>
                                <div>

                  <label className="block mb-2 text-sm font-semibold">

                    Message

                  </label>

                  <textarea
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl glass-input px-4 py-3 resize-none"
                    placeholder="Tell us about your waste management requirements..."
                  />

                </div>

                <Button
                  type="submit"
                  className="w-full"
                >

                  <Send className="w-5 h-5"/>

                  Send Message

                </Button>

              </form>

            </Card>

            {/* RIGHT SIDE */}

            <div className="space-y-6">

              <Card>

                <Headphones className="w-10 h-10 text-emerald-400 mb-6"/>

                <h2 className="text-2xl font-bold mb-4">

                  Why Contact RENOVA-AI?

                </h2>

                <div className="space-y-4">

                  {[
                    "Enterprise AI Waste Management",
                    "Smart Bin IoT Integration",
                    "YOLO Computer Vision Deployment",
                    "Circular Economy Marketplace",
                    "FastAPI Backend Integration",
                    "Analytics & Sustainability Reports"
                  ].map((item,index)=>(

                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle2 className="w-5 h-5 text-emerald-400"/>

                      <span className="text-slate-300">

                        {item}

                      </span>

                    </div>

                  ))}

                </div>

              </Card>

              <Card>

                <Building2 className="w-10 h-10 text-cyan-400 mb-6"/>

                <h2 className="text-2xl font-bold mb-4">

                  Office Information

                </h2>

                <div className="space-y-5">

                  <div>

                    <p className="text-sm text-slate-500">

                      Headquarters

                    </p>

                    <p className="font-semibold text-slate-200">

                      RENOVA-AI Innovation Center

                    </p>

                  </div>

                  <div>

                    <p className="text-sm text-slate-500">

                      Address

                    </p>

                    <p className="font-semibold text-slate-200">

                      Chennai, Tamil Nadu, India

                    </p>

                  </div>

                  <div>

                    <p className="text-sm text-slate-500">

                      Business Hours

                    </p>

                    <p className="font-semibold text-slate-200">

                      Monday - Saturday

                    </p>

                    <p className="text-emerald-400">

                      09:00 AM - 06:00 PM

                    </p>

                  </div>

                </div>

              </Card>

            </div>

          </div>

        </section>

        {/* FAQ */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold mb-4">

              Frequently Asked Questions

            </h2>

            <p className="text-slate-400">

              Answers to common questions about RENOVA-AI.

            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                q:"Can hotels use RENOVA-AI?",
                a:"Yes. Hotels can automatically detect, classify and schedule pickups for organic and recyclable waste."
              },
              {
                q:"Does RENOVA-AI support AI detection?",
                a:"Yes. Our platform integrates YOLO-based computer vision for intelligent waste classification."
              },
              {
                q:"Can farmers purchase compost?",
                a:"Absolutely. Farmers can buy verified compost through the marketplace."
              },
              {
                q:"Is the platform scalable?",
                a:"Yes. RENOVA-AI is designed for institutions, municipalities and smart city deployments."
              }
            ].map((faq,index)=>(

              <Card key={index}>

                <MessageCircle className="w-8 h-8 text-emerald-400 mb-4"/>

                <h3 className="font-bold text-lg mb-3">

                  {faq.q}

                </h3>

                <p className="text-slate-400 leading-7">

                  {faq.a}

                </p>

              </Card>

            ))}

          </div>

        </section>

        {/* CTA */}

        <section className="px-6 pb-24">

          <div className="max-w-6xl mx-auto">

            <Card className="text-center py-16">

              <Globe className="w-14 h-14 text-emerald-400 mx-auto mb-6"/>

              <h2 className="text-4xl font-bold mb-6">

                Ready to Build a Sustainable Future?

              </h2>

              <p className="text-slate-400 max-w-3xl mx-auto mb-10 leading-8">

                Join RENOVA-AI and become part of an intelligent,
                AI-powered circular economy that transforms waste
                into valuable resources.

              </p>

              <Button size="lg">

                Contact Our Team

                <ArrowRight className="w-5 h-5"/>

              </Button>

            </Card>

          </div>

        </section>

      </main>

      <Footer />

    </div>

  );

};

export default Contact;