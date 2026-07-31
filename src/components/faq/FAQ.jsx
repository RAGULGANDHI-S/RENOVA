import React, { useState } from 'react';

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How long does physical hardware deployment take at a resort or industrial kitchen?',
      a: 'RENOVA edge cameras and smart container sensors are plug-and-play. Setup takes under 4 hours per facility. Wireless LTE/5G telemetry connects directly to our cloud AI engine without requiring local network modifications.'
    },
    {
      q: 'How does RENOVA verify chemical purity and compost quality?',
      a: 'Our thermophilic bio-reactors maintain automated temperature, humidity, and airflow telemetry. Every batch is tested with near-infrared sensors to guarantee zero pathogen presence and heavy metal compliance under USDA & EU organic standards.'
    },
    {
      q: 'What is the average Return on Investment (ROI) timeline for commercial clients?',
      a: 'Commercial hospitality clients typically see positive cash flow within 60 to 90 days by reducing waste hauling tipping fees and monetizing high-purity recyclable streams on our vendor auction exchange.'
    },
    {
      q: 'Can RENOVA integrate with existing enterprise ERP and ESG reporting platforms?',
      a: 'Yes. RENOVA provides REST APIs and pre-built connectors for SAP, Oracle Cloud, Salesforce Net Zero Cloud, and Workday ESG to automate monthly compliance filings.'
    }
  ];

  return (
    <section id="faq" className="section-padding" style={{ background: '#090d16', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-glow" style={{ marginBottom: '1rem' }}>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Enterprise & Technical <span className="gradient-emerald-cyan">Inquiries</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                borderRadius: '16px',
                padding: '1.5rem 2.0rem',
                cursor: 'pointer',
                border: openIdx === idx ? '1px solid #10B981' : '1px solid rgba(255,255,255,0.08)'
              }}
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>
                  {faq.q}
                </h4>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: openIdx === idx ? '#10B981' : 'rgba(255,255,255,0.1)',
                  color: openIdx === idx ? '#090D16' : '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  flexShrink: 0
                }}>
                  {openIdx === idx ? '−' : '+'}
                </div>
              </div>

              {openIdx === idx && (
                <div style={{ marginTop: '1rem', color: '#94a3b8', fontSize: '0.98rem', lineHeight: '1.7', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
