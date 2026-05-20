import React from 'react';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import GeneratedCard from './components/GeneratedCard.jsx';
import GeneratedButton from './components/GeneratedButton.jsx';

const sampleComponents = [
  {
    title: 'Generated Profile Card',
    description: 'Reusable card created from structured UI requirements.'
  },
  {
    title: 'Responsive Feature Block',
    description: 'Example component pattern for scalable frontend layouts.'
  },
  {
    title: 'AI Scaffolded Section',
    description: 'Prototype output from an AI-assisted UI workflow concept.'
  }
];

function App() {
  return (
    <DashboardLayout>
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-8">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
            Academic Frontend Prototype
          </p>
          <h1 className="text-4xl font-bold text-slate-900 mt-2">
            AI-Assisted UI Generator
          </h1>
          <p className="text-slate-600 mt-4 max-w-2xl">
            A React-based academic project exploring how AI-assisted workflows can
            support rapid UI scaffolding, reusable component generation, and
            frontend architecture consistency.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {sampleComponents.map((item) => (
            <GeneratedCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className="mt-8">
          <GeneratedButton label="Generate UI Concept" />
        </div>
      </section>
    </DashboardLayout>
  );
}

export default App;
