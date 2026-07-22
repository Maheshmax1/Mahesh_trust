'use client';

import React from 'react';
import { MapPin, Users, Wallet, CheckCircle2, Clock } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  status: string;
  location: string;
  budget: string;
  beneficiaries: string;
  progress: number;
  image_url: string;
  impact_metrics: string;
}

export const ProjectsSection: React.FC = () => {
  // Hardcoded static data for pure client-side hosting on GitHub Pages
  const projects: Project[] = [
    {
      id: 1,
      name: "Project Vidya: Rural Education Support",
      description: "Providing free learning material, digital tabs, and evening coaching classes to underprivileged children in remote villages.",
      status: "Ongoing",
      location: "Kanchipuram & Tiruvallur Districts",
      budget: "₹5,00,000",
      beneficiaries: "2,500+ Students",
      progress: 75,
      image_url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
      impact_metrics: "25 Schools Reached, 15 Digital Classrooms Built"
    },
    {
      id: 2,
      name: "Project Suvaya: Community Food Kitchens",
      description: "Serving cooked, wholesome, nutritious meals daily to homeless elders and daily wage workers across Tamil Nadu.",
      status: "Ongoing",
      location: "Chennai Metro Region",
      budget: "₹8,00,000",
      beneficiaries: "1,000+ Daily Meals",
      progress: 90,
      image_url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
      impact_metrics: "3,50,000+ Meals Served to date"
    },
    {
      id: 3,
      name: "Project Shakti: Women Skill Training",
      description: "Tailoring, handicraft making, and micro-entrepreneurship workshops empowering rural women toward economic freedom.",
      status: "Ongoing",
      location: "Madurai & Tirunelveli",
      budget: "₹4,00,000",
      beneficiaries: "450+ Women Trained",
      progress: 60,
      image_url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop",
      impact_metrics: "180 Self-Help Sewing Units Started"
    },
    {
      id: 4,
      name: "Project Pachai: Clean & Green Earth",
      description: "Massive tree plantation drives, seed ball creation workshops, and rainwater harvesting installation in suburban schools.",
      status: "Completed",
      location: "Coimbatore & Salem",
      budget: "₹3,50,000",
      beneficiaries: "10,000+ Saplings Planted",
      progress: 100,
      image_url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
      impact_metrics: "12,500 Trees Growing Strong"
    }
  ];

  const ongoing = projects.filter(p => p.status === 'Ongoing');
  const completed = projects.filter(p => p.status === 'Completed');

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
            Impact in Motion
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-3 mb-4">
            Our Ongoing & Completed Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Transparent progress tracking of active grassroots initiatives and verified completion timelines.
          </p>
        </div>

        {/* Ongoing Projects Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-2 mb-8">
            <Clock className="w-5 h-5 text-primary dark:text-emerald-400" />
            <h3 className="font-poppins font-bold text-2xl text-gray-900 dark:text-white">
              Ongoing Initiatives
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ongoing.map((proj) => (
              <div
                key={proj.id}
                className="bg-white dark:bg-slate-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-1/2 relative h-56 md:h-auto">
                  <img
                    src={proj.image_url}
                    alt={proj.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {proj.status}
                  </span>
                </div>

                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h4 className="font-poppins font-bold text-xl text-gray-900 dark:text-white mb-2">
                      {proj.name}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {proj.description}
                    </p>

                    <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400 mb-6">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        <span>{proj.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-3.5 h-3.5 text-secondary" />
                        <span>{proj.beneficiaries}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Wallet className="w-3.5 h-3.5 text-amber-500" />
                        <span>Budget: {proj.budget}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                      <span>Funded / Completed</span>
                      <span className="text-primary dark:text-emerald-400">{proj.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-1000"
                        style={{ width: `${proj.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Projects Timeline */}
        {completed.length > 0 && (
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <h3 className="font-poppins font-bold text-2xl text-gray-900 dark:text-white">
                Completed & Verified Achievements
              </h3>
            </div>

            <div className="space-y-6">
              {completed.map((comp) => (
                <div
                  key={comp.id}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 border-l-4 border-emerald-500 border border-gray-200 dark:border-gray-700 shadow-md flex flex-col md:flex-row items-center justify-between gap-6"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={comp.image_url}
                      alt={comp.name}
                      className="w-20 h-20 rounded-xl object-cover shrink-0"
                    />
                    <div>
                      <h4 className="font-poppins font-bold text-lg text-gray-900 dark:text-white">
                        {comp.name}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                        {comp.description}
                      </p>
                      <span className="text-xs text-gray-500 font-semibold">
                        Location: {comp.location} | Beneficiaries: {comp.beneficiaries}
                      </span>
                    </div>
                  </div>

                  <div className="bg-emerald-50 dark:bg-emerald-950/60 p-4 rounded-xl text-center shrink-0 border border-emerald-200 dark:border-emerald-800">
                    <span className="text-xs text-gray-500 dark:text-gray-400 block font-medium">Impact Metrics</span>
                    <span className="font-poppins font-extrabold text-sm text-primary dark:text-emerald-400">
                      {comp.impact_metrics}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
