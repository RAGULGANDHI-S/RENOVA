import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import {
  Leaf,
  ShieldCheck,
  Cpu,
  Target,
  Sparkles,
  Recycle,
  Factory,
  Truck,
  Building2,
  Store,
  Sprout,
  ArrowRight,
  CheckCircle2,
  Globe,
  BarChart3,
  BrainCircuit
} from 'lucide-react';

export const About = () => {
  const technologies = [
    {
      title: "Artificial Intelligence",
      icon: <BrainCircuit className="w-7 h-7 text-emerald-400" />,
      description:
        "YOLO-powered computer vision automatically detects and classifies organic and inorganic waste with high accuracy."
    },
    {
      title: "IoT Smart Monitoring",
      icon: <Cpu className="w-7 h-7 text-cyan-400" />,
      description:
        "Smart bins, sensors and connected devices continuously monitor waste generation and send live updates."
    },
    {
      title: "Circular Marketplace",
      icon: <Recycle className="w-7 h-7 text-teal-400" />,
      description:
        "Hotels, restaurants, vendors and farmers are connected through a transparent circular economy."
    },
    {
      title: "Analytics",
      icon: <BarChart3 className="w-7 h-7 text-indigo-400" />,
      description:
        "Real-time dashboards help organizations understand sustainability performance and waste reduction."
    }
  ];

  const stakeholders = [
    {
      icon: <Building2 className="w-8 h-8 text-cyan-400" />,
      title: "Hotels",
      text: "Manage kitchen waste intelligently and schedule AI-assisted pickups."
    },
    {
      icon: <Store className="w-8 h-8 text-emerald-400" />,
      title: "Vendors",
      text: "Collect recyclable materials and participate in the circular economy."
    },
    {
      icon: <Factory className="w-8 h-8 text-amber-400" />,
      title: "Industries",
      text: "Monitor waste generation, compliance and environmental performance."
    },
    {
      icon: <Sprout className="w-8 h-8 text-lime-400" />,
      title: "Farmers",
      text: "Purchase certified organic compost directly from verified suppliers."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">

      <Navbar />

      <main className="flex-1">

        {/* ================= HERO ================= */}

        <section className="relative overflow-hidden py-24 px-6">

          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs uppercase tracking-widest font-bold mb-8">

              <Sparkles className="w-4 h-4" />

              Next Generation Circular Economy Platform

            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">

              About{" "}

              <span className="text-gradient">
                RENOVA-AI
              </span>

            </h1>

            <p className="max-w-4xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed">

              RENOVA-AI is an enterprise-grade intelligent waste management ecosystem
              designed to connect businesses, governments, recycling vendors,
              delivery partners and farmers through Artificial Intelligence,
              IoT automation and sustainable circular economy principles.

            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-12">

              <Button>
                Explore Platform
                <ArrowRight className="w-5 h-5"/>
              </Button>

              <Button variant="outline">
                Learn More
              </Button>

            </div>

          </div>

        </section>

        {/* ================= MISSION & VISION ================= */}

        <section className="max-w-7xl mx-auto px-6 pb-20">

          <div className="grid md:grid-cols-2 gap-8">

            <Card>

              <Target className="w-10 h-10 text-emerald-400 mb-6"/>

              <h2 className="text-2xl font-bold mb-4">

                Our Mission

              </h2>

              <p className="text-slate-400 leading-8">

                Our mission is to eliminate waste inefficiencies by combining
                Artificial Intelligence, Computer Vision, Smart Logistics,
                and Sustainable Agriculture into one connected ecosystem.

                Every kilogram of waste should become a valuable resource instead
                of ending up in landfills.

              </p>

            </Card>

            <Card>

              <Globe className="w-10 h-10 text-cyan-400 mb-6"/>

              <h2 className="text-2xl font-bold mb-4">

                Our Vision

              </h2>

              <p className="text-slate-400 leading-8">

                We envision smart cities where every hotel,
                restaurant, factory and household participates in a
                transparent circular economy that minimizes pollution,
                reduces carbon emissions and creates sustainable value.

              </p>

            </Card>

          </div>

        </section>

        {/* ================= TECHNOLOGIES ================= */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold mb-5">

              Core Technologies

            </h2>

            <p className="text-slate-400 max-w-3xl mx-auto">

              RENOVA-AI combines modern web technologies,
              Artificial Intelligence and cloud computing
              to build a scalable waste management ecosystem.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">

            {technologies.map((tech,index)=>(

              <Card key={index}>

                <div className="mb-6">

                  {tech.icon}

                </div>

                <h3 className="text-xl font-bold mb-3">

                  {tech.title}

                </h3>

                <p className="text-sm text-slate-400 leading-7">

                  {tech.description}

                </p>

              </Card>

            ))}

          </div>

        </section>
                {/* ================= IMPACT ================= */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold mb-5">
              Sustainability Impact
            </h2>

            <p className="text-slate-400 max-w-3xl mx-auto">
              Every successful waste collection contributes to cleaner cities,
              reduced landfill dependency and a healthier environment for future
              generations.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-6">

            <Card className="text-center">

              <Leaf className="w-10 h-10 text-emerald-400 mx-auto mb-4"/>

              <h3 className="text-4xl font-extrabold text-emerald-400">
                25K+
              </h3>

              <p className="text-slate-400 mt-3">
                Kilograms of Organic Waste Recycled
              </p>

            </Card>

            <Card className="text-center">

              <Recycle className="w-10 h-10 text-cyan-400 mx-auto mb-4"/>

              <h3 className="text-4xl font-extrabold text-cyan-400">
                120+
              </h3>

              <p className="text-slate-400 mt-3">
                Partner Organizations
              </p>

            </Card>

            <Card className="text-center">

              <Truck className="w-10 h-10 text-indigo-400 mx-auto mb-4"/>

              <h3 className="text-4xl font-extrabold text-indigo-400">
                850+
              </h3>

              <p className="text-slate-400 mt-3">
                Successful Waste Pickups
              </p>

            </Card>

            <Card className="text-center">

              <ShieldCheck className="w-10 h-10 text-amber-400 mx-auto mb-4"/>

              <h3 className="text-4xl font-extrabold text-amber-400">
                99.8%
              </h3>

              <p className="text-slate-400 mt-3">
                AI Detection Accuracy
              </p>

            </Card>

          </div>

        </section>

        {/* ================= STAKEHOLDERS ================= */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold mb-5">

              Who Uses RENOVA-AI

            </h2>

            <p className="text-slate-400 max-w-3xl mx-auto">

              Our platform is designed for every stakeholder involved
              in sustainable waste management.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">

            {stakeholders.map((item,index)=>(

              <Card key={index}>

                <div className="mb-6">

                  {item.icon}

                </div>

                <h3 className="text-xl font-bold mb-3">

                  {item.title}

                </h3>

                <p className="text-slate-400 leading-7 text-sm">

                  {item.text}

                </p>

              </Card>

            ))}

          </div>

        </section>

        {/* ================= WHY RENOVA ================= */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <Card>

            <h2 className="text-4xl font-bold mb-8 text-center">

              Why Choose RENOVA-AI?

            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              {[
                "AI-powered waste detection using YOLO Computer Vision",
                "Real-time monitoring with IoT integration",
                "Smart logistics and optimized pickup routes",
                "Marketplace connecting waste producers and farmers",
                "Enterprise dashboards for every stakeholder",
                "Cloud-based analytics and reporting",
                "Carbon footprint reduction tracking",
                "Scalable architecture for smart cities"
              ].map((item,index)=>(

                <div
                  key={index}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2 className="w-6 h-6 text-emerald-400 mt-1"/>

                  <p className="text-slate-300">

                    {item}

                  </p>

                </div>

              ))}

            </div>

          </Card>

        </section>

        {/* ================= ROADMAP ================= */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold">

              Future Roadmap

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "AI Waste Detection",
              "Smart IoT Bins",
              "Blockchain Waste Tracking",
              "Global Smart City Expansion"
            ].map((step,index)=>(

              <Card
                key={index}
                className="text-center"
              >

                <div className="w-14 h-14 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xl mx-auto mb-6">

                  {index+1}

                </div>

                <h3 className="font-bold text-lg">

                  {step}

                </h3>

              </Card>

            ))}

          </div>

        </section>

        {/* ================= CTA ================= */}

        <section className="px-6 pb-24">

          <div className="max-w-6xl mx-auto">

            <Card className="text-center py-16">

              <Sparkles className="w-14 h-14 text-emerald-400 mx-auto mb-6"/>

              <h2 className="text-4xl font-bold mb-6">

                Join the Circular Economy Revolution

              </h2>

              <p className="text-slate-400 max-w-3xl mx-auto mb-10 leading-8">

                Together we can transform waste into opportunity,
                build smarter cities and create a cleaner,
                greener future powered by Artificial Intelligence.

              </p>

              <Button size="lg">

                Get Started

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

export default About;