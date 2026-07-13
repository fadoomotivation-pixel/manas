"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-[#0A0A14]/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className={clsx("text-2xl font-black tracking-tight font-[family-name:var(--font-outfit)]", isScrolled ? "text-white" : "text-white")}>
          Manas Property
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {["Overview", "Projects", "Location", "ROI", "About"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={clsx(
                "text-sm font-medium uppercase tracking-widest hover:text-[#D4AF37] transition-colors text-white"
              )}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link 
            href="#contact" 
            className="px-8 py-3 bg-[#D4AF37] text-[#0A0A14] font-bold text-sm tracking-wider uppercase hover:bg-white transition-all rounded-sm"
          >
            Inquire Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0A0A14] border-b border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-8 gap-6">
              {["Overview", "Projects", "Location", "ROI", "About"].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white uppercase tracking-wider hover:text-[#D4AF37]"
                >
                  {item}
                </Link>
              ))}
              <Link 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-8 py-4 bg-[#D4AF37] text-[#0A0A14] font-bold text-center text-sm tracking-wider uppercase mt-4"
              >
                Inquire Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
