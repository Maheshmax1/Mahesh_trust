'use client';

import React from 'react';
import { Heart, UserPlus, ShieldCheck, Users, GraduationCap, Home, Award } from 'lucide-react';

export const Hero: React.FC<{ setActiveSection: (s: string) => void }> = ({ setActiveSection }) => {
  const counterStats = [
    { label: 'People Helped', count: '10,000+', icon: Users, color: 'from-emerald-500 to-teal-600' },
    { label: 'Children Supported', count: '2,500+', icon: GraduationCap, color: 'from-blue-500 to-indigo-600' },
    { label: 'Villages Reached', count: '100+', icon: Home, color: 'from-amber-500 to-orange-600' },
    { label: 'Active Volunteers', count: '250+', icon: UserPlus, color: 'from-purple-500 to-pink-600' },
    { label: 'Medical Camps', count: '500+', icon: Award, color: 'from-rose-500 to-red-600' },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Rich Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 transition-transform duration-10000 animate-pulse-subtle"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920&auto=format&fit=crop')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/85 to-primary-dark/80 z-10" />

      {/* Floating Animated Shapes in Background */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-float-slow z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float-slow z-10 pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent font-semibold text-xs mb-6 tracking-wide">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Registered Non-Profit & Public Charitable Trust</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-white drop-shadow-md">
            Together We Can <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
              Build a Better Future
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 mb-8 leading-relaxed font-light">
            Supporting education, healthcare, environment, women empowerment and community development through compassion and action.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <button
              onClick={() => {
                setActiveSection('donate');
                const el = document.getElementById('donate');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-accent-gradient px-7 py-3.5 rounded-full font-bold text-sm tracking-wide flex items-center space-x-2 shadow-xl hover:scale-105 transition-all"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Donate Now</span>
            </button>

            <button
              onClick={() => {
                setActiveSection('volunteer');
                const el = document.getElementById('volunteer');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white px-7 py-3.5 rounded-full font-bold text-sm tracking-wide flex items-center space-x-2 transition-all hover:scale-105"
            >
              <UserPlus className="w-4 h-4" />
              <span>Become Volunteer</span>
            </button>
          </div>

        </div>

        {/* Animated Counter Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-4 border-t border-white/15">
          {counterStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="glass-panel p-4 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all hover:-translate-y-1"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-md`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="font-poppins font-extrabold text-2xl lg:text-3xl text-white mb-0.5 tracking-tight">
                  {stat.count}
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
