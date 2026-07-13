"use client";

import { motion } from "framer-motion";

const milestones = [
  { step: "01", title: "Initial Booking", desc: "Secure your preferred plot size (50, 100, or 200 Sq. Yds) with a minimal token amount of just ₹11,000.", status: "completed" },
  { step: "02", title: "50% Payment & Registry", desc: "Pay 50% of the total plot value and get immediate Registry and Mutation in your name.", status: "completed" },
  { step: "03", title: "Easy EMI Plan", desc: "Pay the remaining 50% balance in easy, interest-free EMIs over 12 to 24 months.", status: "in-progress" },
  { step: "04", title: "Immediate Possession", desc: "Get full possession of your plot immediately after registry and start constructing your dream home.", status: "upcoming" },
];

export default function Timeline() {
  return (
    <section className="py-32 bg-[#0A0A14] text-white border-y border-white/10" id="timeline">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-[family-name:var(--font-outfit)]">
            How to Book Your Plot
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            We've made owning a piece of premium real estate near Jewar Airport easier than ever with our transparent 4-step process.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center group">
                
                {/* Desktop Left Side (Step) */}
                <div className={`hidden md:block w-1/2 pr-16 text-right transition-all duration-300 opacity-100`}>
                  <div className="text-3xl font-black text-[#D4AF37] font-[family-name:var(--font-outfit)]">Step {item.step}</div>
                </div>

                {/* Node */}
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full border-4 border-[#0A0A14] md:-translate-x-1/2 z-10 transition-colors duration-500 bg-[#D4AF37]">
                </div>

                {/* Content */}
                <div className="pl-16 md:pl-0 md:w-1/2 md:pl-16">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`p-8 rounded-2xl border transition-all duration-300 bg-white/5 border-white/10 hover:border-[#D4AF37]/50 hover:shadow-2xl hover:shadow-[#D4AF37]/10 backdrop-blur-sm`}
                  >
                    <div className="md:hidden flex items-center gap-4 mb-4">
                      <div className="text-2xl font-black text-[#D4AF37] font-[family-name:var(--font-outfit)]">Step {item.step}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
