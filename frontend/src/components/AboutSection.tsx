'use client';

import React, { useEffect, useState } from 'react';
import { Target, Eye, HeartHandshake, ShieldCheck, Sparkles, Compass, Users } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image_url: string;
}

export const AboutSection: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/team')
      .then(res => res.json())
      .then(data => setTeam(data))
      .catch(err => console.log('Failed fetching team:', err));
  }, []);

  const coreValues = [
    { title: 'Compassion', desc: 'Empathy drives every single initiative we undertake for human dignity.', icon: HeartHandshake },
    { title: 'Transparency', desc: 'Full financial & operational accountability in every project.', icon: ShieldCheck },
    { title: 'Equality', desc: 'Equal access to quality education, healthcare, and safety for all.', icon: Compass },
    { title: 'Sustainability', desc: 'Long-term solutions that empower self-reliance in rural hamlets.', icon: Sparkles },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
            Who We Are
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-3 mb-4">
            About Mahesh Trust & NGO
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Founded with a vision to eliminate poverty, educational barriers, and healthcare shortages, Mahesh Trust & NGO has been serving underprivileged rural communities with steadfast dedication.
          </p>
        </div>

        {/* Founder Message & Journey Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Founder Card */}
          <div className="relative">
            <div className="glass-panel p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
                  alt="Founder Mahesh Shanmugam"
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-primary shadow-md"
                />
                <div>
                  <h3 className="font-poppins font-bold text-xl text-gray-900 dark:text-white">
                    Mahesh Shanmugam
                  </h3>
                  <p className="text-sm text-primary dark:text-emerald-400 font-semibold">
                    Founder & Managing Trustee
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Phone: 6379095634
                  </p>
                </div>
              </div>
              <blockquote className="italic text-gray-700 dark:text-gray-300 text-sm leading-relaxed border-l-4 border-accent pl-4 mb-4">
                "Real change begins when we step forward to serve those who have no one to rely on. Mahesh Trust was born out of a deep responsibility to empower every child with education and every elder with dignity."
              </blockquote>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                — Founder Message
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl -z-0" />
          </div>

          {/* Our Journey & Story */}
          <div className="space-y-6">
            <h3 className="font-poppins font-bold text-2xl text-gray-900 dark:text-white">
              Why We Started & Our Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              We started in 2020 when a small group of passionate volunteers recognized the stark disparities in rural Tamil Nadu during emergencies. What began as a food distribution campaign during crises expanded into a permanent public trust providing free health camps, digital literacy tabs for village schools, and women's self-help tailoring units.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="font-bold text-2xl text-primary dark:text-emerald-400">100%</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Direct Field Execution</div>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="font-bold text-2xl text-secondary">80G</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Government Tax Exempted</div>
              </div>
            </div>
          </div>

        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900 to-teal-950 text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
              <Target className="w-32 h-32" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-emerald-300" />
            </div>
            <h3 className="font-poppins font-bold text-2xl mb-3">
              Our Mission
            </h3>
            <p className="text-emerald-100 text-sm leading-relaxed">
              To alleviate human suffering by providing free healthcare, nutritional support, quality education, environmental sustainability, and skill training to marginalized communities through compassionate community action.
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900 to-indigo-950 text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
              <Eye className="w-32 h-32" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-blue-300" />
            </div>
            <h3 className="font-poppins font-bold text-2xl mb-3">
              Our Vision
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Create a future where every individual, regardless of socioeconomic background, has equal access to education, healthcare, safety, dignity, and life-changing economic opportunities.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-poppins font-bold text-2xl text-gray-900 dark:text-white">
              Our Core Values
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-primary dark:text-emerald-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-poppins font-bold text-base text-gray-900 dark:text-white mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Members Section */}
        {team.length > 0 && (
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center space-x-1 text-xs font-bold text-primary dark:text-emerald-400 mb-2">
                <Users className="w-4 h-4" />
                <span>LEADERSHIP</span>
              </div>
              <h3 className="font-poppins font-bold text-2xl text-gray-900 dark:text-white">
                Meet Our Dedicated Team
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((mem) => (
                <div key={mem.id} className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all text-center">
                  <img
                    src={mem.image_url || 'https://via.placeholder.com/150'}
                    alt={mem.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-emerald-50 dark:border-slate-700 shadow-md"
                  />
                  <h4 className="font-poppins font-bold text-lg text-gray-900 dark:text-white">
                    {mem.name}
                  </h4>
                  <p className="text-xs font-semibold text-primary dark:text-emerald-400 mb-2">
                    {mem.role}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {mem.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
