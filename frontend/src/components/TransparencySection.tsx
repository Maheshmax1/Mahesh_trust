'use client';

import React from 'react';
import { FileText, Download, PieChart, TrendingUp, CheckCircle } from 'lucide-react';

interface Report {
  id: number;
  title: string;
  category: string;
  year: string;
  file_url: string;
}

export const TransparencySection: React.FC = () => {
  // Hardcoded static data for pure client-side hosting on GitHub Pages
  const reports: Report[] = [
    { id: 1, title: "Annual Financial & Impact Report 2025", category: "Annual Report", year: "2025", file_url: "#" },
    { id: 2, title: "Audited Financial Statements 2024-25", category: "Audit Report", year: "2025", file_url: "#" },
    { id: 3, title: "80G & 12A Tax Exemption Certificate", category: "Certificate", year: "2024", file_url: "#" },
    { id: 4, title: "FCRA Registration & Compliance Filing", category: "Compliance Document", year: "2025", file_url: "#" }
  ];

  const financialBreakdown = [
    { label: 'Direct Program Execution (Healthcare & Education)', percent: 85, color: 'bg-emerald-500' },
    { label: 'Emergency Relief & Food Distribution', percent: 10, color: 'bg-blue-500' },
    { label: 'Administrative & Field Operations', percent: 5, color: 'bg-amber-500' },
  ];

  return (
    <section id="transparency" className="py-20 bg-gray-50 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
            100% Financial Accountability
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-3 mb-4">
            Transparency & Annual Reports
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Every rupee donated to Mahesh Trust is accounted for with complete open-source financial disclosure and audited reports.
          </p>
        </div>

        {/* Financial Summary & Breakdown Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          <div className="lg:col-span-6 bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-primary flex items-center justify-center">
                <PieChart className="w-5 h-5" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-gray-900 dark:text-white">
                How Funds Are Utilized
              </h3>
            </div>

            <div className="space-y-4 pt-2">
              {financialBreakdown.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-gray-700 dark:text-gray-300">
                    <span>{item.label}</span>
                    <span className="text-primary dark:text-emerald-400">{item.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 h-3 rounded-full overflow-hidden">
                    <div className={`${item.color} h-full rounded-full transition-all duration-1000`} style={{ width: `${item.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800 text-xs text-gray-700 dark:text-gray-300 flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>Verified by independent Chartered Accountants for Tax Compliance under Sec 80G.</span>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-secondary flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-gray-900 dark:text-white">
                  Funding Sources Breakdown
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-5 bg-gray-50 dark:bg-slate-700/60 rounded-2xl border border-gray-200 dark:border-gray-600">
                  <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">Individual Donors</span>
                  <span className="font-poppins font-extrabold text-2xl text-primary dark:text-emerald-400">65%</span>
                </div>
                <div className="p-5 bg-gray-50 dark:bg-slate-700/60 rounded-2xl border border-gray-200 dark:border-gray-600">
                  <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">Corporate CSR</span>
                  <span className="font-poppins font-extrabold text-2xl text-secondary">25%</span>
                </div>
                <div className="p-5 bg-gray-50 dark:bg-slate-700/60 rounded-2xl border border-gray-200 dark:border-gray-600">
                  <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">Government Grants</span>
                  <span className="font-poppins font-extrabold text-2xl text-amber-500">10%</span>
                </div>
                <div className="p-5 bg-gray-50 dark:bg-slate-700/60 rounded-2xl border border-gray-200 dark:border-gray-600">
                  <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">Overhead Cap</span>
                  <span className="font-poppins font-extrabold text-2xl text-emerald-600">&lt;5%</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500">
              Registration No: 124/2020 • DARPAN ID: TN/2020/025910
            </div>
          </div>

        </div>

        {/* Audit Reports & PDF Downloads */}
        <div>
          <h3 className="font-poppins font-bold text-2xl text-gray-900 dark:text-white mb-6">
            Official Compliance & PDF Downloads
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reports.map((rep) => (
              <div
                key={rep.id}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-red-100 dark:bg-red-950 text-red-600 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-primary dark:text-emerald-400 uppercase tracking-wider block">
                      {rep.category} ({rep.year})
                    </span>
                    <h4 className="font-poppins font-bold text-sm text-gray-900 dark:text-white mt-0.5">
                      {rep.title}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => alert(`Downloading PDF report: ${rep.title}`)}
                  className="w-full py-2 bg-gray-100 dark:bg-slate-700 hover:bg-primary hover:text-white dark:hover:bg-primary text-gray-700 dark:text-gray-200 text-xs font-bold rounded-xl transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF Document</span>
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
