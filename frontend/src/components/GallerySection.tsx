'use client';

import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  media_type: string;
  category: string;
  url: string;
}

export const GallerySection: React.FC = () => {
  // Hardcoded static data for pure client-side hosting on GitHub Pages
  const gallery: GalleryItem[] = [
    { id: 1, title: "Free Health Camp Distribution", category: "Medical Camps", media_type: "photo", url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" },
    { id: 2, title: "Distributing Books & Tabs", category: "Education", media_type: "photo", url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" },
    { id: 3, title: "Plantation Drive 2025", category: "Tree Plantation", media_type: "photo", url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop" },
    { id: 4, title: "Elderly Meals Service", category: "Community Programs", media_type: "photo", url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop" }
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Medical Camps', 'Education', 'Tree Plantation', 'Community Programs'];

  const filtered = activeCategory === 'All'
    ? gallery
    : gallery.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
            Visual Memories
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-3 mb-4">
            Ground Reality & Moments
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Glance through verified photos and video captures from our field camps and drives.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-64 rounded-2xl overflow-hidden shadow-md cursor-pointer border border-gray-200 dark:border-gray-700"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-xs text-emerald-400 font-semibold mb-1">
                  {item.category}
                </span>
                <h4 className="font-poppins font-bold text-sm">
                  {item.title}
                </h4>
                <div className="mt-2 flex items-center space-x-1 text-xs text-gray-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to Expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popup Image Viewer Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-accent p-2 rounded-full bg-white/10"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-4xl w-full text-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[75vh] mx-auto rounded-2xl shadow-2xl object-contain"
              />
              <h3 className="font-poppins font-bold text-xl text-white mt-4">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-emerald-400 font-semibold mt-1">
                Category: {selectedImage.category}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
