'use client';

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const SuccessStories: React.FC = () => {
  const stories = [
    {
      title: "From Struggles to Self-Sufficiency: Lakshmi's Tailoring Unit",
      story: "Lakshmi from a hamlet in Madurai was struggling to manage household medical expenses. Through Project Shakti, she completed a 3-month tailoring diploma and received a free sewing machine.",
      impact: "Earns ₹12,000/month independently & employs 2 village women",
      beforeImg: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=600&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Green Canopy Transformation: 1,000 Trees at Chembarambakkam Lake",
      story: "The lake bund area was barren and prone to soil erosion during monsoon seasons. Over 250 volunteers planted native banyan, neem, and peepal trees.",
      impact: "Soil stability improved by 40% & local wildlife habitat restored",
      beforeImg: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop",
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
            Real Transformations
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-3 mb-4">
            Success Stories & Impact
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            See the tangible before-and-after change your donations and volunteer hours bring to real lives.
          </p>
        </div>

        <div className="space-y-12">
          {stories.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Before / After Images */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-md">
                  <img src={item.beforeImg} alt="Before" className="w-full h-48 object-cover" />
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                    BEFORE
                  </span>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-md">
                  <img src={item.afterImg} alt="After" className="w-full h-48 object-cover" />
                  <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                    AFTER IMPACT
                  </span>
                </div>
              </div>

              {/* Story Content */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="font-poppins font-bold text-2xl text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.story}
                </p>

                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 block font-semibold">Verified Impact Metric</span>
                    <span className="font-poppins font-bold text-sm text-primary dark:text-emerald-400">
                      {item.impact}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
