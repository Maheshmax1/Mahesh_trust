'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Are my donations eligible for tax exemption under Section 80G?",
      a: "Yes! Mahesh Trust & NGO is registered under Section 80G of the Income Tax Act. Every donor receives an official 80G receipt immediately via email, allowing a 50% tax deduction on your contribution."
    },
    {
      q: "How can I register as a volunteer for weekend camps?",
      a: "Simply fill out our online Volunteer Registration Form under the Volunteer section. Our team will contact you regarding upcoming health camps, tree plantation drives, and school teaching programs."
    },
    {
      q: "Which payment options are supported for online donations?",
      a: "We support instant UPI (Google Pay, PhonePe, Paytm), Credit Cards, Debit Cards, Net Banking across all major banks, and direct NEFT/RTGS bank transfers."
    },
    {
      q: "Can corporate companies sponsor projects under CSR budgets?",
      a: "Yes! We are fully eligible to receive Corporate Social Responsibility (CSR) funds under Schedule VII of the Companies Act. We provide detailed impact evaluation reports and utilization certificates."
    },
    {
      q: "Where is Mahesh Trust's headquarters located?",
      a: "Our registered address is No. 42, Karunya Nagar, Main Road, Chennai, Tamil Nadu 600001. You can call our team directly at 6379095634 or email Maheshshan2409@gmail.com."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
            Got Questions?
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Find answers to common queries regarding 80G receipts, volunteering, and project execution.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-poppins font-bold text-base text-gray-900 dark:text-white focus:outline-none"
                >
                  <span className="flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-primary dark:text-emerald-400 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
