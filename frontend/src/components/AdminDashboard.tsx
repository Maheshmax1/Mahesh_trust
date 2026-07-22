'use client';

import React, { useState, useEffect } from 'react';
import { 
  Lock, UserCheck, Heart, Calendar, Image as ImageIcon, FileText, 
  Download, LogOut, Shield, Plus, CheckCircle, XCircle, Search 
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [loginEmail, setLoginEmail] = useState('admin@maheshtrust.org');
  const [loginPassword, setLoginPassword] = useState('admin123');
  const [loginError, setLoginError] = useState('');

  const [activeTab, setActiveTab] = useState<'stats' | 'volunteers' | 'donations' | 'events' | 'gallery'>('stats');

  const [stats, setStats] = useState<any>(null);
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [donations, setDonations] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [gallery, setGallery] = useState<any[]>([]);

  const [searchQuery, setSearchQuery] = useState('');

  // Check token in localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('admin_token');
    if (savedToken) {
      setToken(savedToken);
      fetchDashboardData(savedToken);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    try {
      const res = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      if (res.ok) {
        const data = await res.json();
        setToken(data.access_token);
        localStorage.setItem('admin_token', data.access_token);
        fetchDashboardData(data.access_token);
      } else {
        setLoginError('Invalid Admin Credentials');
      }
    } catch (err) {
      setLoginError('Server error while logging in.');
    }
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('admin_token');
  };

  const fetchDashboardData = (jwtToken: string) => {
    const headers = { Authorization: `Bearer ${jwtToken}` };

    fetch('http://localhost:8000/api/admin/stats', { headers })
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.log(err));

    fetch('http://localhost:8000/api/volunteers')
      .then(res => res.json())
      .then(data => setVolunteers(data));

    fetch('http://localhost:8000/api/donations')
      .then(res => res.json())
      .then(data => setDonations(data));

    fetch('http://localhost:8000/api/events')
      .then(res => res.json())
      .then(data => setEvents(data));

    fetch('http://localhost:8000/api/gallery')
      .then(res => res.json())
      .then(data => setGallery(data));
  };

  const handleVolunteerStatus = async (id: number, status: string) => {
    if (!token) return;
    await fetch(`http://localhost:8000/api/volunteers/${id}/status?status=${status}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchDashboardData(token);
  };

  const downloadCSV = (endpoint: string, filename: string) => {
    if (!token) return;
    fetch(`http://localhost:8000/api/export/${endpoint}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
      });
  };

  if (!token) {
    return (
      <section id="admin" className="py-20 bg-gray-50 dark:bg-slate-900/60 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl">
            <div className="w-12 h-12 bg-primary/10 text-primary dark:text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6" />
            </div>

            <h2 className="font-poppins font-extrabold text-2xl text-center text-gray-900 dark:text-white mb-1">
              Admin Login Portal
            </h2>
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-6">
              Authorized personnel access only for Mahesh Trust Management
            </p>

            {loginError && (
              <div className="p-3 bg-red-100 text-red-700 text-xs rounded-xl font-medium mb-4 text-center">
                {loginError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Admin Email</label>
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-700 text-sm outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary-gradient py-3 rounded-xl text-sm font-bold shadow-md"
              >
                Sign In to Dashboard
              </button>

              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl text-[11px] text-gray-600 dark:text-gray-300">
                Default Credentials: <strong>admin@maheshtrust.org</strong> / <strong>admin123</strong>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="admin" className="py-20 bg-gray-50 dark:bg-slate-900/60 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-md mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-poppins font-bold text-xl text-gray-900 dark:text-white">
                Admin Control Dashboard
              </h2>
              <p className="text-xs text-gray-500">SuperAdmin Privileges Active</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-100 text-red-700 hover:bg-red-200 text-xs font-bold rounded-xl flex items-center space-x-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: 'stats', label: 'Analytics & Overview', icon: Shield },
            { id: 'volunteers', label: `Volunteers (${volunteers.length})`, icon: UserCheck },
            { id: 'donations', label: `Donations (${donations.length})`, icon: Heart },
            { id: 'events', label: `Events (${events.length})`, icon: Calendar },
            { id: 'gallery', label: `Gallery (${gallery.length})`, icon: ImageIcon },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}

        {/* Overview Stats Tab */}
        {activeTab === 'stats' && stats && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <span className="text-xs text-gray-500 font-semibold block mb-1">Total Donations Received</span>
                <span className="font-poppins font-extrabold text-3xl text-emerald-500">₹{stats.total_donations.toLocaleString()}</span>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <span className="text-xs text-gray-500 font-semibold block mb-1">Registered Volunteers</span>
                <span className="font-poppins font-extrabold text-3xl text-secondary">{stats.total_volunteers}</span>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <span className="text-xs text-gray-500 font-semibold block mb-1">Active Ground Projects</span>
                <span className="font-poppins font-extrabold text-3xl text-amber-500">{stats.active_projects}</span>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <span className="text-xs text-gray-500 font-semibold block mb-1">Organized Events</span>
                <span className="font-poppins font-extrabold text-3xl text-purple-500">{stats.total_events}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => downloadCSV('volunteers', 'volunteers_report.csv')}
                className="btn-primary-gradient px-5 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Export Volunteers CSV</span>
              </button>
              <button
                onClick={() => downloadCSV('donations', 'donations_report.csv')}
                className="btn-accent-gradient px-5 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Export Donations CSV</span>
              </button>
            </div>
          </div>
        )}

        {/* Volunteers Tab */}
        {activeTab === 'volunteers' && (
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg overflow-x-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-poppins font-bold text-lg text-gray-900 dark:text-white">
                Volunteer Applications
              </h3>
              <button
                onClick={() => downloadCSV('volunteers', 'volunteers_report.csv')}
                className="btn-primary-gradient px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            </div>

            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 text-gray-500 font-semibold">
                  <th className="p-3">Name</th>
                  <th className="p-3">Contact</th>
                  <th className="p-3">Skills</th>
                  <th className="p-3">Preferred Area</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
                {volunteers.map((v) => (
                  <tr key={v.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/50">
                    <td className="p-3 font-bold text-gray-900 dark:text-white">{v.name} ({v.age}, {v.gender})</td>
                    <td className="p-3 text-gray-600 dark:text-gray-300">{v.email}<br />{v.phone}</td>
                    <td className="p-3 text-gray-600 dark:text-gray-300">{v.skills}</td>
                    <td className="p-3 text-gray-600 dark:text-gray-300">{v.preferred_area}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        v.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' :
                        v.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {v.status}
                      </span>
                    </td>
                    <td className="p-3 text-right space-x-2">
                      <button
                        onClick={() => handleVolunteerStatus(v.id, 'Approved')}
                        className="p-1 rounded bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                        title="Approve"
                      >
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleVolunteerStatus(v.id, 'Rejected')}
                        className="p-1 rounded bg-red-100 text-red-700 hover:bg-red-200"
                        title="Reject"
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Donations Tab */}
        {activeTab === 'donations' && (
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg overflow-x-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-poppins font-bold text-lg text-gray-900 dark:text-white">
                Donation Transactions Ledger
              </h3>
              <button
                onClick={() => downloadCSV('donations', 'donations_report.csv')}
                className="btn-accent-gradient px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            </div>

            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 text-gray-500 font-semibold">
                  <th className="p-3">Donor Name</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Payment Method</th>
                  <th className="p-3">Transaction ID</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
                {donations.map((d) => (
                  <tr key={d.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/50">
                    <td className="p-3 font-bold text-gray-900 dark:text-white">{d.donor_name}<br /><span className="text-[10px] text-gray-400 font-normal">{d.email}</span></td>
                    <td className="p-3 font-bold text-emerald-500">₹{d.amount}</td>
                    <td className="p-3 text-gray-600 dark:text-gray-300">{d.payment_method}</td>
                    <td className="p-3 font-mono text-gray-600 dark:text-gray-300">{d.transaction_id}</td>
                    <td className="p-3 text-gray-500">{new Date(d.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
};
