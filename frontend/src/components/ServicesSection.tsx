'use client';

import React from 'react';
import { 
  GraduationCap, Award, Stethoscope, Pill, Utensils, Heart, 
  Trees, Droplet, Compass, Briefcase, AlertTriangle, 
  Building2, Laptop, Brain, Dog 
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    { title: 'Education Support', desc: 'Free learning kits, uniforms, and evening tuition for rural children.', icon: GraduationCap },
    { title: 'Scholarships', desc: 'Financial grants supporting brilliant students for college degrees.', icon: Award },
    { title: 'Medical Camps', desc: 'Free doctor checkups, eye testing, and general surgeries.', icon: Stethoscope },
    { title: 'Free Medicines', desc: 'Distributing vital daily life-saving medications to needy elders.', icon: Pill },
    { title: 'Food Distribution', desc: 'Daily warm nutrition served to homeless and daily-wage laborers.', icon: Utensils },
    { title: 'Old Age Care', desc: 'Emotional support, health monitoring, and dignity kits for seniors.', icon: Heart },
    { title: 'Tree Plantation', desc: 'Mass eco-drives restoring native forests and lake bund ecosystems.', icon: Trees },
    { title: 'Blood Donation', desc: 'Organizing emergency blood donor drives and hospital networks.', icon: Droplet },
    { title: 'Career Guidance', desc: 'Mentorship workshops guiding rural youth toward career paths.', icon: Compass },
    { title: 'Women Empowerment', desc: 'Financial independence and self-help sewing unit initiatives.', icon: Briefcase },
    { title: 'Skill Training', desc: 'Practical vocational courses in computers, crafts, and trade.', icon: Briefcase },
    { title: 'Emergency Relief', desc: 'Immediate food, shelter, and medical kits during natural floods.', icon: AlertTriangle },
    { title: 'Community Development', desc: 'Sanitation, clean drinking water plants, and street lighting.', icon: Building2 },
    { title: 'Digital Literacy', desc: 'Equipping village schools with smart tablets and computer labs.', icon: Laptop },
    { title: 'Mental Health Support', desc: 'Counseling and stress relief workshops for students and families.', icon: Brain },
    { title: 'Animal Welfare', desc: 'Rescue, vaccination, and food support for stray dogs and cattle.', icon: Dog },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
            Our Services & Causes
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-3 mb-4">
            What We Do For The Community
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            We deliver 16 holistic community welfare programs designed to address urgent grassroots needs with dignity and long-term impact.
          </p>
        </div>

        {/* 16 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-gray-50 dark:bg-slate-800/80 border border-gray-200/80 dark:border-gray-700 hover:border-primary dark:hover:border-emerald-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-poppins font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-emerald-400 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
