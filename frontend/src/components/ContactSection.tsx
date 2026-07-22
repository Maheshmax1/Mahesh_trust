'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-3 mb-4">
            Contact Mahesh Trust
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Have questions regarding donations, CSR partnerships, or volunteering? Reach out to our dedicated support office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-4 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-primary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-base text-gray-900 dark:text-white">Phone & WhatsApp</h4>
                  <a href="tel:6379095634" className="text-sm font-semibold text-primary dark:text-emerald-400 hover:underline">
                    +91 6379095634
                  </a>
                  <p className="text-xs text-gray-500">Mon - Sat (9:00 AM - 7:00 PM)</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-4 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-secondary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-base text-gray-900 dark:text-white">Email Address</h4>
                  <a href="mailto:Maheshshan2409@gmail.com" className="text-sm font-semibold text-secondary hover:underline">
                    Maheshshan2409@gmail.com
                  </a>
                  <p className="text-xs text-gray-500">Official Trust Desk</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-4 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-base text-gray-900 dark:text-white">Trust Address</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    No. 42, Karunya Nagar, Main Road, Chennai, Tamil Nadu 600001
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Box Placeholder */}
            <div className="h-48 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative">
              <iframe
                title="Mahesh Trust Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6267272828695!2d80.2104523!3d13.0604245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526691c2a8427f%3A0xd6ef70e4e7e6f66!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-gray-50 dark:bg-slate-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-poppins font-bold text-2xl text-gray-900 dark:text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Thank you for reaching out. Our trust team will reply to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary-gradient px-6 py-2 rounded-full text-xs font-bold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-poppins font-bold text-2xl text-gray-900 dark:text-white mb-6">
                  Send Us A Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-sm outline-none"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-sm outline-none"
                      placeholder="name@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-sm outline-none"
                      placeholder="6379095634"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-sm outline-none"
                      placeholder="Donation / Volunteer Query"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-sm outline-none"
                    placeholder="How can we assist you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary-gradient py-3.5 rounded-xl text-sm font-bold flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
