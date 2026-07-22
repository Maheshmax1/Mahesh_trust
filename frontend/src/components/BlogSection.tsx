'use client';

import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  category: string;
  author: string;
  image_url: string;
  created_at: string;
}

export const BlogSection: React.FC = () => {
  // Hardcoded static data for pure client-side hosting on GitHub Pages
  const blogs: BlogPost[] = [
    {
      id: 1,
      title: "Empowering the Next Generation: Why Digital Literacy in Villages Matters",
      subtitle: "Closing the technology gap between rural and urban classrooms across Tamil Nadu.",
      content: "In today's digital era, access to technology is not a luxury—it is a fundamental right...",
      category: "Education",
      author: "Mahesh Trust Team",
      image_url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
      created_at: new Date().toISOString()
    },
    {
      id: 2,
      title: "Preventive Healthcare at the Doorstep of Rural Communities",
      subtitle: "How mobile health clinics are reducing preventable chronic diseases.",
      content: "For thousands living in remote hamlets, reaching a civil hospital requires traveling tens of kilometers...",
      category: "Healthcare",
      author: "Mahesh Trust Team",
      image_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
      created_at: new Date().toISOString()
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
            Knowledge & News
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-3 mb-4">
            Latest News & Articles
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Read awareness campaigns, rural development updates, and stories from our ground teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((post) => (
            <div
              key={post.id}
              className="bg-gray-50 dark:bg-slate-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center space-x-1">
                      <User className="w-3.5 h-3.5 text-primary" />
                      <span>{post.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-secondary" />
                      <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </span>
                  </div>

                  <h3 className="font-poppins font-bold text-xl text-gray-900 dark:text-white leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                    {post.subtitle || post.content}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => alert(`Reading article: ${post.title}`)}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-primary dark:text-emerald-400 hover:underline"
                >
                  <span>Read Full Article</span>
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
