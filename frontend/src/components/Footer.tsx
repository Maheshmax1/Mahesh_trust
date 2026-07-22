'use client';

import React from 'react';
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, Twitter, ArrowUp } from 'lucide-react';

export const Footer: React.FC<{ setActiveSection: (s: string) => void }> = ({ setActiveSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative">
      {/* Back to Top Floating Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 w-12 h-12 btn-primary-gradient rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="Back To Top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: About Trust */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full btn-primary-gradient flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-current" />
              </div>
              <span className="font-poppins font-bold text-xl text-white tracking-tight">
                Mahesh Trust
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering communities through accessible education, free healthcare camps, environmental drives, and sustainable women empowerment programs across Tamil Nadu.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-white font-poppins font-semibold text-base mb-4 border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['about', 'services', 'projects', 'gallery', 'volunteer', 'donate', 'events', 'transparency'].map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => {
                      setActiveSection(sec);
                      const el = document.getElementById(sec);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-primary transition-colors capitalize text-left flex items-center space-x-1.5"
                  >
                    <span className="text-accent">›</span>
                    <span>{sec.replace('-', ' ')}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Trust Programs */}
          <div>
            <h4 className="text-white font-poppins font-semibold text-base mb-4 border-b border-slate-800 pb-2">
              Our Key Programs
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>• Rural Digital Education & Scholarships</li>
              <li>• Free Medical & Eye Examination Camps</li>
              <li>• Daily Wholesome Meals & Food Security</li>
              <li>• Project Shakti: Women Self-Reliance</li>
              <li>• Tree Plantation & Eco Conservation</li>
              <li>• Senior Citizen Dignity & Care</li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="text-white font-poppins font-semibold text-base mb-4 border-b border-slate-800 pb-2">
              Reach Out
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>No. 42, Karunya Nagar, Main Road, Chennai, Tamil Nadu 600001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:6379095634" className="hover:text-white transition-colors">+91 6379095634</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:Maheshshan2409@gmail.com" className="hover:text-white transition-colors">Maheshshan2409@gmail.com</a>
              </div>
            </div>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-emerald-900/40 border border-emerald-500/30 text-emerald-400 text-xs rounded-full">
                Tax Deductible under Section 80G
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} Mahesh Trust & NGO. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
