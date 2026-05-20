import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <main className="min-h-screen">
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="font-bold text-slate-900">AI UI Generator</span>
          <span className="text-sm text-slate-500">React Prototype</span>
        </div>
      </header>
      {children}
    </main>
  );
};

export default DashboardLayout;
