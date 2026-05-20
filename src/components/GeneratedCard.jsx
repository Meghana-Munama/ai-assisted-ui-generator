import React from 'react';

const GeneratedCard = ({ title, description }) => {
  return (
    <article className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <p className="text-slate-600 mt-2">{description}</p>
    </article>
  );
};

export default GeneratedCard;
