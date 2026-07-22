'use client';

import React, { useState } from 'react';
import { Heart, CreditCard, QrCode, ShieldCheck, CheckCircle2, IndianRupee, Sparkles } from 'lucide-react';

export const DonateSection: React.FC = () => {
  const presets = [500, 1000, 2500, 5000, 10000];
  const [selectedAmount, setSelectedAmount] = useState<number>(2500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('UPI');

  const [formData, setFormData] = useState({
    donor_name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [txReceipt, setTxReceipt] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const getEffectiveAmount = () => {
    if (customAmount && parseFloat(customAmount) > 0) {
      return parseFloat(customAmount);
    }
    return selectedAmount;
  };

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          amount: getEffectiveAmount(),
          payment_method: paymentMethod,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setTxReceipt(result);
      }
    } catch (err) {
      alert('Payment processing failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="donate" className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
            Make A Difference
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-3 mb-4">
            Support Our Noble Cause
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Your generous contribution directly funds free education kits, medical surgeries, eldercare meals, and environmental drives.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-slate-800 rounded-3xl p-6 sm:p-10 border border-gray-200 dark:border-gray-700 shadow-2xl">
          
          {txReceipt ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-950 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="font-poppins font-bold text-2xl text-gray-900 dark:text-white">
                Donation Received! Thank You!
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Your payment of <strong className="text-emerald-500 font-bold">₹{txReceipt.amount}</strong> was processed successfully.
              </p>
              
              <div className="p-4 bg-white dark:bg-slate-700 rounded-2xl max-w-sm mx-auto text-left text-xs space-y-2 border border-gray-200 dark:border-gray-600">
                <div className="flex justify-between">
                  <span className="text-gray-500">Transaction ID:</span>
                  <span className="font-bold text-gray-900 dark:text-white">{txReceipt.transaction_id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Donor Name:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{txReceipt.donor_name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Tax Benefit:</span>
                  <span className="text-emerald-500 font-bold">80G Certificate Applicable</span>
                </div>
              </div>

              <button
                onClick={() => setTxReceipt(null)}
                className="btn-primary-gradient px-6 py-2.5 rounded-full text-xs font-bold mt-4"
              >
                Make Another Donation
              </button>
            </div>
          ) : (
            <form onSubmit={handleDonate} className="space-y-8">
              
              {/* Preset Cards Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">
                  Select Donation Amount (INR)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {presets.map((amt) => (
                    <button
                      type="button"
                      key={amt}
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount('');
                      }}
                      className={`py-3.5 px-2 rounded-2xl font-poppins font-extrabold text-sm border-2 transition-all ${
                        selectedAmount === amt && !customAmount
                          ? 'border-primary bg-primary text-white shadow-lg scale-105'
                          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-200 hover:border-primary'
                      }`}
                    >
                      ₹{amt.toLocaleString()}
                    </button>
                  ))}
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="Custom"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                      }}
                      className="w-full h-full py-3 px-3 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-700 text-sm font-bold text-gray-800 dark:text-white focus:border-primary outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Donor Contact Form */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Donor Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.donor_name}
                    onChange={(e) => setFormData({ ...formData, donor_name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-sm outline-none"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-sm outline-none"
                    placeholder="name@example.com"
                  />
                </div>
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
              </div>

              {/* Payment Gateways Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">
                  Choose Payment Method
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['UPI', 'Credit Card', 'Debit Card', 'Net Banking'].map((method) => (
                    <button
                      type="button"
                      key={method}
                      onClick={() => setPaymentMethod(method)}
                      className={`py-3 px-3 rounded-xl text-xs font-bold border flex items-center justify-center space-x-2 transition-all ${
                        paymentMethod === method
                          ? 'border-secondary bg-secondary text-white shadow-md'
                          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>{method}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* UPI QR Placeholder */}
              {paymentMethod === 'UPI' && (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 p-2 rounded-xl border flex items-center justify-center shrink-0">
                    <QrCode className="w-12 h-12 text-primary" />
                  </div>
                  <div className="text-xs text-gray-700 dark:text-gray-300">
                    <span className="font-bold text-gray-900 dark:text-white block">Instant UPI QR Code</span>
                    Scan via Google Pay, PhonePe, or Paytm to pay directly to <strong>maheshtrust@upi</strong>.
                  </div>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-accent-gradient py-4 rounded-2xl text-base font-extrabold flex items-center justify-center space-x-2 shadow-xl hover:scale-[1.01] transition-transform"
              >
                <Heart className="w-5 h-5 fill-current" />
                <span>{loading ? 'Processing Transaction...' : `Donate ₹${getEffectiveAmount().toLocaleString()} Now`}</span>
              </button>

              <div className="text-center text-xs text-gray-500 flex items-center justify-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Encrypted 256-Bit SSL Payment Security • 80G Tax Deductible</span>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
