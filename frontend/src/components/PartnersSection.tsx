'use client';

import React, { useEffect, useState } from 'react';
import { Building, Award } from 'lucide-react';

interface Partner {
  id: number;
  name: string;
  category: string;
  logo_url: string;
}

export const PartnersSection: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/partners')
      .then(res => res.json())
      .then(data => setPartners(data))
      .catch(err => console.log('Error fetching partners:', err));
  }, []);

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
            Collaborative Network
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-3 mb-4">
            Our Government & CSR Partners
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Working hand-in-hand with healthcare institutions, CSR bodies, and governmental departments.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((p) => (
            <div
              key={p.id}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-700 p-2 flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform">
                <Building className="w-8 h-8 text-primary dark:text-emerald-400" />
              </div>
              <h4 className="font-poppins font-bold text-sm text-gray-900 dark:text-white leading-tight mb-1">
                {p.name}
              </h4>
              <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {p.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
