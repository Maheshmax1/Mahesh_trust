'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, Menu, X, Heart, Phone, Mail, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const { mode, toggleDarkMode, setMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'What We Do' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'volunteer', label: 'Volunteer' },
    { id: 'donate', label: 'Donate' },
    { id: 'events', label: 'Events' },
    { id: 'transparency', label: 'Transparency' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Reading Progress Bar */}
      <div 
        className="h-1 bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-150" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top Utility Bar */}
      <div className="bg-primary-dark text-white text-xs py-1.5 px-4 hidden md:flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-1.5">
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span>6379095634</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <Mail className="w-3.5 h-3.5 text-accent" />
            <span>Maheshshan2409@gmail.com</span>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setMode(mode === 'high-contrast' ? 'light' : 'high-contrast')}
            className="flex items-center space-x-1 text-xs hover:text-accent transition-colors"
            title="High Contrast Mode"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>{mode === 'high-contrast' ? 'Normal Mode' : 'High Contrast'}</span>
          </button>
          <span>Reg No: 124/2020 | 80G Tax Exempted</span>
        </div>
      </div>

      {/* Main Glassmorphic Navigation */}
      <nav className={`px-4 lg:px-8 py-3 transition-all duration-300 ${
        isScrolled ? 'glass-panel shadow-md border-b border-gray-200 dark:border-gray-800' : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => setActiveSection('home')} 
            className="cursor-pointer flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 rounded-full btn-primary-gradient flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 text-white fill-current" />
            </div>
            <div>
              <span className="font-poppins font-bold text-lg md:text-xl text-primary dark:text-emerald-400 tracking-tight block">
                Mahesh Trust
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 tracking-wider font-semibold block -mt-1">
                & NGO Organization
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Utility Actions (Dark Mode, Donate) */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-amber-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              title="Toggle Theme"
            >
              {mode === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Donate Now CTA Button */}
            <button
              onClick={() => {
                setActiveSection('donate');
                const el = document.getElementById('donate');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-accent-gradient px-4 py-2 rounded-full text-xs font-bold tracking-wide flex items-center space-x-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Donate Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="xl:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-amber-400"
            >
              {mode === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-panel border-b border-gray-200 dark:border-gray-800 px-4 py-6 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-left px-4 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                  activeSection === item.id
                    ? 'bg-primary text-white'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <button
                onClick={() => {
                  setActiveSection('donate');
                  setMobileMenuOpen(false);
                  const el = document.getElementById('donate');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full btn-accent-gradient py-2.5 rounded-full text-xs font-bold flex items-center justify-center space-x-2"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>Donate Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
