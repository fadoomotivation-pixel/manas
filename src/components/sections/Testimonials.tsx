"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Vikas Gupta",
    location: "New Delhi",
    text: "The completely transparent process and the immediate registry gave me absolute peace of mind. Truly a premium experience.",
    rating: 5,
  },
  {
    name: "Mrs. Kavita Singh",
    location: "Gurugram",
    text: "Being just 7 minutes from Noida Airport was the deciding factor. The location is unmatched. A world-class township.",
    rating: 5,
  },
  {
    name: "Rajiv & Sunita Sharma",
    location: "Noida",
    text: "0% Interest EMIs and guaranteed firm registry made our decision effortless. Manas Property delivered exactly what they promised.",
    rating: 5,
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-[#0A0A14] text-white" id="testimonials">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <div className="text-center mb-20">
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Legacy of Trust
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-[family-name:var(--font-outfit)]">
            Hear From Our Residents
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group bg-white/5 rounded-3xl overflow-hidden shadow-xl border border-white/10 hover:shadow-2xl hover:border-[#D4AF37]/30 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm"
            >
              {/* Text Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex gap-1 mb-6 text-[#D4AF37]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-white/70 italic mb-8 flex-1 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-white/10 pt-6 mt-auto">
                  <p className="font-bold text-xl text-white">{testimonial.name}</p>
                  <p className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
