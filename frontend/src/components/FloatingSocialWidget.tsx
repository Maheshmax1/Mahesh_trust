'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, Instagram, Facebook, Phone, Share2, X } from 'lucide-react';

export const FloatingSocialWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phone = "6379095634";
  const defaultMessage = encodeURIComponent("Hello Mahesh Trust & NGO, I would like to make an inquiry.");

  const socialLinks = [
    {
      name: 'WhatsApp',
      href: `https://wa.me/91${phone}?text=${defaultMessage}`,
      color: 'bg-emerald-500 hover:bg-emerald-600 text-white',
      icon: MessageCircle,
    },
    {
      name: 'Telegram',
      href: `https://t.me/+91${phone}`,
      color: 'bg-sky-500 hover:bg-sky-600 text-white',
      icon: Send,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      color: 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 text-white',
      icon: Instagram,
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      color: 'bg-blue-600 hover:bg-blue-700 text-white',
      icon: Facebook,
    },
    {
      name: 'Direct Call',
      href: `tel:${phone}`,
      color: 'bg-amber-500 hover:bg-amber-600 text-white',
      icon: Phone,
    },
  ];

  return (
    /* Draggable container using framer-motion */
    <motion.div
      drag
      dragConstraints={{ left: -300, right: 20, top: -500, bottom: 20 }}
      dragElastic={0.1}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end touch-none cursor-grab active:cursor-grabbing select-none"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col space-y-3 mb-4 items-end"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-full shadow-lg ${link.color} transition-transform hover:scale-105 active:scale-95 text-xs font-bold`}
                >
                  <span>{link.name}</span>
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Movable Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full btn-primary-gradient flex items-center justify-center shadow-2xl hover:scale-110 transition-transform focus:outline-none border-2 border-white/30"
        title="Contact Us / Social Links (Drag to Move)"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Share2 className="w-6 h-6 text-white animate-pulse" />
        )}
      </button>
    </motion.div>
  );
};
