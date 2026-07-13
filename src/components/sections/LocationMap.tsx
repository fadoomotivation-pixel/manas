"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Plane } from "lucide-react";

export default function LocationMap() {
  return (
    <section className="py-32 bg-[#0A0A14] text-white border-y border-white/10" id="location">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Strategic Connectivity
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 font-[family-name:var(--font-outfit)]">
              जेवर एयरपोर्ट के नज़दीक बेहतरीन लोकेशन
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Manas Property is perfectly situated near the upcoming Noida International Airport (Jewar). Directly connected via Mumbai Jewar Link Road and Service Roads, ensuring high ROI and seamless connectivity.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition-colors backdrop-blur-sm">
                <div className="bg-[#D4AF37] p-3 rounded-xl text-[#0A0A14]">
                  <Plane size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">7 Minutes to Noida Airport</h4>
                  <p className="text-white/50 text-sm">Ultra-close proximity to the upcoming Jewar International Airport.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition-colors backdrop-blur-sm">
                <div className="bg-[#D4AF37] p-3 rounded-xl text-[#0A0A14]">
                  <Navigation size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Mumbai Jewar Link Road</h4>
                  <p className="text-white/50 text-sm">Direct access from the proposed site to major highways including Yamuna Expressway (5 Min).</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition-colors backdrop-blur-sm">
                <div className="bg-[#D4AF37] p-3 rounded-xl text-[#0A0A14]">
                  <Car size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Industrial & Hub Proximity</h4>
                  <p className="text-white/50 text-sm">7 Min to Film City, 6 Min to YEIDA Industrial Area, and 2 Min to Transport City.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative w-full h-[400px] md:h-[500px] bg-white/5 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <iframe 
                src="https://maps.google.com/maps?q=28.218502,77.529564&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'contrast(1.2) opacity(0.9) invert(90%) hue-rotate(180deg)' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute inset-0 border-[8px] border-[#D4AF37]/20 rounded-3xl pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
