"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "50 Sq. Yards",
    dimensions: "15' x 30' Dimensions",
    price: "₹7,50,000",
    booking: "₹11,000",
    emi12: "₹30,375",
    emi24: "₹15,187",
  },
  {
    title: "100 Sq. Yards",
    dimensions: "25' x 36' Dimensions",
    price: "₹15,00,000",
    booking: "₹21,000",
    emi12: "₹61,625",
    emi24: "₹30,812",
    featured: true,
  },
  {
    title: "200 Sq. Yards",
    dimensions: "30' x 60' Dimensions",
    price: "₹30,00,000",
    booking: "₹51,000",
    emi12: "₹1,22,875",
    emi24: "₹61,437",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-32 bg-[#0A0A14] text-white" id="projects">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20">
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Plot Sizes
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 font-[family-name:var(--font-outfit)]">
            प्लॉट ही प्लॉट
          </h2>
          
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white/5 border border-white/10 px-8 py-4 rounded-full shadow-lg backdrop-blur-md">
            <span className="text-lg">Registry: <strong className="text-white">At 50% Payment</strong></span>
            <span className="hidden sm:block text-white/30">|</span>
            <span className="text-lg">Booking Starts: <strong className="text-[#D4AF37]">₹11,000</strong></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative bg-white/5 rounded-3xl p-8 transition-shadow duration-300 backdrop-blur-sm ${
                project.featured 
                  ? "border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/20 scale-105 z-10" 
                  : "border border-white/10 shadow-xl shadow-black/50"
              }`}
            >
              {project.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#0A0A14] px-6 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8 border-b border-white/10 pb-8">
                <h3 className="text-3xl font-black mb-2 text-white font-[family-name:var(--font-outfit)]">{project.title}</h3>
                <p className="text-white/60 font-medium">{project.dimensions}</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="text-4xl font-black text-[#D4AF37] mb-2">{project.price}</div>
                <div className="text-sm font-bold text-white/80 uppercase tracking-wider">
                  Booking: {project.booking}
                </div>
              </div>

              <div className="bg-black/20 rounded-2xl p-6 mb-8 border border-white/5">
                <div className="text-center text-xs font-bold text-white/50 uppercase tracking-widest mb-4">
                  Easy EMI Options
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white/70 font-medium">12 Months</span>
                  <span className="font-bold text-white">{project.emi12}/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 font-medium">24 Months</span>
                  <span className="font-bold text-white">{project.emi24}/mo</span>
                </div>
              </div>

              <a href="https://wa.me/919313697655" target="_blank" rel="noreferrer" className={`block text-center w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-colors ${
                project.featured
                  ? "bg-[#D4AF37] text-[#0A0A14] hover:bg-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}>
                Book Now
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
