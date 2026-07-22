'use client';

import React, { useState } from 'react';
import { UserPlus, CheckCircle2, Send } from 'lucide-react';

export const VolunteerSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'Male',
    email: '',
    phone: '',
    address: '',
    occupation: '',
    skills: '',
    availability: 'Weekends',
    preferred_area: 'Education Support',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('http://localhost:8000/api/volunteers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          age: parseInt(formData.age) || 25,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg('Submission failed. Please check your inputs.');
      }
    } catch (err) {
      setErrorMsg('Could not connect to server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="volunteer" className="py-20 bg-gray-50 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
              Join Our Mission
            </span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white leading-tight">
              Become a Volunteer & Change Lives
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Whether you can spare two hours on weekends or offer specialized medical/teaching skills, your time creates direct impact for families in need.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 text-primary flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">Certificate of Service</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Receive official NGO volunteer experience certificates.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 text-primary flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">Flexible Schedules</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Choose weekend drives, online mentoring, or field medical camps.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-poppins font-bold text-2xl text-gray-900 dark:text-white">
                    Registration Submitted Successfully!
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    Thank you for stepping forward! Our volunteer coordinator will contact you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); }}
                    className="btn-primary-gradient px-6 py-2.5 rounded-full text-xs font-bold"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-poppins font-bold text-xl text-gray-900 dark:text-white mb-6">
                    Volunteer Application Form
                  </h3>

                  {errorMsg && (
                    <div className="p-3 bg-red-100 text-red-700 text-xs rounded-xl font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-sm focus:ring-2 focus:ring-primary outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Age *</label>
                        <input
                          type="number"
                          required
                          value={formData.age}
                          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-sm focus:ring-2 focus:ring-primary outline-none"
                          placeholder="24"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Gender *</label>
                        <select
                          value={formData.gender}
                          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-sm focus:ring-2 focus:ring-primary outline-none"
                        >
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-sm focus:ring-2 focus:ring-primary outline-none"
                        placeholder="name@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-sm focus:ring-2 focus:ring-primary outline-none"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Full Address *</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-sm focus:ring-2 focus:ring-primary outline-none"
                      placeholder="City, District, Tamil Nadu"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Occupation *</label>
                      <input
                        type="text"
                        required
                        value={formData.occupation}
                        onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-sm focus:ring-2 focus:ring-primary outline-none"
                        placeholder="Software Engineer / Student"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Skills *</label>
                      <input
                        type="text"
                        required
                        value={formData.skills}
                        onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-sm focus:ring-2 focus:ring-primary outline-none"
                        placeholder="Teaching, First Aid, Event Mgmt"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Availability *</label>
                      <select
                        value={formData.availability}
                        onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-sm focus:ring-2 focus:ring-primary outline-none"
                      >
                        <option>Weekends Only</option>
                        <option>Weekdays</option>
                        <option>Full Time</option>
                        <option>Emergency Calls</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Preferred Area *</label>
                      <select
                        value={formData.preferred_area}
                        onChange={(e) => setFormData({ ...formData, preferred_area: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-sm focus:ring-2 focus:ring-primary outline-none"
                      >
                        <option>Education Support</option>
                        <option>Medical Camps</option>
                        <option>Food Distribution</option>
                        <option>Tree Plantation</option>
                        <option>Women Skill Training</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary-gradient py-3 rounded-xl text-sm font-bold flex items-center justify-center space-x-2 mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? 'Submitting...' : 'Submit Application'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
