"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is Ultrastar City an approved project?",
    answer: "Yes, Ultrastar City holds firm registry, mutation (Dakhil Kharij), NOC papers, and is fully approved. It is an entirely legal, secure, and white-labeled township.",
  },
  {
    question: "What is the booking amount?",
    answer: "You can book your plot with a token amount of just ₹11,000. Registry is done at 50% payment.",
  },
  {
    question: "Are there any hidden interest charges on EMI?",
    answer: "Absolutely not. We offer 0% Interest EMIs spanning across 12 to 24 months. You only pay for the exact value of the plot.",
  },
  {
    question: "How far is the site from Noida Airport?",
    answer: "The site is strategically located just 7 minutes away from the upcoming Noida International Airport (Jewar).",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#0A0A14] text-white border-y border-white/10" id="faq">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-20">
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Absolute Transparency
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-[family-name:var(--font-outfit)]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === idx ? 'border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10' : 'border-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-8 py-6 flex justify-between items-center bg-white/5 backdrop-blur-sm"
              >
                <span className="font-bold text-lg pr-8 text-white">{faq.question}</span>
                <span className="text-[#D4AF37] shrink-0">
                  {openIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6 text-white/60 leading-relaxed border-t border-white/10 pt-4 bg-black/20">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
