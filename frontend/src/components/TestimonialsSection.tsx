'use client';

import React from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  story: string;
  type: string;
  image_url: string;
}

export const TestimonialsSection: React.FC = () => {
  // Hardcoded static data for pure client-side hosting on GitHub Pages
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Saraswathi M.",
      role: "Beneficiary - Skill Development",
      story: "Thanks to Project Shakti, I set up my own tailoring shop. I can now fund my children's schooling with pride.",
      type: "Beneficiary Story",
      image_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Karthik Raja",
      role: "Volunteer Lead",
      story: "Volunteering with Mahesh Trust gave my weekends real meaning. Seeing smiles on kids' faces as they open their learning kits is priceless.",
      type: "Volunteer Review",
      image_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Anand Vishwanathan",
      role: "Regular Monthly Donor",
      story: "The transparency of Mahesh Trust is unmatched. I receive detailed reports showing exactly how my monthly ₹2,500 impacts rural lives.",
      type: "Donor Review",
      image_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
            Heartfelt Voices
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-3 mb-4">
            Testimonials & Reviews
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Read authentic experiences shared by our volunteers, generous donors, and empowered beneficiaries.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 dark:bg-slate-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-md relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-1 text-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-primary/30 dark:text-emerald-400/30 mb-2" />

                <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed italic mb-6">
                  "{item.story}"
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="font-poppins font-bold text-sm text-gray-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-primary dark:text-emerald-400 font-semibold">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
