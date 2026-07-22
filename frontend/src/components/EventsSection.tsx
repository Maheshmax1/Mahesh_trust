'use client';

import React, { useState } from 'react';
import { Calendar, MapPin, Tag, ArrowRight } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  image_url: string;
  category: string;
  is_past: boolean;
}

export const EventsSection: React.FC = () => {
  // Hardcoded static data for pure client-side hosting on GitHub Pages
  const events: Event[] = [
    {
      id: 1,
      title: "Mega Free Medical & Eye Camp",
      description: "Comprehensive general health checkups, free prescription glasses distribution, and blood pressure screening.",
      date: "August 15, 2026",
      location: "Community Hall, Ambattur, Chennai",
      image_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
      category: "Healthcare",
      is_past: false
    },
    {
      id: 2,
      title: "Green Warriors Tree Planting Marathon",
      description: "Join over 200 volunteers to plant 1,000 native tree saplings along lake bunds.",
      date: "September 5, 2026",
      location: "Chembarambakkam Lake Area",
      image_url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
      category: "Environment",
      is_past: false
    },
    {
      id: 3,
      title: "Annual Charity Youth Run & Awareness Walk",
      description: "5K Marathon raising awareness for child protection and higher education scholarships.",
      date: "May 10, 2026",
      location: "Marina Beach Road, Chennai",
      image_url: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=800&auto=format&fit=crop",
      category: "Community",
      is_past: true
    }
  ];

  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcoming = events.filter(e => !e.is_past);
  const past = events.filter(e => e.is_past);
  const displayed = activeTab === 'upcoming' ? upcoming : past;

  return (
    <section id="events" className="py-20 bg-gray-50 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
            Gatherings & Action
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-3 mb-4">
            Trust Events & Drives
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Join our upcoming health camps, tree plantation marathons, and youth awareness drives.
          </p>
        </div>

        {/* Tabs Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-200 dark:bg-slate-800 p-1 rounded-full flex space-x-1">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'upcoming' ? 'bg-primary text-white shadow-md' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Upcoming Events ({upcoming.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'past' ? 'bg-primary text-white shadow-md' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Past Events ({past.length})
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((evt) => (
            <div
              key={evt.id}
              className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48">
                  <img
                    src={evt.image_url}
                    alt={evt.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1">
                    <Tag className="w-3.5 h-3.5 text-accent" />
                    <span>{evt.category}</span>
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-2 text-xs text-primary dark:text-emerald-400 font-bold">
                    <Calendar className="w-4 h-4" />
                    <span>{evt.date}</span>
                  </div>

                  <h3 className="font-poppins font-bold text-xl text-gray-900 dark:text-white">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    {evt.description}
                  </p>

                  <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400 pt-2">
                    <MapPin className="w-3.5 h-3.5 text-secondary" />
                    <span>{evt.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => alert(`Registration requested for: ${evt.title}. Our coordinator will contact you.`)}
                  className="w-full py-2.5 rounded-xl border border-primary text-primary dark:text-emerald-400 font-bold text-xs hover:bg-primary hover:text-white transition-colors flex items-center justify-center space-x-1"
                >
                  <span>{evt.is_past ? 'View Event Highlights' : 'Register for Event'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
