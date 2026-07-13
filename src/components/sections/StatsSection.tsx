"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "7 Min", label: "To Noida Airport" },
  { value: "5 Min", label: "To Yamuna Exp." },
  { value: "7 Min", label: "To Film City" },
  { value: "2 Min", label: "To Transport City" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="bg-[#0A0A14] py-20 border-y border-white/10" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-[#D4AF37] mb-2 font-[family-name:var(--font-outfit)]">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm md:text-base font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
